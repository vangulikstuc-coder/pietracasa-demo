# Projecten -- blueprint v4.4
**Intent:** Bewijspagina: overtuig bouwbedrijven en huiseigenaren in Haarlem met voor-na fotogalerij, drone-video's en meetbare feiten dat Stucq elk project op tijd en in budget oplevert – en maak de stap naar een offerte aanvragen vanzelfsprekend.

## Secties
1. **Paginahero – Projectenoverzicht** -- Stel direct de bewijsbelofte vast: 50+ afgeronde projecten in Haarlem, allemaal op tijd en in budget. Geef de bezoeker vertrouwen dat er iets concreets te zien is.
   Copy: 50+ afgeronde projecten in Haarlem en omgeving – elk op tijd en in budget opgeleverd. Bekijk het werk zoals het is: voor, tijdens en na.
   Component: Hero-banner halve hoogte – achtergrond voor-na splitview projectfoto Haarlem, H1 + twee feitenlabels (50+ projecten · 4,8 Google-score)
2. **Bewijs-band – Kerncijfers** -- Anker de betrouwbaarheid met drie controleerbare feiten voordat de bezoeker door de galerij scrolt.
   Copy: 4,8 sterren op Google · 25+ geverifieerde reviews · Werkgebied Haarlem, Bloemendaal, Zandvoort en omgeving. Geen gemiste deadlines, geen meerwerk zonder overleg.
   Component: Stat-trio-band – drie iconblokken naast elkaar (sterren, vinkje, kaartpin) in aardetint achtergrond
3. **Filteerbare Projectgalerij – Voor-Na** -- Lever het primaire bewijs: voor-na projectfoto's gefilterd op diensttype (gevelwerk, binnenafwerking, microcement vloeren). Elk project toont locatie en opleverjaar.
   Copy: Kies een categorie en zie het verschil per project. Elke kaart toont de locatie in Haarlem of omgeving en het jaar van oplevering.
   Component: Filterbare foto-galerij – voor-na kaarten in grid (tabbladen per dienst), locatie-label en jaar zichtbaar op kaart
4. **Uitgelicht Project – Dronebeelden** -- Gebruik drone-video als aanvullend bewijsmiddel om schaalgrootte en kwaliteit van gevelwerk aantoonbaar te maken.
   Copy: Dronebeelden geven u een volledig beeld van het uitgevoerde gevelwerk – van fundering tot nok. Zo ziet u precies wat Stucq oplevert.
   Component: Video-embed blok – ingeslikte drone-video naast feitenlabel (project, dienst, oppervlak, oplevermaand)
5. **Projectkaarten per Dienst** -- Groepeer afgeronde projecten per dienstcategorie zodat bouwbedrijven en huiseigenaren direct herkennen wat voor hun situatie relevant is.
   Copy: Gevelwerk in Bloemendaal, binnenafwerking in Haarlem-Noord, microcement vloeren in Zandvoort – elk project gedocumenteerd met foto's en opleverdatum.
   Component: Dienstkaart-trio – drie kaarten (gevelwerk, binnenafwerking, microcement) elk met voorbeeldfoto, projecttelling en korte feitenzin
6. **Google-Reviews Selectie** -- Vertaal de 4,8-sterren Google-score naar herkenbare bewoording van echte opdrachtgevers, direct na het beeldmateriaal.
   Copy: 4,8 sterren op Google, beoordeeld door 25+ opdrachtgevers in Haarlem en omgeving. Lees wat bouwbedrijven en huiseigenaren zeggen over planning, prijs en afwerking.
   Component: Review-slider – drie reviewtegels naast elkaar, sterren zichtbaar, naam en maand van plaatsing, link naar Google-profiel
7. **Op Tijd en In Budget – Trackrecord** -- Adresseer de kern-angst (kosten en deadlines) direct met een feitelijk trackrecord-blok; geen vage belofte maar een aantoonbaar resultaat.
   Copy: Elk project dat Stucq heeft aangenomen sinds 2020 is binnen het afgesproken budget en op de afgesproken datum opgeleverd – dat is geen claim, dat zijn de feiten in de galerij hierboven.
   Component: Statement-band full-bleed – donkere aardetint, centraal feitenstatement + twee iconen (kalender vinkje, budget vinkje)
8. **Keurmerken en Branchelidmaatschap** -- Toon beschikbare keurmerken of branchevereniging-lidmaatschappen als extra verificatielaag naast de Google-score.
   Copy: Stucq werkt conform de eisen van de branche. Keurmerken en lidmaatschappen zijn op aanvraag beschikbaar en worden getoond zodra geverifieerd.
   Component: Logo-rij – horizontale balk met keurmerklabels of tijdelijke plaatshouder tekst indien certificering nog niet bevestigd
9. **CTA-band – Offerte Aanvragen** -- Sluit de pagina af met één duidelijk beslispad: offerte aanvragen of direct bellen. Herhaal de micro-garantie om de laatste aarzeling weg te nemen.
   Copy: Heeft u een project in Haarlem of omgeving? Vraag een vrijblijvende offerte aan – vaste prijs, reactie binnen 48 uur. Of bel direct: 0681943404.
   Component: CTA-band full-bleed – primaire knop 'Offerte aanvragen', secundaire tekst-link 'Bel direct', micro-garantieregel eronder in kleinere tekst

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
- [ ] Gebruik uitsluitend bewezen feiten: 25+ Google-reviews, 4,8 sterren, 50+ projecten in Haarlem sinds 2020
- [ ] Geen verzonnen reviews, namen, cijfers of klantlogo's
- [ ] Aanspreking consequent met 'u' (formeel)
- [ ] Geen uitroeptekens
- [ ] Verboden zinsneden nooit gebruiken: 'Luxe afwerking', 'kunstzinnige creaties', 'droomproject', 'we zorgen ervoor dat je gelukkig bent', 'Uw vertrouwde partner', 'In de snelle wereld van vandaag', 'Supercharge', 'Ontgrendel uw potentieel', 'Welkom bij'
- [ ] Geen speelse animaties of luxe-abstracte stijlelementen
- [ ] Prijzen altijd op maat – geen vaste tarieven publiceren
- [ ] Keurmerken alleen tonen indien beschikbaar en geverifieerd
- [ ] Visuele modus: gebalanceerd – aardetinten, voor-na fotogalerij en drone-beelden als primair bewijsmiddel
- [ ] Tone of voice: Vakkundig · Transparant · Betrouwbaar

## Niet bouwen (out-of-scope)
- Geen testimonials tenzij er echte zijn (zie context/content-truth.md)
- Geen nep-statistieken of urgency-banners
- Geen blog/nieuwsbrief tenzij in sitemap
