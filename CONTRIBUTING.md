# Contributing to Elevate Design System

Guide for contributing to the Elevate Design System.

## Getting Started

```bash
# Clone the repository
git clone https://gitlab.paris.sqli.com/sqli/design-system.git
cd design-system

# Install dependencies
npm install

# Start development
npm run dev
```

## Project Structure

```
elevate-design-system/
├── src/css/
│   └── main.css              # DaisyUI themes + custom overrides
├── stories/
│   ├── 0-Governance/         # Documentation, changelog, contribution guide
│   ├── 1-Foundations/        # Colors, typography, theming
│   └── 2-Components/         # DaisyUI component stories
│       ├── Actions/
│       ├── DataDisplay/
│       ├── DataInput/
│       ├── Feedback/
│       ├── Layout/
│       ├── Navigation/
│       └── Mockup/
├── assets/
│   ├── fonts/                # TWK Everett font files
│   └── logos/                # SQLI logos and ascenders
├── tests/                    # Unit tests
└── dist/                     # Build output
```

## Architecture

The Elevate Design System is built on **DaisyUI** (component library) + **Tailwind CSS 4**.

- **Components**: Use DaisyUI classes (`btn`, `card`, `modal`, etc.)
- **Themes**: Custom SQLI themes (`sqli-light`, `sqli-dark`)
- **Fonts**: TWK Everett loaded via CSS

## Adding a New Component Story

### 1. Create the Story File

Create `stories/2-Components/<Category>/ComponentName.stories.js`:

```javascript
/**
 * @component ComponentName
 * @description Brief description of the component.
 * @status Stable | Beta | Experimental
 * @since 0.10.0
 */
export default {
  title: 'Components/<Category>/ComponentName',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI ComponentName styled with SQLI themes.

## Usage
\`\`\`html
<div class="component-class">Content</div>
\`\`\`
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="component-class">Default component</div>
`;

export const Variants = () => `
  <div class="flex gap-4">
    <div class="component-class">Default</div>
    <div class="component-class component-class-primary">Primary</div>
  </div>
`;

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <div class="component-class">Dark mode</div>
  </div>
`;
```

### 2. Story Requirements

Each component story should include:

1. **Default** - Base state
2. **Variants** - All visual variants (primary, secondary, etc.)
3. **Sizes** - All available sizes (xs, sm, md, lg)
4. **States** - Interactive states (hover, focus, disabled)
5. **DarkMode** - Rendering with `data-theme="sqli-dark"`

## Adding Custom CSS Overrides

If DaisyUI defaults need adjustment for SQLI brand compliance, add overrides in `src/css/main.css`:

```css
/* ==========================================================================
   Custom Component Overrides
   ========================================================================== */

/* Example: Custom focus styles */
.component:focus {
  border-color: oklch(42% 0.28 265) !important; /* Cobalt */
  box-shadow: none !important;
}

/* Dark mode variant */
[data-theme='sqli-dark'] .component:focus {
  border-color: oklch(68% 0.14 250) !important; /* Sky */
}
```

## Theme System

### DaisyUI Themes

Themes are configured in `src/css/main.css` using `@plugin "daisyui/theme"`:

```css
@plugin "daisyui/theme" {
  name: 'sqli-light';
  default: true;
  color-scheme: light;

  --color-primary: oklch(42% 0.28 265); /* Cobalt */
  --color-secondary: oklch(42% 0.28 265); /* Cobalt */
  --color-base-100: oklch(98.5% 0.012 85); /* Cream */
  /* ... */
}
```

### Theme Switching

Use `data-theme` attribute (NOT `.dark` class):

```html
<!-- Light theme -->
<html data-theme="sqli-light">
  <!-- Dark theme -->
  <html data-theme="sqli-dark">
    <!-- Scoped dark section -->
    <div data-theme="sqli-dark" class="bg-base-100 text-base-content">Dark content</div>
  </html>
</html>
```

## SQLI Brand Colors

| Color    | Hex       | OKLCH                   | Usage                 |
| -------- | --------- | ----------------------- | --------------------- |
| Cream    | `#FFFAF0` | `oklch(98.5% 0.012 85)` | Light background      |
| Midnight | `#0F0E2B` | `oklch(15% 0.04 270)`   | Dark background, text |
| Cobalt   | `#1F24E9` | `oklch(42% 0.28 265)`   | Primary (light mode)  |
| Sky      | `#6DA5FF` | `oklch(68% 0.14 250)`   | Primary (dark mode)   |

## Code Style Rules

### CSS Rules

1. **Use OKLCH format** for theme colors (DaisyUI standard)
2. **Use CSS variables** for direct color access:
   ```css
   color: var(--color-sqli-cobalt);
   background: var(--color-sqli-cream);
   ```
3. **Dark mode uses `data-theme` attribute**:
   ```css
   [data-theme='sqli-dark'] .component {
     /* dark mode styles */
   }
   ```

### Story Rules

1. Always include `tags: ['autodocs']`
2. Add `DarkMode` story for components with visual styles
3. Use semantic HTML in examples
4. Document DaisyUI class usage

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

**Scopes:** `css`, `stories`, `docs`, `ci`, `deps`, `release`

**Examples:**

```
feat(stories): add Toast component story
fix(css): correct focus border color
docs(stories): add dark mode examples to Button
```

## Pull Request Process

1. Create a feature branch: `git checkout -b feat/component-name`
2. Make your changes following the guidelines
3. Run validation: `npm run validate`
4. Commit with conventional commit message
5. Push and create MR
6. Ensure CI passes
7. Request review

## Checklist Before Submitting

- [ ] Story created with all variants
- [ ] DarkMode story included
- [ ] `npm run validate` passes
- [ ] All tests pass (`npm test`)
- [ ] Conventional commit message used
- [ ] Documentation updated if needed

## Questions?

Open an issue or contact the Design System team.
