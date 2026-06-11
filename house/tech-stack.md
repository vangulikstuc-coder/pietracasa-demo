# House — Tech Stack (custom build)
Standaard voor premium, custom-gebouwde sites (geen WordPress/Webflow/Shopify).
Het exacte framework staat in context/tech-stack.md en is leidend; hieronder de huisconventies.

## Stack
- Custom framework volgens context/tech-stack.md (standaard: Astro, islands, minimale JS), TypeScript waar zinnig.
- Styling: moderne CSS (custom properties uit context/design-tokens.json), fluid met clamp().
- Motion: GSAP + ScrollTrigger + Lenis (zie house/motion.md).

## Structuur
- src/components/ (één per sectie), src/layouts/, src/pages/, src/styles/tokens.css, src/scripts/motion.ts, public/.
- design-tokens.json -> CSS custom properties. Geen geraden hexcodes.

## Responsive & performance
- Mobile-first. Test 375 / 768 / 1280 / 1920px. Fluid type & spacing via clamp().
- LCP < 2.5s, CLS < 0.1, Lighthouse 95+. Fonts preloaden + font-display:swap.

## Toegankelijkheid
- WCAG AA: semantische HTML, zichtbare focus, skip-link, alt-teksten, contrast.
- Volledige prefers-reduced-motion-ondersteuning.