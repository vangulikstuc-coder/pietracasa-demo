# Bouw Home-pagina -- Stucq

## 1. TAAK
Bouw de Home-pagina voor Stucq (Stucadoor, Haarlem). Platform: Maatwerk (custom code).

## 2. LEES EERST (in volgorde)
1. @CLAUDE.md -- build-contract
2. @pages/home.md -- blueprint + uitvoerbare AC
3. @context/design-tokens.json -- semantische tokens (LAAG 2 -- NOOIT primitives)
4. @house/components.md -- state matrix (hover/focus/disabled/loading/empty)
5. @context/brand-voice.md -- tone: Vakkundig · Transparant · Betrouwbaar
6. @context/content-truth.md -- verboden content + echte aantallen

## 3. BOUW-INSTRUCTIES
- Secties: Hero -> Bewijs-band -> Probleem naar oplossing -> Diensten -> Projectbewijs / Voor-na galerij -> Werkwijze -> Garanties & Keurmerken -> Reviews -> CTA-band / Contactsectie
- ANATOMIE — GEBALANCEERD (zie prompts/build-premium.md + house/components.md): hero en CTA-band beeld-gedreven; voor aanbod beeld-gedreven kaarten waar beeld beschikbaar is, maar tabellen en iconen zijn toegestaan voor prijzen/specs/processen. Respecteer de componenttypes uit de blueprint; forceer geen full-bleed beeld waar structuur beter past. Minstens één full-bleed moment (hero óf statement-band).
- Primaire CTA: "Offerte aanvragen" -- max 1 per viewport
- Semantische tokens ALTIJD -- nooit hardcoded hex
- Mobile-first 375px, touch targets >= 44px

## 4. CONSTRAINTS (HARD)
- Niet aanraken: CLAUDE.md, project.json, design-tokens.json, .claude/
- Verboden content: @context/content-truth.md
- Onbekende feiten: [CONFIRM: logo in hoge resolutie]

## 5. VERIFICATIE
pnpm build -- 0 fouten vereist
grep -r 'TODO|PLACEHOLDER' src/pages/home* -- mag niets teruggeven
Screenshot op 375px, 768px, 1280px -- visueel controleren

## 6. BIJ BLOKKERING
Stop en roep AskUserQuestion aan. Verzin antwoord NOOIT.
