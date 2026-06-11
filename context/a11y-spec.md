# Toegankelijkheidsspecificatie -- Stucq
Doel: WCAG 2.2 AA. Dit zijn de concrete patronen.

## Semantische HTML
- header, nav, main, footer als landmarks. Een h1 per pagina.
- Klikbare elementen: altijd button of a href, NOOIT div onclick.

## Skip-link
<a href="#main" class="skip-link">Ga naar inhoud</a>
Zichtbaar bij focus, verborgen bij rust.

## Focus-visible (WCAG 2.4.7)
:focus-visible { outline: 3px solid var(--color-border-focus); outline-offset: 2px; }
NOOIT: outline: none zonder vervanging.

## Kleurcontrast
Body tekst: >= 4.5:1
Grote tekst (>18pt): >= 3:1
UI-componenten: >= 3:1

## Formulieren
- Altijd zichtbaar label (aria-label indien visueel verborgen)
- required attribuut + visuele indicator
- Foutmeldingen via aria-describedby
- Na submit: focus naar eerste foutveld

## Keyboard-navigatie
Tab: interactieve elementen
Esc: sluit modals, dropdowns
Pijltoetsen: binnen menus, tabs
Modal focus-trap: Tab/Shift+Tab blijft binnen, Esc sluit

## Afbeeldingen
Decoratief: alt=""
Informatief: alt=beschrijvend (max 80 tekens)
Logo: alt="Stucq"

## Motion
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; } }
