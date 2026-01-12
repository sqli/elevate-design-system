/**
 * Icons - Elevate Design System
 *
 * This story showcases the available icon libraries in the design system.
 * Icons are provided as inline SVGs for maximum flexibility and styling capability.
 *
 * Two icon modules are available:
 * 1. Custom icons (stories/utils/icons.js) - Lightweight, hand-picked icons
 * 2. HeroIcons (stories/utils/heroicons.js) - Complete icon set from Tailwind Labs
 */

import { heroicon } from '../utils/heroicons.js';
import { allIcons } from '../utils/icons.js';

export default {
  title: 'Foundations/Icons',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Icon Libraries

The Elevate Design System provides two icon modules:

### 1. HeroIcons (Recommended)
MIT-licensed SVG icons from Tailwind Labs. Available in three sizes:
- **24px** - Standard icons (outline and solid variants)
- **20px** - Mini icons (solid only)
- **16px** - Micro icons (solid only)

\`\`\`javascript
import { heroicon, HeroIcons } from '../utils/heroicons.js';

// Using the function
heroicon('home')                           // 24px outline (default)
heroicon('home', { variant: 'solid' })     // 24px solid
heroicon('home', { size: 20, variant: 'solid' }) // 20px solid
heroicon('home', { class: 'w-6 h-6' })     // with Tailwind classes

// Using pre-built exports
HeroIcons.home       // 24px outline
HeroIcons.homeSolid  // 24px solid
\`\`\`

### 2. Custom Icons (Legacy)
Lightweight inline SVG icons for common use cases.

\`\`\`javascript
import { SearchIcon, UserIcon, withSize, withClass } from '../utils/icons.js';

// Direct usage
\${SearchIcon}

// With modifications
\${withSize(SearchIcon, 32)}
\${withClass(SearchIcon, 'text-primary')}
\`\`\`

## Styling Icons

Icons inherit \`currentColor\` for stroke/fill, so you can style them with Tailwind:

\`\`\`html
<span class="text-primary">\${HeroIcons.home}</span>
<span class="text-error">\${HeroIcons.exclamationCircle}</span>
\`\`\`

Or use the \`class\` option:
\`\`\`javascript
heroicon('home', { class: 'w-8 h-8 text-primary' })
\`\`\`
        `,
      },
    },
  },
};

/**
 * Default HeroIcons - 24px outline
 */
export const HeroIconsOutline = () => {
  const icons = [
    'home',
    'user',
    'envelope',
    'bell',
    'heart',
    'star',
    'magnifying-glass',
    'cog-6-tooth',
    'check',
    'x-mark',
    'plus',
    'minus',
    'pencil',
    'trash',
    'eye',
    'lock-closed',
    'calendar',
    'clock',
    'document',
    'folder',
    'arrow-down-tray',
    'arrow-up-tray',
    'share',
    'link',
    'globe-alt',
    'sun',
    'moon',
    'play',
    'pause',
    'shopping-cart',
    'code-bracket',
    'command-line',
    'chevron-down',
    'chevron-up',
    'chevron-left',
    'chevron-right',
    'arrow-left',
    'arrow-right',
    'bars-3',
    'check-circle',
    'x-circle',
    'information-circle',
    'exclamation-circle',
    'exclamation-triangle',
  ];

  return `
    <div class="space-y-4">
      <h3 class="text-lg font-medium">24px Outline Icons</h3>
      <p class="text-sm text-base-content/70">Default icon style - clean and minimal outline icons.</p>
      <div class="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-4">
        ${icons
          .map(
            (name) => `
          <div class="flex flex-col items-center gap-2 p-2 rounded hover:bg-base-200 transition-colors">
            <span class="w-6 h-6">${heroicon(name)}</span>
            <span class="text-[10px] text-base-content/60 text-center truncate w-full">${name}</span>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;
};
HeroIconsOutline.storyName = 'HeroIcons - Outline';

/**
 * HeroIcons Solid - 24px filled
 */
export const HeroIconsSolid = () => {
  const icons = [
    'home',
    'user',
    'heart',
    'star',
    'bell',
    'check',
    'x-mark',
    'plus',
    'minus',
    'magnifying-glass',
    'check-circle',
    'x-circle',
    'information-circle',
    'exclamation-circle',
    'exclamation-triangle',
  ];

  return `
    <div class="space-y-4">
      <h3 class="text-lg font-medium">24px Solid Icons</h3>
      <p class="text-sm text-base-content/70">Filled icons for emphasis or active states.</p>
      <div class="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-4">
        ${icons
          .map(
            (name) => `
          <div class="flex flex-col items-center gap-2 p-2 rounded hover:bg-base-200 transition-colors">
            <span class="w-6 h-6">${heroicon(name, { variant: 'solid' })}</span>
            <span class="text-[10px] text-base-content/60 text-center truncate w-full">${name}</span>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;
};
HeroIconsSolid.storyName = 'HeroIcons - Solid';

