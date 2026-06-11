# Tech Stack -- Stucq
KRITISCH: Claude Code bouwt PRECIES deze stack. Niet afwijken.

Framework: Astro 5.x
Stijlsysteem: Vanilla CSS + custom properties
Package manager: pnpm
Node: 22.x
Taal: TypeScript strict
Deployment: Cloudflare Pages
CMS/Content: Geen (statisch)
Formulieren: Cloudflare Pages Functions
Analytics: Plausible

## Mapstructuur
src/components/ src/layouts/ src/pages/ src/styles/tokens.css public/

## Tokens -> CSS
Refereer altijd als: var(--color-primary-default), var(--spacing-md)

## Responsive
Mobile-first. Test: 375px, 768px, 834px, 900px, 1024px, 1280px
Container: .container { width:100%; max-width:1280px; margin-inline:auto; padding-inline:clamp(1rem,4vw,2rem); }

## Verboden
- NIET: npm of bun mengen met pnpm
- NIET: extra dependencies zonder expliciete goedkeuring
- NIET: versie upgraden