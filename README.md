# Material Web Design System

**Source:** `material-components/material-web` @ GitHub (https://github.com/material-components/material-web)  
**Spec:** Material Design 3 (M3 / "Material You") — https://m3.material.io  
**Version:** 2.x (Web Components, custom elements with `md-` prefix)

---

## What Is This?

`material-web` is Google's official implementation of **Material Design 3** as framework-agnostic web components. It ships as a suite of `<md-*>` custom elements (e.g. `<md-filled-button>`, `<md-card>`, `<md-text-field>`) that work in any HTML page or framework. The library is the canonical reference implementation for M3 on the web.

This design system captures M3's visual language: its token hierarchy, color system (dynamic color / tonal palettes), typescale, shape system, elevation model, motion, and component anatomy — all expressed as reusable HTML/CSS/JSX artifacts.

---

## Products / Surfaces

| Surface | Description |
|---|---|
| **Material Web Components** | The `md-*` element library itself — used to build any web app |
| **material-web.dev** | Documentation site showcasing all components with live demos |
| **M3 Design Spec** | m3.material.io — the design source of truth this library implements |

There is no single "app" — this is a component library / design system that other products build on top of. The UI kit in this repo recreates a **demo app** using Material Web components, illustrating realistic usage patterns (navigation, forms, cards, settings, etc.).

---

## Sources

- GitHub repo: https://github.com/material-components/material-web (main branch)
- Spec site: https://m3.material.io
- Component docs: https://material-web.dev
- npm: `@material/web`

---

## CONTENT FUNDAMENTALS

Material Web / M3 documentation and component copy follows these principles:

- **Tone:** Clear, direct, helpful. Technical documentation is precise without being dry. Friendly but not casual.
- **Casing:** Sentence case for UI labels, headings, and documentation. Title Case avoided except for brand names ("Material Design", "Material You").
- **Voice:** Second person ("you can", "your app"). Active voice strongly preferred.
- **Emoji:** Not used in documentation or component labels. Absent from the component library entirely.
- **Length:** Concise. Labels are 1–3 words. Descriptions are 1–2 sentences.
- **Technical terms:** Used precisely — "token", "role", "variant", "state", "surface" have specific meanings and are used consistently.
- **Examples:**
  - Button labels: "Save", "Cancel", "Continue", "Learn more"
  - Field labels: "Email address", "Password", "First name"
  - Helper text: "Enter a valid email address"
  - Error messages: "This field is required"
  - Section headings: "Sign in", "Account settings", "Notifications"

---

## VISUAL FOUNDATIONS

### Colors
M3 uses a **dynamic color system** built from tonal palettes. Each theme generates 6 key color groups:

| Group | Roles |
|---|---|
| **Primary** | primary, on-primary, primary-container, on-primary-container |
| **Secondary** | secondary, on-secondary, secondary-container, on-secondary-container |
| **Tertiary** | tertiary, on-tertiary, tertiary-container, on-tertiary-container |
| **Error** | error, on-error, error-container, on-error-container |
| **Neutral** | surface, on-surface, surface-variant, on-surface-variant, outline, outline-variant, shadow, scrim, inverse-surface, inverse-on-surface |
| **Background** | background, on-background |

Default baseline theme uses a **blue primary** (#6750A4 — actually a medium purple/violet), with secondary blue-grey and tertiary pink-violet. Light and dark schemes are both defined.

- **No gradients** in components — flat color surfaces only.
- **State layers:** hover = 8% overlay, focus = 10%, pressed = 10%, dragged = 16% — all using the "on-" color of the surface.
- **Tonal surfaces:** Elevation is expressed via tonal color overlay (not box-shadow alone), using `surface-tint` color.

### Typography
Default typeface: **Roboto** (sans-serif). Monospace: **Roboto Mono**.  
Font source: Google Fonts CDN.  
*(This design system uses Google Fonts imports — no local font files bundled.)*

**Typescale roles** (large → medium → small):
- `display-large/medium/small` — 57/45/36px, weight 400
- `headline-large/medium/small` — 32/28/24px, weight 400
- `title-large/medium/small` — 22/16/14px, weight 400/500/500
- `label-large/medium/small` — 14/12/11px, weight 500/500/500
- `body-large/medium/small` — 16/14/12px, weight 400

### Shape
Corner radii are expressed as **shape tokens**, not arbitrary values:

| Token | Value | Used in |
|---|---|---|
| `--md-sys-shape-corner-none` | 0px | — |
| `--md-sys-shape-corner-extra-small` | 4px | Menus, tooltips, text fields |
| `--md-sys-shape-corner-small` | 8px | Chips, snackbars |
| `--md-sys-shape-corner-medium` | 12px | Cards (default) |
| `--md-sys-shape-corner-large` | 16px | Navigation drawer, sheets |
| `--md-sys-shape-corner-extra-large` | 28px | FAB, dialogs |
| `--md-sys-shape-corner-full` | 9999px | Buttons, badges |

### Elevation
5 levels (0–5). Higher elevation = more prominent tonal surface color overlay + shadow:

| Level | dp | Usage |
|---|---|---|
| 0 | 0 | Flat surfaces, cards at rest |
| 1 | 1dp | Cards hover, navigation bar |
| 2 | 3dp | FAB at rest, menus |
| 3 | 6dp | FAB hover, navigation drawer |
| 4 | 8dp | — |
| 5 | 12dp | Navigation rail hover |

Shadows: subtle, single-layer, dark neutral (not colored). Elevation primarily communicated via **tonal surface overlay** (M3's key departure from M2).

### Motion / Animation
- **Standard easing:** `cubic-bezier(0.2, 0, 0, 1)` — most transitions
- **Standard decelerate:** `cubic-bezier(0, 0, 0, 1)` — elements entering
- **Standard accelerate:** `cubic-bezier(0.3, 0, 1, 1)` — elements exiting
- **Durations:** Short1 50ms, Short2 100ms, Short3 150ms, Short4 200ms; Medium1 250ms, Medium2 300ms, Medium3 350ms, Medium4 400ms; Long1 450ms, Long2 500ms, Long3 550ms, Long4 600ms
- **Ripple:** Ink ripple on touch/click. Radially expands from touch point, fades out. Color is `on-surface` or `on-primary` tinted at ~12% opacity.
- **No bounce/spring** — easing is always cubic-bezier, smooth deceleration.
- **State transitions:** opacity + transform. Fade-through for content swaps.

### Backgrounds / Surfaces
- **No background images** in components — flat color only.
- **Surface hierarchy:** background → surface-dim → surface → surface-container-lowest → low → default → high → highest.
- **No textures, patterns, or gradients** in the default theme.
- **Dark mode:** fully supported. Surface colors invert, primary colors brighten.

### Cards
- Rounded corners: `12px` (medium shape corner)
- **Elevated card:** white surface + 1dp shadow + tonal overlay
- **Filled card:** surface-container-highest, no shadow
- **Outlined card:** transparent + 1px outline-variant border
- No large drop shadows; subtle only.

### Hover / Press / Focus States
- **Hover:** 8% state-layer overlay (on-surface color)
- **Focus:** 10% state-layer + 3px focus indicator ring (primary color, offset 2px)
- **Pressed:** 10% ripple expanding from point of contact
- **Disabled:** 38% opacity on content, 12% opacity on container

### Borders
- **Outline variant:** `--md-sys-color-outline-variant` for subtle dividers
- **Outline:** `--md-sys-color-outline` for input fields, outlined components
- Border-radius always uses shape tokens (never arbitrary px)

### Transparency / Blur
- **Backdrop blur:** Not used in standard M3. Surface scrim uses a solid semi-transparent overlay (black at 32%) for dialogs/drawers.
- **Transparency:** Only for state layers and disabled states.

### Imagery
- Material Design examples use photography with **warm, saturated tones** for illustration purposes.
- No grain or film effects.
- Icons are the primary visual language, not photography.

### Iconography → see ICONOGRAPHY section below

---

## ICONOGRAPHY

Material Web uses **Material Symbols** — Google's variable icon font. Three optical styles:
- **Outlined** (default) — hollow icons with defined strokes
- **Rounded** — softened corners, friendly
- **Sharp** — crisp right angles, technical

Available via Google Fonts CDN:
```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
```

Usage:
```html
<span class="material-symbols-outlined">home</span>
<span class="material-symbols-outlined">settings</span>
<span class="material-symbols-outlined">search</span>
```

The font supports variable axes: `FILL` (0–1), `wght` (100–700), `GRAD` (-50–200), `opsz` (20–48).

**No custom SVG icon set** — Material Symbols covers all use cases (3000+ icons).
**No emoji** used as icons.
**No PNG icons** — font-only.
**No Heroicons/Lucide** — Material Symbols is the canonical choice for this system.

Assets copied: `assets/` contains logo references and brand marks only (no icon sprites needed).

---

## FILE INDEX

```
/
├── README.md                     ← This file
├── SKILL.md                      ← Agent skill definition
├── colors_and_type.css           ← CSS custom properties: M3 tokens + semantic vars
├── assets/
│   └── material-logo.svg         ← Material Design "M" logomark (placeholder ref)
├── preview/
│   ├── colors-primary.html       ← Primary tonal palette swatch
│   ├── colors-neutral.html       ← Neutral + surface palette
│   ├── colors-semantic.html      ← Semantic color roles (light scheme)
│   ├── colors-dark.html          ← Dark scheme color roles
│   ├── type-display.html         ← Display + headline type specimens
│   ├── type-body.html            ← Body + label type specimens
│   ├── spacing-shape.html        ← Shape token visual
│   ├── spacing-elevation.html    ← Elevation levels visual
│   ├── spacing-tokens.html       ← Spacing scale tokens
│   ├── components-buttons.html   ← Button variants + states
│   ├── components-fields.html    ← Text fields + select
│   ├── components-chips.html     ← Chip variants
│   ├── components-cards.html     ← Card variants
│   ├── components-nav.html       ← Navigation bar + rail
│   ├── components-lists.html     ← List items
│   └── components-misc.html      ← Switch, checkbox, radio, FAB
└── ui_kits/
    └── material-web/
        ├── README.md             ← UI kit documentation
        ├── index.html            ← Interactive demo app
        ├── Tokens.jsx            ← CSS token injection
        ├── TopAppBar.jsx         ← Top app bar component
        ├── NavigationBar.jsx     ← Bottom nav bar
        ├── Button.jsx            ← Button variants
        ├── Card.jsx              ← Card variants
        ├── TextField.jsx         ← Text field component
        ├── Chip.jsx              ← Chip variants
        ├── List.jsx              ← List component
        ├── Switch.jsx            ← Switch + checkbox + radio
        └── Dialog.jsx            ← Modal dialog
```
