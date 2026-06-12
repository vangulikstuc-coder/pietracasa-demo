/* Levende achtergrond — doorlopende laag achter de hele site:
   warme nevel (onderlaag) + fijn stucstof in warm licht (deeltjeslaag).
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
interface Mote {
  x: number; y: number; r: number; depth: number;
  phase: number; wobble: number; rise: number; alpha: number;
}

const BLOBS: Blob[] = [
  { c: '166,98,62', a: 0.12, r: 0.42, cx: 0.18, cy: 0.22, sx: 0.1, sy: 0.07, t1: 41, t2: 53, d: 0.9 },
  { c: '193,141,96', a: 0.1, r: 0.38, cx: 0.82, cy: 0.18, sx: 0.08, sy: 0.09, t1: 59, t2: 47, d: 0.6 },
  { c: '140,123,110', a: 0.08, r: 0.46, cx: 0.7, cy: 0.78, sx: 0.11, sy: 0.06, t1: 67, t2: 71, d: 1.1 },
  { c: '214,178,140', a: 0.09, r: 0.3, cx: 0.45, cy: 0.5, sx: 0.09, sy: 0.1, t1: 73, t2: 43, d: 0.5 },
];

export function initLivingBg(animate: boolean): void {
  const host = document.createElement('div');
  host.id = 'living-bg';
  host.setAttribute('aria-hidden', 'true');
  const cNevel = document.createElement('canvas');
  cNevel.className = 'living-bg__nevel';
  const cStof = document.createElement('canvas');
  cStof.className = 'living-bg__stof';
  host.append(cNevel, cStof);
  document.body.prepend(host);

  const xN = cNevel.getContext('2d');
  const xS = cStof.getContext('2d');
  if (!xN || !xS) return;

  let w = 0;
  let h = 0;
  let dprN = 1;
  let dprS = 1;
  let motes: Mote[] = [];
  let raf = 0;
  let eased = window.scrollY;
  let last = performance.now();

  const makeMotes = (): void => {
    const cap = w < 768 ? 44 : 110;
    const n = Math.min(cap, Math.round((w * h) / 15000));
    motes = Array.from({ length: n }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 1.2 + Math.random() * 2.6,
      depth: 0.35 + Math.random() * 0.65,
      phase: Math.random() * Math.PI * 2,
      wobble: 8 + Math.random() * 18,
      rise: 5 + Math.random() * 10,
      alpha: 0.12 + Math.random() * 0.22,
    }));
  };

  const resize = (): void => {
    w = window.innerWidth;
    h = window.innerHeight;
    dprN = Math.min(window.devicePixelRatio || 1, 1.5);
    dprS = Math.min(window.devicePixelRatio || 1, 2);
    cNevel.width = w * dprN;
    cNevel.height = h * dprN;
    cStof.width = w * dprS;
    cStof.height = h * dprS;
    makeMotes();
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
      const y = (b.cy + Math.cos((s / b.t2) * Math.PI * 2) * b.sy) * h - eased * b.d * 0.06;
      const r = b.r * Math.min(w, h) * (1 + 0.06 * Math.sin(s / 29 + b.t1));
      const g = xN.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${b.c}, ${b.a})`);
      g.addColorStop(1, `rgba(${b.c}, 0)`);
      xN.fillStyle = g;
      xN.fillRect(0, 0, w, h);
    }

    // Deeltjeslaag: stucstof — zweeft traag omhoog, parallax per diepte.
    xS.setTransform(dprS, 0, 0, dprS, 0, 0);
    xS.clearRect(0, 0, w, h);
    for (const m of motes) {
      m.y -= (m.rise * m.depth * dt) / h;
      if (m.y < -0.05) {
        m.y = 1.05;
        m.x = Math.random();
      }
      const px = m.x * w + Math.sin(s * 0.35 + m.phase) * m.wobble;
      const py = ((((m.y * h + eased * m.depth * 0.14) % (h * 1.1)) + h * 1.1) % (h * 1.1)) - h * 0.05;
      const tw = 0.75 + 0.25 * Math.sin(s * 0.8 + m.phase * 2);
      xS.globalAlpha = m.alpha * tw;
      xS.fillStyle = 'rgb(110 102 94)'; // warm grijs — valt beter op tegen de crème-achtergrond
      xS.beginPath();
      xS.arc(px, py, m.r * m.depth, 0, Math.PI * 2);
      xS.fill();
    }
    xS.globalAlpha = 1;
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
