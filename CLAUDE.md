# Elevate Design System

Design system for SQLI applications, built on **DaisyUI** with custom SQLI themes.

**Version:** 0.11.0-alpha

## Important Instructions

When working on this project or SQLI deliverables, you MUST follow the brand guidelines defined in `SQLI-BRAND-REFERENCE.md`.

## Philosophy

> **Stateless Design System**: The Elevate Design System is a **CSS-only** library that provides themed components via DaisyUI classes. It does **not** include JavaScript framework integrations (React, Angular, Vue, etc.).

Framework integration is the responsibility of consuming projects. This design system provides:

- **CSS styles** and **DaisyUI themes** (sqli-light, sqli-dark)
- **HTML examples** demonstrating component usage
- **Brand assets** (fonts, logos, images)
- **Documentation** for implementation guidance

### Integration Examples

Projects consuming this design system should create their own wrappers:

**React**

```jsx
// In your project (not in this DS)
import '@sqli/elevate-design-system/dist/sqli-design-system.css';

export const Button = ({ variant = 'primary', children, ...props }) => (
  <button className={`btn btn-${variant}`} {...props}>
    {children}
  </button>
);
```

**Vue**

```vue
<!-- In your project (not in this DS) -->
<script setup>
import '@sqli/elevate-design-system/dist/sqli-design-system.css';
defineProps(['variant']);
</script>

<template>
  <button :class="`btn btn-${variant || 'primary'}`">
    <slot />
  </button>
</template>
```

**Angular**

```typescript
// In your project (not in this DS)
// styles.css: @import '@sqli/elevate-design-system/dist/sqli-design-system.css';

@Component({
  selector: 'app-button',
  template: `<button [class]="'btn btn-' + variant"><ng-content></ng-content></button>`,
})
export class ButtonComponent {
  @Input() variant = 'primary';
}
```

## Quick Reference

### Themes

The design system provides two DaisyUI themes:

| Theme        | Usage              | Background | Text     | Primary |
| ------------ | ------------------ | ---------- | -------- | ------- |
| `sqli-light` | Default light mode | Cream      | Midnight | Cobalt  |
| `sqli-dark`  | Dark mode          | Midnight   | Cream    | Sky     |

```html
<!-- Apply theme to document -->
<html data-theme="sqli-light">
  <!-- Or scope to specific element -->
  <div data-theme="sqli-dark">Dark content</div>
</html>
```

### Brand Colors

| Name     | Hex       | DaisyUI Variable           | Usage                  |
| -------- | --------- | -------------------------- | ---------------------- |
| Cream    | `#FFFAF0` | `--color-base-100` (light) | Light background       |
| Midnight | `#0F0E2B` | `--color-base-100` (dark)  | Dark background, text  |
| Cobalt   | `#1F24E9` | `--color-primary` (light)  | Primary interactions   |
| Sky      | `#6DA5FF` | `--color-primary` (dark)   | Dark mode interactions |

### Typography

- **Font**: TWK Everett
- **Body text**: Light (300)
- **Standard**: Regular (400)
- **Headings**: Medium (500)

### Logo

- Logo "sqli" always in **lowercase**
- In text, write **SQLI** in uppercase

### Promise

- **"Elevate. Digitally"** - period ONLY after "Elevate"

## Available Commands

- `/brand-check [content]` - Check brand guideline compliance
- `/brand-generate [request]` - Generate brand-compliant content

## Design System Architecture

The design system uses **DaisyUI** as its component library with custom SQLI themes:

```
stories/
├── 0-Governance/           # Documentation, changelog
├── 1-Foundations/          # Colors, typography, theming
└── 2-Components/           # DaisyUI components (65+)
    ├── Actions/            # Button, Dropdown, Modal, Swap, FAB
    ├── DataDisplay/        # Card, Badge, Avatar, Table, etc.
    ├── DataInput/          # Input, Select, Checkbox, Toggle, etc.
    ├── Feedback/           # Alert, Loading, Progress, Toast, etc.
    ├── Layout/             # Divider, Drawer, Hero, Stack, etc.
    ├── Navigation/         # Tabs, Menu, Navbar, Breadcrumbs, etc.
    └── Mockup/             # Browser, Phone, Code, Window
```

## Component Usage

All components use **DaisyUI classes** (not sqli-\* classes):

### Buttons

```html
<button class="btn">Default</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-link">Link</button>

<!-- Sizes -->
<button class="btn btn-xs">Extra Small</button>
<button class="btn btn-sm">Small</button>
<button class="btn btn-md">Medium</button>
<button class="btn btn-lg">Large</button>

<!-- States -->
<button class="btn btn-primary" disabled>Disabled</button>
<button class="btn btn-primary loading">Loading</button>
```

### Cards

```html
<div class="card bg-base-100 shadow-xl">
  <figure><img src="image.jpg" alt="Image" /></figure>
  <div class="card-body">
    <h2 class="card-title">Title</h2>
    <p>Description</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Action</button>
    </div>
  </div>
</div>
```

### Form Inputs

