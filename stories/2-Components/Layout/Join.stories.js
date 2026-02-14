/**
 * @component Join
 * @description DaisyUI Join component with SQLI theme
 * @see https://daisyui.com/components/join/
 */
import { heroicon } from '../../utils/heroicons.js';

export default {
  title: 'Components/Layout/Join',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Join** component for grouping items together.

## Usage
\`\`\`html
<div class="join">
  <button class="btn join-item">Button</button>
  <button class="btn join-item">Button</button>
</div>
\`\`\`

## Variants
- Default - Horizontal grouping
- \`join-vertical\` - Vertical grouping
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="join">
    <button class="btn join-item">Button</button>
    <button class="btn join-item">Button</button>
    <button class="btn join-item">Button</button>
  </div>
`;

export const Vertical = () => `
  <div class="join join-vertical">
    <button class="btn join-item">Button</button>
    <button class="btn join-item">Button</button>
    <button class="btn join-item">Button</button>
  </div>
`;

export const WithInputAndButton = () => `
  <div class="join">
    <input class="input input-bordered join-item" placeholder="Email" />
    <button class="btn btn-primary join-item">Subscribe</button>
  </div>
`;
WithInputAndButton.storyName = 'Input + Button';

export const WithSelect = () => `
  <div class="join">
    <select class="select select-bordered join-item">
      <option selected>Category</option>
      <option>Sci-fi</option>
      <option>Drama</option>
      <option>Action</option>
    </select>
    <input class="input input-bordered join-item" placeholder="Search..." />
    <button class="btn join-item">Search</button>
  </div>
`;
WithSelect.storyName = 'With Select';

export const RadioGroup = () => `
  <div class="join">
    <input class="join-item btn" type="radio" name="options" aria-label="Radio 1" checked />
    <input class="join-item btn" type="radio" name="options" aria-label="Radio 2" />
    <input class="join-item btn" type="radio" name="options" aria-label="Radio 3" />
  </div>
`;
RadioGroup.storyName = 'Radio Group';

export const WithDropdown = () => `
  <div class="join">
    <button class="btn join-item">Action</button>
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn join-item">
        ${heroicon('chevron-down', { class: 'h-4 w-4' })}
      </div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  </div>
`;
WithDropdown.storyName = 'With Dropdown';

export const Responsive = () => `
  <div class="join join-vertical lg:join-horizontal">
    <button class="btn join-item">Button</button>
    <button class="btn join-item">Button</button>
    <button class="btn join-item">Button</button>
  </div>
`;

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex flex-col gap-4">
      <div class="join">
        <button class="btn join-item">Button 1</button>
        <button class="btn join-item">Button 2</button>
        <button class="btn join-item">Button 3</button>
      </div>
      <div class="join">
        <input class="input input-bordered join-item" placeholder="Email" />
        <button class="btn btn-primary join-item">Subscribe</button>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
