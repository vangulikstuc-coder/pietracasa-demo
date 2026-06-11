# Master Build Prompt — Premium (Stucq)
Je bent een senior product-designer + front-end engineer met de lat van Apple / Tesla / Linear. Bouw geen "nette" site — bouw iets dat als 10K+ maatwerk voelt.

LEES EERST (in deze volgorde):
1. CLAUDE.md (contract + klant-context)
2. house/design-principles.md (visuele craft — niet onderhandelbaar)
3. house/motion.md (bewegingslaag)
4. house/tech-stack.md + context/tech-stack.md (stack — context/ is leidend)
5. context/* en pages/* (inhoud, tokens, structuur)

BUILD-DOEL
- Custom build volgens context/tech-stack.md (standaard Astro + GSAP + Lenis). Bouw in ./site (laat bestaande mappen intact).
- Volledig responsive (375/768/1280/1920), volledige motion-laag, parallax-hero, micro-interactions op alle interactieve elementen.
- Gebruik context/design-tokens.json als CSS custom properties (incl. typography.display, typography.googleFonts en brand.siteTitle). Geen geraden hexcodes.
- PREMIUM-EXPRESSIE (uit de niche — zie context/design-constraints.json): tier **ingetogen**, atmosfeer-intensiteit **1/3**, signature **gladstrijkende laag die van links naar rechts over het beeld trekt en een strakke wand onthult**, levende achtergrond UIT, filmgrain UIT. Bouw exact dit register (house/motion.md = het menu). Niet een Bram-kloon; de niche bepaalt de uitvoering.
- SECTIE-ANATOMIE — GEBALANCEERD (house/components.md): combineer beeld en structuur. Hero = full-bleed cinematische beeld-hero; CTA-band = full-bleed sfeerbeeld + scrim. Aanbod/sfeer = beeld-gedreven kaarten (foto + scrim/chip); maar prijzen, specs en feitelijke processen mogen in tabellen of met een samenhangende icoonset. Respecteer de componenttypes uit de blueprint en forceer geen beeld waar structuur beter past. Neem minstens één full-bleed moment op (hero óf statement-band); footer met signature; atmosferische PageHero waar beeld beschikbaar is; gebrande 404.

DEFINITION OF DONE
- [ ] Slaagt voor de anti-cheap checklist in house/design-principles.md.
- [ ] Gebalanceerde anatomie toegepast (hero/CTA beeld-gedreven; specs/prijzen in tabel of icoon waar passend).
- [ ] Atmosfeerlaag op de juiste intensiteit (1/3): frosted header; één hero-signature (gladstrijkende laag die van links naar rechts over het beeld trekt en een strakke wand onthult).
- [ ] Elke sectie heeft een scroll-reveal; hero heeft entrance + subtiele beweging.
- [ ] Alle buttons/links/cards hebben hover- én focus-states (zie house/components.md).
- [ ] Lighthouse 95+, geen CLS; prefers-reduced-motion volledig ondersteund (deeltjes/parallax uit).
- [ ] Eén primaire CTA: "Offerte aanvragen". Onbevestigde zaken blijven [CONFIRM: ...] — niets verzinnen.
- [ ] Foto-slots gevuld met passende demo-beelden (preview) volgens context/asset-spec.md (Demo-beelden) — per onderwerp/niche gekozen, gekoppeld via astro:assets, duidelijk als demo gemarkeerd. Productie vervangt door echte klantfoto's.

WERKWIJZE
- Korte takenlijst, dan component voor component. Start met home. house/* is permanent; per klant verandert alleen context/ en pages/.