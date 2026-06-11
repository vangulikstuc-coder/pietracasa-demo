# Contact -- blueprint v4.4
**Intent:** Contactpagina voor directe bereikbaarheid: telefoonnummer, e-mail, openingstijden en werkgebied overzichtelijk gepresenteerd als alternatief pad voor bezoekers die niet via het offerteformulier willen — vertrouwen bevestigen tot op het laatste contactmoment.

## Secties
1. **Paginaheader – Direct contact** -- Oriënteer de bezoeker onmiddellijk: dit is de kortste weg naar Stucq. Toon het telefoonnummer dominant en stel verwachtingen over reactietijd.
   Copy: Bereik Stucq direct via telefoon of e-mail — reactie binnen 48 uur, ook op offerteaanvragen. Ma–vr 7:00–17:00 beschikbaar; spoed bespreekbaar.
   Component: paginaheader — smal, aardetint achtergrond, telefoonnummer 0681943404 als prominent klikbaar element naast paginatitel
2. **Contactmiddelen – Twee paden** -- Bied bel- en e-mailoptie naast elkaar aan zonder keuzestress; voeg openingstijden en spoedvermelding toe als feitelijke zekerheid.
   Copy: Bel direct: 0681943404 of mail naar info@stucqafbouw.nl. Buiten kantoortijden? Laat een bericht achter — u ontvangt binnen 48 uur een reactie.
   Component: card-duo — twee kaarten naast elkaar: één bel-kaart met klikbaar nummer en icoon, één e-mailkaart met adres en icoon; openingstijden als tekstblok eronder
3. **Contactformulier – Alternatief pad** -- Bied een laagdrempelig formulier voor bezoekers die liever schrijven dan bellen; micro-garantie reduceert drempel.
   Copy: Vul hieronder uw naam, telefoonnummer en een korte omschrijving van het werk in. Vrijblijvend — vaste prijs, reactie binnen 48 uur.
   Component: contactformulier — velden naam, telefoon, e-mail, omschrijving werk, verzendknop; micro-garantietekst direct onder verzendknop
4. **Werkgebied – Regio overzicht** -- Bevestig feitelijk in welke gemeenten Stucq actief is zodat de bezoeker geen twijfel heeft over beschikbaarheid in zijn regio.
   Copy: Stucq werkt in Haarlem, Bloemendaal, Zandvoort en omgeving tot 15 km. Twijfelt u of uw locatie binnen het werkgebied valt — bel direct voor bevestiging.
   Component: statische kaartband — visuele kaart van werkradius met gemeentenamen als labels, tekstblok ernaast
5. **Openingstijden & beschikbaarheid** -- Geef feitelijke bereikbaarheidsinfo zodat de bezoeker precies weet wanneer hij een reactie kan verwachten.
   Copy: Kantooruren: ma–vr 7:00–17:00. Spoedvragen buiten kantooruren zijn bespreekbaar — bel 0681943404 en spreek een bericht in.
   Component: info-tabel — één kolom openingstijden per dag, spoedvermelding gemarkeerd, aardetint achtergrond
6. **Vertrouwensband – Bewijs voor het laatste moment** -- Bevestig betrouwbaarheid vlak vóór het contactmoment met feitelijk bewijs: Google-score, projectcount en vaste-prijs-garantie.
   Copy: 4,8 sterren op Google — 25+ geverifieerde reviews. Meer dan 50 afgeronde projecten in Haarlem sinds 2020, allemaal op tijd en in budget.
   Component: statement-band — donkere aardetint achtergrond, drie feitelijke badges naast elkaar: sterren-score, projectcount, vaste-prijs-icoon
7. **Secundaire CTA – Offerte of projecten** -- Stuur bezoekers die nog niet klaar zijn voor contact naar het offerteformulier of de projectenpagina als zachte volgende stap.
   Copy: Voorkeur voor een directe prijsindicatie? Vraag een vrijblijvende offerte aan of bekijk afgeronde projecten in Haarlem en omgeving.
   Component: cta-band full-bleed — twee knoppen naast elkaar: primair 'Offerte aanvragen', secundair 'Bekijk afgeronde projecten'; aardetint achtergrond

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
- [ ] Aanspreek: u (formeel) — consequent door alle copy
- [ ] Telefoonnummer 0681943404 als klikbaar element op mobiel en desktop
- [ ] Micro-garantie 'Vrijblijvend – vaste prijs, reactie binnen 48 uur' zichtbaar bij formulier en contactkaart
- [ ] Geen prijzen of reviews verzinnen — alleen de 25+ geverifieerde Google-reviews en 4,8-sterrenscore gebruiken
- [ ] Werkgebied beperkt tot Haarlem, Bloemendaal, Zandvoort en omgeving tot 15 km
- [ ] Verboden zinsneden nooit gebruiken: 'Luxe afwerking', 'kunstzinnige creaties', 'droomproject', 'Uw vertrouwde partner', 'Welkom bij', 'Supercharge', 'Ontgrendel uw potentieel'
- [ ] Visuele stijl: aardetinten, strak en professioneel, geen speelse animaties of abstracte stijlelementen
- [ ] Iconen toegestaan voor contactmiddelen, openingstijden en garantie-badges
- [ ] Geen full-bleed sfeeroverload — bewijs en structuur staan centraal
- [ ] Tone of voice: Vakkundig · Transparant · Betrouwbaar

## Niet bouwen (out-of-scope)
- Geen testimonials tenzij er echte zijn (zie context/content-truth.md)
- Geen nep-statistieken of urgency-banners
- Geen blog/nieuwsbrief tenzij in sitemap
