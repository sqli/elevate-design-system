/**
 * @component Dropdown
 * @description DaisyUI Dropdown component with SQLI theme
 * @see https://daisyui.com/components/dropdown/
 */
export default {
  title: 'Components/Actions/Dropdown',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Dropdown** component for showing/hiding content.

## Usage
\`\`\`html
<div class="dropdown">
  <div tabindex="0" role="button" class="btn m-1">Click</div>
  <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
\`\`\`

## Positions
- \`dropdown-top\` - Opens upward
- \`dropdown-bottom\` - Opens downward (default)
- \`dropdown-left\` - Opens to the left
- \`dropdown-right\` - Opens to the right
- \`dropdown-end\` - Aligns to the end
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="dropdown">
    <div tabindex="0" role="button" class="btn m-1">Click me</div>
    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
`;

export const Positions = () => `
  <div class="flex flex-wrap gap-4 p-8">
    <div class="dropdown dropdown-bottom">
      <div tabindex="0" role="button" class="btn">Bottom</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>

    <div class="dropdown dropdown-top">
      <div tabindex="0" role="button" class="btn">Top</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>

    <div class="dropdown dropdown-left">
      <div tabindex="0" role="button" class="btn">Left</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>

    <div class="dropdown dropdown-right">
      <div tabindex="0" role="button" class="btn">Right</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  </div>
`;
Positions.storyName = 'Dropdown Positions';

export const EndAlignment = () => `
  <div class="flex justify-end p-4">
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn m-1">End Aligned</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
  </div>
`;

export const HoverTrigger = () => `
  <div class="dropdown dropdown-hover">
    <div tabindex="0" role="button" class="btn m-1">Hover me</div>
    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
`;
HoverTrigger.storyName = 'Hover Trigger';

export const OpenByDefault = () => `
  <div class="dropdown dropdown-open">
    <div tabindex="0" role="button" class="btn m-1">Open</div>
    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
`;
OpenByDefault.storyName = 'Open by Default';

export const WithCard = () => `
  <div class="dropdown">
    <div tabindex="0" role="button" class="btn m-1">Open Card</div>
    <div tabindex="0" class="dropdown-content card card-sm bg-base-100 z-1 w-64 p-2 shadow-sm">
      <div class="card-body">
        <h3 class="card-title">Card Title</h3>
        <p>This is a dropdown with a card inside.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary btn-sm">Action</button>
        </div>
      </div>
    </div>
  </div>
`;
WithCard.storyName = 'With Card Content';

export const InNavbar = () => `
  <div class="navbar bg-base-200 rounded-box">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">SQLI</a>
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full bg-primary text-primary-content flex items-center justify-center">
            <span class="text-sm font-medium">JD</span>
          </div>
        </div>
        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li><a>Profile</a></li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
`;
InNavbar.storyName = 'In Navbar';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-primary m-1">Click me</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
