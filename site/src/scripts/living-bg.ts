/* Levende achtergrond — doorlopende laag achter de hele site:
   warme nevel: traag ademende gloedwolken in merk-tinten (geen deeltjes).
   Conform house/motion.md atmosfeerlaag: één levende achtergrond achter de
   transparante secties; secties met eigen kleur dekken hem af als rustpunt.
   - Scroll-na-ijling: eased += (scrollY - eased) * 0.09
   - DPR gecapt (nevel 1.5 — blur maakt meer onnodig; stof 2)
   - Mobiel lichter gedoseerd; pauzeert bij verborgen tab
   - Reduced motion: één statisch frame, geen animatie */

interface Blob {
  c: string; a: number; r: number; cx: number; cy: number;
  sx: number; sy: number; t1: number; t2: number; d: number;
}

const BLOBS: Blob[] = [
  { c: '166,98,62', a: 0.2, r: 0.52, cx: 0.18, cy: 0.22, sx: 0.12, sy: 0.09, t1: 33, t2: 43, d: 0.9 },
  { c: '193,141,96', a: 0.17, r: 0.46, cx: 0.82, cy: 0.18, sx: 0.1, sy: 0.11, t1: 47, t2: 37, d: 0.6 },
  { c: '140,123,110', a: 0.13, r: 0.55, cx: 0.7, cy: 0.78, sx: 0.13, sy: 0.08, t1: 53, t2: 57, d: 1.1 },
  { c: '166,98,62', a: 0.12, r: 0.4, cx: 0.3, cy: 0.85, sx: 0.09, sy: 0.1, t1: 39, t2: 49, d: 0.75 },
  { c: '214,178,140', a: 0.16, r: 0.38, cx: 0.5, cy: 0.45, sx: 0.11, sy: 0.12, t1: 59, t2: 31, d: 0.5 },
];

export function initLivingBg(animate: boolean): void {
  const host = document.createElement('div');
  host.id = 'living-bg';
  host.setAttribute('aria-hidden', 'true');
  const cNevel = document.createElement('canvas');
  cNevel.className = 'living-bg__nevel';
  host.append(cNevel);
  document.body.prepend(host);

  const xN = cNevel.getContext('2d');
  if (!xN) return;

  let w = 0;
  let h = 0;
  let dprN = 1;
  let raf = 0;
  let eased = window.scrollY;
  let last = performance.now();

  const resize = (): void => {
    w = window.innerWidth;
    h = window.innerHeight;
    dprN = Math.min(window.devicePixelRatio || 1, 1.5);
    cNevel.width = w * dprN;
    cNevel.height = h * dprN;
  };

  const frame = (t: number): void => {
    const dt = Math.min((t - last) / 1000, 0.05);
    last = t;
    eased += (window.scrollY - eased) * 0.09;
    const s = t / 1000;

    // Onderlaag: warme nevel die traag ademt en meekantelt met de scroll.
    xN.setTransform(dprN, 0, 0, dprN, 0, 0);
    xN.clearRect(0, 0, w, h);
    for (const b of BLOBS) {
      const x = (b.cx + Math.sin((s / b.t1) * Math.PI * 2) * b.sx) * w;
      // wrap: wolken recyclen verticaal zodat er bij elke scrollpositie nevel is
      const ruwY = (b.cy + Math.cos((s / b.t2) * Math.PI * 2) * b.sy) * h - eased * b.d * 0.1;
      const baan = h * 1.6;
      const y = ((ruwY % baan) + baan) % baan - h * 0.3;
      const r = b.r * Math.min(w, h) * (1 + 0.06 * Math.sin(s / 29 + b.t1));
      const g = xN.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${b.c}, ${b.a})`);
      g.addColorStop(1, `rgba(${b.c}, 0)`);
      xN.fillStyle = g;
      xN.fillRect(0, 0, w, h);
    }

    if (animate) raf = requestAnimationFrame(frame);
  };

  resize();
  window.addEventListener('resize', resize);
  if (animate) {
    raf = requestAnimationFrame(frame);
    document.addEventListener('visibilitychange', () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    });
  } else {
    frame(performance.now()); // één statisch frame (reduced motion)
  }
}
