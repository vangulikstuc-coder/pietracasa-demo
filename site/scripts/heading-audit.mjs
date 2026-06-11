/**
 * heading-audit.mjs — polish-koppen verificatie
 *
 * Meet met de ECHTE Space Grotesk-metrics (WOFF1 uit @fontsource) of elk
 * woord in h1–h4 op één regel past binnen de beschikbare kolombreedte op
 * 320 / 375 / 1280px. Zonder hyphens:auto en zonder woord-splitsende
 * overflow-wrap mag géén enkel kopwoord breder zijn dan zijn kolom —
 * anders zou er horizontale overflow ontstaan (tech-constraints verbiedt dat).
 *
 * Gebruik: node scripts/heading-audit.mjs   (vereist een verse `pnpm build`)
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { inflateSync } from 'node:zlib';

const root = fileURLToPath(new URL('..', import.meta.url));

/* ---------- WOFF1 → advance widths ---------- */
function parseWoff(path) {
  const buf = readFileSync(path);
  if (buf.toString('ascii', 0, 4) !== 'wOFF') throw new Error(`Geen WOFF1: ${path}`);
  const numTables = buf.readUInt16BE(12);
  const tables = {};
  for (let i = 0; i < numTables; i++) {
    const off = 44 + i * 20;
    const tag = buf.toString('ascii', off, off + 4);
    const dataOff = buf.readUInt32BE(off + 4);
    const compLen = buf.readUInt32BE(off + 8);
    const origLen = buf.readUInt32BE(off + 12);
    const raw = buf.subarray(dataOff, dataOff + compLen);
    tables[tag] = compLen < origLen ? inflateSync(raw) : Buffer.from(raw);
  }
  const unitsPerEm = tables.head.readUInt16BE(18);
  const numberOfHMetrics = tables.hhea.readUInt16BE(34);

  // cmap format 4 (platform 3/1 of 0/x)
  const cmap = tables.cmap;
  const numSub = cmap.readUInt16BE(2);
  let subOff = -1;
  for (let i = 0; i < numSub; i++) {
    const rec = 4 + i * 8;
    const plat = cmap.readUInt16BE(rec);
    const enc = cmap.readUInt16BE(rec + 2);
    const off = cmap.readUInt32BE(rec + 4);
    if ((plat === 3 && enc === 1) || plat === 0) subOff = off;
  }
  if (subOff < 0 || cmap.readUInt16BE(subOff) !== 4) throw new Error('Geen cmap format 4');
  const segX2 = cmap.readUInt16BE(subOff + 6);
  const segs = segX2 / 2;
  const endAt = subOff + 14;
  const startAt = endAt + segX2 + 2;
  const deltaAt = startAt + segX2;
  const rangeAt = deltaAt + segX2;
  function glyphFor(code) {
    for (let s = 0; s < segs; s++) {
      const end = cmap.readUInt16BE(endAt + s * 2);
      if (code > end) continue;
      const start = cmap.readUInt16BE(startAt + s * 2);
      if (code < start) return 0;
      const delta = cmap.readInt16BE(deltaAt + s * 2);
      const rangeOff = cmap.readUInt16BE(rangeAt + s * 2);
      if (rangeOff === 0) return (code + delta) & 0xffff;
      const gAddr = rangeAt + s * 2 + rangeOff + (code - start) * 2;
      const g = cmap.readUInt16BE(gAddr);
      return g === 0 ? 0 : (g + delta) & 0xffff;
    }
    return 0;
  }

  const hmtx = tables.hmtx;
  function advance(code) {
    const g = glyphFor(code);
    const idx = Math.min(g, numberOfHMetrics - 1);
    return hmtx.readUInt16BE(idx * 4) / unitsPerEm; // in em
  }
  return { advance, glyphFor };
}

const fontDir = join(root, 'node_modules/@fontsource/space-grotesk/files');
const fonts = {
  600: parseWoff(join(fontDir, 'space-grotesk-latin-600-normal.woff')),
  700: parseWoff(join(fontDir, 'space-grotesk-latin-700-normal.woff')),
};

const LETTER_SPACING_EM = -0.02; // headings: letter-spacing -0.02em (global.css)

function wordWidthPx(word, fontSizePx, weight) {
  const font = fonts[weight];
  let em = 0;
  let missing = false;
  for (const ch of word) {
    const code = ch.codePointAt(0);
    if (font.glyphFor(code) === 0 && code !== 32) missing = true;
    em += font.advance(code) || 0.6; // fallback-breedte voor ontbrekende glyphs
    em += LETTER_SPACING_EM;
  }
  return { px: em * fontSizePx, missing };
}

