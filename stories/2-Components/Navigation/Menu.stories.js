import { heroicon } from '../../utils/heroicons.js';

/**
 * @component Menu
 * @description DaisyUI Menu component with SQLI theme
 * @see https://daisyui.com/components/menu/
 */
export default {
  title: 'Components/Navigation/Menu',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Menu** component for navigation lists.

## Usage
\`\`\`html
<ul class="menu bg-base-200 rounded-box w-56">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
</ul>
\`\`\`

## Sizes
- \`menu-xs\`, \`menu-sm\`, \`menu-md\`, \`menu-lg\`

## Variants
- \`menu-horizontal\` - Horizontal layout
        `,
      },
    },
  },
};

export const Default = () => `
  <ul class="menu bg-base-200 rounded-box w-56">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 3</a></li>
  </ul>
`;

export const WithIcons = () => `
  <ul class="menu bg-base-200 rounded-box w-56">
    <li>
      <a>
        ${heroicon('home', { class: 'h-5 w-5' })}
        Home
      </a>
    </li>
    <li>
      <a>
        ${heroicon('information-circle', { class: 'h-5 w-5' })}
        Details
      </a>
    </li>
    <li>
      <a>
        ${heroicon('chart-bar-square', { class: 'h-5 w-5' })}
        Stats
      </a>
    </li>
  </ul>
`;
WithIcons.storyName = 'With Icons';

export const WithTitle = () => `
  <ul class="menu bg-base-200 rounded-box w-56">
    <li class="menu-title">Title</li>
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 3</a></li>
  </ul>
`;
WithTitle.storyName = 'With Title';

export const WithSubmenu = () => `
  <ul class="menu bg-base-200 rounded-box w-56">
    <li><a>Item 1</a></li>
    <li>
      <details open>
        <summary>Parent</summary>
        <ul>
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </details>
    </li>
    <li><a>Item 3</a></li>
  </ul>
`;
WithSubmenu.storyName = 'With Submenu';

export const Horizontal = () => `
  <ul class="menu menu-horizontal bg-base-200 rounded-box">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 3</a></li>
  </ul>
`;

export const Sizes = () => `
  <div class="flex flex-col gap-4">
    <div>
      <p class="text-sm mb-2 opacity-70">Extra Small (xs)</p>
      <ul class="menu menu-xs bg-base-200 rounded-box w-56">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
    <div>
      <p class="text-sm mb-2 opacity-70">Small (sm)</p>
      <ul class="menu menu-sm bg-base-200 rounded-box w-56">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
    <div>
      <p class="text-sm mb-2 opacity-70">Medium (md)</p>
      <ul class="menu menu-md bg-base-200 rounded-box w-56">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
    <div>
      <p class="text-sm mb-2 opacity-70">Large (lg)</p>
      <ul class="menu menu-lg bg-base-200 rounded-box w-56">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  </div>
`;
Sizes.storyName = 'All Sizes';

export const ActiveItem = () => `
  <ul class="menu bg-base-200 rounded-box w-56">
    <li><a>Item 1</a></li>
    <li><a class="active">Active Item</a></li>
    <li><a>Item 3</a></li>
  </ul>
`;
ActiveItem.storyName = 'Active Item';

export const DisabledItem = () => `
  <ul class="menu bg-base-200 rounded-box w-56">
    <li><a>Item 1</a></li>
    <li class="disabled"><a>Disabled Item</a></li>
    <li><a>Item 3</a></li>
  </ul>
`;
DisabledItem.storyName = 'Disabled Item';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <ul class="menu bg-base-200 rounded-box w-56">
      <li class="menu-title">Menu</li>
      <li><a>Item 1</a></li>
      <li><a class="active">Active Item</a></li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
