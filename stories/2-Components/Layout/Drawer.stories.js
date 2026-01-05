/**
 * @component Drawer
 * @description DaisyUI Drawer/Sidebar component with SQLI theme
 * @see https://daisyui.com/components/drawer/
 */
export default {
  title: 'Components/Layout/Drawer',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Drawer** component for sidebar navigation.

## Usage
\`\`\`html
<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
  </div>
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <li><a>Sidebar Item 1</a></li>
    </ul>
  </div>
</div>
\`\`\`

## Variants
- Default - Left side drawer
- \`drawer-end\` - Right side drawer
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
        <li><a>Sidebar Item 3</a></li>
      </ul>
    </div>
  </div>
`;

export const RightSide = () => `
  <div class="drawer drawer-end">
    <input id="my-drawer-end" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <label for="my-drawer-end" class="btn btn-primary drawer-button">Open drawer (right)</label>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-end" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
        <li><a>Sidebar Item 3</a></li>
      </ul>
    </div>
  </div>
`;
RightSide.storyName = 'Right Side';

export const WithNavbar = () => `
  <div class="drawer">
    <input id="drawer-navbar" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="navbar bg-base-300 w-full">
        <div class="flex-none lg:hidden">
          <label for="drawer-navbar" aria-label="open sidebar" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div class="mx-2 flex-1 px-2">SQLI</div>
        <div class="hidden flex-none lg:block">
          <ul class="menu menu-horizontal">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>
      <!-- Page content -->
      <div class="p-4">Click the hamburger menu on mobile to open sidebar.</div>
    </div>
    <div class="drawer-side">
      <label for="drawer-navbar" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 min-h-full w-80 p-4">
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
`;
WithNavbar.storyName = 'With Navbar';

export const AlwaysOpen = () => `
  <div class="drawer lg:drawer-open">
    <input id="drawer-open" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-start p-4">
      <label for="drawer-open" class="btn btn-primary drawer-button lg:hidden mb-4">Open drawer</label>
      <p>Sidebar is always open on large screens.</p>
    </div>
    <div class="drawer-side">
      <label for="drawer-open" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <li class="menu-title">Navigation</li>
        <li><a>Dashboard</a></li>
        <li><a>Projects</a></li>
        <li><a>Settings</a></li>
      </ul>
    </div>
  </div>
`;
AlwaysOpen.storyName = 'Responsive (Always Open on Desktop)';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="drawer">
      <input id="dark-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <label for="dark-drawer" class="btn btn-primary drawer-button">Open drawer</label>
      </div>
      <div class="drawer-side">
        <label for="dark-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
