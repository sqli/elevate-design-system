# Elevate Design System

Design system for SQLI applications built on **DaisyUI** with custom SQLI themes.

**Current version: 0.5.0-alpha** - [View Changelog](stories/0-Governance/Changelog.mdx) | [View Storybook](https://sqli.gitlab.io/design-system)

## Installation

### npm (Recommended)

```bash
npm install @sqli/elevate-design-system
```

```css
@import '@sqli/elevate-design-system';
```

```html
<html data-theme="sqli-light">
  <button class="btn btn-primary">Hello World</button>
</html>
```

### CDN (unpkg)

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@sqli/elevate-design-system/dist/sqli-design-system.min.css"
/>
<link rel="stylesheet" href="https://unpkg.com/@sqli/elevate-design-system/dist/fonts.css" />
```

### CDN (jsDelivr)

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sqli/elevate-design-system/dist/sqli-design-system.min.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sqli/elevate-design-system/dist/fonts.css"
/>
```

## Package Exports

| Export                                  | Description        | Usage                                                     |
| --------------------------------------- | ------------------ | --------------------------------------------------------- |
| `@sqli/elevate-design-system`           | Full CSS           | `@import '@sqli/elevate-design-system'`                   |
| `@sqli/elevate-design-system/css/min`   | Minified CSS       | `@import '@sqli/elevate-design-system/css/min'`           |
| `@sqli/elevate-design-system/tokens`    | CSS variables only | `@import '@sqli/elevate-design-system/tokens'`            |
| `@sqli/elevate-design-system/fonts.css` | Font declarations  | `@import '@sqli/elevate-design-system/fonts.css'`         |
| `@sqli/elevate-design-system/preset`    | Tailwind preset    | `import preset from '@sqli/elevate-design-system/preset'` |

## Themes

| Theme        | Background | Primary | Usage     |
| ------------ | ---------- | ------- | --------- |
| `sqli-light` | Cream      | Cobalt  | Default   |
| `sqli-dark`  | Midnight   | Sky     | Dark mode |

```javascript
// Toggle theme
document.documentElement.setAttribute('data-theme', 'sqli-dark');
```

## Brand Colors

| Color    | Hex       | Usage            |
| -------- | --------- | ---------------- |
| Cream    | `#FFFAF0` | Light background |
| Midnight | `#0F0E2B` | Dark background  |
| Cobalt   | `#1F24E9` | Primary (light)  |
| Sky      | `#6DA5FF` | Primary (dark)   |

## Components

65+ DaisyUI components with SQLI themes:

```html
<button class="btn btn-primary">Button</button>
<div class="card bg-base-100 shadow-xl">...</div>
<div class="alert alert-info">Alert</div>
```

See [DaisyUI Components](https://daisyui.com/components/) for full documentation.

## Development

```bash
npm run dev              # Storybook + CSS watch
npm run build            # Build all assets
npm run storybook        # Launch Storybook
npm test                 # Run tests
```

### Prerequisites

- Node.js >= 22
- npm >= 9

## Documentation

Full documentation available in Storybook:

- [Getting Started](stories/0-Governance/GettingStarted.mdx) - 5-minute quick start
- [Installation Guide](stories/0-Governance/Installation.mdx) - npm, CDN, frameworks
- [Design Tokens](stories/1-Foundations/DesignTokens.mdx) - CSS variables
- [Component Index](stories/0-Governance/ComponentIndex.mdx) - All 65+ components

## License

Proprietary SQLI - Internal use only.

## Support

- Repository: https://gitlab.paris.sqli.com/sqli/design-system
- Brand Guidelines: See [SQLI-BRAND-REFERENCE.md](SQLI-BRAND-REFERENCE.md)
