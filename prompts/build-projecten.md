# Bouw Projecten-pagina -- Stucq

## 1. TAAK
Bouw de Projecten-pagina voor Stucq (Stucadoor, Haarlem). Platform: Maatwerk (custom code).

## 2. LEES EERST (in volgorde)
1. @CLAUDE.md -- build-contract
2. @pages/projecten.md -- blueprint + uitvoerbare AC
3. @context/design-tokens.json -- semantische tokens (LAAG 2 -- NOOIT primitives)
4. @house/components.md -- state matrix (hover/focus/disabled/loading/empty)
5. @context/brand-voice.md -- tone: Vakkundig · Transparant · Betrouwbaar
6. @context/content-truth.md -- verboden content + echte aantallen

## 3. BOUW-INSTRUCTIES
- Secties: Paginahero – Projectenoverzicht -> Bewijs-band – Kerncijfers -> Filteerbare Projectgalerij – Voor-Na -> Uitgelicht Project – Dronebeelden -> Projectkaarten per Dienst -> Google-Reviews Selectie -> Op Tijd en In Budget – Trackrecord -> Keurmerken en Branchelidmaatschap -> CTA-band – Offerte Aanvragen
- Primaire CTA: "Offerte aanvragen" -- max 1 per viewport
- Hergebruik header/footer/componenten van de homepage (consistentie)
- Semantische tokens ALTIJD -- nooit hardcoded hex
- Mobile-first 375px, touch targets >= 44px

## 4. CONSTRAINTS (HARD)
- Niet aanraken: CLAUDE.md, project.json, design-tokens.json, .claude/
- Verboden content: @context/content-truth.md
- Onbekende feiten: alle [CONFIRM: ...] open laten

## 5. VERIFICATIE
pnpm build -- 0 fouten vereist
grep -r 'TODO|PLACEHOLDER' src/pages/projecten* -- mag niets teruggeven
Screenshot op 375px, 768px, 1280px -- visueel controleren

## 6. BIJ BLOKKERING
Stop en roep AskUserQuestion aan. Verzin antwoord NOOIT.
