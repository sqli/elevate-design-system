# Development Guide

This document provides instructions for setting up and developing the Elevate Design System.

## Prerequisites

- **Node.js** >= 22.0.0
- **npm** >= 10.0.0

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://gitlab.paris.sqli.com/sqli/design-system.git
cd design-system

# Install dependencies
npm install
```

### Development Mode

Start the development server with live CSS compilation and Storybook:

```bash
npm run dev
```

This runs concurrently:

- CSS watch mode (recompiles on changes)
- Storybook dev server at http://localhost:6006

### Build

```bash
# Build CSS and assets
npm run build

# Build Storybook static site
npm run build-storybook
```

## Project Structure

```
elevate-design-system/
├── assets/
│   ├── fonts/          # TWK Everett font files
│   ├── logos/          # SQLI logos and ascenders
│   └── images/         # Demo images for Storybook
├── dist/               # Built CSS output
├── src/
│   └── css/
│       └── main.css    # DaisyUI themes + custom overrides
├── stories/            # Storybook stories
│   ├── 0-Governance/   # Documentation, changelog
│   ├── 1-Foundations/  # Colors, typography, theming
│   └── 2-Components/   # DaisyUI component stories
│       ├── Actions/
│       ├── DataDisplay/
│       ├── DataInput/
│       ├── Feedback/
│       ├── Layout/
│       ├── Navigation/
│       └── Mockup/
└── tests/              # Unit tests
```

## Available Scripts

| Script                    | Description                          |
| ------------------------- | ------------------------------------ |
| `npm run dev`             | Start development mode               |
| `npm run build`           | Build CSS and assets                 |
| `npm run build:css`       | Build CSS only                       |
| `npm run storybook`       | Start Storybook                      |
| `npm run build-storybook` | Build Storybook static               |
| `npm run lint`            | Run all linters                      |
| `npm run lint:css`        | Lint CSS files                       |
| `npm run lint:js`         | Lint JavaScript files                |
| `npm run lint:fix`        | Fix linting issues                   |
| `npm run format`          | Check formatting                     |
| `npm run format:fix`      | Fix formatting                       |
| `npm run test`            | Run unit tests                       |
| `npm run test:watch`      | Run tests in watch mode              |
| `npm run test:coverage`   | Run tests with coverage              |
| `npm run test:a11y`       | Run accessibility tests              |
| `npm run check:size`      | Check bundle size                    |
| `npm run validate`        | Run all checks (lint, format, build) |
| `npm run pre-release`     | Validate + tests with coverage       |
| `npm run clean`           | Remove build artifacts               |
| `npm run reset`           | Clean + reinstall dependencies       |

## CSS Architecture

### Technology Stack

| Tool         | Version | Usage             |
| ------------ | ------- | ----------------- |
| Tailwind CSS | 4.x     | CSS framework     |
| DaisyUI      | 5.x     | Component library |
| Storybook    | 10.x    | Documentation     |
| Vite         | 6.x     | Bundler           |
| Vitest       | 3.x     | Testing           |

### Main CSS File

The design system CSS is in `src/css/main.css`:

```css
/* Tailwind CSS 4 + DaisyUI */
@import 'tailwindcss';
@plugin "daisyui";

/* TWK Everett Font Face Declarations */
@font-face {
  /* ... */
}

/* SQLI Light Theme */
@plugin "daisyui/theme" {
  name: 'sqli-light';
  default: true;
  /* ... theme variables */
}

/* SQLI Dark Theme */
@plugin "daisyui/theme" {
  name: 'sqli-dark';
  prefersdark: true;
  /* ... theme variables */
}

/* Custom Focus Styles */
/* Link Styles */
/* Toggle Styles */
/* Accessibility */
```

### DaisyUI Components

Components use DaisyUI classes (not `sqli-*` classes):

```html
<!-- Buttons -->
<button class="btn">Default</button>
<button class="btn btn-primary">Primary</button>

<!-- Cards -->
<div class="card bg-base-100 shadow-xl">
  <div class="card-body">Content</div>
</div>

<!-- Inputs -->
<input type="text" class="input input-bordered" />
```

### Theme System

Themes are applied via `data-theme` attribute:

```html
<!-- Light theme (default) -->
<html data-theme="sqli-light">
  <!-- Dark theme -->
  <html data-theme="sqli-dark">
    <!-- Scoped theme -->
    <div data-theme="sqli-dark" class="bg-base-100 text-base-content">
      Dark section within light page
    </div>
  </html>
</html>
```

### Color System

The design system uses **OKLCH** color format for all theme definitions:

```css
/* SQLI Brand Colors in OKLCH */
--color-primary: oklch(42% 0.28 265); /* Cobalt Blue */
--color-secondary: oklch(15% 0.04 270); /* Midnight Blue */
--color-secondary-content: oklch(68% 0.14 250); /* Sky Blue */
```

**Why OKLCH?**

- DaisyUI 5.x uses OKLCH natively for better perceptual uniformity
- Color manipulation (lightness, saturation) is more intuitive
- Consistent contrast ratios across color palette

### Adding Custom Overrides

Add CSS overrides in `src/css/main.css` after theme definitions.

**Important:** Always use DaisyUI CSS variables, never hardcode values:

```css
/* ✅ Correct - Use DaisyUI variables */
.input:focus {
  border-color: var(--color-primary) !important;
}

/* ✅ Correct - Use semantic colors */
.custom-element {
  background-color: var(--color-base-200);
  color: var(--color-base-content);
}

/* ❌ Avoid - Hardcoded color values */
.input:focus {
  border-color: oklch(42% 0.28 265) !important; /* Don't do this */
}
```

## Testing

### Unit Tests

Tests are written with Vitest and located in `tests/`:

```bash
# Run all tests
npm run test

# Watch mode
npm run test:watch

# With coverage
npm run test:coverage

# UI mode
npm run test:ui
```

### Accessibility Tests

```bash
# Build Storybook and run axe tests
npm run test:a11y
```

## Code Quality

### Pre-commit Hooks

Husky runs lint-staged on commit:

- CSS files: Stylelint + Prettier
- JS files: ESLint + Prettier
- JSON/MD files: Prettier

### Commit Messages

Follow Conventional Commits:

```
feat: add new button variant
fix: correct modal z-index
docs: update installation guide
style: format CSS files
refactor: reorganize token files
test: add accessibility tests
chore: update dependencies
```

## Troubleshooting

### CSS not updating

```bash
# Clear cache and rebuild
npm run clean
npm run build:css
```

### Storybook issues

```bash
# Clear Storybook cache
rm -rf node_modules/.cache/storybook
npm run storybook
```

### Test failures

```bash
# Run tests in verbose mode
npm run test -- --reporter=verbose
```

### Node version mismatch

Ensure you're using Node.js 22+:

```bash
node -v  # Should be >= 22.0.0
```

## Contributing

1. Create a feature branch from `main`
2. Make changes following the coding standards
3. Write/update tests as needed
4. Run `npm run validate` before committing
5. Submit a merge request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.
