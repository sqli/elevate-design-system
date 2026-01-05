# SQLI Brand Style Reference

This document contains the rules and assets of the SQLI brand guidelines.

## Promise (Baseline)

**"Elevate. Digitally"**

- The period is ALWAYS after "Elevate", never elsewhere
- Written in TWK Everett Regular
- Can be on one or two lines depending on available space
- Must never overshadow the logo

---

## Color Palette

### Main Colors

| Name              | Hex       | RGB            | CMYK              | Pantone       | Usage                              |
| ----------------- | --------- | -------------- | ----------------- | ------------- | ---------------------------------- |
| **Cream**         | `#FFFAF0` | R255 G250 B240 | C0 M2 Y7 K0       | Warm Grey 1 C | Main background                    |
| **Midnight Blue** | `#0F0E2B` | R15 G14 B43    | C100 M100 Y40 K50 | 3524 C        | Text, graphic elements             |
| **Sky Blue**      | `#6DA5FF` | R109 G165 B255 | C50 M15 Y0 K0     | 659 C         | Accent, highlights                 |
| **Cobalt Blue**   | `#1F24E9` | R31 G36 B233   | C100 M70 Y0 K0    | Blue 072 C    | Interactions (links, buttons, CTA) |

### Neutral Colors

| Name      | Hex       | RGB            | Usage                       |
| --------- | --------- | -------------- | --------------------------- |
| **White** | `#FFFFFF` | R255 G255 B255 | Alternative backgrounds     |
| **Black** | `#000000` | R0 G0 B0       | Avoid, prefer Midnight Blue |

### Color Usage Rules

- **Default background**: Cream (`#FFFAF0`)
- **Main text**: Midnight Blue (`#0F0E2B`)
- **Links and buttons**: Cobalt Blue (`#1F24E9`) - primary interaction color
- **Highlights/Accents**: Sky Blue (`#6DA5FF`) or Cobalt Blue
- Sky Blue and Cobalt Blue are complementary colors

### Authorized Background/Text Combinations

| Background    | Logo/Text     |
| ------------- | ------------- |
| Cream         | Midnight Blue |
| Cream         | Cobalt Blue   |
| Midnight Blue | Cream         |
| Midnight Blue | Sky Blue      |
| Sky Blue      | Midnight Blue |
| Cobalt Blue   | Cream         |
| Cobalt Blue   | White         |

### Dark Mode

Dark Mode is a variation of the brand guidelines for dark interfaces or contexts where a dark background is preferred.

#### Dark Mode Colors

| Element              | Color         | Hex       |
| -------------------- | ------------- | --------- |
| **Main background**  | Midnight Blue | `#0F0E2B` |
| **Main text**        | Cream         | `#FFFAF0` |
| **Alternative text** | White         | `#FFFFFF` |
| **Accents**          | Sky Blue      | `#6DA5FF` |
| **Interactions**     | Sky Blue      | `#6DA5FF` |

#### Dark Mode Usage Rules

- **Background**: Midnight Blue (`#0F0E2B`) exclusively
- **Main text**: Cream (`#FFFAF0`) for a warm tone
- **Alternative text**: White (`#FFFFFF`) for maximum contrast
- **Links and buttons**: Sky Blue (`#6DA5FF`) - replaces Cobalt Blue for better readability on dark backgrounds
- **Highlights/Accents**: Sky Blue (`#6DA5FF`)
- **Logo**: Use `Logo_cream.svg/png` or `Logo_sky.svg/png`
- **Ascenders**: Use `Ascenders-cream.svg` or `Ascenders-sky.svg`

#### Authorized Dark Mode Combinations

| Background    | Logo/Text | Usage                              |
| ------------- | --------- | ---------------------------------- |
| Midnight Blue | Cream     | Main text, logo                    |
| Midnight Blue | White     | Alternative text, high readability |
| Midnight Blue | Sky Blue  | Links, buttons, accents            |

#### DaisyUI Theme Configuration

