# Binnenafwerking -- blueprint v4.4
**Intent:** Dienstdetailpagina voor binnenafwerking en renovatie: onderscheid ten opzichte van gevelwerk, eigen voor-na projectbeelden, vaste prijsbelofte en een directe offerte-CTA voor bouwbedrijven en huiseigenaren in Haarlem.

## Secties
1. **Hero – Binnenafwerking** -- Pagina direct kwalificeren als binnenafwerking-specialisme en vertrouwensanker leggen met één feitelijk statement en primaire CTA.
   Copy: Wanden en plafonds netjes afgewerkt in Haarlem – op tijd en in budget. Vaste prijs, geen verrassingen: zo werkt Stucq bij elke renovatie en nieuwbouwoplevering.
   Component: Hero split-screen – links voor-na projectfoto binnenwerk, rechts headline + micro-garantiebadge + primaire CTA-knop
2. **Probleemherkenning – Angst en oplossing** -- De kernanxst van de bezoeker benoemen (onduidelijke kosten, gemiste deadlines) en direct koppelen aan de concrete oplossing van Stucq.
   Copy: Onduidelijke offertes en aannemers die deadlines niet halen: twee klachten die Stucq systematisch elimineert met een vaste prijsafspraak en een aantoonbaar trackrecord van 50+ projecten in Haarlem.
   Component: Statement-band tweekoloms – links probleemtekst, rechts oplossingsopsomming met iconen (vaste prijs / deadline / bewijs)
3. **Dienstaanbod Binnenafwerking** -- De specifieke binnenafwerkingsdiensten helder en concreet presenteren, elk met een meetbare belofte – geen vaag taalgebruik.
   Copy: Van gladstrijken en spuitwerk tot plafondafwerking en herstelwerk: elke deeldienst wordt uitgevoerd op basis van een vaste prijsafspraak en een vastgestelde opleverdatum.
   Component: Dienstkaart-grid 3-koloms – kaart per specialisatie (plafondafwerking, muurafwerking, gladstrijken, spuitwerk, herstelwerk, decoratief stucwerk) met icoon en één-regel belofte
4. **Voor-na Projectbeelden** -- Vakmanschap bewijzen met eigen projectfoto's uit Haarlem; bewijs staat centraal, geen sfeeroverload.
   Copy: Hieronder een selectie uit 50+ afgeronde binnenafwerkingsprojecten in Haarlem en omgeving – elk project opgeleverd op de afgesproken datum en binnen het vastgestelde budget.
   Component: Voor-na fotogalerij – slider of raster met voor/na toggle per project, locatielabel (bijv. 'Haarlem-Noord, 2024')
5. **Sociaal bewijs – Google-reviews** -- 4,8-sterren Google-score en 25+ geverifieerde reviews prominent tonen vóór de eerste harde CTA om de vertrouwensdrempel te verlagen.
   Copy: 25+ geverifieerde Google-reviews, gemiddeld 4,8 sterren – van bouwbedrijven en huiseigenaren in Haarlem die Stucq hebben ingeschakeld voor renovatie en nieuwbouw.
   Component: Reviewband – sterrenscore groot centraal, drie reviewkaarten naast elkaar met geverifieerde tekst en datum, link naar volledig Google-profiel
6. **Werkwijze – Stap voor stap** -- Transparantie bieden over het proces van offerte tot oplevering zodat de bezoeker precies weet wat hij kan verwachten.
   Copy: Van eerste contact tot oplevering: Stucq werkt in vier vaste stappen met een vooraf overeengekomen prijs en planning – zodat u niet voor verrassingen staat.
   Component: Stappenblok horizontaal 4-stappen – icoon + staptitel + één-regel omschrijving (1. Opname ter plaatse / 2. Vaste offerte binnen 48u / 3. Uitvoering op afgesproken datum / 4. Oplevering en controle)
7. **Werkgebied & Beschikbaarheid** -- Geografische dekking en bereikbaarheid verduidelijken voor bouwbedrijven en huiseigenaren in de regio.
   Copy: Stucq voert binnenafwerkingsprojecten uit in Haarlem, Bloemendaal, Zandvoort en omgeving tot 15 km. Bereikbaar op werkdagen van 07:00 tot 17:00; spoedopdrachten mogelijk binnen 48 uur.
   Component: Info-band tweeledig – links regiokaart of tekstblok met locaties, rechts contactgegevens en openingstijden
8. **Garanties & Keurmerken** -- Resterende bezwaren wegnemen met concrete garantie-uitingen en beschikbare keurmerken of branchevereniging.
   Copy: Elke opdracht wordt uitgevoerd met garantie op het geleverde werk en een vaste prijs die na de offerte niet wijzigt – keurmerken en branchevereniging zijn op aanvraag beschikbaar.
   Component: Garantiebalk met iconen – drie garantie-iconen (vaste prijs / op tijd / vakgarantie) + keurmerk-logo's indien beschikbaar
9. **CTA – Offerte aanvragen** -- Eén helder beslispad bieden: offerte aanvragen of direct bellen – geen keuzestress, micro-garantie herhaald.
   Copy: Vraag een vrijblijvende offerte aan voor uw binnenafwerkingsproject in Haarlem. Reactie binnen 48 uur, vaste prijs – bel direct op 06 81 94 34 04 of stuur een bericht via het formulier.
   Component: CTA-band full-bleed aardetint – prominente offerte-knop, telefoonnummer klikbaar, micro-garantietekst ('Vrijblijvend – vaste prijs, reactie binnen 48 uur') eronder

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
- [ ] Aanspreek: u (formeel) – consequent toegepast in alle copy
- [ ] Visuele modus: gebalanceerd – aardetinten, voor-na fotografie centraal, geen full-bleed sfeeroverload, geen speelse animaties
- [ ] Bewijs: uitsluitend feitelijk bewijs gebruikt (25+ Google-reviews, 4,8 sterren, 50+ projecten, voor-na beelden, keurmerken indien beschikbaar)
- [ ] CTA-strategie: primaire CTA na bewijssecties, micro-garantie 'Vrijblijvend – vaste prijs, reactie binnen 48 uur' herhaald bij elke CTA
- [ ] Verboden zinsneden: geen van de verboden frasen gebruikt (geen 'luxe afwerking', 'droomproject', 'uw vertrouwde partner' e.d.)
- [ ] Prijspad: geen vaste prijzen vermeld – maatwerk-offerte is het enige prijspad
- [ ] Sectiecount: 9 secties met gedifferentieerde opbouw passend bij dienstdetailpagina
- [ ] Tone of voice: Vakkundig · Transparant · Betrouwbaar

## Niet bouwen (out-of-scope)
- Geen testimonials tenzij er echte zijn (zie context/content-truth.md)
- Geen nep-statistieken of urgency-banners
- Geen blog/nieuwsbrief tenzij in sitemap
