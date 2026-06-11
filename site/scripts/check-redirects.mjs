// Test oude en nieuwe routes tegen de draaiende preview-server (polish-slugs/qa).
const BASE = 'http://localhost:4321';
const OUD = ['/offerte/', '/faq/', '/gevelwerk/', '/binnenafwerking/', '/microcement/'];
const NIEUW = [
  '/offerte-aanvragen/',
  '/veelgestelde-vragen/',
  '/diensten/gevelwerk-buitenafwerking/',
  '/diensten/binnenafwerking-renovatie/',
  '/diensten/microcement-vloeren/',
];

let fouten = 0;
for (const pad of OUD) {
  const res = await fetch(BASE + pad, { redirect: 'manual' });
  const location = res.headers.get('location');
  const html = res.status === 200 ? await res.text() : '';
  const refresh = html.match(/http-equiv="refresh" content="0;url=([^"]+)"/);
  // Server-side 3xx (preview/Cloudflare) of meta-refresh-fallback telt allebei als redirect.
  const doel = location ?? refresh?.[1];
  const ok = (res.status >= 300 && res.status < 400 && location) || (res.status === 200 && refresh);
  if (!ok) fouten += 1;
  console.log(`${ok ? 'OK ' : 'FOUT'} ${pad} -> status ${res.status}, doel: ${doel ?? 'GEEN'}`);
}
for (const pad of NIEUW) {
  const res = await fetch(BASE + pad);
  const html = await res.text();
  const isEchtePagina = res.ok && !html.includes('http-equiv="refresh"') && html.includes('<h1');
  if (!isEchtePagina) fouten += 1;
  console.log(`${isEchtePagina ? 'OK ' : 'FOUT'} ${pad} -> status ${res.status}, echte pagina: ${isEchtePagina}`);
}
process.exit(fouten ? 1 : 0);
