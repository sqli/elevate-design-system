/**
 * Elevate Theming
 *
 * DaisyUI themes: sqli-light and sqli-dark
 */
export default {
  title: 'Foundations/Theming',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Elevate Design System uses **DaisyUI themes** for consistent styling across light and dark modes.

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
Use the DaisyUI Theme Controller component:
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

export const LightTheme = () => `
  <div data-theme="sqli-light" class="p-8 rounded-lg bg-base-100 border border-base-300">
    <h3 class="text-xl font-medium mb-6">sqli-light Theme</h3>
    <div class="flex flex-wrap gap-3 mb-6">
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-accent">Accent</button>
      <button class="btn btn-neutral">Neutral</button>
    </div>
    <div class="flex flex-wrap gap-3 mb-6">
      <button class="btn btn-info">Info</button>
      <button class="btn btn-success">Success</button>
      <button class="btn btn-warning">Warning</button>
      <button class="btn btn-error">Error</button>
    </div>
    <div class="flex flex-wrap gap-2 mb-6">
      <div class="badge badge-primary">Primary</div>
      <div class="badge badge-secondary">Secondary</div>
      <div class="badge badge-accent">Accent</div>
    </div>
    <div role="alert" class="alert mb-4">
      <span>This is an alert in light mode.</span>
    </div>
    <div class="card bg-base-200 w-64">
      <div class="card-body">
        <h2 class="card-title">Card Title</h2>
        <p>Card content in light mode.</p>
      </div>
    </div>
  </div>
`;
LightTheme.storyName = 'Light Theme (sqli-light)';

export const DarkTheme = () => `
  <div data-theme="sqli-dark" class="p-8 rounded-lg bg-base-100">
    <h3 class="text-xl font-medium mb-6">sqli-dark Theme</h3>
    <div class="flex flex-wrap gap-3 mb-6">
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-accent">Accent</button>
      <button class="btn btn-neutral">Neutral</button>
    </div>
    <div class="flex flex-wrap gap-3 mb-6">
      <button class="btn btn-info">Info</button>
      <button class="btn btn-success">Success</button>
      <button class="btn btn-warning">Warning</button>
      <button class="btn btn-error">Error</button>
    </div>
    <div class="flex flex-wrap gap-2 mb-6">
      <div class="badge badge-primary">Primary</div>
      <div class="badge badge-secondary">Secondary</div>
      <div class="badge badge-accent">Accent</div>
    </div>
    <div role="alert" class="alert mb-4">
      <span>This is an alert in dark mode.</span>
    </div>
    <div class="card bg-base-200 w-64">
      <div class="card-body">
        <h2 class="card-title">Card Title</h2>
        <p>Card content in dark mode.</p>
      </div>
    </div>
  </div>
`;
DarkTheme.storyName = 'Dark Theme (sqli-dark)';
DarkTheme.parameters = {
  backgrounds: { default: 'dark' },
};

export const SideBySide = () => `
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div data-theme="sqli-light" class="p-6 rounded-lg bg-base-100 border border-base-300">
      <h4 class="font-bold text-lg mb-4">sqli-light</h4>
      <div class="flex gap-2 mb-4">
        <button class="btn btn-primary btn-sm">Primary</button>
        <button class="btn btn-secondary btn-sm">Secondary</button>
      </div>
      <div class="flex gap-2 mb-4">
        <div class="badge badge-primary">Badge</div>
        <div class="badge badge-outline">Outline</div>
      </div>
      <input type="text" placeholder="Input field" class="input input-bordered w-full" />
    </div>
    <div data-theme="sqli-dark" class="p-6 rounded-lg bg-base-100">
      <h4 class="font-bold text-lg mb-4">sqli-dark</h4>
      <div class="flex gap-2 mb-4">
        <button class="btn btn-primary btn-sm">Primary</button>
        <button class="btn btn-secondary btn-sm">Secondary</button>
      </div>
      <div class="flex gap-2 mb-4">
        <div class="badge badge-primary">Badge</div>
        <div class="badge badge-outline">Outline</div>
      </div>
      <input type="text" placeholder="Input field" class="input input-bordered w-full" />
    </div>
  </div>
`;
SideBySide.storyName = 'Side by Side Comparison';

export const ThemeController = () => `
  <div class="flex flex-col gap-6">
    <h3 class="text-lg font-medium">Theme Controller</h3>
    <p class="text-sm opacity-70">Use the theme controller to switch between themes dynamically.</p>

    <div class="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
      <span class="label-text">Toggle Theme</span>
      <input type="checkbox" value="sqli-dark" class="toggle theme-controller" />
    </div>

    <div class="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
      <label class="swap swap-rotate">
        <input type="checkbox" class="theme-controller" value="sqli-dark" />
        <svg class="swap-off h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
        </svg>
        <svg class="swap-on h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
        </svg>
      </label>
      <span>Swap Icons Theme Controller</span>
    </div>
  </div>
`;
ThemeController.storyName = 'Theme Controller';

export const CSSVariables = () => `
  <div class="flex flex-col gap-6">
    <h3 class="text-lg font-medium">CSS Variables</h3>
    <p class="text-sm opacity-70 mb-4">Theme colors are defined using OKLCH color format for better color manipulation.</p>

    <div class="mockup-code">
      <pre data-prefix="1"><code>@plugin "daisyui/theme" {</code></pre>
      <pre data-prefix="2"><code>  name: "sqli-light";</code></pre>
      <pre data-prefix="3"><code>  --color-primary: oklch(42% 0.28 265);</code></pre>
      <pre data-prefix="4"><code>  --color-secondary: oklch(68% 0.14 250);</code></pre>
      <pre data-prefix="5"><code>  --color-base-100: oklch(98.5% 0.012 85);</code></pre>
      <pre data-prefix="6"><code>  /* ... */</code></pre>
      <pre data-prefix="7"><code>}</code></pre>
    </div>

    <div class="alert alert-info">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <span>See <code>src/css/main.css</code> for the full theme configuration.</span>
    </div>
  </div>
`;
CSSVariables.storyName = 'CSS Variables';
