/**
 * @component List
 * @description DaisyUI List component with SQLI theme
 * @see https://daisyui.com/components/list/
 */
import { heroicon } from '../../utils/heroicons.js';

export default {
  title: 'Components/Data Display/List',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **List** component for displaying lists of items.

## Usage
\`\`\`html
<ul class="list bg-base-100 rounded-box shadow-md">
  <li class="list-row">
    <div>Item</div>
  </li>
</ul>
\`\`\`
        `,
      },
    },
  },
};

export const Default = () => `
  <ul class="list bg-base-100 rounded-box shadow-md w-80">
    <li class="list-row">
      <div class="text-4xl font-thin opacity-30">01</div>
      <div>
        <div>Dio Lupa</div>
        <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
      </div>
      <p class="list-col-wrap text-xs">
        Lost in the echoes of a fsatisfying meeting, the band takes listeners on a journey through the icy winds.
      </p>
      <button class="btn btn-square btn-ghost">
        ${heroicon('play', { class: 'size-[1.2em]' })}
      </button>
    </li>
    <li class="list-row">
      <div class="text-4xl font-thin opacity-30">02</div>
      <div>
        <div>Elijah Mitchell</div>
        <div class="text-xs uppercase font-semibold opacity-60">Colors of a Daydream</div>
      </div>
      <p class="list-col-wrap text-xs">
        A vibrant track that feels like a sonic journey through kaleidoscopic emotions and dreamlike landscapes.
      </p>
      <button class="btn btn-square btn-ghost">
        ${heroicon('play', { class: 'size-[1.2em]' })}
      </button>
    </li>
  </ul>
`;

export const SimpleList = () => `
  <ul class="list bg-base-100 rounded-box shadow-md w-64">
    <li class="list-row">Item 1</li>
    <li class="list-row">Item 2</li>
    <li class="list-row">Item 3</li>
  </ul>
`;
SimpleList.storyName = 'Simple List';

export const WithAvatars = () => `
  <ul class="list bg-base-100 rounded-box shadow-md w-80">
    <li class="list-row">
      <div class="avatar">
        <div class="w-10 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold">
          JS
        </div>
      </div>
      <div>
        <div class="font-medium">John Smith</div>
        <div class="text-xs opacity-60">john@example.com</div>
      </div>
    </li>
    <li class="list-row">
      <div class="avatar">
        <div class="w-10 rounded-full bg-secondary flex items-center justify-center text-secondary-content font-bold">
          JD
        </div>
      </div>
      <div>
        <div class="font-medium">Jane Doe</div>
        <div class="text-xs opacity-60">jane@example.com</div>
      </div>
    </li>
  </ul>
`;
WithAvatars.storyName = 'With Avatars';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <ul class="list bg-base-200 rounded-box w-64">
      <li class="list-row">Item 1</li>
      <li class="list-row">Item 2</li>
      <li class="list-row">Item 3</li>
    </ul>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
