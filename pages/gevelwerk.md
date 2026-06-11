# Gevelwerk -- blueprint v4.4
**Intent:** Dienstdetailpagina gericht op bouwbedrijven en huiseigenaren: leg gevelstuc en buitenafwerking uit met concrete belofte, voor-na beelden en offerte-CTA voor Stucq.

## Secties
1. **Pagina-hero** -- Context + belofte
   Copy: Gevelwerk & Buitenafwerking Haarlem – Vaste Prijs, Op Tijd Opgeleverd: dienstdetailpagina gericht op bouwbedrijven en huiseigenaren: leg gevelstuc en buitenafwerking uit met concrete belofte, voor-na beelden en offerte-cta.
   Component: Compacte hero
2. **Kern-inhoud** -- De inhoud die deze pagina moet leveren
   Copy: Concrete, scanbare inhoud in Vakkundig · Transparant · Betrouwbaar-toon.
   Component: Text / card-grid
3. **Bewijs of detail** -- Twijfel wegnemen
   Copy: Relevant bewijs of detail voor deze pagina.
   Component: Testimonial / lijst
4. **CTA** -- Doorzetten naar hoofdactie
   Copy: "Offerte aanvragen"
   Component: CTA-blok

## Responsive storyboard
| Breakpoint | Layout |
|---|---|
| 375px | 1 kolom, hero boven, CTA full-width |
| 768px | 2 kolommen mogelijk |
| 1024px+ | Volledige desktop layout |
Container: .container { width:100%; max-width:1280px; margin-inline:auto; padding-inline:clamp(1rem,4vw,2rem); }
Touch targets: minimaal 44x44px

## Klaar wanneer (uitvoerbare AC)
- [ ] pnpm build slaagt zonder fouten
- [ ] Op 375px: geen horizontale scroll, primaire CTA boven de vouw
- [ ] Op 1280px: layout correct
- [ ] grep -r 'TODO|PLACEHOLDER|lorem' src/ geeft geen resultaat
- [ ] Eén heldere primaire CTA (Offerte aanvragen)
- [ ] Inhoud sluit aan op het paginadoel
- [ ] Mobiel getest op 375px
- [ ] Tone of voice: Vakkundig · Transparant · Betrouwbaar

## Niet bouwen (out-of-scope)
- Geen testimonials tenzij er echte zijn (zie context/content-truth.md)
- Geen nep-statistieken of urgency-banners
- Geen blog/nieuwsbrief tenzij in sitemap
