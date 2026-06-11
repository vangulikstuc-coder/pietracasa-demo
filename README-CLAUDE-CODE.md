# Dossier gebruiken in Claude Code -- Stucq

## Stap 1: Uitpakken in repo-root
Pak de ZIP uit in de ROOT van je website-repo.

## Stap 2: Mapstructuur
my-website/
|-- CLAUDE.md               <- auto-geladen door Claude Code
|-- .claude/
|   |-- settings.json       <- PreToolUse hooks
|   +-- rules/              <- auto-ladende regels
|       |-- tokens.md
|       |-- components.md
|       +-- no-touch.md
|-- project.json
|-- design-card-spec.json
|-- open-questions.md
|-- context/                <- tech-stack, content-truth, design-tokens...
|-- house/                  <- components, design-principles, anti-patterns, motion
|-- pages/                  <- blueprints met uitvoerbare AC
+-- prompts/                <- 4-delige build-blokken

## Stap 3: Bouw
1. Open repo in Claude Code (CLAUDE.md + .claude/rules/ laden automatisch)
2. Start: @prompts/build-home.md
3. Bouw pagina voor pagina, verificeer na elke pagina: pnpm build

## Design Card
design-card-spec.json = JSON bron voor de visuele design card
Gebruik GPT-image-2 met de spec om een visuele card te genereren als PNG