```html
<!-- Text input -->
<input type="text" placeholder="Type here" class="input input-bordered w-full" />

<!-- With label -->
<label class="form-control w-full">
  <div class="label">
    <span class="label-text">Email</span>
  </div>
  <input type="email" class="input input-bordered" />
</label>

<!-- Select -->
<select class="select select-bordered w-full">
  <option disabled selected>Pick one</option>
  <option>Option 1</option>
</select>

<!-- Checkbox -->
<input type="checkbox" class="checkbox checkbox-primary" />

<!-- Toggle -->
<input type="checkbox" class="toggle toggle-primary" />

<!-- Radio -->
<input type="radio" name="radio" class="radio radio-primary" />
```

### Alerts

```html
<div role="alert" class="alert">
  <span>Default alert</span>
</div>
<div role="alert" class="alert alert-info">
  <span>Info alert</span>
</div>
<div role="alert" class="alert alert-success">
  <span>Success alert</span>
</div>
<div role="alert" class="alert alert-warning">
  <span>Warning alert</span>
</div>
<div role="alert" class="alert alert-error">
  <span>Error alert</span>
</div>
```

### Navigation

```html
<!-- Tabs -->
<div role="tablist" class="tabs tabs-bordered">
  <a role="tab" class="tab">Tab 1</a>
  <a role="tab" class="tab tab-active">Tab 2</a>
  <a role="tab" class="tab">Tab 3</a>
</div>

<!-- Breadcrumbs -->
<div class="breadcrumbs text-sm">
  <ul>
    <li><a>Home</a></li>
    <li><a>Documents</a></li>
    <li>Current</li>
  </ul>
</div>

<!-- Menu -->
<ul class="menu bg-base-200 rounded-box w-56">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
</ul>
```

## Theme Switching

Use the DaisyUI Theme Controller:

```html
<!-- Toggle switch -->
<input type="checkbox" value="sqli-dark" class="toggle theme-controller" />

<!-- With icons -->
<label class="swap swap-rotate">
  <input type="checkbox" class="theme-controller" value="sqli-dark" />
  <svg class="swap-off h-6 w-6 fill-current"><!-- sun icon --></svg>
  <svg class="swap-on h-6 w-6 fill-current"><!-- moon icon --></svg>
</label>
```

## CSS Variables (Themes)

Themes use OKLCH color format in `src/css/main.css`:

```css
@plugin "daisyui/theme" {
  name: 'sqli-light';
  default: true;

  --color-primary: oklch(42% 0.28 265); /* Cobalt */
  --color-secondary: oklch(15% 0.04 270); /* Midnight */
  --color-secondary-content: oklch(68% 0.14 250); /* Sky */
  --color-base-100: oklch(98.5% 0.012 85); /* Cream */
  --color-base-content: oklch(15% 0.04 270); /* Midnight */
  /* ... */
}

@plugin "daisyui/theme" {
  name: 'sqli-dark';
  prefersdark: true;

  --color-primary: oklch(68% 0.14 250); /* Sky */
  --color-secondary: oklch(98% 0.005 85); /* Cream */
  --color-secondary-content: oklch(15% 0.04 270); /* Midnight */
  --color-base-100: oklch(15% 0.04 270); /* Midnight */
  --color-base-content: oklch(98% 0.005 85); /* Cream */
  /* ... */
}
```

## Storybook Best Practices

### Story Structure

Each component story should include:

1. **Default** - Base state
2. **Variants** - Color variants (primary, secondary, accent, etc.)
3. **Sizes** - Size variants (xs, sm, md, lg)
4. **DarkMode** - Rendering with `data-theme="sqli-dark"`

### Example Story

```javascript
export default {
  title: 'Components/Actions/Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `DaisyUI Button component with SQLI themes.`,
      },
    },
  },
};

export const Default = () => `
  <button class="btn">Button</button>
`;

export const Variants = () => `
  <div class="flex gap-2">
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
  </div>
`;

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="p-4 rounded-lg bg-base-100">
    <button class="btn btn-primary">Primary in Dark</button>
  </div>
`;
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
```

## Assets

Assets are in the `assets/` folder:

- `fonts/` - TWK Everett font (WOFF, WOFF2, OTF, TTF)
- `logos/` - SQLI logos and Ascenders (PNG and SVG)
- `images/` - Photos for Storybook examples

## Versioning

Versions must be synchronized between:

1. `package.json` (`version` field)
2. `stories/0-Governance/Changelog.mdx` (latest entry)
3. Git tags (format `vX.Y.Z-suffix`)

### Release Workflow

1. Update `Changelog.mdx` with changes
2. Update `version` in `package.json`
3. Commit: `chore(release): vX.Y.Z`
4. Tag: `git tag vX.Y.Z`
5. Push: `git push origin main --tags`

## Useful Scripts

```bash
# Development
npm run dev              # Start Storybook + watch CSS
npm run storybook        # Start Storybook only
npm run build:css        # Build CSS

# Quality
npm run lint             # Lint CSS + JS
npm run validate         # Lint + Format + Build

# Maintenance
npm run clean            # Remove dist/, storybook-static/
npm run reset            # Clean + reinstall dependencies
```

## DaisyUI Documentation

For complete component documentation, see:

- [DaisyUI Components](https://daisyui.com/components/)
- [DaisyUI Themes](https://daisyui.com/docs/themes/)

## Complete Reference

See `SQLI-BRAND-REFERENCE.md` for complete brand guidelines documentation.
