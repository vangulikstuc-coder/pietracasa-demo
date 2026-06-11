// Contrast-audit voor tekst-op-beeld (polish-leesbaarheid).
// Berekent per tekstzone het SLECHTSTE contrast: echte beeldpixels (sharp),
// gecomposit met exact dezelfde scrim-gradients als in de pagina-CSS,
// getoetst aan WCAG AA (4,5:1 lopende tekst, 3:1 grote koppen).
// Draaien vanuit ./site:  node scripts/contrast-audit.mjs
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const img = (p) => path.join(root, '..', 'src', 'assets', 'images', p);

// --- Tokens (uit tokens.css / design-tokens.json) ---
const NEUTRAL_900 = [28, 24, 20]; // scrim-kleur
const WHITE = [255, 255, 255];
const NEUTRAL_100 = [237, 232, 226];
const NEUTRAL_300 = [201, 190, 180];

// --- WCAG-helpers ---
const lin = (c) => {
  const v = c / 255;
  return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
};
const luminance = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
const contrast = (a, b) => {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};
// sRGB-composit (zoals de browser scrim-lagen over het beeld legt)
const over = (bg, [or_, og, ob], alpha) => [
  alpha * or_ + (1 - alpha) * bg[0],
  alpha * og + (1 - alpha) * bg[1],
  alpha * ob + (1 - alpha) * bg[2],
];

// --- Gradient-modellen (1-op-1 met de CSS) ---
const stopsAt = (stops, t) => {
  if (t <= stops[0][0]) return stops[0][1];
  for (let i = 1; i < stops.length; i++) {
    if (t <= stops[i][0]) {
      const [t0, a0] = stops[i - 1];
      const [t1, a1] = stops[i];
      return a0 + ((t - t0) / (t1 - t0)) * (a1 - a0);
    }
  }
  return stops[stops.length - 1][1];
};
// 'to top': t = afstand vanaf onderkant; 'to right': t = x
const toTop = (stops) => (x, y) => stopsAt(stops, 1 - y);
const toRight = (stops) => (x, y) => stopsAt(stops, x);
const flat = (a) => () => a;
// CSS-hoekgradient (100deg) over een W×H-vlak, t langs de gradient-as
const angleDeg = (deg, stops, W, H) => {
  const rad = (deg * Math.PI) / 180;
  const d = [Math.sin(rad), -Math.cos(rad)]; // schermcoords: y omlaag
  const corners = [
    [0, 0],
    [W, 0],
    [0, H],
    [W, H],
  ].map(([x, y]) => d[0] * x + d[1] * y);
  const min = Math.min(...corners);
  const max = Math.max(...corners);
  return (xn, yn) => stopsAt(stops, (d[0] * xn * W + d[1] * yn * H - min) / (max - min));
};

// --- Scrims zoals nu in de CSS ---
const heroMobile = [toTop([[0, 0.92], [0.5, 0.78], [1, 0.66]])];
const heroDesktop = [
  toRight([[0, 0.6], [0.45, 0.32], [0.72, 0], [1, 0]]),
  toTop([[0, 0.92], [0.42, 0.74], [0.75, 0.4], [1, 0.18]]),
];
const ctaMobile = (W, H) => [angleDeg(100, [[0, 0.86], [1, 0.72]], W, H)];
const ctaDesktop = (W, H) => [angleDeg(100, [[0, 0.86], [1, 0.6]], W, H)];

