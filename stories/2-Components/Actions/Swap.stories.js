import { heroicon } from '../../utils/heroicons.js';

/**
 * @component Swap
 * @description DaisyUI Swap component for toggling between two states
 * @see https://daisyui.com/components/swap/
 */
export default {
  title: 'Components/Actions/Swap',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Swap** component for toggling between two states.

## Usage
\`\`\`html
<label class="swap">
  <input type="checkbox" />
  <div class="swap-on">ON</div>
  <div class="swap-off">OFF</div>
</label>
\`\`\`

## Modifiers
- \`swap-rotate\` - Rotates the content
- \`swap-flip\` - Flips the content
- \`swap-active\` - Makes it active by default
        `,
      },
    },
  },
};

export const Default = () => `
  <label class="swap text-xl">
    <input type="checkbox" />
    <div class="swap-on">ON</div>
    <div class="swap-off">OFF</div>
  </label>
`;

export const WithIcons = () => `
  <label class="swap swap-rotate">
    <input type="checkbox" />
    ${heroicon('sun', { class: 'swap-on h-6 w-6' })}
    ${heroicon('moon', { class: 'swap-off h-6 w-6' })}
  </label>
`;
WithIcons.storyName = 'With Icons (Theme Toggle)';

export const Rotate = () => `
  <label class="swap swap-rotate">
    <input type="checkbox" />
    ${heroicon('bars-3', { class: 'swap-on h-6 w-6' })}
    ${heroicon('x-mark', { class: 'swap-off h-6 w-6' })}
  </label>
`;
Rotate.storyName = 'Rotate Animation';

export const Flip = () => `
  <label class="swap swap-flip text-lg">
    <input type="checkbox" />
    <div class="swap-on">Good</div>
    <div class="swap-off">Evil</div>
  </label>
`;
Flip.storyName = 'Flip Animation';

export const ActiveByDefault = () => `
  <label class="swap swap-active text-xl">
    <input type="checkbox" checked />
    <div class="swap-on">ON</div>
    <div class="swap-off">OFF</div>
  </label>
`;
ActiveByDefault.storyName = 'Active by Default';

export const Volume = () => `
  <label class="swap">
    <input type="checkbox" />
    ${heroicon('speaker-wave', { class: 'swap-on h-8 w-8' })}
    ${heroicon('speaker-x-mark', { class: 'swap-off h-8 w-8' })}
  </label>
`;
Volume.storyName = 'Volume Toggle';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex gap-6 items-center">
      <label class="swap swap-rotate">
        <input type="checkbox" />
        ${heroicon('sun', { class: 'swap-on h-6 w-6' })}
        ${heroicon('moon', { class: 'swap-off h-6 w-6' })}
      </label>
      <label class="swap swap-flip text-base">
        <input type="checkbox" />
        <div class="swap-on">Light</div>
        <div class="swap-off">Dark</div>
      </label>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
