# Offerte -- blueprint v4.4
**Intent:** Primaire conversiepagina: verwijder twijfel over kosten en planning vóórdat de bezoeker het formulier invult. Toon micro-garantie en bewijsmateriaal direct naast het contactformulier – één beslispad, geen keuzestress.

## Secties
1. **Pagina-header met micro-garantie** -- Stel direct de verwachting: vrijblijvend, vaste prijs, reactie binnen 48 uur – geen verrassingen achteraf.
   Copy: Offerte aanvragen – vrijblijvend en binnen 48 uur reactie. Stucq werkt uitsluitend met vaste prijsafspraken: u weet voor aanvang exact wat het kost en wanneer het klaar is.
   Component: tekst-header met drie garantie-icoontjes (vrijblijvend / vaste prijs / 48u reactie) op één rij
2. **Bewijs-strip boven formulier** -- Neem de vertrouwensdrempel weg met harde cijfers vóórdat de bezoeker het formulier ziet.
   Copy: 4,8 sterren op Google – 25+ geverifieerde reviews. 50+ afgeronde projecten in Haarlem en omgeving sinds 2020, allemaal op tijd en in budget opgeleverd.
   Component: smalle bewijsbalk – Google-sterren links, projectteller midden, keurmerk/branchevereniging rechts (tonen indien beschikbaar)
3. **Formulier met contextuele garantie** -- Hoofddoel van de pagina: offerte aanvragen zo eenvoudig mogelijk maken met minimale velden en garantietekst direct naast de knop.
   Copy: Vul onderstaand formulier in – wij nemen binnen 48 uur contact met u op voor een vrijblijvende afspraak op locatie. Geen offerte zonder dat u akkoord bent met de aanpak.
   Component: tweekoloms-layout: formulier links (naam, telefoon, e-mail, type werk, omschrijving, postcode) – garantieblok rechts met drie icoontjes en micro-copy
4. **Of bel direct** -- Geef een alternatief beslispad voor bezoekers die liever direct bellen – geen drempel, geen keuzestress.
   Copy: Liever direct contact? Bel 0681 943 404 – bereikbaar maandag t/m vrijdag 7:00–17:00. Spoed mogelijk binnen 48 uur.
   Component: smalle cta-band met telefoonnummer groot en openingstijden klein, aardetint achtergrond
5. **Waarvoor vraagt u een offerte aan** -- Help de bezoeker herkennen welk werk van toepassing is en benoem de concrete belofte per dienst – neemt onduidelijkheid weg.
   Copy: Gevelwerk, binnenafwerking of microcement vloeren – voor elk type werk ontvangt u een vaste prijs en een heldere planning voor aanvang. Geen open eindjes.
   Component: dienst-kaart-trio – drie kaarten naast elkaar, elk met dienstnaam, één-regel-belofte en icoon
6. **Zo verloopt het traject** -- Verwijder de onzekerheid over het proces: laat stap voor stap zien wat er na het invullen van het formulier gebeurt.
   Copy: Van eerste contact tot oplevering werkt Stucq volgens een vaste werkwijze – u weet bij elke stap waar u aan toe bent en wat de volgende stap is.
   Component: horizontale stappenrij – 4 stappen (aanvraag → afspraak op locatie → vaste-prijs offerte → uitvoering & oplevering), genummerd met icoontjes
7. **Bewijs: afgeronde projecten in Haarlem** -- Versterk de beslissing met visueel bewijs: voor-na fotoparen uit de eigen regio bevestigen dat de belofte wordt nagekomen.
   Copy: Hieronder ziet u een selectie uit 50+ afgeronde projecten in Haarlem en omgeving. Elk project is op tijd en in budget opgeleverd – de foto's bewijzen het.
   Component: voor-na foto-duo's – twee projectparen naast elkaar met locatielabel (Haarlem / omgeving), zachte zachte cta-link 'Bekijk alle afgeronde projecten'
8. **Google-reviews** -- Laat 25+ geverifieerde klantbeoordelingen het vertrouwen completeren – kort voor de afsluitende CTA.
   Copy: 25+ geverifieerde Google-reviews met een gemiddelde van 4,8 sterren. Lees wat bouwbedrijven en huiseigenaren in Haarlem zeggen over onze werkwijze en oplevering.
   Component: review-kaarten-rij – drie kaarten zichtbaar (naam, beoordeling, stekker-citaat), link naar Google-profiel
9. **Afsluitende CTA-band** -- Geef de bezoeker die de pagina heeft doorgelopen een laatste, directe uitnodiging om de aanvraag te voltooien.
   Copy: Klaar om een offerte aan te vragen? Vrijblijvend, vaste prijs, reactie binnen 48 uur. Werkgebied: Haarlem, Bloemendaal, Zandvoort en omgeving tot 15 km.
   Component: cta-band full-bleed aardetint – knop 'Offerte aanvragen' groot, telefoonnummer secundair eronder

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
- [ ] Aanspreking uitsluitend met 'u' (formeel) door de gehele pagina
- [ ] Micro-garantie (vrijblijvend / vaste prijs / 48u reactie) zichtbaar in header én naast het formulier
- [ ] Bewijs-strip met 4,8 Google-sterren en 25+ reviews geplaatst vóór het formulier
- [ ] Formulier bevat minimale velden: naam, telefoon, e-mail, type werk, omschrijving, postcode
- [ ] Geen prijzen of tarieven vermeld – maatwerk-offerte is het enige prijspad
- [ ] Uitsluitend bewijs gebruikt dat in de input is bevestigd – geen verzonnen reviews, namen of cijfers
- [ ] Visuele stijl: aardetinten, strak, professioneel – geen speelse animaties of luxe-abstracte elementen
- [ ] Verboden zinsneden zijn niet gebruikt: geen 'Luxe afwerking', 'kunstzinnige creaties', 'droomproject', 'Uw vertrouwde partner', 'Welkom bij'
- [ ] Één beslispad: formulier invullen of direct bellen – geen keuzestress
- [ ] Tone of voice: Vakkundig · Transparant · Betrouwbaar

## Niet bouwen (out-of-scope)
- Geen testimonials tenzij er echte zijn (zie context/content-truth.md)
- Geen nep-statistieken of urgency-banners
- Geen blog/nieuwsbrief tenzij in sitemap
