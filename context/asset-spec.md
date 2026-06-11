# Asset Specificatie -- Stucq

## Status
Professionele foto's: Ja -- aangeleverd door klant
Logo: [CONFIRM: logo aanleveren als SVG + PNG]

## Formaten
Hero: AVIF primair, WebP fallback, 1920x1080px max
Sectie: AVIF/WebP, 1200x800px
Cards: AVIF/WebP, 600x400px
Logo/iconen: SVG
OG-image (social preview): 1200x630px -- [CONFIRM: definitieve OG-image] of auto-fallback (merknaam + tagline op merk-achtergrond)
Alle content-beelden via astro:assets (<Image>) voor automatische AVIF/WebP + maatvoering

## Bestandsnamen
hero-{sectie}.webp | {sectie}-{naam}.webp | logo.svg | logo-white.svg

## Mapstructuur
public/images/hero/ | public/images/sections/ | public/icons/

## Lazy loading
Boven-de-voud: fetchpriority="high", NIET lazy
Beneden-de-voud: loading="lazy" decoding="async"
Hero: <link rel="preload" as="image"> in head

## Demo-beelden (alleen voor PREVIEW/testbuilds -- NIET voor productie)
De demo-beelden STAAN AL KLAAR in public/images/ (AI-gegenereerd, consistente stijl: zelfde vakman, aardetinten, Haarlemse architectuur).
- Gebruik UITSLUITEND deze beelden; haal GEEN Pexels/Unsplash/stockfoto's op.
- De exacte slot-mapping (bestandsnaam -> sectie) staat in public/images/README.md.
- Koppel via astro:assets (<Image>/<Picture>): AVIF+WebP, expliciete width/height, hero fetchpriority="high", de rest lazy.
- Markeer ALLES als demo: data-demo="true" op elk beeld; de DEMO-waarschuwing in public/images/README.md blijft staan.
- PRODUCTIE: vervang demo's altijd door echte foto's van de klant vóór livegang (zie house/anti-patterns).
