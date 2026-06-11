# Home -- blueprint v4.4
**Intent:** Eerste indruk: bewijs vakmanschap en betrouwbaarheid direct, verlaag twijfel over kosten en planning, stuur naar offerte aanvragen of projecten bekijken.

## Secties
1. **Hero** -- Direct vertrouwen wekken via bewijs en de primaire CTA activeren – benoem de pijn (kosten, deadlines) en lever meteen de tegenclaim.
   Copy: Stucadoor in Haarlem – vaste prijs, aantoonbaar op tijd. 50+ afgeronde projecten in Haarlem en omgeving sinds 2020, allemaal binnen budget en planning opgeleverd.
   Component: Hero full-bleed – splitlayout: links voor-na projectfoto Haarlem, rechts kopregel + subkop + CTA-knop 'Offerte aanvragen' + micro-garantie tekst 'Vrijblijvend – reactie binnen 48 uur'
2. **Bewijs-band** -- Google-score en reviewaantal prominent tonen vóór de CTA om de vertrouwensdrempel te verlagen.
   Copy: 4,8 sterren op Google – 25+ geverifieerde reviews van bouwbedrijven en huiseigenaren in de regio Haarlem. Alle 50+ projecten op tijd en in budget afgeleverd.
   Component: Stat-band – drie cijferblokken naast elkaar (4,8 ★ Google, 25+ reviews, 50+ projecten) met keurmerk-/branchevereniging-logo's eronder
3. **Probleem naar oplossing** -- Herken de concrete angst (onduidelijke kosten, gemiste deadlines) en koppel die direct aan de Stucq-aanpak als feitelijk antwoord.
   Copy: Onduidelijke kosten en uitloop zijn de twee redenen waarom opdrachtgevers afhaken. Stucq werkt uitsluitend op vaste prijs en legt elke afspraak schriftelijk vast vóór de start.
   Component: Twee-kolom contrast-blok – links probleemkolom (icoon + tekst), rechts oplossingskolom (icoon + tekst), aardetint achtergrond
4. **Diensten** -- Drie kernservices helder en concreet presenteren, elk met een meetbare belofte – geen vage omschrijvingen.
   Copy: Gevelwerk, binnenafwerking en microcement vloeren – elk uitgevoerd op vaste prijs en binnen de afgesproken bouwtermijn. Vraag per dienst een aparte offerte aan.
   Component: Beeld-gedreven dienstkaart-trio – drie kaarten naast elkaar, elke kaart met projectfoto, dienstnaam, één-zin belofte en secundaire CTA 'Meer informatie'
5. **Projectbewijs / Voor-na galerij** -- Visueel bewijs leveren via voor-na projectfoto's en drone-beelden uit Haarlem om kwaliteit aantoonbaar te maken.
   Copy: Bekijk afgeronde projecten in Haarlem, Bloemendaal en Zandvoort – voor-na foto's en drone-opnames van elk type werk dat Stucq uitvoert.
   Component: Voor-na fotogalerij-grid – 2×3 kaarten met toggle voor/na, zachte CTA 'Bekijk alle afgeronde projecten' onderaan
6. **Werkwijze** -- Het proces van offerte tot oplevering transparant maken in stappen, zodat de opdrachtgever weet wat te verwachten.
   Copy: Van eerste contact tot oplevering verloopt elk project via vier vaste stappen – zonder verrassingen in planning of prijs. U ontvangt altijd een schriftelijke bevestiging per stap.
   Component: Stappen-blok horizontaal – vier genummerde stappen met icoon en korte toelichting (Aanvraag → Offerte → Uitvoering → Oplevering)
7. **Garanties & Keurmerken** -- Resterende twijfels wegnemen met concrete garantie-uitspraken en eventuele branchevereniging-aansluiting.
   Copy: Stucq levert met vaste prijsgarantie en schriftelijke opleveringsafspraak. Keurmerken en branchevereniging-lidmaatschappen worden hier getoond zodra beschikbaar.
   Component: Garantie-icon-rij – drie of vier icoonblokken (vaste prijs, op tijd, schriftelijke afspraak, keurmerk-placeholder) op lichte aardetint achtergrond
8. **Reviews** -- Sociale bewijskracht concreet maken met echte Google-reviewcijfers en de 4,8-sterrenscore zichtbaar herhalen direct vóór de sluitende CTA.
   Copy: 25+ geverifieerde Google-reviews, gemiddeld 4,8 sterren – van particulieren en bouwbedrijven die Stucq inschakelden voor gevelwerk, binnenafwerking en microcement in Haarlem en omgeving.
   Component: Review-kaart-carrousel – drie reviewkaarten zichtbaar tegelijk, Google-logo + sterrenscore, geen verzonnen namen of citaten
9. **CTA-band / Contactsectie** -- Eén helder beslispad bieden: offerte aanvragen of direct bellen – geen keuzestress, micro-garantie herhalen.
   Copy: Vraag vrijblijvend een offerte aan – u ontvangt binnen 48 uur een reactie met vaste prijsopgave. Liever direct contact: bel 0681943404, ma–vr 7:00–17:00.
   Component: CTA-band full-bleed aardetint – kopregel, micro-garantie tekst, primaire knop 'Offerte aanvragen', secundair telefoonnummer als klikbaar link

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
- [ ] Aanspreek: u (formeel) – consequent in alle copy
- [ ] Bewijs uitsluitend gebaseerd op beschikbare feiten: 4,8 Google-score, 25+ geverifieerde reviews, 50+ projecten in Haarlem sinds 2020
- [ ] Geen verzonnen prijzen, reviews, namen of klantlogos – maatwerk-offerte is het enige prijspad
- [ ] Verboden zinsneden nooit gebruiken: 'Luxe afwerking', 'kunstzinnige creaties', 'droomproject', 'uw vertrouwde partner', 'Welkom bij', 'Supercharge', 'Ontgrendel uw potentieel', 'In de snelle wereld van vandaag'
- [ ] Visuele modus: gebalanceerd – aardetinten, voor-na projectfoto's en drone-beelden als primair bewijsmateriaal, iconen toegestaan voor werkwijze en garanties
- [ ] Geen speelse animaties of luxe-abstracte stijlelementen
- [ ] Micro-garantie 'Vrijblijvend – vaste prijs, reactie binnen 48 uur' herhalen bij elke CTA-plaatsing
- [ ] Keurmerken en branchevereniging-logo's tonen indien beschikbaar – geen placeholders presenteren als echt bewijs
- [ ] Primaire CTA 'Offerte aanvragen' geplaatst na eerste bewijs (bewijs-band); zachte stap 'Bekijk afgeronde projecten' als secundaire CTA in hero en galerij
- [ ] Tone of voice: Vakkundig · Transparant · Betrouwbaar

## Niet bouwen (out-of-scope)
- Geen testimonials tenzij er echte zijn (zie context/content-truth.md)
- Geen nep-statistieken of urgency-banners
- Geen blog/nieuwsbrief tenzij in sitemap
