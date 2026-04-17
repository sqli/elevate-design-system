# Elevate Design System

React component library for SQLI applications, built with **Radix UI** primitives, **Tailwind CSS**, and **TypeScript**.

**Version:** 0.12.0-alpha

## Important Instructions

When working on this project or SQLI deliverables, you MUST follow the brand guidelines defined in `SQLI-BRAND-REFERENCE.md`.

## Architecture

The Elevate Design System is a **React component library** that provides:

- **React components** with type-safe props (TypeScript)
- **Radix UI primitives** for accessible interactive components (Dialog, Tabs, Accordion, etc.)
- **CVA (class-variance-authority)** for type-safe variant management
- **Tailwind CSS 4** for styling, using CSS custom properties for theming
- **Two SQLI themes** (sqli-light, sqli-dark) via `data-theme` attribute
- **Brand assets** (fonts, logos, images)

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Components | React 19 + TypeScript |
| Primitives | Radix UI (`radix-ui`) |
| Variants | `class-variance-authority` (CVA) |
| Styling | Tailwind CSS 4 + CSS variables |
| Class merging | `tailwind-merge` + `clsx` via `cn()` |
| Build | tsup (ESM + CJS + .d.ts) |
| Storybook | `@storybook/react-vite` |
| Icons | `hugeicons-react` |

### Project Structure

```
src/
├── components/         # React components (~20 modules)
│   ├── Button/        # Button.tsx + index.ts
│   ├── Dialog/        # Radix Dialog wrapper
│   ├── Select/        # Radix Select wrapper
│   └── ...
├── lib/
│   └── utils.ts       # cn() utility
├── css/
│   ├── main.css       # Themes + imports
│   ├── _fonts.css     # TWK Everett font faces
│   ├── _tokens.css    # Design tokens
│   ├── _customizations.css  # Code block, Prism.js styles
│   └── _utilities.css # Custom utilities (sr-only, reduced motion)
├── charts/            # Recharts integration
├── tailwind/          # Tailwind preset for consumers
└── index.ts           # Barrel export

stories/
├── 0-Governance/      # Documentation, changelog
├── 1-Foundations/     # Colors, typography, theming, icons
├── 2-Components/      # Component stories (67 files)
│   ├── Actions/       # Button, Dropdown, Dialog, Swap, FAB
│   ├── DataDisplay/   # Card, Badge, Avatar, Table, etc.
│   ├── DataInput/     # Input, Select, Checkbox, Radio, etc.
│   ├── Feedback/      # Alert, Loading, Progress, Toast, etc.
│   ├── Layout/        # Divider, Drawer, Hero, Stack, etc.
│   ├── Navigation/    # Tabs, Menu, Navbar, Breadcrumbs, etc.
│   └── Mockup/        # Browser, Phone, Code, Window
└── 3-SpecificComponents/  # CodeBlock, Mermaid
```

## Quick Reference

### Themes

| Theme        | Usage              | Background | Text     | Primary |
| ------------ | ------------------ | ---------- | -------- | ------- |
| `sqli-light` | Default light mode | Cream      | Midnight | Cobalt  |
| `sqli-dark`  | Dark mode          | Midnight   | Cream    | Sky     |

```html
<html data-theme="sqli-light">
  <div data-theme="sqli-dark">Dark content</div>
</html>
```

### Brand Colors

| Name     | Hex       | CSS Variable               | Usage                  |
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

## Component Usage

### Installation

```tsx
import { Button, Badge, Alert } from '@sqli/elevate-design-system';
import '@sqli/elevate-design-system/css';
```

### Buttons

```tsx
import { Button } from '@sqli/elevate-design-system';

<Button variant="primary">Primary</Button>
<Button variant="secondary" size="lg">Large Secondary</Button>
<Button variant="ghost" loading>Loading</Button>
<Button variant="outline" disabled>Disabled</Button>
```

Variants: `primary`, `secondary`, `accent`, `ghost`, `outline`, `link`, `info`, `success`, `warning`, `error`
Sizes: `xs`, `sm`, `md`, `lg`

### Cards

```tsx
import { Card, CardBody, CardTitle, CardActions, CardFigure } from '@sqli/elevate-design-system';

<Card>
  <CardFigure><img src="image.jpg" alt="Image" /></CardFigure>
  <CardBody>
    <CardTitle>Title</CardTitle>
    <p>Description</p>
    <CardActions>
      <Button variant="primary">Action</Button>
    </CardActions>
  </CardBody>
</Card>
```

### Form Inputs

