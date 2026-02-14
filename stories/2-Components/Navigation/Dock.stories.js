import { heroicon } from '../../utils/heroicons.js';

/**
 * @component Dock
 * @description DaisyUI Dock component with SQLI theme
 * @see https://daisyui.com/components/dock/
 */
export default {
  title: 'Components/Navigation/Dock',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Dock** component for bottom navigation.

## Usage
\`\`\`html
<div class="dock">
  <button class="dock-active">
    <svg>...</svg>
  </button>
  <button>
    <svg>...</svg>
  </button>
</div>
\`\`\`

## Sizes
- \`dock-xs\`, \`dock-sm\`, \`dock-md\`, \`dock-lg\`
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="dock">
    <button>
      ${heroicon('home', { class: 'h-5 w-5' })}
    </button>
    <button class="dock-active">
      ${heroicon('information-circle', { class: 'h-5 w-5' })}
    </button>
    <button>
      ${heroicon('chart-bar-square', { class: 'h-5 w-5' })}
    </button>
  </div>
`;

export const WithLabels = () => `
  <div class="dock">
    <button>
      ${heroicon('home', { class: 'h-5 w-5' })}
      <span class="dock-label">Home</span>
    </button>
    <button class="dock-active">
      ${heroicon('information-circle', { class: 'h-5 w-5' })}
      <span class="dock-label">Details</span>
    </button>
    <button>
      ${heroicon('chart-bar-square', { class: 'h-5 w-5' })}
      <span class="dock-label">Stats</span>
    </button>
  </div>
`;
WithLabels.storyName = 'With Labels';

export const Sizes = () => `
  <div class="flex flex-col gap-8">
    <div>
      <p class="text-sm mb-2 opacity-70">Extra Small (xs)</p>
      <div class="dock dock-xs">
        <button>
          ${heroicon('home', { class: 'h-4 w-4' })}
        </button>
        <button class="dock-active">
          ${heroicon('information-circle', { class: 'h-4 w-4' })}
        </button>
        <button>
          ${heroicon('chart-bar-square', { class: 'h-4 w-4' })}
        </button>
      </div>
    </div>
    <div>
      <p class="text-sm mb-2 opacity-70">Large (lg)</p>
      <div class="dock dock-lg">
        <button>
          ${heroicon('home', { class: 'h-6 w-6' })}
        </button>
        <button class="dock-active">
          ${heroicon('information-circle', { class: 'h-6 w-6' })}
        </button>
        <button>
          ${heroicon('chart-bar-square', { class: 'h-6 w-6' })}
        </button>
      </div>
    </div>
  </div>
`;
Sizes.storyName = 'Sizes';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="dock">
      <button>
        ${heroicon('home', { class: 'h-5 w-5' })}
        <span class="dock-label">Home</span>
      </button>
      <button class="dock-active">
        ${heroicon('information-circle', { class: 'h-5 w-5' })}
        <span class="dock-label">Details</span>
      </button>
      <button>
        ${heroicon('chart-bar-square', { class: 'h-5 w-5' })}
        <span class="dock-label">Stats</span>
      </button>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
