/* Levende achtergrond — "Levend marmer" (Pietra): fijne steenaders die
   onmerkbaar verschuiven, met één goudkoperen signatuur-ader. Doorlopende
   laag achter de transparante secties; secties met eigen kleur dekken hem
   af als rustpunt (conform house/motion.md atmosfeerlaag).
   - Scroll-na-ijling: eased += (scrollY - eased) * 0.08, parallax per diepte
   - Aders wrappen verticaal zodat er bij elke scrollpositie marmer leeft
   - DPR gecapt op 2; pauzeert bij verborgen tab
   - Reduced motion: één statisch frame, geen animatie */

interface Ader {
  x0: number;
  y0: number;
  hoek: number;
  lengte: number;
  segmenten: number;
  meander: number;
  fase: number;
  snel: number;
  breed: number;
  alpha: number;
  goud: boolean;
  d: number;
}

export function initLivingBg(animate: boolean): void {
  const host = document.createElement('div');
  host.id = 'living-bg';
  host.setAttribute('aria-hidden', 'true');
  const canvas = document.createElement('canvas');
  canvas.className = 'living-bg__marmer';
  host.append(canvas);
  document.body.prepend(host);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let w = 0;
  let h = 0;
  let raf = 0;
  let eased = window.scrollY;
  let aders: Ader[] = [];

  const maakAders = (): void => {
    const n = w < 768 ? 7 : 11;
    aders = Array.from({ length: n }, (_, i) => ({
      x0: Math.random(),
      y0: (i + 0.5) / n,
      hoek: -0.55 + Math.random() * 0.25, // diagonaal, zoals echt marmer
      lengte: 0.8 + Math.random() * 0.9,
      segmenten: 7 + Math.floor(Math.random() * 4),
      meander: 18 + Math.random() * 36,
      fase: Math.random() * Math.PI * 2,
      snel: 0.03 + Math.random() * 0.04,
      breed: 0.7 + Math.random() * 1.4,
      alpha: 0.1 + Math.random() * 0.12,
      goud: i === 3, // één signatuur-ader
      d: 0.35 + Math.random() * 0.75,
    }));
  };

  const resize = (): void => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    maakAders();
  };

  const frame = (t: number): void => {
    eased += (window.scrollY - eased) * 0.08;
    const s = t / 1000;
    ctx.clearRect(0, 0, w, h);

    // warme steen-wash als ondergrond
    const wash = ctx.createRadialGradient(w * 0.75, h * 0.15, 0, w * 0.75, h * 0.15, Math.max(w, h));
    wash.addColorStop(0, 'rgba(193,141,96,.06)');
    wash.addColorStop(1, 'rgba(193,141,96,0)');
    ctx.fillStyle = wash;
    ctx.fillRect(0, 0, w, h);

    for (const a of aders) {
      const baanH = h * 1.6;
      const ruwY = a.y0 * h - eased * a.d * 0.14;
      const yBasis = (((ruwY % baanH) + baanH) % baanH) - h * 0.3;
      const xBasis = a.x0 * w;
      ctx.beginPath();
      const L = a.lengte * Math.max(w, h);
      for (let i = 0; i <= a.segmenten; i++) {
        const p = i / a.segmenten;
        const langs = p * L;
        const mx =
          Math.sin(p * Math.PI * 3 + a.fase + s * a.snel * Math.PI * 2) * a.meander +
          Math.sin(p * Math.PI * 7 + a.fase * 2 + s * a.snel * 1.3) * a.meander * 0.35;
        const x = xBasis + Math.cos(a.hoek) * langs + Math.cos(a.hoek + Math.PI / 2) * mx - L * 0.4;
        const y = yBasis + Math.sin(a.hoek) * langs + Math.sin(a.hoek + Math.PI / 2) * mx + L * 0.25;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      if (a.goud) {
        ctx.strokeStyle = `rgba(201,163,106,${a.alpha + 0.12})`;
        ctx.lineWidth = a.breed + 0.6;
        ctx.shadowColor = 'rgba(201,163,106,.5)';
        ctx.shadowBlur = 7;
      } else {
        ctx.strokeStyle = `rgba(140,123,110,${a.alpha})`;
        ctx.lineWidth = a.breed;
        ctx.shadowBlur = 0;
      }
      ctx.stroke();
      ctx.shadowBlur = 0;
    }
    if (animate) raf = requestAnimationFrame(frame);
  };

  resize();
  window.addEventListener('resize', resize);
  if (animate) {
    raf = requestAnimationFrame(frame);
    document.addEventListener('visibilitychange', () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(frame);
    });
  } else {
    frame(performance.now()); // één statisch frame (reduced motion)
  }
}
