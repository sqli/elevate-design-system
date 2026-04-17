# Elevate Design System

React component library for SQLI applications built with **Radix UI**, **CVA**, and **Tailwind CSS 4**.

**Current version: 0.12.0-alpha** - [View Changelog](stories/0-Governance/Changelog.mdx)

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Components | React 19 + TypeScript |
| Primitives | Radix UI |
| Variants | class-variance-authority (CVA) |
| Styling | Tailwind CSS 4 + CSS variables |
| Build | tsup (ESM + CJS + .d.ts) |
| Storybook | @storybook/react-vite |

## Installation

### Git Repository (Recommended)

Install directly from GitLab Paris:

```bash
# Latest version (main branch)
npm install git+https://gitlab-paris.sqli.com/SQLI/elevate-design-system.git

# Specific version tag
npm install git+https://gitlab-paris.sqli.com/SQLI/elevate-design-system.git#v1.0.0

# Development branch
npm install git+https://gitlab-paris.sqli.com/SQLI/elevate-design-system.git#dev
```

### Quick Start (React)

```tsx
import { Button, Card, CardBody, Alert } from '@sqli/elevate-design-system';
import '@sqli/elevate-design-system/css';

function App() {
  return (
    <div data-theme="sqli-light">
      <Button variant="primary">Hello World</Button>
    </div>
  );
}
```

### CSS-Only Usage

```css
/* In your main CSS file */
@import '@sqli/elevate-design-system/dist/sqli-design-system.css';
@import '@sqli/elevate-design-system/dist/fonts.css';
```

```html
<html data-theme="sqli-light">
  <button class="btn btn-primary">Hello World</button>
</html>
```

### npm Registry (Alternative)

If published to GitLab npm registry:

```bash
npm install @sqli/elevate-design-system
```

## Package Contents

| File                              | Description               | Size    |
| --------------------------------- | ------------------------- | ------- |
| `dist/index.js`                   | ESM React components      | -       |
| `dist/index.cjs`                  | CJS React components      | -       |
| `dist/index.d.ts`                 | TypeScript declarations    | -       |
| `dist/sqli-design-system.css`     | Full CSS (readable)       | ~267 KB |
| `dist/sqli-design-system.min.css` | Minified CSS (production) | ~198 KB |
| `dist/tokens.css`                 | CSS variables only        | ~3 KB   |
| `dist/fonts.css`                  | @font-face declarations   | ~2 KB   |
| `dist/fonts/`                     | TWK Everett font files    | -       |
| `dist/logos/`                     | SQLI logos (SVG & PNG)    | -       |
| `src/tailwind/preset.js`          | Tailwind CSS preset       | -       |

## Components

25 React components with TypeScript types and CVA variants:

```tsx
import { Button, Badge, Alert, Dialog, DialogTrigger, DialogContent } from '@sqli/elevate-design-system';

<Button variant="primary" size="lg">Action</Button>
<Badge variant="secondary">New</Badge>
<Alert variant="info">Information</Alert>
```

12 Radix UI primitives for accessible interactive components: Dialog, Accordion, Tabs, Select, Checkbox, RadioGroup, Switch, Slider, DropdownMenu, Tooltip, Toast, Label.

## Themes

| Theme        | Background | Primary | Usage     |
| ------------ | ---------- | ------- | --------- |
| `sqli-light` | Cream      | Cobalt  | Default   |
| `sqli-dark`  | Midnight   | Sky     | Dark mode |

```tsx
import { ElevateTheme, useTheme } from '@sqli/elevate-design-system';

<ElevateTheme defaultTheme="sqli-light">
  <App />
</ElevateTheme>
```

Or use the `data-theme` attribute directly:

```javascript
document.documentElement.setAttribute('data-theme', 'sqli-dark');
```

## Brand Colors

| Color    | Hex       | Usage            |
| -------- | --------- | ---------------- |
| Cream    | `#FFFAF0` | Light background |
| Midnight | `#0F0E2B` | Dark background  |
| Cobalt   | `#1F24E9` | Primary (light)  |
| Sky      | `#6DA5FF` | Primary (dark)   |

## Development

```bash
npm run dev              # Storybook + CSS watch
npm run build            # Build all assets (components + CSS + fonts + logos)
npm run build:components # Build React components only (tsup)
npm run storybook        # Launch Storybook
npm run typecheck        # TypeScript type checking
```

### Prerequisites

- Node.js >= 22
- npm >= 9

## Documentation

Full documentation available in Storybook:

- [Getting Started](stories/0-Governance/GettingStarted.mdx) - 5-minute quick start
- [Installation Guide](stories/0-Governance/Installation.mdx) - Git repository, frameworks
- [Design Tokens](stories/1-Foundations/DesignTokens.mdx) - CSS variables
- [Component Index](stories/0-Governance/ComponentIndex.mdx) - All 25 React components

### Brand Guidelines

- [Sommaire](docs/README.md)
- [Distinctive Assets](docs/01-distinctive-assets.md) - Logo, Ascenders, Typeface, Couleurs, Promise, Icons
- [Usage Guide](docs/02-usage-guide.md) - Safe zone, placement, couleurs, don'ts
- [Tone of Voice](docs/03-tone-of-voice.md) - Professionally Human, vocabulaire, copywriting
- [Accessibility](docs/04-accessibility.md) - WCAG 2.1 AAA, guides couleurs

## License

Proprietary SQLI - Internal use only.

## Support

- Repository: https://gitlab-paris.sqli.com/SQLI/elevate-design-system
- Brand Guidelines: See [SQLI-BRAND-REFERENCE.md](SQLI-BRAND-REFERENCE.md)
