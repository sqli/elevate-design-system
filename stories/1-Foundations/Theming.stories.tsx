import React, { useState } from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../utils/story-helpers';

/**
 * Elevate Theming
 *
 * SQLI themes: sqli-light and sqli-dark
 */
const meta: Meta = {
  title: 'Foundations/Theming',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Elevate Design System uses **SQLI themes** for consistent styling across light and dark modes.

## Available Themes
- \`sqli-light\` - Default light theme (Cream background)
- \`sqli-dark\` - Dark theme (Midnight background)

## Usage
\`\`\`html
<!-- Set theme on HTML element -->
<html data-theme="sqli-light">

<!-- Or scope to a specific element -->
<div data-theme="sqli-dark">
  Dark mode content
</div>
\`\`\`

## Theme Switching
Use the Theme Controller component:
\`\`\`html
<input type="checkbox" value="sqli-dark" class="toggle theme-controller" />
\`\`\`

## Related
- [Design Tokens](?path=/docs/foundations-design-tokens--docs) - Theme CSS variables, OKLCH colors
- [Colors](?path=/docs/foundations-colors--docs) - Color palette for each theme
        `,
      },
    },
  },
};

export default meta;

export const LightTheme = () => (
  <div data-theme="sqli-light" className="p-8 rounded-lg bg-base-100 border border-base-300">
    <h3 className="text-xl font-medium mb-6">sqli-light Theme</h3>
    <div className="flex flex-wrap gap-3 mb-6">
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-neutral">Neutral</button>
    </div>
    <div className="flex flex-wrap gap-3 mb-6">
      <button className="btn btn-info">Info</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-error">Error</button>
    </div>
    <div className="flex flex-wrap gap-2 mb-6">
      <div className="badge badge-primary">Primary</div>
      <div className="badge badge-secondary">Secondary</div>
      <div className="badge badge-accent">Accent</div>
    </div>
    <div role="alert" className="alert mb-4">
      <span>This is an alert in light mode.</span>
    </div>
    <div className="card bg-base-200 w-64">
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>Card content in light mode.</p>
      </div>
    </div>
  </div>
);
LightTheme.storyName = 'Light Theme (sqli-light)';

export const DarkTheme = () => (
  <DarkModeWrapper>
    <h3 className="text-xl font-medium mb-6">sqli-dark Theme</h3>
    <div className="flex flex-wrap gap-3 mb-6">
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-neutral">Neutral</button>
    </div>
    <div className="flex flex-wrap gap-3 mb-6">
      <button className="btn btn-info">Info</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-error">Error</button>
    </div>
    <div className="flex flex-wrap gap-2 mb-6">
      <div className="badge badge-primary">Primary</div>
      <div className="badge badge-secondary">Secondary</div>
      <div className="badge badge-accent">Accent</div>
    </div>
    <div role="alert" className="alert mb-4">
      <span>This is an alert in dark mode.</span>
    </div>
    <div className="card bg-base-200 w-64">
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>Card content in dark mode.</p>
      </div>
    </div>
  </DarkModeWrapper>
);
DarkTheme.storyName = 'Dark Theme (sqli-dark)';
DarkTheme.parameters = {
  backgrounds: { default: 'dark' },
};

export const SideBySide = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div data-theme="sqli-light" className="p-6 rounded-lg bg-base-100 border border-base-300">
      <h4 className="font-bold text-lg mb-4">sqli-light</h4>
      <div className="flex gap-2 mb-4">
        <button className="btn btn-primary btn-sm">Primary</button>
        <button className="btn btn-secondary btn-sm">Secondary</button>
      </div>
      <div className="flex gap-2 mb-4">
        <div className="badge badge-primary">Badge</div>
        <div className="badge badge-outline">Outline</div>
      </div>
      <input type="text" placeholder="Input field" className="input input-bordered w-full" />
    </div>
    <DarkModeWrapper>
      <h4 className="font-bold text-lg mb-4">sqli-dark</h4>
      <div className="flex gap-2 mb-4">
        <button className="btn btn-primary btn-sm">Primary</button>
        <button className="btn btn-secondary btn-sm">Secondary</button>
      </div>
      <div className="flex gap-2 mb-4">
        <div className="badge badge-primary">Badge</div>
        <div className="badge badge-outline">Outline</div>
      </div>
      <input type="text" placeholder="Input field" className="input input-bordered w-full" />
    </DarkModeWrapper>
  </div>
);
SideBySide.storyName = 'Side by Side Comparison';

export const ThemeController = () => {
  const [theme, setTheme] = useState<'sqli-light' | 'sqli-dark'>('sqli-light');

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-medium">Theme Controller</h3>
      <p className="text-sm opacity-70">Use the theme controller to switch between themes dynamically.</p>

      <div className="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
        <span className="label-text">Toggle Theme</span>
        <input
          type="checkbox"
          className="toggle"
          checked={theme === 'sqli-dark'}
          onChange={(e) => setTheme(e.target.checked ? 'sqli-dark' : 'sqli-light')}
        />
        <span className="text-sm opacity-70">Current: {theme}</span>
      </div>

      <div data-theme={theme} className="p-6 rounded-lg bg-base-100 border border-base-300 transition-colors">
        <h4 className="font-bold text-lg mb-4">Preview ({theme})</h4>
        <div className="flex gap-2 mb-4">
          <button className="btn btn-primary btn-sm">Primary</button>
          <button className="btn btn-secondary btn-sm">Secondary</button>
          <button className="btn btn-accent btn-sm">Accent</button>
        </div>
        <div className="flex gap-2 mb-4">
          <div className="badge badge-primary">Badge</div>
          <div className="badge badge-secondary">Badge</div>
        </div>
        <p className="text-sm opacity-70">This section updates when you toggle the theme above.</p>
      </div>
    </div>
  );
};
ThemeController.storyName = 'Theme Controller';

export const CSSVariables = () => (
  <div className="flex flex-col gap-6">
    <h3 className="text-lg font-medium">CSS Variables</h3>
    <p className="text-sm opacity-70 mb-4">Theme colors are defined using OKLCH color format for better color manipulation.</p>

    <div className="mockup-code">
      <pre data-prefix="1"><code>{'@plugin "daisyui/theme" {'}</code></pre>
      <pre data-prefix="2"><code>{'  name: "sqli-light";'}</code></pre>
      <pre data-prefix="3"><code>{'  --color-primary: oklch(42% 0.28 265);'}</code></pre>
      <pre data-prefix="4"><code>{'  --color-secondary: oklch(68% 0.14 250);'}</code></pre>
      <pre data-prefix="5"><code>{'  --color-base-100: oklch(98.5% 0.012 85);'}</code></pre>
      <pre data-prefix="6"><code>{'  /* ... */'}</code></pre>
      <pre data-prefix="7"><code>{'}'}</code></pre>
    </div>

    <div className="alert alert-info">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>See <code>src/css/main.css</code> for the full theme configuration.</span>
    </div>
  </div>
);
CSSVariables.storyName = 'CSS Variables';