The Elevate Design System uses DaisyUI themes with OKLCH color format:

```css
/* sqli-light theme */
@plugin "daisyui/theme" {
  name: 'sqli-light';
  default: true;
  color-scheme: light;

  --color-base-100: oklch(98.5% 0.012 85); /* Cream */
  --color-base-content: oklch(15% 0.04 270); /* Midnight */
  --color-primary: oklch(42% 0.28 265); /* Cobalt */
  --color-secondary: oklch(42% 0.28 265); /* Cobalt */
}

/* sqli-dark theme */
@plugin "daisyui/theme" {
  name: 'sqli-dark';
  prefersdark: true;
  color-scheme: dark;

  --color-base-100: oklch(15% 0.04 270); /* Midnight */
  --color-base-content: oklch(98% 0.005 85); /* Cream */
  --color-primary: oklch(68% 0.14 250); /* Sky */
  --color-secondary: oklch(50% 0.24 265); /* Cobalt */
}
```

#### Theme Usage

```html
<!-- Light theme (default) -->
<html data-theme="sqli-light">
  <body class="bg-base-100 text-base-content">
    <a href="#" class="text-primary">Interactive link</a>
  </body>
</html>

<!-- Dark theme -->
<html data-theme="sqli-dark">
  <body class="bg-base-100 text-base-content">
    <a href="#" class="text-primary">Interactive link</a>
  </body>
</html>
```

---

## Typography

### Main Font: TWK Everett

Characteristics: Simple, clean, calm. Rooted in modernist typography with subtle elegance (distinctive cut diagonals).

### Available Weights

| Weight             | Usage                   | Files                       |
| ------------------ | ----------------------- | --------------------------- |
| **Light**          | Body text (recommended) | TWKEverett-Light.\*         |
| **Light Italic**   | Light emphasis          | TWKEverett-LightItalic.\*   |
| **Regular**        | Standard, Promise       | TWKEverett-Regular.\*       |
| **Regular Italic** | Quotes, emphasis        | TWKEverett-RegularItalic.\* |
| **Medium**         | Titles, subtitles       | TWKEverett-Medium.\*        |
| **Bold**           | Strong emphasis         | TWKEverett-Bold.\*          |

### Available Formats

- Desktop: OTF, TTF
- Web: WOFF, WOFF2, TTF

### CSS Configuration (Elevate Design System)

The Elevate Design System includes TWK Everett font declarations:

```css
@font-face {
  font-family: 'TWK Everett';
  src:
    url('/fonts/TWKEverett-Light.woff2') format('woff2'),
    url('/fonts/TWKEverett-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

/* Additional weights: 400 (Regular), 500 (Medium), 700 (Bold) */
```

The font is automatically applied via DaisyUI theme configuration:

```css
@plugin "daisyui/theme" {
  font-family:
    'TWK Everett',
    system-ui,
    -apple-system,
    sans-serif;
}
```

---

## Logo

### Logotype "sqli"

- Always in **lowercase** in the logo
- When referring to the company in text: **SQLI** in uppercase

### Logo Characteristics

- The **s** is warm, soft, elegant and humanist
- The simple verticality of the **l** and **i** embodies pure elevation
- The **q** combines both: curves and straight geometry

### Safe Zone

The safe zone is defined by the **height of the stem of the letter "i"** of the logotype.
This margin must be respected around the logo to ensure readability.

### Logo Placement

- **Documents/Posts**: At the top of the page, aligned to the edge
- **Profile photos/Signage**: Centered if necessary

### Available Color Variants

| File                  | Usage                                      |
| --------------------- | ------------------------------------------ |
| Logo_midnight.svg/png | On Cream or Sky Blue background            |
| Logo_cream.svg/png    | On Midnight Blue or Cobalt Blue background |
| Logo_sky.svg/png      | On Midnight Blue or Cobalt Blue background |
| _\_with_exclusion._   | Versions with built-in safe zone           |

### Logo with Partners

