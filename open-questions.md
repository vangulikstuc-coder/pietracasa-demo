# Open questions

- [ ] Aanleveren of laten maken: logo
- [ ] Aanleveren of laten maken: bestaande teksten
- [ ] Domeinnaam kiezen/registreren
  - Tot die tijd staat `https://stucq.pages.dev` als tijdelijk domein in `site/astro.config.mjs` (site), `site/public/robots.txt` (Sitemap-regel) en de Plausible `data-domain` (afgeleid in BaseLayout). Bij definitieve domeinnaam: alleen `astro.config.mjs` + `robots.txt` aanpassen.
- [ ] Aflevering offerte-aanvragen: het formulier op /offerte/ post naar de Pages Function `site/functions/api/offerte.ts`, maar een e-mail/CRM-koppeling is nog niet geconfigureerd (welke dienst, naar welk adres?). Tot die tijd worden aanvragen alleen gelogd in de Cloudflare Pages-logs.
- [ ] URL van het Google-bedrijfsprofiel aanleveren — de review-secties noemen de 4,8-score en 25+ reviews, maar linken bewust nergens naartoe zolang de echte profiel-URL onbekend is.