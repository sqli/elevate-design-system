import { heroicon } from '../../utils/heroicons.js';

/**
 * @component ThemeController
 * @description DaisyUI Theme Controller component for switching themes
 * @see https://daisyui.com/components/theme-controller/
 */
export default {
  title: 'Components/Actions/Theme Controller',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Theme Controller** for switching between themes.

## Usage
\`\`\`html
<input type="checkbox" value="sqli-dark" class="toggle theme-controller" />
\`\`\`

## SQLI Themes
- \`sqli-light\` - Light theme with Cream background
- \`sqli-dark\` - Dark theme with Midnight background
        `,
      },
    },
  },
};

export const ToggleTheme = () => `
  <div class="flex items-center gap-4">
    <span class="label-text">Light</span>
    <input type="checkbox" value="sqli-dark" class="toggle theme-controller" />
    <span class="label-text">Dark</span>
  </div>
`;
ToggleTheme.storyName = 'Toggle Theme';

export const SwapIcons = () => `
  <label class="swap swap-rotate">
    <input type="checkbox" class="theme-controller" value="sqli-dark" />
    ${heroicon('sun', { class: 'swap-off h-8 w-8' })}
    ${heroicon('moon', { class: 'swap-on h-8 w-8' })}
  </label>
`;
SwapIcons.storyName = 'Swap Icons';

export const DropdownSelect = () => `
  <div class="dropdown">
    <div tabindex="0" role="button" class="btn m-1">
      Theme
      ${heroicon('chevron-down', { class: 'inline-block h-2 w-2 opacity-60' })}
    </div>
    <ul tabindex="0" class="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl">
      <li>
        <input type="radio" name="theme-dropdown" class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="sqli-light" />
      </li>
      <li>
        <input type="radio" name="theme-dropdown" class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="sqli-dark" />
      </li>
    </ul>
  </div>
`;
DropdownSelect.storyName = 'Dropdown Select';

export const RadioButtons = () => `
  <div class="flex flex-col gap-2">
    <div class="form-control">
      <label class="label cursor-pointer gap-4">
        <span class="label-text">Light Theme</span>
        <input type="radio" name="theme-radios" class="radio theme-controller" value="sqli-light" checked />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer gap-4">
        <span class="label-text">Dark Theme</span>
        <input type="radio" name="theme-radios" class="radio theme-controller" value="sqli-dark" />
      </label>
    </div>
  </div>
`;
RadioButtons.storyName = 'Radio Buttons';

export const InNavbar = () => `
  <div class="navbar bg-base-200 rounded-box">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">SQLI</a>
    </div>
    <div class="flex-none">
      <label class="swap swap-rotate mr-4">
        <input type="checkbox" class="theme-controller" value="sqli-dark" />
        ${heroicon('sun', { class: 'swap-off h-6 w-6' })}
        ${heroicon('moon', { class: 'swap-on h-6 w-6' })}
      </label>
      <button class="btn btn-primary btn-sm">Contact</button>
    </div>
  </div>
`;
InNavbar.storyName = 'In Navbar';

export const ThemePreview = () => `
  <div class="flex gap-4">
    <div data-theme="sqli-light" class="bg-base-100 p-6 rounded-box shadow-lg flex-1">
      <h3 class="text-lg font-bold text-base-content mb-4">sqli-light</h3>
      <div class="flex flex-wrap gap-2 mb-4">
        <button class="btn btn-primary btn-sm">Primary</button>
        <button class="btn btn-secondary btn-sm">Secondary</button>
        <button class="btn btn-accent btn-sm">Accent</button>
      </div>
      <div class="flex gap-2">
        <div class="badge badge-primary">Primary</div>
        <div class="badge badge-secondary">Secondary</div>
      </div>
    </div>
    <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-box shadow-lg flex-1">
      <h3 class="text-lg font-bold text-base-content mb-4">sqli-dark</h3>
      <div class="flex flex-wrap gap-2 mb-4">
        <button class="btn btn-primary btn-sm">Primary</button>
        <button class="btn btn-secondary btn-sm">Secondary</button>
        <button class="btn btn-accent btn-sm">Accent</button>
      </div>
      <div class="flex gap-2">
        <div class="badge badge-primary">Primary</div>
        <div class="badge badge-secondary">Secondary</div>
      </div>
    </div>
  </div>
`;
ThemePreview.storyName = 'Theme Preview';