// --- Tekstzones (genormaliseerd t.o.v. de sectie; ruim/conservatief gekozen) ---
const heroBoxes375 = [
  { naam: 'eyebrow', box: [0.04, 0.1, 0.55, 0.15], kleur: NEUTRAL_100, eis: 4.5 },
  { naam: 'h1', box: [0.04, 0.15, 0.97, 0.36], kleur: WHITE, eis: 3 },
  { naam: 'subkop', box: [0.04, 0.37, 0.97, 0.52], kleur: NEUTRAL_100, eis: 4.5 },
  { naam: 'tel-link', box: [0.04, 0.6, 0.85, 0.78], kleur: WHITE, eis: 4.5 },
  { naam: 'micro', box: [0.04, 0.78, 0.9, 0.86], kleur: NEUTRAL_300, eis: 4.5 },
];
const heroBoxes1280 = [
  { naam: 'eyebrow', box: [0.025, 0.21, 0.22, 0.27], kleur: NEUTRAL_100, eis: 4.5 },
  { naam: 'h1', box: [0.025, 0.27, 0.55, 0.48], kleur: WHITE, eis: 3 },
  { naam: 'subkop', box: [0.025, 0.48, 0.48, 0.6], kleur: NEUTRAL_100, eis: 4.5 },
  { naam: 'tel-link', box: [0.2, 0.62, 0.5, 0.74], kleur: WHITE, eis: 4.5 },
  { naam: 'micro', box: [0.025, 0.74, 0.35, 0.8], kleur: NEUTRAL_300, eis: 4.5 },
];
// Projecten-hero: feiten-pills hebben een eigen 50%-vlak boven op de scrim
const pill375 = { naam: 'feiten-pill', box: [0.04, 0.78, 0.9, 0.88], kleur: WHITE, eis: 4.5, extra: flat(0.5) };
const pill1280 = { naam: 'feiten-pill', box: [0.025, 0.72, 0.5, 0.82], kleur: WHITE, eis: 4.5, extra: flat(0.5) };

const ctaBoxes375 = [
  { naam: 'h2', box: [0.04, 0.19, 0.97, 0.4], kleur: WHITE, eis: 3 },
  { naam: 'subkop', box: [0.04, 0.42, 0.97, 0.55], kleur: NEUTRAL_100, eis: 4.5 },
  { naam: 'tel-link', box: [0.04, 0.6, 0.9, 0.72], kleur: WHITE, eis: 4.5 },
  { naam: 'micro', box: [0.04, 0.74, 0.97, 0.85], kleur: NEUTRAL_100, eis: 4.5 },
];
const ctaBoxes1280 = [
  { naam: 'h2', box: [0.025, 0.17, 0.55, 0.35], kleur: WHITE, eis: 3 },
  { naam: 'subkop', box: [0.025, 0.37, 0.42, 0.5], kleur: NEUTRAL_100, eis: 4.5 },
  { naam: 'tel-link', box: [0.24, 0.55, 0.5, 0.67], kleur: WHITE, eis: 4.5 },
  { naam: 'micro', box: [0.025, 0.7, 0.46, 0.78], kleur: NEUTRAL_100, eis: 4.5 },
];

// Sinds polish-hero-crop zijn de gevelwerk- en projecten-hero's 50/50-splits uit
// losse voor/na-helften met een witte deellijn (4px, spacing-xs) op het midden.
const splitGevel = [img('sections/galerij-gevel-voor.jpg'), img('sections/galerij-gevel-na.jpg')];
const splitVloer = [img('sections/galerij-vloer-voor.jpg'), img('sections/galerij-vloer-na.jpg')];

const scenarios = [
  { titel: 'page-hero microcement 375', beeld: img('hero/hero-microcement.jpg'), W: 375, H: 600, scrim: heroMobile, zones: heroBoxes375 },
  { titel: 'page-hero microcement 1280', beeld: img('hero/hero-microcement.jpg'), W: 1280, H: 620, scrim: heroDesktop, zones: heroBoxes1280 },
  { titel: 'page-hero gevelwerk 375 (split)', beeld: splitGevel, W: 375, H: 600, scrim: heroMobile, zones: heroBoxes375 },
  { titel: 'page-hero gevelwerk 1280 (split)', beeld: splitGevel, W: 1280, H: 620, scrim: heroDesktop, zones: heroBoxes1280 },
  { titel: 'project-hero projecten 375 (split)', beeld: splitVloer, W: 375, H: 600, scrim: heroMobile, zones: [...heroBoxes375.slice(0, 3), pill375] },
  { titel: 'project-hero projecten 1280 (split)', beeld: splitVloer, W: 1280, H: 620, scrim: heroDesktop, zones: [...heroBoxes1280.slice(0, 3), pill1280] },
  { titel: 'cta-band (8 pagina’s) 375', beeld: img('sections/cta-sfeer.jpg'), W: 375, H: 500, scrim: ctaMobile(375, 500), zones: ctaBoxes375 },
  { titel: 'cta-band (8 pagina’s) 1280', beeld: img('sections/cta-sfeer.jpg'), W: 1280, H: 560, scrim: ctaDesktop(1280, 560), zones: ctaBoxes1280 },
];