- Logos are placed side by side with a separation line
- The SQLI logo ALWAYS comes first
- Adjust partner logo size to visually balance

---

## Ascenders

Ascenders are vertical bars extracted from the letters "l" and "i" of the logo.

### Usage

- **Complement** to the logo, not replacement
- Used when the main logo has already been established
- Or when attention should be elsewhere

### Rules

- DO NOT use alone (with exceptions)
- ALWAYS accompanied by content OR the Promise "Elevate. Digitally"
- Placement: top or bottom corner, never centered alone

### Available Variants

| File                   | Usage                       |
| ---------------------- | --------------------------- |
| Ascenders-midnight.svg | On Cream background         |
| Ascenders-cream.svg    | On Midnight Blue background |
| Ascenders-sky.svg      | On Midnight Blue background |
| Ascenders-cobalt.svg   | On Cream background         |

---

## Tone of Voice: "Professionally Human"

### Core Principles

SQLI is a group of experts dedicated to digital solutions. We are professional but human - not a machine, a team of people.

### The 5 Pillars of Tone of Voice

1. **Elevate. Personally.**
   - Every communication should elevate the reader
   - Speak "upward", as if the reader knows more than you
   - Leave a positive and optimistic impression

2. **Elevate. Humanly.**
   - Write as you speak, imagine a conversation with a colleague
   - Avoid corporate clichés ("solution-oriented workflows", "agile corporate adaptability")
   - Prove we are a team of people, not a machine

3. **Elevate. Simply.**
   - Explain complex subjects in an accessible way
   - Everyone should be able to understand

4. **Elevate. Elegantly.**
   - Take care of every communication
   - Review, adjust, refine
   - Quality matters

5. **Elevate. Interestingly.**
   - Add a personal touch
   - A point of view, an original thought

### Recommended Vocabulary

Use these words naturally when the opportunity arises:

- Elevate, Elevating
- Inspire, Inspiring
- Transform
- Raise, Raising, Uplift
- Lift, Pick up
- Augment, Amplify
- Bolster, Increase
- Look up
- Go skywards
- Reach for the moon
- Never look back

### Vocabulary to Avoid

Overused clichés:

- "Raise the bar"
- "Dial up"
- "Head for new heights"
- "Solution-oriented workflows"
- "Agile corporate adaptability"

---

## Available Assets

### File Locations

```
assets/
├── fonts/                    # TWK Everett font files
│   ├── TWKEverett-Light.woff2
│   ├── TWKEverett-Light.woff
│   ├── TWKEverett-LightItalic.woff2
│   ├── TWKEverett-LightItalic.woff
│   ├── TWKEverett-Regular.woff2
│   ├── TWKEverett-Regular.woff
│   ├── TWKEverett-RegularItalic.woff2
│   ├── TWKEverett-RegularItalic.woff
│   ├── TWKEverett-Medium.woff2
│   ├── TWKEverett-Medium.woff
│   ├── TWKEverett-Bold.woff2
│   ├── TWKEverett-Bold.woff
│   └── *.otf, *.ttf          # Desktop formats
├── logos/                    # Logos and Ascenders
│   ├── Logo_midnight.svg
│   ├── Logo_midnight.png
│   ├── Logo_cream.svg
│   ├── Logo_cream.png
│   ├── Logo_sky.svg
│   ├── Logo_sky.png
│   ├── Logo_*_with_exclusion.*
│   ├── Ascenders-midnight.svg
│   ├── Ascenders-cream.svg
│   ├── Ascenders-sky.svg
│   ├── Ascenders-cobalt.svg
│   └── Ascenders-*-rgb.png
└── images/                   # Photos for Storybook examples
    └── *.jpg
```

---

## Elevate Design System

The Elevate Design System provides a complete library of components compliant with the brand guidelines, built on **DaisyUI** + **Tailwind CSS 4**.

### Installation

```bash
npm install @sqli/elevate-design-system
```

### Usage

```css
/* In your main CSS file */
@import '@sqli/elevate-design-system';
```

