# Open questions

## [CONFIRM:]-markers uit het dossier
- [ ] `[CONFIRM: logo aanleveren als SVG + PNG]` (context/asset-spec.md) — logo aanleveren of laten maken. De site gebruikt nu een tekst-wordmark.
- [ ] `[CONFIRM: definitieve OG-image]` (context/asset-spec.md) — definitieve OG-image (1200×630) aanleveren. Tot die tijd gebruikt elke pagina het eigen herobeeld (of cta-sfeer) als auto-fallback voor `og:image` — toegestaan per asset-spec.

## Overige open punten
- [ ] Aanleveren of laten maken: bestaande teksten
- [ ] Domeinnaam kiezen/registreren
  - Tot die tijd staat `https://stucq.pages.dev` als tijdelijk domein in `site/astro.config.mjs` (site), `site/public/robots.txt` (Sitemap-regel) en de Plausible `data-domain` (afgeleid in BaseLayout). Bij definitieve domeinnaam: alleen `astro.config.mjs` + `robots.txt` aanpassen.
- [ ] Aflevering offerte-aanvragen: het formulier op /offerte/ post naar de Pages Function `site/functions/api/offerte.ts` en /contact/ naar `site/functions/api/contact.ts`, maar een e-mail/CRM-koppeling is nog niet geconfigureerd (welke dienst, naar welk adres?). Tot die tijd worden aanvragen alleen gelogd in de Cloudflare Pages-logs.
- [ ] URL van het Google-bedrijfsprofiel aanleveren — de review-secties noemen de 4,8-score en 25+ reviews, maar linken bewust nergens naartoe zolang de echte profiel-URL onbekend is.
- [ ] KvK-nummer aanleveren (`contact.json` heeft een leeg `kvk`-veld). De footer zegt "KvK-geregistreerd en verzekerd" (bevestigd trust-element uit het dossier), maar het nummer zelf staat nog nergens — in Nederland verplicht op een zakelijke website. Toevoegen aan footer + LocalBusiness JSON-LD zodra bekend.
- [ ] Keurmerken/branchevereniging-lidmaatschappen aanleveren — secties op /projecten/ en dienstpagina's tonen bewust géén logo's zolang niets geverifieerd is.
- [ ] PRODUCTIE: alle beelden zijn AI-demo's (`data-demo="true"`, zie public/images/README.md) — vervangen door echte projectfoto's vóór livegang.
- [ ] Lighthouse mobile kon in deze omgeving niet draaien (geen Chrome/Playwright beschikbaar in de sandbox). Statische indicatoren zijn ruim binnen budget (JS 49,3 kB gz per route, hero-AVIF 480w = 12 kB met preload + fetchpriority=high, alle scripts module/defer, expliciete beeldmaten tegen CLS) — meet na deploy alsnog: `npx lighthouse https://stucq.pages.dev --preset=perf --form-factor=mobile`.

## Uit de polish-ronde (beurt 15–22)
Wat er veranderde: zwaardere scrims op alle tekst-op-beeld (AA aantoonbaar via `site/scripts/contrast-audit.mjs`), werkwijze overal geharmoniseerd naar 5 stappen, routes hernoemd naar de SEO-slugs uit context/sitemap.md met 301-redirects vanaf de oude paden, heading-afbreking uitgezet (hyphens: manual + text-wrap: balance), voor-na hero's omgebouwd naar 50/50-grid met gecentreerde deellijn, object-position-ankers tegen afgesneden hoofden op dienstkaarten, en drie subtiele achtergrond-textures gekoppeld. Open beslispunten die daarbij naar boven kwamen:
- [ ] Secundaire-tekst-token `#8C7B6E` op de standaard achtergrond haalt site-breed ~3,5:1 (AA voor lopende tekst vraagt 4,5:1; voor grote tekst is 3:1 wél gehaald). Bestaande token-keuze uit design-tokens.json — geen onderdeel van de polish-scope, maar vóór livegang beslissen: token donkerder maken (bv. richting neutral-600 `#6E5F54`) óf secundaire lopende tekst beperken tot grote/niet-essentiële tekst.
- [ ] context/tech-constraints.md schrijft voor koppen nog "overflow-wrap:break-word + hyphens:auto" voor; de polish-taak polish-koppen overrulet dat bewust (hyphens: manual, overflow-wrap: normal) om lelijke afbrekingen ('Haar-lem') te voorkomen. `site/scripts/heading-audit.mjs` bewijst dat geen kopwoord overloopt op 320/375/1280px. Spec-regel bijwerken of de afwijking accepteren.
- [ ] De 301-redirects van de oude slugs draaien nu via de Astro `redirects`-config (dist bevat ook meta-refresh-fallbackpagina's met noindex + canonical). Werkt in `pnpm preview`; na de eerste Cloudflare Pages-deploy eenmalig live verifiëren dat Pages de 301's serveert.