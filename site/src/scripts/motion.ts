/* Motion-basislaag — Pietracasa (tier: ingetogen, intensiteit 1/3)
   Lenis smooth scroll + GSAP scroll-reveals. Respecteert prefers-reduced-motion. */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { initLivingBg } from './living-bg';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function initLenis(): void {
  const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
}

function initReveals(): void {
  // Losse reveals: fade + translateY, eenmalig bij in beeld komen.
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 38 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      }
    );
  });

  // Groepen: kinderen in stagger (60-100ms).
  gsap.utils.toArray<HTMLElement>('[data-reveal-group]').forEach((group) => {
    const children = Array.from(group.children) as HTMLElement[];
    if (children.length === 0) return;
    gsap.fromTo(
      children,
      { opacity: 0, y: 34 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: { trigger: group, start: 'top 85%', once: true },
      }
    );
  });
}

function initCountUp(): void {
  // Numerieke stats tellen op bij in beeld komen (data-count-to op het element).
  gsap.utils.toArray<HTMLElement>('[data-count-to]').forEach((el) => {
    const target = Number(el.dataset.countTo);
    if (!Number.isFinite(target)) return;
    const decimals = Number(el.dataset.countDecimals ?? '0');
    const suffix = el.dataset.countSuffix ?? '';
    const state = { value: 0 };
    gsap.to(state, {
      value: target,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      onUpdate: () => {
        el.textContent = state.value.toFixed(decimals).replace('.', ',') + suffix;
      },
    });
  });
}

function showEverything(): void {
  // Reduced motion of geen animatie: alles direct zichtbaar.
  document
    .querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-group] > *')
    .forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
}


function initParallax(): void {
  // Scroll-parallax op achtergrondlagen: [data-parallax], snelheid in % via
  // data-parallax-speed (default 8, max ~10-15% conform house/motion.md).
  // Lichte scale voorkomt zichtbare randen bij het verschuiven.
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const speed = Math.min(Number(el.dataset.parallaxSpeed ?? '8'), 15);
    if (!Number.isFinite(speed) || speed <= 0) return;
    const scope = el.closest('section') ?? el.parentElement ?? el;
    gsap.fromTo(
      el,
      { yPercent: -speed, scale: 1 + (speed * 2.2) / 100 },
      {
        yPercent: speed,
        scale: 1 + (speed * 2.2) / 100,
        ease: 'none',
        scrollTrigger: { trigger: scope, start: 'top bottom', end: 'bottom top', scrub: true },
      }
    );
  });
}


function initBaSliders(): void {
  // Voor-na sleep-slider: progressive enhancement op de bestaande toggle-kaarten.
  // De Voor/Na-knoppen blijven werken en springen naar de uitersten.
  document.querySelectorAll<HTMLElement>('[data-ba]').forEach((card) => {
    const media = card.querySelector<HTMLElement>('.ba-card__media');
    const voor = card.querySelector<HTMLElement>('[data-ba-panel="voor"]');
    const na = card.querySelector<HTMLElement>('[data-ba-panel="na"]');
    if (!media || !voor || !na) return;

    card.classList.add('ba-card--slider');
    voor.removeAttribute('aria-hidden');
    card.style.setProperty('--ba-pos', '50%');

    const handle = document.createElement('div');
    handle.className = 'ba-handle';
    handle.setAttribute('aria-hidden', 'true');

    const range = document.createElement('input');
    range.type = 'range';
    range.className = 'ba-range';
    range.min = '0';
    range.max = '100';
    range.value = '50';
    range.setAttribute('aria-label', 'Vergelijk voor en na (sleep de schuif)');
    range.addEventListener('input', () => {
      card.style.setProperty('--ba-pos', `${range.value}%`);
    });

    media.append(handle, range);

    card.querySelectorAll<HTMLButtonElement>('[data-ba-show]').forEach((knop) => {
      knop.addEventListener('click', () => {
        const doel = knop.dataset.baShow === 'voor' ? '100' : '0';
        range.value = doel;
        card.style.setProperty('--ba-pos', `${doel}%`);
      });
    });
  });
}


function initHeroEntrance(): void {
  // Entrance-animatie bij load: hero-elementen komen één voor één binnen
  // (titel -> subtitel -> knoppen), alleen voor de eerste hero op de pagina.
  const hero = document.querySelector<HTMLElement>('[data-hero-entrance]');
  if (!hero) return;
  const kinderen = Array.from(hero.children) as HTMLElement[];
  if (kinderen.length === 0) return;
  gsap.from(kinderen, {
    opacity: 0,
    y: 26,
    duration: 0.65,
    ease: 'power3.out',
    stagger: 0.09,
    delay: 0.15,
    clearProps: 'all',
  });
}


function initAutoReveals(): void {
  // Alles-beweegt-laag: elk inhoudsblok in elke sectie komt met stagger binnen
  // tijdens het scrollen — ook blokken zonder handmatige data-reveal markering.
  const uitzondering = '[data-reveal], [data-reveal-group], [data-hero-entrance], .motes-canvas, .sheen';
  const blokken: HTMLElement[] = [];

  document.querySelectorAll<HTMLElement>('main section').forEach((sectie) => {
    sectie.querySelectorAll<HTMLElement>(':scope > .container > *').forEach((el) => {
      if (el.matches(uitzondering) || el.closest('[data-hero-entrance]')) return;
      // Lijsten met meerdere items: de items zelf staggeren i.p.v. de lijst als blok
      if ((el.tagName === 'UL' || el.tagName === 'OL' || el.tagName === 'DL') && el.children.length > 1) {
        Array.from(el.children).forEach((kind) => blokken.push(kind as HTMLElement));
      } else {
        blokken.push(el);
      }
    });
  });

  if (blokken.length === 0) return;
  gsap.set(blokken, { opacity: 0, y: 38 });
  ScrollTrigger.batch(blokken, {
    start: 'top 90%',
    once: true,
    onEnter: (els) =>
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: 'power3.out',
        stagger: 0.09,
        overwrite: true,
        clearProps: 'transform',
      }),
  });
  // Vangnet: alles wat na 6s nog verborgen is (bv. al in beeld bij load) tonen
  window.setTimeout(() => {
    blokken.forEach((el) => {
      if (Number(gsap.getProperty(el, 'opacity')) < 1) gsap.to(el, { opacity: 1, y: 0, duration: 0.4 });
    });
  }, 6000);
}

function initMediaDrift(): void {
  // Continue beweging tijdens het scrollen: losse beelden zweven subtiel mee
  // (scrub), ook nadat ze verschenen zijn. Niet op de voor-na sliders.
  const doelen = document.querySelectorAll<HTMLElement>(
    '.dienst__media img, .b2b-hero__media img, .b2b-werk__media img, .drone__media img, .stats__fotos, .tl-stap__medaillon, .step__medaillon'
  );
  doelen.forEach((el) => {
    gsap.fromTo(
      el,
      { y: 14 },
      {
        y: -14,
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('section') ?? el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      }
    );
  });
}

export function initMotion(): void {
  if (reducedMotion.matches) {
    showEverything();
    initLivingBg(false); // statisch frame, geen beweging
    return;
  }
  initLivingBg(true);
  initHeroEntrance();
  gsap.registerPlugin(ScrollTrigger);
  initLenis();
  initReveals();
  initAutoReveals();
  initMediaDrift();
  initCountUp();
  initParallax();
  initBaSliders();
}
