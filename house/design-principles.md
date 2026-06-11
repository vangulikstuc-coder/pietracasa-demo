# House design principles

## Fundament (elke build)
- Elke pagina: precies één primaire CTA.
- Boodschap boven decoratie: type, witruimte en echte beelden doen het werk.
- Trust boven de fold (reviews/keurmerk/KvK waar relevant).
- Mobile-first, test op 375px. WCAG AA contrast, zichtbare focus.
- 8pt spacing. Tone of voice consistent: Vakkundig · Transparant · Betrouwbaar.

## Premium craft (lat: Apple / Tesla / Linear)
Doel: elke build voelt hand-gebouwd, nooit een template.

### Layout & ritme
- 12-koloms grid met bewuste asymmetrie (niet alles gecentreerd).
- Royale sectie-padding: clamp(5rem, 10vw, 9rem). Tekstkolom max ~68ch.

### Typografie
- Fluid type met clamp(); display groot en strak (line-height 1.0–1.1, letter-spacing -0.02em).
- Sterk gewichtscontrast (400 body vs 600/700 display). Max 2 families.

### Kleur & diepte
- Beperkt palet: veel neutraal, één accent, spaarzaam. Vermijd puur #000.
- Schaduwen gelaagd en zacht (ambient + key); hairlines alleen bewust.

### Beeld
- Full-bleed, art-directed; consistente behandeling. Geen stockfoto-uitstraling.
- Vul élk beeld-slot met een passende foto; nooit lege/grijze vlakken.

### Sectie-anatomie & ritme (zie house/components.md voor specs)
- Beeld en structuur in balans: hero en CTA-band zijn beeld-gedreven; specs, prijzen en processen mogen in tabellen of met een samenhangende icoonset.
- Lijst-markers bij voorkeur gemaakte vormen (badge/SVG-mark/genummerd); iconen toegestaan, kale vinkjes vermijden.
- Minstens één full-bleed moment (hero óf statement-band); een aparte statement-band is aanbevolen, niet hard vereist.
- Binnenpagina's krijgen bij voorkeur een atmosferische beeld-kop; een heldere tekstkop mag waar beeld ontbreekt. Voeg een gebrande 404 toe.
- Bewuste uitlijning-mix. Tekstkolom-leesmaat ~48–68ch.

### Atmosfeer (zie house/motion.md voor de dosering per niche)
- Eén doorlopende, levende achtergrond (gloed ± deeltjes) achter de secties, zodat boven en onder
  als één ruimte voelen — gedoseerd op de intensiteit uit context/design-constraints.json.
- Sticky header wordt frosted bij scroll. Optioneel fijne filmgrain voor diepte.

### Anti-cheap checklist (elke pagina)
- [ ] Geen systeem-fonts op default groottes.
- [ ] Geen krappe secties — adem overal.
- [ ] Echte hiërarchie (oog weet in 1s waar het heen moet).
- [ ] Consistente radii, spacing, schaduwen.
- [ ] Hover/focus-states op álles wat interactief is.
- [ ] Hero/CTA beeld-gedreven; specs in tabel/icoon — geen rommelige clip-art.
- [ ] Eén signature-moment + levende achtergrond volgens de tier.