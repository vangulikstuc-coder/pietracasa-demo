// Controleert alle interne links in dist/: elke href/src/action die met "/" begint
// moet naar een bestaand bestand (of map met index.html) in dist/ wijzen.
// Pages Functions-routes (/api/*) bestaan niet in dist en worden apart gerapporteerd.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist', import.meta.url));

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return walk(p);
    return name.endsWith('.html') ? [p] : [];
  });
}

const htmlFiles = walk(dist);
const broken = [];
const functionRoutes = new Set();
let checked = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(/(?:href|src|action)="(\/[^"]*)"/g)) {
    const url = match[1].split('#')[0].split('?')[0];
    if (url === '' || url === '/') continue;
    if (url.startsWith('/api/')) {
      functionRoutes.add(url);
      continue;
    }
    checked += 1;
    const direct = join(dist, url);
    const asIndex = join(dist, url, 'index.html');
    if (!existsSync(direct) && !existsSync(asIndex)) {
      broken.push(`${file.replace(dist, 'dist')} -> ${match[1]}`);
    }
  }
}

console.log(`HTML-bestanden: ${htmlFiles.length}, interne verwijzingen gecontroleerd: ${checked}`);
if (functionRoutes.size) {
  console.log(`Pages Functions-routes (runtime, niet in dist): ${[...functionRoutes].join(', ')}`);
}
if (broken.length) {
  console.error(`KAPOT (${broken.length}):\n` + broken.join('\n'));
  process.exit(1);
}
console.log('0 kapotte interne links.');
