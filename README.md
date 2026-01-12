# Elevate Design System

Design system for SQLI applications built on **DaisyUI** with custom SQLI themes.

**Current version: 0.5.0-alpha** - [View Changelog](stories/0-Governance/Changelog.mdx)

### Storybook

| Environment | URL                                                      | Branch |
| ----------- | -------------------------------------------------------- | ------ |
| **Stable**  | https://main-bvxea6i-n3mp4dy5ud5ck.fr-3.platformsh.site/ | main   |
| **Dev**     | https://dev-54ta5gq-n3mp4dy5ud5ck.fr-3.platformsh.site/  | dev    |

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

Then import in your CSS or JS:

```css
/* In your main CSS file */
@import '@sqli/elevate-design-system/dist/sqli-design-system.css';

/* Or minified version */
@import '@sqli/elevate-design-system/dist/sqli-design-system.min.css';

/* Include fonts (optional but recommended) */
@import '@sqli/elevate-design-system/dist/fonts.css';
```

```javascript
// In your JS entry point
import '@sqli/elevate-design-system/dist/sqli-design-system.css';
import '@sqli/elevate-design-system/dist/fonts.css';
```

Apply a theme to your HTML:

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

```css
@import '@sqli/elevate-design-system';
```

## Package Contents

| File                              | Description               | Size    |
| --------------------------------- | ------------------------- | ------- |
| `dist/sqli-design-system.css`     | Full CSS (readable)       | ~267 KB |
| `dist/sqli-design-system.min.css` | Minified CSS (production) | ~198 KB |
| `dist/tokens.css`                 | CSS variables only        | ~3 KB   |
| `dist/fonts.css`                  | @font-face declarations   | ~2 KB   |
| `dist/fonts/`                     | TWK Everett font files    | -       |
| `dist/logos/`                     | SQLI logos (SVG & PNG)    | -       |
| `src/tailwind/preset.js`          | Tailwind CSS preset       | -       |

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
- [Installation Guide](stories/0-Governance/Installation.mdx) - Git repository, Platform.sh, frameworks
- [Design Tokens](stories/1-Foundations/DesignTokens.mdx) - CSS variables
- [Component Index](stories/0-Governance/ComponentIndex.mdx) - All 65+ components

## License

Proprietary SQLI - Internal use only.

## Support

- Repository: https://gitlab-paris.sqli.com/SQLI/elevate-design-system
- Brand Guidelines: See [SQLI-BRAND-REFERENCE.md](SQLI-BRAND-REFERENCE.md)
