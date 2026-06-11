---
paths: ["src/components/**", "src/layouts/**"]
---
# Component-regels (auto-geladen voor component-bestanden)

Verplicht voor elk interactief component:
1. :hover staat gedefinieerd
2. :focus-visible staat (outline: 3px solid var(--color-border-focus), offset: 2px)
3. :disabled: opacity 0.4, cursor: not-allowed, pointer-events: none
4. Touch target >= 44x44px
5. prefers-reduced-motion respecteren

Formulieren:
- Persistent label (NIET placeholder-as-label)
- aria-describedby op foutbericht

Zie @house/components.md voor volledige state-matrix.
