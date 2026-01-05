/**
 * @component Range
 * @description DaisyUI Range slider component with SQLI theme
 * @see https://daisyui.com/components/range/
 */
export default {
  title: 'Components/Data Input/Range',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Range** slider component.

## Usage
\`\`\`html
<input type="range" min="0" max="100" value="40" class="range" />
\`\`\`

## Sizes
- \`range-xs\`, \`range-sm\`, \`range-md\`, \`range-lg\`

## Colors
- \`range-primary\`, \`range-secondary\`, \`range-accent\`
- \`range-info\`, \`range-success\`, \`range-warning\`, \`range-error\`
        `,
      },
    },
  },
};

export const Default = () => `
  <input type="range" min="0" max="100" value="40" class="range w-full max-w-xs" />
`;

export const WithSteps = () => `
  <div class="w-full max-w-xs">
    <input type="range" min="0" max="100" value="25" class="range" step="25" />
    <div class="flex w-full justify-between px-2 text-xs">
      <span>|</span>
      <span>|</span>
      <span>|</span>
      <span>|</span>
      <span>|</span>
    </div>
  </div>
`;
WithSteps.storyName = 'With Steps';

export const Colors = () => `
  <div class="flex flex-col gap-4 w-full max-w-xs">
    <input type="range" min="0" max="100" value="40" class="range range-primary" />
    <input type="range" min="0" max="100" value="50" class="range range-secondary" />
    <input type="range" min="0" max="100" value="60" class="range range-accent" />
    <input type="range" min="0" max="100" value="70" class="range range-info" />
    <input type="range" min="0" max="100" value="80" class="range range-success" />
    <input type="range" min="0" max="100" value="90" class="range range-warning" />
    <input type="range" min="0" max="100" value="100" class="range range-error" />
  </div>
`;
Colors.storyName = 'All Colors';

export const Sizes = () => `
  <div class="flex flex-col gap-6 w-full max-w-xs">
    <div>
      <p class="text-sm mb-2 opacity-70">Extra Small (xs)</p>
      <input type="range" min="0" max="100" value="40" class="range range-xs" />
    </div>
    <div>
      <p class="text-sm mb-2 opacity-70">Small (sm)</p>
      <input type="range" min="0" max="100" value="50" class="range range-sm" />
    </div>
    <div>
      <p class="text-sm mb-2 opacity-70">Medium (md)</p>
      <input type="range" min="0" max="100" value="60" class="range range-md" />
    </div>
    <div>
      <p class="text-sm mb-2 opacity-70">Large (lg)</p>
      <input type="range" min="0" max="100" value="70" class="range range-lg" />
    </div>
  </div>
`;
Sizes.storyName = 'All Sizes';

export const WithLabel = () => `
  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">Volume</span>
      <span class="label-text-alt">40%</span>
    </div>
    <input type="range" min="0" max="100" value="40" class="range range-primary" />
  </label>
`;
WithLabel.storyName = 'With Label';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex flex-col gap-4 w-full max-w-xs">
      <input type="range" min="0" max="100" value="40" class="range" />
      <input type="range" min="0" max="100" value="60" class="range range-primary" />
      <input type="range" min="0" max="100" value="80" class="range range-secondary" />
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
