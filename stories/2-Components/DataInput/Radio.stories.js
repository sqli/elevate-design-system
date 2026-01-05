/**
 * @component Radio
 * @description DaisyUI Radio component with SQLI theme
 * @see https://daisyui.com/components/radio/
 */
export default {
  title: 'Components/Data Input/Radio',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Radio** button component for single selection.

## Usage
\`\`\`html
<input type="radio" name="radio-1" class="radio" checked />
\`\`\`

## Sizes
- \`radio-xs\`, \`radio-sm\`, \`radio-md\`, \`radio-lg\`

## Colors
- \`radio-primary\`, \`radio-secondary\`, \`radio-accent\`
- \`radio-info\`, \`radio-success\`, \`radio-warning\`, \`radio-error\`
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="flex flex-col gap-2">
    <div class="form-control">
      <label class="label cursor-pointer gap-4">
        <span class="label-text">Red pill</span>
        <input type="radio" name="radio-1" class="radio" checked />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer gap-4">
        <span class="label-text">Blue pill</span>
        <input type="radio" name="radio-1" class="radio" />
      </label>
    </div>
  </div>
`;

export const Colors = () => `
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <input type="radio" name="radio-colors" class="radio radio-primary" checked />
      <span>Primary</span>
    </div>
    <div class="flex items-center gap-2">
      <input type="radio" name="radio-colors" class="radio radio-secondary" />
      <span>Secondary</span>
    </div>
    <div class="flex items-center gap-2">
      <input type="radio" name="radio-colors" class="radio radio-accent" />
      <span>Accent</span>
    </div>
    <div class="flex items-center gap-2">
      <input type="radio" name="radio-colors" class="radio radio-info" />
      <span>Info</span>
    </div>
    <div class="flex items-center gap-2">
      <input type="radio" name="radio-colors" class="radio radio-success" />
      <span>Success</span>
    </div>
    <div class="flex items-center gap-2">
      <input type="radio" name="radio-colors" class="radio radio-warning" />
      <span>Warning</span>
    </div>
    <div class="flex items-center gap-2">
      <input type="radio" name="radio-colors" class="radio radio-error" />
      <span>Error</span>
    </div>
  </div>
`;
Colors.storyName = 'All Colors';

export const Sizes = () => `
  <div class="flex items-center gap-4">
    <div class="text-center">
      <input type="radio" name="radio-sizes" class="radio radio-xs" checked />
      <p class="text-xs mt-1">xs</p>
    </div>
    <div class="text-center">
      <input type="radio" name="radio-sizes" class="radio radio-sm" />
      <p class="text-xs mt-1">sm</p>
    </div>
    <div class="text-center">
      <input type="radio" name="radio-sizes" class="radio radio-md" />
      <p class="text-xs mt-1">md</p>
    </div>
    <div class="text-center">
      <input type="radio" name="radio-sizes" class="radio radio-lg" />
      <p class="text-xs mt-1">lg</p>
    </div>
  </div>
`;
Sizes.storyName = 'All Sizes';

export const Disabled = () => `
  <div class="flex flex-col gap-2">
    <div class="form-control">
      <label class="label cursor-not-allowed gap-4 opacity-50">
        <span class="label-text">Disabled (checked)</span>
        <input type="radio" name="radio-disabled" class="radio" checked disabled />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-not-allowed gap-4 opacity-50">
        <span class="label-text">Disabled (unchecked)</span>
        <input type="radio" name="radio-disabled" class="radio" disabled />
      </label>
    </div>
  </div>
`;

export const WithFormControl = () => `
  <div class="form-control w-52">
    <label class="cursor-pointer label">
      <span class="label-text">Remember me</span>
      <input type="radio" name="form-radio" class="radio radio-primary" checked />
    </label>
    <label class="cursor-pointer label">
      <span class="label-text">Option 2</span>
      <input type="radio" name="form-radio" class="radio radio-primary" />
    </label>
  </div>
`;
WithFormControl.storyName = 'With Form Control';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-2">
        <input type="radio" name="dark-radio" class="radio radio-primary" checked />
        <span class="text-base-content">Primary</span>
      </div>
      <div class="flex items-center gap-2">
        <input type="radio" name="dark-radio" class="radio radio-secondary" />
        <span class="text-base-content">Secondary</span>
      </div>
      <div class="flex items-center gap-2">
        <input type="radio" name="dark-radio" class="radio" />
        <span class="text-base-content">Default</span>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
