/* Motion-basislaag — Stucq (tier: ingetogen, intensiteit 1/3)
   Lenis smooth scroll + GSAP scroll-reveals. Respecteert prefers-reduced-motion. */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

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
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
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
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
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

export function initMotion(): void {
  if (reducedMotion.matches) {
    showEverything();
    return;
  }
  gsap.registerPlugin(ScrollTrigger);
  initLenis();
  initReveals();
  initCountUp();
}
