# Beeldmateriaal — Stucq (DEMO)

Deze beelden zijn **AI-gegenereerd** (nano-banana via fal.ai) met consistente stijl:
zelfde vakman (antraciet polo, korte baard), Haarlemse architectuur, aardetinten, natuurlijk licht.
Het is een demo-site: vervang alles door echte projectfoto's van de klant vóór livegang.
Markeer elk beeld in de site met `data-demo="true"`.

## Slot-mapping (gebruik EXACT deze bestanden — geen Pexels/stock ophalen)

### hero/
- `hero-home.jpg` — Home hero: voor-na splitlayout gevel (links voor, rechts na, witte deellijn)
- `hero-gevelwerk.jpg` — Gevelwerk hero: zelfde voor-na split (zelfde project, bewust hergebruik)
- `hero-binnenafwerking.jpg` — Binnenafwerking hero: voor-na split woonkamer
- `hero-projecten.jpg` — Projecten hero: voor-na split microcement vloer
- `hero-microcement.jpg` — Microcement hero: naadloze vloer (resultaat-shot)
- `hero-over-stucq.jpg` — Over Stucq hero: portret vakman bij afgewerkte wand

### sections/
- `dienst-gevelwerk.jpg` — dienstkaart gevelwerk: vakman op steiger
- `dienst-binnenafwerking.jpg` — dienstkaart binnenafwerking: vakman pleistert wand
- `dienst-microcement.jpg` — dienstkaart microcement: vakman brengt vloer aan
- `galerij-gevel-voor.jpg` / `galerij-gevel-na.jpg` — voor-na paar gevel (toggle-galerij)
- `galerij-binnen-voor.jpg` / `galerij-binnen-na.jpg` — voor-na paar binnenwerk
- `galerij-vloer-voor.jpg` / `galerij-vloer-na.jpg` — voor-na paar microcement vloer
- `drone-gevelwerk.jpg` — drone-still gevelproject (poster voor video-embed slot; geen echte video beschikbaar)
- `over-werkomgeving.jpg` — werkomgevingsfoto (over-pagina, tekst-beeld-blok)
- `cta-sfeer.jpg` — CTA-band achtergrond (opgeleverd interieur)

### sections/ — stap-medaillons & details (beeldronde 2)
- `stap-1-opname.jpg` t/m `stap-5-oplevering.jpg` — ronde foto-medaillons bij de vijf stappen op /werkwijze/ (zelfde vakman door alle stappen)
- `detail-gevel.jpg` / `detail-wand.jpg` / `detail-vloer.jpg` — overlappend rond trio bij de bewijs-cijfers op home

### backgrounds/ (polish-ronde)
- `bg-stuc-licht.jpg` — subtiele lichte stucwerk-textuur: achtergrond-accent voor de werkwijze- en FAQ-hero
- `bg-stuc-donker.jpg` — donkere stucwerk-textuur: voor donkere CTA-banden / footer / trackrecord-band (witte tekst, AA-contrast)
- `bg-troffel-sweep.jpg` — abstracte troffel-sweep: sectie-accent (bijv. garanties), subtiel gebruiken

## Koppeling
Via astro:assets (`<Image>`/`<Picture>`): AVIF/WebP, expliciete width/height,
hero's `fetchpriority="high"` (niet lazy), de rest `loading="lazy"`.
De voor-na toggle-galerijen gebruiken de losse voor/na-paren, NIET de samengestelde hero-splits.

## Locatielabels
Generieke labels gebruiken (bijv. "Haarlem", "regio Haarlem") — géén verzonnen
straatnamen of opleverdata bij deze demo-beelden.