// object-fit: cover — sectiepunt -> beeldpixel
const coverMap = (W, H, iw, ih) => {
  const s = Math.max(W / iw, H / ih);
  const ox = (iw * s - W) / 2;
  const oy = (ih * s - H) / 2;
  return (xn, yn) => [
    Math.min(iw - 1, Math.max(0, Math.round((xn * W + ox) / s))),
    Math.min(ih - 1, Math.max(0, Math.round((yn * H + oy) / s))),
  ];
};

const GAP = 4; // deellijn-breedte (var(--spacing-xs)) in de split-hero's
const loadRaw = async (p) => {
  const { data, info } = await sharp(p).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const px = (x, y) => {
    const i = (y * info.width + x) * 3;
    return [data[i], data[i + 1], data[i + 2]];
  };
  return { px, info };
};

let failures = 0;
for (const sc of scenarios) {
  let sample; // (xn, yn) -> beeldpixel vóór de scrim-lagen
  if (Array.isArray(sc.beeld)) {
    // 50/50-split: linkerhelft voor, rechterhelft na, witte deellijn op het midden (worst case)
    const [voor, na] = await Promise.all(sc.beeld.map(loadRaw));
    const halfW = (sc.W - GAP) / 2;
    const mapVoor = coverMap(halfW, sc.H, voor.info.width, voor.info.height);
    const mapNa = coverMap(halfW, sc.H, na.info.width, na.info.height);
    // band rondom de deellijn bewust breder dan 4px zodat het samplegrid hem nooit mist (conservatief: wit)
    const band = GAP / 2 + sc.W * 0.01;
    sample = (xn, yn) => {
      const x = xn * sc.W;
      if (Math.abs(x - (halfW + GAP / 2)) <= band) return WHITE;
      return x < halfW
        ? voor.px(...mapVoor(x / halfW, yn))
        : na.px(...mapNa((x - halfW - GAP) / halfW, yn));
    };
  } else {
    const { px, info } = await loadRaw(sc.beeld);
    const map = coverMap(sc.W, sc.H, info.width, info.height);
    sample = (xn, yn) => px(...map(xn, yn));
  }
  console.log(`\n${sc.titel}`);
  for (const zone of sc.zones) {
    const [x0, y0, x1, y1] = zone.box;
    let worst = Infinity;
    const layers = zone.extra ? [...sc.scrim, zone.extra] : sc.scrim;
    for (let yi = 0; yi <= 24; yi++) {
      for (let xi = 0; xi <= 48; xi++) {
        const xn = x0 + (xi / 48) * (x1 - x0);
        const yn = y0 + (yi / 24) * (y1 - y0);
        let bg = sample(xn, yn);
        for (const layer of layers) bg = over(bg, NEUTRAL_900, layer(xn, yn));
        worst = Math.min(worst, contrast(zone.kleur, bg));
      }
    }
    const ok = worst >= zone.eis;
    if (!ok) failures++;
    console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${zone.naam.padEnd(12)} min ${worst.toFixed(2)}:1 (eis ${zone.eis}:1)`);
  }
}

// Chips/pills met vlak 70%-scrim (Voor/Na-chips, drone-chip, hero-chip): worst case = wit beeldpixel
const chipBg = over(WHITE, NEUTRAL_900, 0.7);
const chipRatio = contrast(WHITE, chipBg);
console.log(`\nchips 70%-scrim, worst case (wit beeldpixel): ${chipRatio >= 4.5 ? 'PASS' : 'FAIL'} ${chipRatio.toFixed(2)}:1 (eis 4.5:1)`);
if (chipRatio < 4.5) failures++;

console.log(failures === 0 ? '\nALLE ZONES AA ✓' : `\n${failures} ZONE(S) FALEN`);
process.exit(failures === 0 ? 0 : 1);
