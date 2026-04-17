# Contributing to Elevate Design System

Guide for contributing to the Elevate Design System.

## Getting Started

```bash
# Clone the repository
git clone https://github.com/sqli/elevate-design-system.git
cd design-system

# Install dependencies
npm install

# Start development
npm run dev
```

## Project Structure

```
elevate-design-system/
├── src/
│   ├── components/         # React components (25 modules)
│   │   ├── Button/        # Button.tsx + index.ts
│   │   ├── Dialog/        # Radix Dialog wrapper
│   │   ├── Select/        # Radix Select wrapper
│   │   └── ...
│   ├── lib/
│   │   └── utils.ts       # cn() utility (clsx + tailwind-merge)
│   ├── css/
│   │   ├── main.css       # Entry point + themes
│   │   ├── _fonts.css     # TWK Everett font declarations
│   │   ├── _tokens.css    # Design tokens
│   │   ├── _customizations.css  # Component overrides
│   │   └── _utilities.css # Custom utilities
│   ├── charts/            # Recharts integration
│   ├── tailwind/          # Tailwind preset for consumers
│   └── index.ts           # Barrel export
├── stories/
│   ├── 0-Governance/      # Documentation, changelog, contribution guide
│   ├── 1-Foundations/     # Colors, typography, theming
│   ├── 2-Components/      # Component stories (TSX)
│   │   ├── Actions/
│   │   ├── DataDisplay/
│   │   ├── DataInput/
│   │   ├── Feedback/
│   │   ├── Layout/
│   │   ├── Navigation/
│   │   └── Mockup/
│   └── 3-SpecificComponents/
├── assets/
│   ├── fonts/             # TWK Everett font files
│   └── logos/             # SQLI logos and ascenders
├── dist/                  # Build output
├── tsconfig.json          # TypeScript configuration
└── tsup.config.ts         # Component build configuration
```

## Architecture

The Elevate Design System is built on **React 19** + **Radix UI** + **CVA** + **Tailwind CSS 4** + **TypeScript**.

- **React Components**: 25 typed components with CVA variants and forwardRef
- **Radix UI Primitives**: 12 accessible primitives (Dialog, Accordion, Tabs, Select, etc.)
- **ElevateTheme**: Theme provider with `useTheme()` hook
- **Themes**: Custom SQLI themes (`sqli-light`, `sqli-dark`)
- **Fonts**: TWK Everett loaded via CSS

## Adding a New React Component

### 1. Create the Component

Create `src/components/<ComponentName>/<ComponentName>.tsx`:

```tsx
import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const componentVariants = cva('base-classes', {
  variants: {
    variant: { primary: '...', secondary: '...' },
    size: { sm: '...', md: '...', lg: '...' },
  },
  defaultVariants: { variant: 'primary', size: 'md' },
});

export interface ComponentNameProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {}

export const ComponentName = forwardRef<HTMLDivElement, ComponentNameProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div ref={ref} className={cn(componentVariants({ variant, size }), className)} {...props} />
  )
);
ComponentName.displayName = 'ComponentName';
```

Create `src/components/<ComponentName>/index.ts`:

```ts
export { ComponentName } from './ComponentName';
export type { ComponentNameProps } from './ComponentName';
```

Export from `src/index.ts`:

```ts
export { ComponentName } from './components/ComponentName';
```

### 2. Create the Story

Create `stories/2-Components/<Category>/ComponentName.stories.tsx`:

```tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from '../../../src/components/ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/<Category>/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
React **ComponentName** with SQLI themes.

## Usage
\`\`\`tsx
import { ComponentName } from '@sqli/elevate-design-system';

<ComponentName variant="primary">Content</ComponentName>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ComponentName>;

export const Default: Story = {
  args: { children: 'Default', variant: 'primary' },
};

export const Variants = () => (
  <div className="flex gap-4">
    <ComponentName variant="primary">Primary</ComponentName>
    <ComponentName variant="secondary">Secondary</ComponentName>
  </div>
);

export const DarkMode = () => (
  <div data-theme="sqli-dark" className="bg-[var(--color-base-100)] p-6 rounded-lg">
    <ComponentName variant="primary">Dark Mode</ComponentName>
  </div>
);
DarkMode.parameters = { backgrounds: { default: 'dark' } };
```

### 3. Story Requirements

Each component story should include:

1. **Default** - Base state (StoryObj with args)
2. **Variants** - All visual variants (primary, secondary, etc.)
3. **Sizes** - All available sizes (xs, sm, md, lg)
4. **States** - Interactive states (hover, focus, disabled)
5. **DarkMode** - Rendering with `data-theme="sqli-dark"`

## Adding Custom CSS Overrides

Add overrides in `src/css/main.css` using CSS variables:

```css
/* ==========================================================================
   Custom Component Overrides
   ========================================================================== */

/* Example: Custom focus styles */
.component:focus {
  border-color: var(--color-focus) !important;
  box-shadow: none !important;
}

/* Dark mode variant */
[data-theme='sqli-dark'] .component:focus {
  border-color: var(--color-focus) !important;
}
```

## Theme System

### ElevateTheme Provider (React)

```tsx
import { ElevateTheme, useTheme } from '@sqli/elevate-design-system';

<ElevateTheme defaultTheme="sqli-light">
  <App />
</ElevateTheme>
```

### data-theme Attribute (HTML/CSS)

Use `data-theme` attribute (NOT `.dark` class):

```html
<!-- Light theme -->
<html data-theme="sqli-light">

<!-- Dark theme -->
<html data-theme="sqli-dark">

<!-- Scoped dark section -->
<div data-theme="sqli-dark" class="bg-base-100 text-base-content">Dark content</div>
```

## SQLI Brand Colors

| Color    | Hex       | OKLCH                   | Usage                 |
| -------- | --------- | ----------------------- | --------------------- |
| Cream    | `#FFFAF0` | `oklch(98.5% 0.012 85)` | Light background      |
| Midnight | `#0F0E2B` | `oklch(15% 0.04 270)`   | Dark background, text |
| Cobalt   | `#1F24E9` | `oklch(42% 0.28 265)`   | Primary (light mode)  |
| Sky      | `#6DA5FF` | `oklch(68% 0.14 250)`   | Primary (dark mode)   |

## Code Style Rules

### TypeScript Rules

1. **Use `forwardRef`** on all components for ref forwarding
2. **Use CVA** for variant management (`class-variance-authority`)
3. **Use `cn()`** for class merging (clsx + tailwind-merge)
4. **Export types** alongside components
5. **Use strict mode** (`strict: true` in tsconfig)

### CSS Rules

1. **Use OKLCH format** for theme colors
2. **Use CSS variables** for color access:
   ```css
   color: var(--color-primary);
   background: var(--color-base-100);
   border-color: var(--color-focus);
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
4. Document React component props and imports

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

**Scopes:** `css`, `stories`, `docs`, `ci`, `deps`, `release`, `components`

**Examples:**

```
feat(components): add Tooltip component with Radix primitive
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

- [ ] Component created with CVA variants and forwardRef
- [ ] Story created with all variants (including DarkMode)
- [ ] TypeScript types exported
- [ ] `npm run validate` passes
- [ ] `npm run typecheck` passes
- [ ] Conventional commit message used
- [ ] Documentation updated if needed

## Questions?

Open an issue or contact the Design System team.
