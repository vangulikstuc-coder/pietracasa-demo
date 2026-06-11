# Technische Constraints -- Stucq
Numerieke targets. Claude Code verifieert hierop.

## Core Web Vitals (75ste percentiel)
LCP: <= 2.5s (ideaal <= 1.8s)
INP: <= 200ms
CLS: <= 0.1
TTFB: <= 800ms

## JavaScript budget
Initieel: <= 170KB gzipped
Per route: <= 50KB
Critical path: <= 14KB

## Afbeeldingen
Formaten: AVIF primair, WebP fallback
VERPLICHT via astro:assets (<Image> / getImage) -- nooit kale <img> voor content-beelden
Hero (LCP): fetchpriority="high", NIET lazy
Explicit width + height (voorkomt CLS)
Beneden-de-voud: loading="lazy" decoding="async"

## Fonts
Self-hosted via Fontsource -- GEEN externe Google Fonts CDN (privacy + performance)
font-display: swap
Kritieke weight(s) preloaden; subset naar Latin

## SEO & head (standaard op ELKE pagina)
Structured data: JSON-LD per archetype (bv. LocalBusiness / VeterinaryCare) met NAW, geo, openingstijden
Open Graph: og:title, og:description, og:image (1200x630), og:url, og:type
Twitter: twitter:card = summary_large_image
Canonical per pagina; sitemap.xml via @astrojs/sitemap; public/robots.txt met sitemap-verwijzing

## Bouwkwaliteit (hard, Claude Code verifieert)
Spacing: uitsluitend de spacing-schaal uit design-tokens.json (geen ad-hoc px-marges)
Uitlijning: vast grid + consistente verticale ritmiek; secties/kaarten netjes uitgelijnd
Iconen: een samenhangende SVG-iconenset (geen emoji, geen lege placeholder-vlakken)
Responsive: getest op 375/768/1024/1280/1440px met aantoonbaar correcte reflow
States: hover/focus-visible/active/disabled/loading/empty op elk interactief element
Koppen: overflow-wrap:break-word + hyphens:auto (lange NL-samenstellingen zoals "Bloemenbezorging" mogen nooit overflow geven)
Geen horizontale overflow op 320-375px (geen vaste brede px-breedtes, geen 100vw, geen niet-afbrekende lange woorden)
Overlay/drawer/modal (position:fixed) NOOIT nesten in een element met backdrop-filter/filter/transform -- dat maakt een containing block en breekt de positionering; plaats op body-niveau

## Lighthouse targets
Performance >= 90 | Accessibility >= 95 | Best Practices >= 95 | SEO >= 95

## Verificatie
npx lighthouse http://localhost:3000 -- score >= 90 performance
npx axe http://localhost:3000 -- 0 kritieke fouten