```tsx
import { Input, Textarea, Label, Checkbox, RadioGroup, RadioGroupItem, Switch, Select, SelectTrigger, SelectContent, SelectItem, SelectValue, Slider } from '@sqli/elevate-design-system';

<Input variant="bordered" placeholder="Type here" />
<Textarea variant="bordered" placeholder="Message" />
<Label htmlFor="email">Email</Label>
<Checkbox />
<Switch />
<Slider defaultValue={[50]} max={100} step={1} />

<Select>
  <SelectTrigger><SelectValue placeholder="Pick one" /></SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
  </SelectContent>
</Select>

<RadioGroup defaultValue="option1">
  <RadioGroupItem value="option1" id="r1" />
  <Label htmlFor="r1">Option 1</Label>
</RadioGroup>
```

### Dialog (replaces Modal)

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@sqli/elevate-design-system';

<Dialog>
  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
  <DialogContent size="md">
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    <p>Content</p>
    <DialogClose asChild><Button variant="ghost">Close</Button></DialogClose>
  </DialogContent>
</Dialog>
```

### Accordion

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@sqli/elevate-design-system';

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Alerts

```tsx
import { Alert } from '@sqli/elevate-design-system';

<Alert variant="info">Info message</Alert>
<Alert variant="success">Success</Alert>
<Alert variant="warning">Warning</Alert>
<Alert variant="error">Error</Alert>
```

### Icons

```tsx
import { Home01Icon, Search01Icon } from 'hugeicons-react';

<Button variant="primary">
  <Home01Icon size={20} /> Home
</Button>
```

## Component Development Pattern

All components follow this pattern:

```tsx
import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const myVariants = cva('base-classes', {
  variants: {
    variant: { primary: '...', secondary: '...' },
    size: { sm: '...', md: '...', lg: '...' },
  },
  defaultVariants: { variant: 'primary', size: 'md' },
});

export interface MyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof myVariants> {}

export const MyComponent = forwardRef<HTMLElement, MyProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div ref={ref} className={cn(myVariants({ variant, size }), className)} {...props} />
  )
);
MyComponent.displayName = 'MyComponent';
```

### Radix UI wrapper pattern

```tsx
import { Dialog as DialogPrimitive } from 'radix-ui';

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogContent = forwardRef<HTMLDivElement, Props>(
  ({ className, children, ...props }, ref) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50" />
      <DialogPrimitive.Content ref={ref} className={cn('...', className)} {...props}>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
);
```

### CSS Variables in Tailwind

Use CSS variables for theme-aware colors:

```tsx
// Correct - uses theme variables
className="bg-[var(--color-primary)] text-[var(--color-primary-content)]"
className="border-[var(--color-border)]"

// Available variables
// --color-base-100, --color-base-200, --color-base-300
// --color-base-content
// --color-primary, --color-primary-content, --color-primary-hover
// --color-secondary, --color-secondary-content
// --color-accent, --color-accent-content
// --color-info, --color-success, --color-warning, --color-error
// --color-border
// --radius-sm, --radius-md, --radius-lg, --radius-full
```

## CSS Variables (Themes)

Themes use OKLCH color format in `src/css/main.css`:

```css
:root, [data-theme="sqli-light"] {
  color-scheme: light;
  --color-primary: oklch(42% 0.28 265); /* Cobalt */
  --color-base-100: oklch(98.5% 0.012 85); /* Cream */
  --color-base-content: oklch(15% 0.04 270); /* Midnight */
}

[data-theme="sqli-dark"] {
  color-scheme: dark;
  --color-primary: oklch(68% 0.14 250); /* Sky */
  --color-base-100: oklch(15% 0.04 270); /* Midnight */
  --color-base-content: oklch(98% 0.005 85); /* Cream */
}
```

## Storybook Best Practices

### Story Structure

Each component story should include:

1. **Default** - Base state (StoryObj with args)
2. **Variants** - Color variants
3. **Sizes** - Size variants
4. **DarkMode** - Rendering with `data-theme="sqli-dark"`
5. **Interactive** - StoryObj with argTypes controls

### Example Story

```tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../src/components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Actions/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `React **Button** component with SQLI themes.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: 'Button', variant: 'primary' },
};

export const Variants = () => (
  <div className="flex gap-2">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
  </div>
);

export const DarkMode = () => (
  <div data-theme="sqli-dark" className="p-6 rounded-lg bg-[var(--color-base-100)]">
    <Button variant="primary">Primary in Dark</Button>
  </div>
);
DarkMode.parameters = { backgrounds: { default: 'dark' } };
```

## Available Commands

- `/brand-check [content]` - Check brand guideline compliance
- `/brand-generate [request]` - Generate brand-compliant content

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
npm run build            # Full build (components + CSS + fonts + logos)
npm run build:components # Build React components only (tsup)
npm run build:css        # Build CSS only
npm run typecheck        # TypeScript type checking

# Quality
npm run lint             # Lint CSS + JS
npm run validate         # Lint + Format + Build

# Maintenance
npm run clean            # Remove dist/, storybook-static/
npm run reset            # Clean + reinstall dependencies
```

## Complete Reference

See `SQLI-BRAND-REFERENCE.md` for complete brand guidelines documentation.