/**
 * Mini Icons - 20px solid
 */
export const HeroIconsMini = () => {
  const icons = ['home', 'user', 'heart', 'star', 'check', 'x-mark', 'plus', 'minus'];

  return `
    <div class="space-y-4">
      <h3 class="text-lg font-medium">20px Mini Icons</h3>
      <p class="text-sm text-base-content/70">Smaller solid icons for compact UI elements like buttons and badges.</p>
      <div class="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 gap-4">
        ${icons
          .map(
            (name) => `
          <div class="flex flex-col items-center gap-2 p-2 rounded hover:bg-base-200 transition-colors">
            <span class="w-5 h-5">${heroicon(name, { size: 20, variant: 'solid' })}</span>
            <span class="text-[10px] text-base-content/60 text-center truncate w-full">${name}</span>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;
};
HeroIconsMini.storyName = 'HeroIcons - Mini (20px)';

/**
 * Micro Icons - 16px solid
 */
export const HeroIconsMicro = () => {
  const icons = ['home', 'user', 'heart', 'star', 'check', 'x-mark', 'plus', 'minus'];

  return `
    <div class="space-y-4">
      <h3 class="text-lg font-medium">16px Micro Icons</h3>
      <p class="text-sm text-base-content/70">Tiny icons for inline text, labels, and very compact interfaces.</p>
      <div class="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 gap-4">
        ${icons
          .map(
            (name) => `
          <div class="flex flex-col items-center gap-2 p-2 rounded hover:bg-base-200 transition-colors">
            <span class="w-4 h-4">${heroicon(name, { size: 16, variant: 'solid' })}</span>
            <span class="text-[10px] text-base-content/60 text-center truncate w-full">${name}</span>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;
};
HeroIconsMicro.storyName = 'HeroIcons - Micro (16px)';

/**
 * Colored Icons
 */
export const ColoredIcons = () => `
  <div class="space-y-6">
    <h3 class="text-lg font-medium">Colored Icons</h3>
    <p class="text-sm text-base-content/70">Icons inherit <code>currentColor</code>, so use text color utilities to style them.</p>

    <div class="space-y-4">
      <h4 class="text-sm font-medium">Semantic Colors</h4>
      <div class="flex gap-6 flex-wrap">
        <div class="flex items-center gap-2">
          <span class="text-primary w-6 h-6">${heroicon('information-circle')}</span>
          <span class="text-sm">Primary</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-secondary w-6 h-6">${heroicon('user')}</span>
          <span class="text-sm">Secondary</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-accent w-6 h-6">${heroicon('star')}</span>
          <span class="text-sm">Accent</span>
        </div>
      </div>

      <h4 class="text-sm font-medium mt-6">Status Colors</h4>
      <div class="flex gap-6 flex-wrap">
        <div class="flex items-center gap-2">
          <span class="text-info w-6 h-6">${heroicon('information-circle', { variant: 'solid' })}</span>
          <span class="text-sm">Info</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-success w-6 h-6">${heroicon('check-circle', { variant: 'solid' })}</span>
          <span class="text-sm">Success</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-warning w-6 h-6">${heroicon('exclamation-triangle', { variant: 'solid' })}</span>
          <span class="text-sm">Warning</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-error w-6 h-6">${heroicon('x-circle', { variant: 'solid' })}</span>
          <span class="text-sm">Error</span>
        </div>
      </div>
    </div>
  </div>
`;

/**
 * Icons in Buttons
 */
