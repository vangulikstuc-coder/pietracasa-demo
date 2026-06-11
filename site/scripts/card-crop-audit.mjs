// Crop-audit voor de vakman-foto's (polish-kaart-crop).
// Rekent per gebruiksplek exact het zichtbare beeldvenster uit dat object-fit: cover
// + object-position oplevert (incl. de hover-zoom op de dienstkaarten) en controleert
// dat het hoofd van de vakman daar volledig binnen valt op 375/768/1280px.
// De hoofd-bboxes zijn handmatig geannoteerd op de demo-beelden (fracties van het beeld).
import sharp from 'sharp';

const IMAGES = {
  gevelwerk: {
    file: 'src/assets/images/sections/dienst-gevelwerk.jpg',
    pos: [0.49, 0.3], // object-position uit de CSS
    head: { x: [0.43, 0.55], y: [0.22, 0.42] },
  },
  binnen: {
    file: 'src/assets/images/sections/dienst-binnenafwerking.jpg',
    pos: [0.38, 0.24],
    head: { x: [0.31, 0.42], y: [0.13, 0.36] },
  },
  vloer: {
    file: 'src/assets/images/sections/dienst-microcement.jpg',
    pos: [0.54, 0.21],
    head: { x: [0.48, 0.62], y: [0.09, 0.33] },
  },
};

// Elke plek waar een vakman-foto met object-fit: cover staat.
// boxAr per breakpoint komt uit de aspect-ratio in de pagina-CSS;
// zoom = de hover-scale op de kaarten met de transform-origin uit de CSS.
const USAGES = [
  {
    where: 'index.astro + projecten.astro · .dienst-card__media (3/2 + hover-zoom 1.05)',
    imgs: ['gevelwerk', 'binnen', 'vloer'],
    boxAr: { 375: 3 / 2, 768: 3 / 2, 1280: 3 / 2 },
    zoom: { s: 1.05, origin: [0.5, 0.3] },
  },
  {
    where: 'diensten/gevelwerk-buitenafwerking.astro · .dienst__media (4/5)',
    imgs: ['gevelwerk'],
    boxAr: { 375: 4 / 5, 768: 4 / 5, 1280: 4 / 5 },
  },
  {
    where: 'diensten/microcement-vloeren.astro · .dienst__media (4/5)',
    imgs: ['vloer'],
    boxAr: { 375: 4 / 5, 768: 4 / 5, 1280: 4 / 5 },
  },
  {
    // werkfoto is 4/3 maar rekt mee met de galerij-rij (flex: 1, naast de hogere
    // ba-card); 1.0 (vierkant) is de conservatieve ondergrens voor die rek
    where: 'diensten/binnenafwerking-renovatie.astro · .werkfoto__media (4/3, gerekt tot ~1/1)',
    imgs: ['binnen'],
    boxAr: { 375: 4 / 3, 768: 4 / 3, 1280: 1.0 },
  },
];

// Zichtbaar beeldvenster (fracties van het bronbeeld) voor object-fit: cover.
function coverWindow(imgAr, boxAr, [px, py]) {
  if (imgAr > boxAr) {
    const vis = boxAr / imgAr;
    const cut = 1 - vis;
    return { x: [cut * px, cut * px + vis], y: [0, 1] };
  }
  const vis = imgAr / boxAr;
  const cut = 1 - vis;
  return { x: [0, 1], y: [cut * py, cut * py + vis] };
}

// Hover-zoom: transform scale(s) toont een subvenster van de box; map dat
// subvenster lineair terug naar beeldfracties binnen het cover-venster.
function applyZoom(win, zoom) {
  if (!zoom) return win;
  const cut = 1 - 1 / zoom.s;
  const [ox, oy] = zoom.origin;
  const map = ([a, b], t0, t1) => [a + (b - a) * t0, a + (b - a) * t1];
  return {
    x: map(win.x, ox * cut, ox * cut + 1 / zoom.s),
    y: map(win.y, oy * cut, oy * cut + 1 / zoom.s),
  };
}

const pct = (v) => `${(v * 100).toFixed(1)}%`;
let fails = 0;

for (const [key, img] of Object.entries(IMAGES)) {
  const meta = await sharp(img.file).metadata();
  const ar = meta.width / meta.height;
  img.ar = ar;
  if (Math.abs(ar - 1.5) > 0.01) {
    console.error(`FAIL  ${key}: beeldverhouding ${ar.toFixed(3)} wijkt af van verwachte 3:2 — bboxes herijken`);
    fails++;
  }
}

for (const usage of USAGES) {
  console.log(`\n${usage.where}`);
  for (const key of usage.imgs) {
    const img = IMAGES[key];
    for (const [bp, boxAr] of Object.entries(usage.boxAr)) {
      const win = applyZoom(coverWindow(img.ar, boxAr, img.pos), usage.zoom);
      const ok =
        img.head.x[0] >= win.x[0] &&
        img.head.x[1] <= win.x[1] &&
        img.head.y[0] >= win.y[0] &&
        img.head.y[1] <= win.y[1];
      if (!ok) fails++;
      console.log(
        `  ${ok ? 'OK  ' : 'FAIL'}  ${key.padEnd(10)} @${bp.padEnd(5)} venster x ${pct(win.x[0])}–${pct(win.x[1])}, y ${pct(win.y[0])}–${pct(win.y[1])} | hoofd x ${pct(img.head.x[0])}–${pct(img.head.x[1])}, y ${pct(img.head.y[0])}–${pct(img.head.y[1])}`
      );
    }
  }
}

console.log(fails ? `\n${fails} probleem(en) gevonden` : '\nAlle hoofden volledig in beeld op 375/768/1280px');
process.exit(fails ? 1 : 0);
