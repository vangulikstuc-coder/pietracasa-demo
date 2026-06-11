# Componenten - State matrix

Alle componenten MOETEN deze states implementeren. Geen state = bug.

## Globale regels
- Touch targets: min 44x44px (WCAG 2.5.5).
- Focus-visible: zichtbare 3px outline + offset 2px, kleur color.border.focus.
- prefers-reduced-motion: alle animaties >= 100ms moeten respecteren.
- Minimale font-size 16px op inputs (voorkomt iOS auto-zoom).

## 1. Button (Primaire knop)
Label: Offerte aanvragen. Max 1 primaire CTA per viewport.

| State | Token / spec |
|---|---|
| default | bg=color.primary.default, text=color.primary.on, padding=12px 24px, radius=radius.md, min-height=44px |
| hover | bg=color.primary.hover, transform=translateY(-1px), transition=180ms ease |
| focus-visible | bg=color.primary.default, outline=3px solid color.border.focus, outline-offset=2px |
| active | bg=color.primary.active, transform=translateY(0) |
| disabled | opacity=0.4, cursor=not-allowed, geen hover |
| loading | spinner i.p.v. label, aria-busy=true, pointer-events=none |

## 2. Input
| State | Token / spec |
|---|---|
| default | border=color.border.default, bg=color.surface.default, font-size=16px, min-height=44px, padding=10px 14px |
| focus-visible | border=color.primary.default, outline=3px solid color.border.focus, outline-offset=2px |
| filled | border=color.border.strong |
| error | border=color.feedback.danger, helper-text=color.feedback.danger, aria-invalid=true, aria-describedby=fout-id |
| disabled | opacity=0.5, cursor=not-allowed, bg=color.surface.alt |
| empty | placeholder kleur color.text.disabled |

## 3. Card
| State | Token / spec |
|---|---|
| default | bg=color.surface.default, border=color.border.default, radius=radius.lg, shadow=shadow.sm, padding=spacing.lg |
| hover | shadow=shadow.md, transform=translateY(-2px), transition=200ms ease |
| focus-visible | outline=3px solid color.border.focus (alleen als clickable) |
| loading | skeleton placeholders, aria-busy=true |
| empty | dimmed icon + tekst color.text.secondary |

## 4. Nav
min-height=64px op mobile, transparant tot scroll. Skip-link altijd.

| State | Token / spec |
|---|---|
| default item | text=color.text.secondary, padding=10px 16px |
| hover item | text=color.text.primary |
| active item | text=color.primary.default, bg=color.surface.alt |
| focus-visible | outline=3px solid color.border.focus, outline-offset=2px |
| mobile-open | drawer slide-in 240ms, focus-trap actief, body-scroll-lock |

## 5. Footer
Bevat: contact, NAW, social, copyright, sitemap. Tekstkleur color.text.secondary, headers color.text.primary.

## 6. Modal
| State | Token / spec |
|---|---|
| open | overlay=color.background.overlay, focus-trap, ESC sluit, aria-modal=true, role=dialog |
| closing | fade-out 200ms, focus terug naar trigger |
| reduced-motion | geen transitions, instant open/close |

## 7. Toast
| State | Token / spec |
|---|---|
| success | bg=color.feedback.successBg, text=color.feedback.success, icon |
| error | bg=color.feedback.dangerBg, text=color.feedback.danger, aria-live=assertive |
| info | bg=color.feedback.infoBg, text=color.feedback.info, aria-live=polite |
| auto-dismiss | 5s default, pauze bij hover/focus |

## Premium sectie-anatomie (de "generiek"-killers — bouw zo, niet generiek)
Dit is wat een build van "net" naar "premium maatwerk" tilt. Pas de uitvoering (kleur, beeld, font)
aan op de niche, maar houd de anatomie aan.

### 8. Dienst-/aanbod-kaart — BLEND (beeld waar het kan)
- Aanbod/sfeer: beeld-gedreven kaart (foto + scrim/chip). Specs/prijzen: icoon (samenhangende set) of tabel is toegestaan.
- hover: foto-zoom (scale ~1.05) of kaart-lift + schaduw.

### 9. Proces / "Zo werkt het"
- Genummerde stappen als verbonden ritme (tijdlijn of foto-per-stap); een strakke genummerde lijst mag voor zakelijke/feitelijke processen.

### 10. Stat-bar / cijferpaneel
- Grote display-cijfers (tabular-nums) + kleine uppercase-tracked labels; hairline-dividers; count-up bij in-beeld.

### 11. Statement-band (ritme-breker)
- Aanbevolen: minstens één full-bleed sfeerbeeld + pull-quote. Mag vervallen als de hero al het full-bleed moment levert.

### 12. Lijst-markers
- Bij voorkeur gemaakte vormen (badge/SVG-mark/genummerd); iconen toegestaan. Met hairline-dividers.

### 13. CTA-band (laatste duw, vóór de footer)
- Bij voorkeur full-bleed sfeerbeeld + scrim; een heldere structuur-CTA mag. Knop-finesse (lift/gloed/pijl-shift).

### 14. Footer — met signature
- Oversized ghost-wordmark + menselijk/levend detail (bv. live "open tot…"-statuspill bij openingstijden-niches).
- Kolommen: contact/NAW, sitemap, social, legal. Tekst color.text.secondary, headers color.text.primary.

### 15. PageHero (élke binnenpagina) + 404
- Binnenpagina's krijgen bij voorkeur een atmosferische beeld-kop; een heldere tekstkop mag waar beeld ontbreekt.
- Voeg een gebrande 404 toe (on-brand kop + CTA terug/primaire actie, noindex).

## Trust-strip
Voor-na projectfoto’s · Reviews + Google-score · Vaste prijsafspraak · KvK & verzekerd