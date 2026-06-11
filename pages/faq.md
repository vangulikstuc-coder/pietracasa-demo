# Faq -- blueprint v4.4
**Intent:** Bezwaarpagina: beantwoord de meest voorkomende vragen over vaste prijs, doorlooptijd, werkgebied en garantie – verlaag twijfels bij overwogen beslissers vlak voor de offertestap voor Stucq.

## Secties
1. **Pagina-hero** -- Context
   Copy: Veelgestelde Vragen – Kosten, Planning en Werkwijze bij Stucq: antwoord op je vragen.
   Component: Compacte hero
2. **FAQ (gegroepeerd)** -- Vragen beantwoorden
   Copy: Vragen gegroepeerd per thema; bezwaren eerst.
   Component: Accordion
3. **Nog een vraag?** -- Route naar contact
   Copy: Korte CTA naar contact voor overige vragen.
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
