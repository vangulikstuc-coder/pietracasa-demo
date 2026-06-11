# Project: Stucq
**Archetype:** Stucadoor (trades-plasterer) | **Platform:** Maatwerk (custom code) | **Build-niveau:** Premium build
**Primair doel:** 📋 Offerte aanvragen | **Confidence:** 100% | **Build-readiness:** 87/100 (klaar)

> BUILD-INSTRUCTIE: Dossier is volledig genoeg — bouw direct; behandel [CONFIRM:]-markers als enige aannames.

## Build-contract (lees dit eerst)
- Premium custom build (Astro 5.x + GSAP + Lenis) in ./site — géén WordPress/Webflow. Start met prompts/build-premium.md; house/{design-principles,motion,tech-stack}.md + context/tech-stack.md zijn leidend.
- Eén primaire CTA overal: "Offerte aanvragen". Secundair: "Bel voor advies".
- Tone of voice: Vakkundig · Transparant · Betrouwbaar (zie context/brand-voice.md).
- NIET hallucineren: alles met [CONFIRM: …] of in open-questions.md is niet bevestigd.
- Aannames staan in context/assumptions.json (assumed = voorlopig, géén feit).
- Mobile-first 375px, WCAG AA. No-go: Speelse of luxe-abstracte stijl.

## Non-goals (out of scope)
Geen speelse animaties, vage beloftes zonder bewijs, of luxe-taal die niet aansluit bij de werkelijkheid

## Positionering
Vaste prijs, geen verrassing achteraf — "50+ projecten in Haarlem. Allemaal op tijd en in budget afgeleverd."
U weet vooraf wat het kost – en Stucq houdt zich daaraan. Bekijk de voor-na resultaten en vraag vrijblijvend een offerte aan.

## Doelgroep & conversie
Persona: Bouwbedrijven, vastgoedprojecten en particuliere huiseigenaren in de regio Haarlem en omgeving die gevelwerk, binnenafwerking of renovatiewerk nodig hebben. Ze zoeken nu een stucadoor omdat ze in een actieve bouwfase zitten (nieuwbouw of verbouwing), maar stuiten op twijfel: onbekende kwaliteit, onduidelijke prijzen of bangheid dat afspraken niet nagekomen worden. Hun grootste blokkade is geen duidelijk bewijs van betrouwbaarheid en transparante kosten.
Kernangst: Dat het duur wordt en dat we de deadline niet…
Bezwaren om weg te nemen: Wat gaat dit kosten? · Komen ze de afspraak na? · Leveren ze netjes en op tijd?
Vertrouwen via: Voor-na projectfoto’s, Reviews + Google-score, Vaste prijsafspraak, KvK & verzekerd  (details: context/conversion.json)

## Acceptatie (Definition of Done)
- Elke pagina: precies één primaire CTA; bewijs boven de fold.
- Hero benoemt de uitkomst, niet alleen de dienst.
- Per-pagina acceptatiecriteria in pages/*.md gehaald.

## Blokkerende punten
- Geen blokkers.

## Context-bestanden
- @context/tech-stack.md -- ALTIJD lezen (stack)
- @context/content-truth.md -- ALTIJD lezen (verboden content)
- @house/components.md -- ALTIJD lezen (component states)
- @context/design-tokens.json -- semantische tokens
- @context/brand-voice.md -- tone
- @context/positioning.md -- positionering
- @context/a11y-spec.md -- toegankelijkheid
- @context/tech-constraints.md -- performance targets
- @context/asset-spec.md -- afbeeldingen
- @context/microcopy.md -- UI-teksten
- @context/contact.json -- echte telefoon/e-mail/adres/boekingslink voor alle CTA’s

## Huisstijlregels
- @house/design-principles.md
- @house/anti-patterns.md
- @house/motion.md

## Auto-ladende regels (.claude/rules/)
- tokens.md -- token-gebruik regels
- components.md -- component-regels
- no-touch.md -- verboden bestanden

## Bouw-volgorde
1. @prompts/build-home.md -> @pages/home.md
2. @prompts/build-offerte.md -> @pages/offerte.md
3. @prompts/build-projecten.md -> @pages/projecten.md

## Bij blokkering
AskUserQuestion met vraag + 2-4 opties. Ga NOOIT verder op basis van aanname.