/* ---------- headings uit dist ---------- */
function* htmlFiles(dir) {
  for (const f of readdirSync(dir)) {
    if (f.includes(' 2')) continue; // iCloud-duplicaten overslaan
    const p = join(dir, f);
    if (statSync(p).isDirectory()) yield* htmlFiles(p);
    else if (f === 'index.html') yield p;
  }
}

const headings = [];
for (const file of htmlFiles(join(root, 'dist'))) {
  const html = readFileSync(file, 'utf8');
  const page = file.replace(/^.*\/dist\//, '/').replace(/index\.html$/, '');
  const re = /<h([1-4])[^>]*>([\s\S]*?)<\/h\1>/gi;
  let m;
  while ((m = re.exec(html))) {
    const text = m[2]
      .replace(/<[^>]+>/g, ' ')
      .replace(/&amp;/g, '&').replace(/&shy;/g, '­')
      .replace(/\s+/g, ' ')
      .trim();
    if (text) headings.push({ page, tag: `h${m[1]}`, text });
  }
}

/* ---------- maatvoering per viewport ---------- */
const clamp = (min, val, max) => Math.min(Math.max(min, val), max);
// font-sizes uit global.css (tokens: xl=33.2, display=52, lg=26.56, md=21.25, base=17)
const sizeFor = (tag, vw) =>
  tag === 'h1' ? clamp(33.2, 0.06 * vw, 52)
  : tag === 'h2' ? clamp(26.56, 0.04 * vw, 33.2)
  : tag === 'h3' ? 21.25
  : 17;
const weightFor = (tag) => (tag === 'h1' ? 700 : 600);
// .container: padding-inline clamp(1rem,4vw,2rem)
const containerFor = (vw) => vw - 2 * clamp(16, 0.04 * vw, 32);

// Smallere kolommen dan de volle container (handmatig geverifieerde layouts):
// keurmerken-band op /projecten/: h2 (21.25px via .keurmerken h2) naast 44px icoon + 16px gap.
const NARROW = [
  {
    match: (h) => h.page === '/projecten/' && /branchelidmaatschap/.test(h.text),
    size: () => 21.25,
    width: (vw) => containerFor(vw) - 60,
    note: 'keurmerken-band: icoon 44px + gap 16px, h2=font-size-md',
  },
];

const viewports = [320, 375, 1280];
let failures = 0;
const rows = [];

for (const h of headings) {
  const special = NARROW.find((n) => n.match(h));
  // Onbreekbare eenheden: zonder hyphens:auto breekt een regel alleen op
  // spaties en op expliciete koppeltekens — meet dus per koppelteken-segment.
  const tokens = h.text.split(' ').flatMap((t) => t.split(/(?<=-)/));
  for (const vw of viewports) {
    const size = special ? special.size(vw) : sizeFor(h.tag, vw);
    const avail = special ? special.width(vw) : containerFor(vw);
    for (const t of tokens) {
      const clean = t.replace(/[“”„"()]/g, '');
      if (!clean) continue;
      const { px, missing } = wordWidthPx(clean, size, weightFor(h.tag));
      rows.push({ vw, page: h.page, tag: h.tag, word: clean, px, avail, missing });
      if (px > avail) {
        failures++;
        console.log(
          `FAIL ${vw}px ${h.tag} "${clean}" = ${px.toFixed(1)}px > ${avail}px beschikbaar (${h.page})`
        );
      }
    }
  }
}

console.log(`\n${headings.length} koppen gemeten over ${viewports.join('/')}px.`);
for (const vw of viewports) {
  const top = rows
    .filter((r) => r.vw === vw)
    .sort((a, b) => b.px / b.avail - a.px / a.avail)
    .slice(0, 6);
  console.log(`\nKrapste woorden op ${vw}px (breedte / beschikbaar):`);
  for (const r of top) {
    const flag = r.missing ? ' [glyph-fallback]' : '';
    console.log(
      `  ${r.tag} "${r.word}" ${r.px.toFixed(1)} / ${r.avail}px (${Math.round((100 * r.px) / r.avail)}%) ${r.page}${flag}`
    );
  }
}

if (failures) {
  console.error(`\n✗ ${failures} woord(en) passen niet op één regel — overflow-risico.`);
  process.exit(1);
}
console.log('\n✓ Elk kopwoord past op één regel op alle gemeten viewports — geen afbreking, geen overflow.');