```html
<!-- Apply theme to document -->
<html data-theme="sqli-light"></html>
```

### Available Components (65+)

All components use **DaisyUI classes** (not `sqli-*` classes):

#### Actions

- **Button**: `btn`, `btn-primary`, `btn-secondary`, `btn-accent`
- **Dropdown**: `dropdown`, `dropdown-content`
- **Modal**: `modal`, `modal-box`
- **Swap**: `swap`, `swap-rotate`
- **Theme Controller**: `theme-controller`

#### Data Display

- **Card**: `card`, `card-body`, `card-title`
- **Badge**: `badge`, `badge-primary`
- **Avatar**: `avatar`, `rounded-full`
- **Table**: `table`, `table-zebra`
- **Accordion**: `collapse`, `collapse-arrow`
- **Timeline**: `timeline`
- **Stat**: `stat`, `stat-title`, `stat-value`

#### Data Input

- **Input**: `input`, `input-bordered`
- **Select**: `select`, `select-bordered`
- **Checkbox**: `checkbox`, `checkbox-primary`
- **Radio**: `radio`, `radio-primary`
- **Toggle**: `toggle`, `toggle-primary`
- **Textarea**: `textarea`, `textarea-bordered`
- **Range**: `range`, `range-primary`
- **Rating**: `rating`

#### Feedback

- **Alert**: `alert`, `alert-info`, `alert-success`, `alert-warning`, `alert-error`
- **Toast**: `toast`
- **Loading**: `loading`, `loading-spinner`
- **Progress**: `progress`, `progress-primary`
- **Skeleton**: `skeleton`

#### Navigation

- **Navbar**: `navbar`
- **Tabs**: `tabs`, `tab`, `tab-active`
- **Breadcrumbs**: `breadcrumbs`
- **Menu**: `menu`
- **Pagination**: `pagination`
- **Steps**: `steps`, `step`

#### Layout

- **Divider**: `divider`
- **Drawer**: `drawer`
- **Hero**: `hero`
- **Footer**: `footer`

### DaisyUI Class Naming

Components use DaisyUI's semantic class system:

```html
<!-- Buttons -->
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-secondary">Secondary Action</button>

<!-- Cards -->
<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>Card content</p>
  </div>
</div>

<!-- Alerts -->
<div class="alert alert-info">Information message</div>
<div class="alert alert-success">Success message</div>
```

### Theme Variables

Access SQLI brand colors via CSS variables:

```css
/* Direct brand color access */
.custom-element {
  color: var(--color-sqli-cobalt);
  background: var(--color-sqli-cream);
}

/* DaisyUI semantic colors */
.themed-element {
  color: var(--color-primary);
  background: var(--color-base-100);
}
```

### Accessibility

The design system respects WCAG 2.1 standards:

- Compliant color contrast (AA minimum)
- Full keyboard support
- Appropriate ARIA attributes
- Visible focus states
- Reduced motion support

### Responsive Breakpoints

| Breakpoint | Width  | Usage            |
| ---------- | ------ | ---------------- |
| Mobile     | 375px  | Smartphones      |
| Tablet     | 768px  | Tablets          |
| Desktop    | 1280px | Standard screens |
| Desktop XL | 1920px | Large screens    |

---

## Compliance Checklist

### For All SQLI Deliverables

- [ ] Cream background (#FFFAF0) or authorized brand color
- [ ] Text in Midnight Blue (#0F0E2B) or authorized contrasting color
- [ ] TWK Everett font used
- [ ] Logo properly placed with safe zone respected
- [ ] Cobalt Blue (#1F24E9) for interactive elements (light mode)
- [ ] Sky Blue (#6DA5FF) for interactive elements (dark mode)
- [ ] "Professionally Human" tone of voice respected
- [ ] No corporate clichés
- [ ] SQLI in uppercase in text
- [ ] DaisyUI components used with SQLI themes
- [ ] WCAG 2.1 accessibility respected
