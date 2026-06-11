# Over stucq -- blueprint v4.4
**Intent:** Identiteitspagina die persoonlijk vertrouwen opbouwt door het verhaal van Stucq te verankeren in aantoonbare feiten: werkgebied, Google-score, keurmerken en een nuchter vakmanschapsverhaal – zonder claims die niet bewezen worden.

## Secties
1. **Pagina-hero: Wie is Stucq** -- Bezoeker direct oriënteren: wie, wat, waar en sinds wanneer – geen ruimte voor twijfel over identiteit en bereik.
   Copy: Stucq is een stucadoorsbedrijf gevestigd in Noord-Holland, actief in Haarlem, Bloemendaal, Zandvoort en omgeving. Sinds 2020 zijn 50+ projecten afgerond – allemaal op tijd en in budget.
   Component: Split-layout hero – portretfoto of werkfoto links, kerngegevens (naam, regio, actief sinds 2020, werkgebied) rechts op lichte achtergrond in aardetinten
2. **Kerncijfers-band** -- In één oogopslag de feiten tonen die twijfel wegnemen: projecten, score, reviews en werkgebied.
   Copy: 50+ afgeronde projecten. 4,8 sterren op Google. 25+ geverifieerde reviews. Werkgebied tot 15 km rondom Haarlem.
   Component: Statistieken-band – vier icoon-getal-combinaties op één rij, neutrale achtergrond in aardetint
3. **Achtergrond en werkwijze** -- Het vakmanschapsverhaal vertellen met feiten en kwalificaties; laat zien waarom Stucq betrouwbaar is zonder vage claims.
   Copy: Stucq is opgericht in 2020 met één uitgangspunt: gevelwerk, binnenafwerking en microcement vloeren uitvoeren op vaste prijs, volgens planning. Elke opdracht wordt vooraf vastgelegd in een heldere prijsafspraak – geen verrassingen achteraf.
   Component: Tekst-beeld-blok – redactionele kolom links, werkomgevingsfoto rechts, geen decoratieve elementen
4. **Werkgebied** -- Bezoeker bevestigen dat Stucq actief is in zijn regio en welke plaatsen binnen bereik vallen.
   Copy: Stucq voert werk uit in Haarlem, Bloemendaal, Zandvoort en de directe omgeving tot 15 kilometer. Buiten dit werkgebied worden geen opdrachten aangenomen.
   Component: Kaart-blok – statische kaart met werkgebied-markering en plaatsnamenlijst ernaast
5. **Google-reviews bewijs** -- Sociale bewijskracht leveren met echte Google-score en reviewcount vóór elke CTA.
   Copy: 25+ opdrachtgevers beoordeelden Stucq met gemiddeld 4,8 sterren op Google. Lees de reviews via het Google-profiel van Stucq.
   Component: Review-band – Google-logo, sterrenscore, reviewteller en externe link naar Google-profiel; geen zelfgeschreven citaten
6. **Keurmerken en waarborg** -- Branchevereniging en garantie tonen als aanvullend kwaliteitsbewijs voor bouwbedrijven en particulieren.
   Copy: Stucq werkt volgens de normen van de branche en levert werk op met garantie. Keurmerken en waarborglogos worden getoond waar beschikbaar.
   Component: Logo-rij – horizontale rij keurmerk- en branchebadges op lichte achtergrond; lege placeholders indien logo nog niet beschikbaar
7. **Voor-na projectfoto's teaser** -- Visueel bewijs leveren van uitgevoerd werk in Haarlem en omgeving; bezoeker doorgeleiden naar het volledige projectoverzicht.
   Copy: Bekijk een selectie van afgeronde projecten in Haarlem en omgeving – gevelwerk, binnenafwerking en microcement vloeren, vastgelegd in voor-na beelden.
   Component: Foto-grid teaser – twee voor-na koppels naast elkaar, CTA-knop 'Bekijk afgeronde projecten' eronder
8. **Contactgegevens en openingstijden** -- Directe bereikbaarheidsinfo bieden zodat bouwbedrijven en huiseigenaren zonder tussenstap contact kunnen opnemen.
   Copy: Stucq is bereikbaar op 0681943404 en info@stucqafbouw.nl, maandag tot vrijdag van 7:00 tot 17:00. Spoed is mogelijk – reactie binnen 48 uur.
   Component: Contactblok – telefoon, e-mail en openingstijden in gestructureerde kolom, geen formulier
9. **CTA-band** -- Eén helder beslispad aanbieden: offerte aanvragen of bellen – geen keuzestress.
   Copy: Vrijblijvend – vaste prijs, reactie binnen 48 uur. Vraag direct een offerte aan of bel 0681943404.
   Component: CTA-band full-bleed – donkere aardetint achtergrond, primaire knop 'Offerte aanvragen' en secondaire tekstlink 'Bel direct'

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
- [ ] Aanspreek: u (formeel)
- [ ] Bewijs uitsluitend gebaseerd op beschikbaar materiaal: Google-reviews (25+, 4,8 sterren), voor-na projectfoto's, video's, keurmerken/branchevereniging, garantie/waarborg
- [ ] Geen verzonnen reviews, klantcitaten, namen of extra cijfers
- [ ] Geen speelse animaties, luxe-abstracte stijlelementen of full-bleed sfeeroverload
- [ ] Verboden zinsneden zijn niet gebruikt: geen 'Luxe afwerking', 'kunstzinnige creaties', 'droomproject', 'Uw vertrouwde partner', 'Welkom bij', 'Supercharge', 'Ontgrendel uw potentieel' of vage beloftes zonder bewijs
- [ ] Prijspad: uitsluitend maatwerk-offerte; geen vaste prijzen of pakketten vermeld
- [ ] Micro-garantie opgenomen: 'Vrijblijvend – vaste prijs, reactie binnen 48 uur'
- [ ] Werkgebied expliciet begrensd: Haarlem, Bloemendaal, Zandvoort en omgeving tot 15 km
- [ ] Tone of voice: Vakkundig · Transparant · Betrouwbaar

## Niet bouwen (out-of-scope)
- Geen testimonials tenzij er echte zijn (zie context/content-truth.md)
- Geen nep-statistieken of urgency-banners
- Geen blog/nieuwsbrief tenzij in sitemap
