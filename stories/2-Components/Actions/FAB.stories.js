import { heroicon } from '../../utils/heroicons.js';

/**
 * @component FAB
 * @description Floating Action Button / Speed Dial with SQLI theme
 * @see https://daisyui.com/components/button/
 */
export default {
  title: 'Components/Actions/FAB',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**FAB** (Floating Action Button) for primary actions.

## Usage
\`\`\`html
<button class="btn btn-circle btn-primary fixed bottom-4 right-4">
  <svg>...</svg>
</button>
\`\`\`

## Notes
- Use fixed positioning for floating effect
- Combine with dropdown for speed dial functionality
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="relative h-48 w-full">
    <button class="btn btn-circle btn-primary absolute bottom-4 right-4">
      ${heroicon('plus', { class: 'h-6 w-6' })}
    </button>
  </div>
`;

export const Sizes = () => `
  <div class="flex gap-4 items-center">
    <button class="btn btn-circle btn-sm btn-primary">
      ${heroicon('plus', { class: 'h-4 w-4' })}
    </button>
    <button class="btn btn-circle btn-primary">
      ${heroicon('plus', { class: 'h-6 w-6' })}
    </button>
    <button class="btn btn-circle btn-lg btn-primary">
      ${heroicon('plus', { class: 'h-8 w-8' })}
    </button>
  </div>
`;
Sizes.storyName = 'All Sizes';

export const Colors = () => `
  <div class="flex flex-wrap gap-4">
    <button class="btn btn-circle btn-primary">
      ${heroicon('plus', { class: 'h-6 w-6' })}
    </button>
    <button class="btn btn-circle btn-secondary">
      ${heroicon('plus', { class: 'h-6 w-6' })}
    </button>
    <button class="btn btn-circle btn-accent">
      ${heroicon('plus', { class: 'h-6 w-6' })}
    </button>
    <button class="btn btn-circle btn-success">
      ${heroicon('plus', { class: 'h-6 w-6' })}
    </button>
    <button class="btn btn-circle btn-error">
      ${heroicon('plus', { class: 'h-6 w-6' })}
    </button>
  </div>
`;
Colors.storyName = 'All Colors';

export const SpeedDial = () => `
  <div class="relative h-64 w-full">
    <div class="absolute bottom-4 right-4">
      <div class="dropdown dropdown-top dropdown-end">
        <div tabindex="0" role="button" class="btn btn-circle btn-primary btn-lg">
          ${heroicon('plus', { class: 'h-6 w-6' })}
        </div>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mb-2">
          <li>
            <a>
              ${heroicon('arrow-up-tray', { class: 'h-5 w-5' })}
              Upload
            </a>
          </li>
          <li>
            <a>
              ${heroicon('folder', { class: 'h-5 w-5' })}
              New Folder
            </a>
          </li>
          <li>
            <a>
              ${heroicon('document', { class: 'h-5 w-5' })}
              New Document
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
`;
SpeedDial.storyName = 'Speed Dial';

export const Positions = () => `
  <div class="relative h-48 w-full border border-base-300 rounded-lg">
    <button class="btn btn-circle btn-sm btn-primary absolute top-4 left-4">
      ${heroicon('plus', { class: 'h-4 w-4' })}
    </button>
    <button class="btn btn-circle btn-sm btn-secondary absolute top-4 right-4">
      ${heroicon('plus', { class: 'h-4 w-4' })}
    </button>
    <button class="btn btn-circle btn-sm btn-accent absolute bottom-4 left-4">
      ${heroicon('plus', { class: 'h-4 w-4' })}
    </button>
    <button class="btn btn-circle btn-sm btn-neutral absolute bottom-4 right-4">
      ${heroicon('plus', { class: 'h-4 w-4' })}
    </button>
  </div>
`;

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg relative h-48">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <button class="btn btn-circle btn-primary absolute bottom-4 right-4">
      ${heroicon('plus', { class: 'h-6 w-6' })}
    </button>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
