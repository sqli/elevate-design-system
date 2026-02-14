import { heroicon } from '../../utils/heroicons.js';

/**
 * @component Navbar
 * @description DaisyUI Navbar component with SQLI theme
 * @see https://daisyui.com/components/navbar/
 */
export default {
  title: 'Components/Navigation/Navbar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Navbar** component for site navigation.

## Usage
\`\`\`html
<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <button class="btn btn-primary">Button</button>
  </div>
</div>
\`\`\`

## Structure
- \`navbar-start\` - Left section
- \`navbar-center\` - Center section
- \`navbar-end\` - Right section
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">SQLI</a>
    </div>
    <div class="flex-none">
      <button class="btn btn-primary btn-sm">Get started</button>
    </div>
  </div>
`;

export const WithTitle = () => `
  <div class="navbar bg-base-100">
    <a class="btn btn-ghost text-xl">Elevate Design System</a>
  </div>
`;
WithTitle.storyName = 'Title Only';

export const WithMenu = () => `
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">SQLI</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a>Link</a></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul class="bg-base-100 rounded-t-none p-2">
              <li><a>Link 1</a></li>
              <li><a>Link 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
`;
WithMenu.storyName = 'With Menu';

export const WithSearch = () => `
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">SQLI</a>
    </div>
    <div class="flex-none gap-2">
      <div class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
      </div>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full bg-primary flex items-center justify-center text-primary-content">
            SQ
          </div>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><a class="justify-between">Profile<span class="badge">New</span></a></li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
`;
WithSearch.storyName = 'With Search & Avatar';

export const WithIconButtons = () => `
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">SQLI</a>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        ${heroicon('ellipsis-horizontal', { class: 'inline-block h-5 w-5' })}
      </button>
    </div>
  </div>
`;
WithIconButtons.storyName = 'With Icon Button';

export const Centered = () => `
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <a class="btn btn-ghost text-xl">SQLI</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Services</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn btn-primary">Contact us</a>
    </div>
  </div>
`;

export const WithDropdown = () => `
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          ${heroicon('bars-3', { class: 'h-5 w-5' })}
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost text-xl">SQLI</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn">Button</a>
    </div>
  </div>
`;
WithDropdown.storyName = 'Responsive with Dropdown';

export const Colors = () => `
  <div class="flex flex-col gap-4">
    <div class="navbar bg-neutral text-neutral-content">
      <a class="btn btn-ghost text-xl">Neutral</a>
    </div>
    <div class="navbar bg-base-300">
      <a class="btn btn-ghost text-xl">Base 300</a>
    </div>
    <div class="navbar bg-primary text-primary-content">
      <a class="btn btn-ghost text-xl">Primary</a>
    </div>
  </div>
`;

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="navbar bg-base-200 rounded-box">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">SQLI</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>About</a></li>
        </ul>
        <button class="btn btn-primary btn-sm">Contact</button>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
