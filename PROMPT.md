# Bouw-lus instructie — Stucq
Je bent Claude Code en werkt dit project autonoom af: EEN taak per beurt.

## Doe elke beurt exact dit:
1. Lees CLAUDE.md (contract) en prd.json (takenlijst). Lees progress.md als die bestaat.
2. Kies de EERSTE taak in prd.json met "passes": false.
3. Voer ALLEEN die ene taak uit. Volg task.prompt en task.blueprint.
4. Verifieer: draai `pnpm build`. Slaagt het niet, fix tot het wel slaagt.
5. Loop de acceptance-lijst van de taak af. Maak waar nuttig een screenshot (Playwright of Chrome DevTools MCP) op 375px en 1280px en corrigeer zichtbare fouten.
6. Zet deze taak in prd.json op "passes": true.
7. Schrijf 1-3 regels in progress.md (wat je deed + wat de volgende beurt moet weten).
8. Commit met een korte boodschap. Stop daarna — de lus herstart je met verse context.

## Harde regels
- Verzin NOOIT feiten (cijfers, reviews, certificeringen). Laat [CONFIRM: ...] staan.
- Niet aanraken: CLAUDE.md, project.json, context/design-tokens.json, .claude/.
- Eén taak per beurt; werk niet vooruit.
- Staan ALLE taken op "passes": true? Antwoord dan met exact `<promise>BUILD-COMPLEET</promise>` en doe niets meer.