export const IconsInButtons = () => `
  <div class="space-y-6">
    <h3 class="text-lg font-medium">Icons in Buttons</h3>
    <p class="text-sm text-base-content/70">Common patterns for using icons with DaisyUI buttons.</p>

    <div class="space-y-4">
      <h4 class="text-sm font-medium">Icon + Text</h4>
      <div class="flex gap-2 flex-wrap">
        <button class="btn btn-primary">
          ${heroicon('plus', { class: 'w-5 h-5' })}
          Add Item
        </button>
        <button class="btn btn-secondary">
          ${heroicon('arrow-down-tray', { class: 'w-5 h-5' })}
          Download
        </button>
        <button class="btn btn-ghost">
          ${heroicon('cog-6-tooth', { class: 'w-5 h-5' })}
          Settings
        </button>
      </div>

      <h4 class="text-sm font-medium mt-6">Text + Icon</h4>
      <div class="flex gap-2 flex-wrap">
        <button class="btn btn-primary">
          Next
          ${heroicon('arrow-right', { class: 'w-5 h-5' })}
        </button>
        <button class="btn btn-secondary">
          Learn More
          ${heroicon('chevron-right', { class: 'w-5 h-5' })}
        </button>
      </div>

      <h4 class="text-sm font-medium mt-6">Icon-Only Buttons</h4>
      <div class="flex gap-2 flex-wrap items-center">
        <button class="btn btn-primary btn-square">
          ${heroicon('plus', { class: 'w-5 h-5' })}
        </button>
        <button class="btn btn-secondary btn-square">
          ${heroicon('pencil', { class: 'w-5 h-5' })}
        </button>
        <button class="btn btn-ghost btn-square">
          ${heroicon('trash', { class: 'w-5 h-5' })}
        </button>
        <button class="btn btn-circle btn-primary">
          ${heroicon('heart', { variant: 'solid', class: 'w-5 h-5' })}
        </button>
        <button class="btn btn-circle btn-ghost">
          ${heroicon('ellipsis-vertical', { class: 'w-5 h-5' })}
        </button>
      </div>

      <h4 class="text-sm font-medium mt-6">Button Sizes</h4>
      <div class="flex gap-2 flex-wrap items-center">
        <button class="btn btn-primary btn-xs">
          ${heroicon('plus', { class: 'w-3 h-3' })}
          Tiny
        </button>
        <button class="btn btn-primary btn-sm">
          ${heroicon('plus', { class: 'w-4 h-4' })}
          Small
        </button>
        <button class="btn btn-primary">
          ${heroicon('plus', { class: 'w-5 h-5' })}
          Default
        </button>
        <button class="btn btn-primary btn-lg">
          ${heroicon('plus', { class: 'w-6 h-6' })}
          Large
        </button>
      </div>
    </div>
  </div>
`;

/**
 * Icons in Form Elements
 */
export const IconsInForms = () => `
  <div class="space-y-6">
    <h3 class="text-lg font-medium">Icons in Form Elements</h3>
    <p class="text-sm text-base-content/70">Using icons with input fields and form controls.</p>

    <div class="space-y-4 max-w-md">
      <h4 class="text-sm font-medium">Input with Icon</h4>
      <label class="input input-bordered flex items-center gap-2">
        ${heroicon('magnifying-glass', { class: 'w-5 h-5 opacity-50' })}
        <input type="text" class="grow" placeholder="Search..." />
      </label>

      <label class="input input-bordered flex items-center gap-2">
        ${heroicon('envelope', { class: 'w-5 h-5 opacity-50' })}
        <input type="email" class="grow" placeholder="Email" />
      </label>

      <label class="input input-bordered flex items-center gap-2">
        ${heroicon('lock-closed', { class: 'w-5 h-5 opacity-50' })}
        <input type="password" class="grow" placeholder="Password" />
        <button class="btn btn-ghost btn-xs btn-circle">
          ${heroicon('eye', { class: 'w-4 h-4' })}
        </button>
      </label>

      <h4 class="text-sm font-medium mt-6">Input with Button</h4>
      <div class="join w-full">
        <input type="text" placeholder="Enter URL" class="input input-bordered join-item flex-1" />
        <button class="btn btn-primary join-item">
          ${heroicon('link', { class: 'w-5 h-5' })}
        </button>
      </div>
    </div>
  </div>
`;

/**
 * Icons in Alerts
 */
export const IconsInAlerts = () => `
  <div class="space-y-6">
    <h3 class="text-lg font-medium">Icons in Alerts</h3>
    <p class="text-sm text-base-content/70">Using status icons with DaisyUI alerts.</p>

    <div class="space-y-4 max-w-xl">
      <div role="alert" class="alert alert-info">
        ${heroicon('information-circle', { class: 'w-6 h-6' })}
        <span>New software update available.</span>
      </div>

      <div role="alert" class="alert alert-success">
        ${heroicon('check-circle', { class: 'w-6 h-6' })}
        <span>Your purchase has been confirmed!</span>
      </div>

      <div role="alert" class="alert alert-warning">
        ${heroicon('exclamation-triangle', { class: 'w-6 h-6' })}
        <span>Warning: Invalid email address!</span>
      </div>

      <div role="alert" class="alert alert-error">
        ${heroicon('x-circle', { class: 'w-6 h-6' })}
        <span>Error! Task failed successfully.</span>
      </div>
    </div>
  </div>
`;

