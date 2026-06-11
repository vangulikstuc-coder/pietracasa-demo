# House — Motion & Atmosfeer Systeem (GSAP + Lenis)
Bewegingslaag die elke build levend en premium maakt. Beweging met betekenis, nooit als gimmick.
Dit bestand is het MENU (constant huis-niveau). De KEUZE voor déze build staat hieronder en in
context/design-constraints.json — bouw exact dat register, niet meer en niet minder.

## ▶ Keuze voor deze build (uit de niche)
- **Tier:** ingetogen   ·   **Atmosfeer-intensiteit:** 1/3
- **Signature-moment:** gladstrijkende laag die van links naar rechts over het beeld trekt en een strakke wand onthult
- **Levende achtergrond-deeltjes:** NEE   ·   **Filmgrain:** NEE

## Stack
- Lenis (smooth scroll) + GSAP + ScrollTrigger. Respecteer ALTIJD prefers-reduced-motion.
- Easing: snel in, zacht uit — power3.out / expo.out of cubic-bezier(.22,1,.36,1).
- Duur 200–600ms. Stagger kinderen 60–100ms. Alleen transform & opacity (GPU).

## Basislaag (ELKE build, ongeacht tier)
- Lenis: lerp ~0.1, smoothWheel true, gekoppeld aan de GSAP-ticker. Bij reduced-motion: uit.
- Scroll-reveals: fade + translateY(24–40px) bij enter; once:true; kinderen in stagger.
- Parallax: ScrollTrigger scrub, max 10–15% verplaatsing. Nooit overdreven.
- Count-up: numerieke stats tellen op bij in-beeld-komen (niet-numeriek blijft staan).
- Micro-interactions: buttons lift + pijl-shift + zachte gloed/shine; links underline draw-in; cards lift + schaduw.
- Hero: entrance-sequence bij load (mask/clip reveal + stagger).

## Atmosfeerlaag (dosering = intensiteit hierboven)
Één doorlopende, levende achtergrond achter de (transparante) secties, zodat boven en onder als
één ruimte voelen. Subtiel, nooit druk. Schaal mee met de intensiteit:
- **0** — vrijwel stil: alleen een haarfijn lijn-/gloed-accent. Geen deeltjes, geen grain. (bv. juridisch)
- **1** — rustige, traag driftende warme gloed (CSS radial-gradients, fixed). Geen canvas-deeltjes.
- **2** — gloed + een lichte **canvas-deeltjeslaag**: zwevende motes die met de scroll meebewegen
  (parallax per diepte + na-ijling: `scrollEased += (scrollY - scrollEased) * 0.12`), `lighter`-blend,
  DPR gecapt op 2, deeltjesaantal gecapt (~36–110). Optioneel filmgrain-overlay (soft-light ~3,5%).
- **3** — statement: WebGL-held (fluid mesh-gradient / particle-vortex / 3D / CRT-post-processing),
  full-screen of in de hero. Alleen voor studio/creatief/tech/portfolio.

### Hero-signature
Eén signature-motion-moment in de hero, passend bij de niche: **gladstrijkende laag die van links naar rechts over het beeld trekt en een strakke wand onthult**.
Voorbeelden per niche: barber = goud stof · restaurant = as/rook/bokeh · bloemist = pollen/blaadjes ·
bouw/architect = blueprint-lijnen die zich tekenen · tandarts/kliniek = schone rustige lijn ·
advocaat/notaris = haarfijn lijn-accent (bijna geen beweging = de signature) · bureau/tech = fluid shader.

### Frosted header
Sticky header wordt bij scrollen frosted (backdrop-filter: blur) + ~82% dekkend — schijnt nooit door.

## Performance & a11y (harde randvoorwaarden)
- Lighthouse 95+, geen CLS. will-change spaarzaam, opruimen na animatie.
- Canvas/WebGL: pauzeer buiten beeld (IntersectionObserver) én bij verborgen tab (visibilitychange).
  Cap DPR en deeltjesaantal; op kleine schermen lichter doseren (accu/GPU).
- prefers-reduced-motion: alle niet-essentiële beweging uit, geen parallax; deeltjes worden een
  statische scatter (of weg). Niets mag content verbergen als JS faalt.