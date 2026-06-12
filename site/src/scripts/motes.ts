/* Levende achtergrond — fijn stucstof in warm licht (atmosfeer-intensiteit 2).
   Canvas-deeltjeslaag conform house/motion.md: parallax per diepte met
   scroll-na-ijling (eased += (scrollY - eased) * 0.12), DPR gecapt op 2,
   deeltjesaantal gecapt en lichter op mobiel, pauzeert buiten beeld
   (IntersectionObserver) en bij verborgen tab (visibilitychange).
   Bij prefers-reduced-motion wordt deze laag helemaal niet gestart (zie motion.ts). */

interface Mote {
  x: number; // 0..1 relatief aan breedte
  y: number; // 0..1 relatief aan hoogte
  r: number; // straal in px
  depth: number; // 0.4..1 — diepte voor parallax + snelheid
  phase: number; // sinus-fase voor wiebel
  wobble: number; // wiebel-amplitude in px
  rise: number; // stijgsnelheid px/s
  alpha: number; // basis-dekking
}

const DPR_CAP = 2;

function buildMotes(count: number): Mote[] {
  return Array.from({ length: count }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: 0.8 + Math.random() * 1.9,
    depth: 0.4 + Math.random() * 0.6,
    phase: Math.random() * Math.PI * 2,
    wobble: 6 + Math.random() * 14,
    rise: 4 + Math.random() * 9,
    alpha: 0.05 + Math.random() * 0.16,
  }));
}

function attach(host: HTMLElement): void {
  const dark = host.dataset.motes === 'dark';
  const canvas = document.createElement('canvas');
  canvas.className = 'motes-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  // Zelfde laag-slot als .sheen: boven de achtergrond, onder de content-container.
  const container = host.querySelector(':scope > .container');
  if (container) host.insertBefore(canvas, container);
  else host.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let w = 0;
  let h = 0;
  let dpr = 1;
  let motes: Mote[] = [];
  let raf = 0;
  let visible = false;
  let last = 0;
  let scrollEased = window.scrollY;

  const resize = (): void => {
    const rect = host.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
    w = rect.width;
    h = rect.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    // Dosering: oppervlakte-afhankelijk, gecapt; op kleine schermen lichter (accu/GPU).
    const cap = window.innerWidth < 768 ? 30 : 72;
    const count = Math.max(18, Math.min(cap, Math.round((w * h) / 26000)));
    if (count !== motes.length) motes = buildMotes(count);
  };

  const draw = (t: number): void => {
    if (!visible) return;
    const dt = Math.min((t - last) / 1000, 0.05);
    last = t;
    scrollEased += (window.scrollY - scrollEased) * 0.12;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = dark ? 'lighter' : 'source-over';

    const time = t / 1000;
    for (const m of motes) {
      m.y -= (m.rise * m.depth * dt) / h; // traag omhoog zweven
      if (m.y < -0.05) {
        m.y = 1.05;
        m.x = Math.random();
      }
      const px = m.x * w + Math.sin(time * 0.35 + m.phase) * m.wobble;
      // Parallax met na-ijling: diepere deeltjes bewegen meer mee met de scroll.
      const py = ((m.y * h + scrollEased * m.depth * 0.08) % (h * 1.1) + h * 1.1) % (h * 1.1) - h * 0.05;
      const twinkle = 0.75 + 0.25 * Math.sin(time * 0.8 + m.phase * 2);
      ctx.globalAlpha = m.alpha * twinkle;
      ctx.fillStyle = dark ? 'rgb(255 226 196)' : 'rgb(150 96 64)';
      ctx.beginPath();
      ctx.arc(px, py, m.r * m.depth, 0, Math.PI * 2);
      ctx.fill();
    }
    raf = requestAnimationFrame(draw);
  };

  const start = (): void => {
    if (visible) return;
    visible = true;
    last = performance.now();
    raf = requestAnimationFrame(draw);
  };
  const stop = (): void => {
    visible = false;
    cancelAnimationFrame(raf);
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => (e.isIntersecting && !document.hidden ? start() : stop()));
    },
    { rootMargin: '80px' }
  );
  io.observe(host);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else if (isInViewport(host)) start();
  });
  new ResizeObserver(resize).observe(host);
  resize();
}

function isInViewport(el: HTMLElement): boolean {
  const r = el.getBoundingClientRect();
  return r.bottom > -80 && r.top < window.innerHeight + 80;
}

export function initMotes(): void {
  document.querySelectorAll<HTMLElement>('[data-motes]').forEach(attach);
}