/**
 * Custom Icons (Legacy)
 */
export const CustomIcons = () => {
  const iconNames = Object.keys(allIcons);

  return `
    <div class="space-y-4">
      <h3 class="text-lg font-medium">Custom Icons (Legacy)</h3>
      <p class="text-sm text-base-content/70">Original icon set from <code>stories/utils/icons.js</code>. Consider using HeroIcons for new components.</p>
      <div class="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-4">
        ${iconNames
          .map(
            (name) => `
          <div class="flex flex-col items-center gap-2 p-2 rounded hover:bg-base-200 transition-colors">
            <span class="w-5 h-5">${allIcons[name]}</span>
            <span class="text-[10px] text-base-content/60 text-center truncate w-full">${name.replace('Icon', '')}</span>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;
};

/**
 * Dark Mode
 */
export const DarkMode = () => `
  <div data-theme="sqli-dark" class="p-6 rounded-lg bg-base-100 space-y-6">
    <h3 class="text-lg font-medium">Icons in Dark Mode</h3>
    <p class="text-sm text-base-content/70">Icons automatically adapt to the theme's text color.</p>

    <div class="flex gap-4 flex-wrap">
      <span class="w-6 h-6">${heroicon('home')}</span>
      <span class="w-6 h-6">${heroicon('user')}</span>
      <span class="w-6 h-6">${heroicon('envelope')}</span>
      <span class="w-6 h-6">${heroicon('bell')}</span>
      <span class="w-6 h-6">${heroicon('cog-6-tooth')}</span>
    </div>

    <div class="flex gap-4 flex-wrap">
      <span class="text-primary w-6 h-6">${heroicon('information-circle', { variant: 'solid' })}</span>
      <span class="text-success w-6 h-6">${heroicon('check-circle', { variant: 'solid' })}</span>
      <span class="text-warning w-6 h-6">${heroicon('exclamation-triangle', { variant: 'solid' })}</span>
      <span class="text-error w-6 h-6">${heroicon('x-circle', { variant: 'solid' })}</span>
    </div>

    <div class="flex gap-2">
      <button class="btn btn-primary">
        ${heroicon('plus', { class: 'w-5 h-5' })}
        Add
      </button>
      <button class="btn btn-ghost">
        ${heroicon('pencil', { class: 'w-5 h-5' })}
        Edit
      </button>
    </div>
  </div>
`;
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};

/**
 * Usage Reference
 */
export const UsageReference = () => `
  <div class="prose max-w-none">
    <h3>Usage Reference</h3>

    <h4>Import</h4>
    <pre><code>import { heroicon, HeroIcons } from '../utils/heroicons.js';</code></pre>

    <h4>Function API</h4>
    <table class="table">
      <thead>
        <tr>
          <th>Example</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>heroicon('home')</code></td>
          <td>24px outline (default)</td>
        </tr>
        <tr>
          <td><code>heroicon('home', { variant: 'solid' })</code></td>
          <td>24px solid</td>
        </tr>
        <tr>
          <td><code>heroicon('home', { size: 20, variant: 'solid' })</code></td>
          <td>20px mini solid</td>
        </tr>
        <tr>
          <td><code>heroicon('home', { size: 16, variant: 'solid' })</code></td>
          <td>16px micro solid</td>
        </tr>
        <tr>
          <td><code>heroicon('home', { class: 'w-8 h-8' })</code></td>
          <td>With Tailwind classes</td>
        </tr>
      </tbody>
    </table>

    <h4>Pre-built Exports</h4>
    <pre><code>// Quick access to common icons
HeroIcons.home          // 24px outline
HeroIcons.homeSolid     // 24px solid
HeroIcons.search        // alias for magnifying-glass
HeroIcons.settings      // alias for cog-6-tooth
HeroIcons.close         // alias for x-mark
HeroIcons.menu          // alias for bars-3</code></pre>

    <h4>Available Icon Names</h4>
    <p>For a complete list, visit <a href="https://heroicons.com" target="_blank" rel="noopener">heroicons.com</a></p>
  </div>
`;
