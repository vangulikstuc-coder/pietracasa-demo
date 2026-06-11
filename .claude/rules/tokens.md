---
paths: ["**/*.{astro,tsx,jsx,ts,js,css,scss}"]
---
# Token-regels (auto-geladen voor alle code-bestanden)

VERBODEN:
- Hardcoded hex-waarden in CSS of inline styles
- Hardcoded px voor spacing/radius buiten tokens
- Primitieve token-namen (primitives.color.*)

VERPLICHT:
- Semantische token-namen: color.primary.default, spacing.md, radius.lg
- In CSS: var(--color-primary-default), var(--spacing-md)

Voorbeelden (gebruik dit):
color.background.default | color.text.primary | color.primary.default
color.primary.hover | color.border.focus | color.feedback.danger
spacing.xs=4px | spacing.sm=8px | spacing.md=16px | spacing.lg=24px

Meest gemaakte fout:
FOUT: background: #4f46e5
GOED: background: var(--color-primary-default)
