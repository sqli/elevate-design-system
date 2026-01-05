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
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Home
      </a>
    </li>
    <li>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Details
      </a>
    </li>
    <li>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
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
