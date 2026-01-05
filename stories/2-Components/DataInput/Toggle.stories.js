/**
 * @component Toggle
 * @description DaisyUI Toggle component with SQLI theme
 * @see https://daisyui.com/components/toggle/
 */
export default {
  title: 'Components/Data Input/Toggle',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Toggle** switch component for on/off states.

## Usage
\`\`\`html
<input type="checkbox" class="toggle" />
<input type="checkbox" class="toggle toggle-primary" checked />
\`\`\`

## Color Variants
- \`toggle-primary\`, \`toggle-secondary\`, \`toggle-accent\`
- \`toggle-info\`, \`toggle-success\`, \`toggle-warning\`, \`toggle-error\`

## Sizes
- \`toggle-xs\`, \`toggle-sm\`, \`toggle-md\`, \`toggle-lg\`
        `,
      },
    },
  },
};

export const Default = () => `
  <input type="checkbox" class="toggle" checked />
`;

export const ColorVariants = () => `
  <div class="flex flex-wrap gap-4">
    <input type="checkbox" class="toggle" checked />
    <input type="checkbox" class="toggle toggle-primary" checked />
    <input type="checkbox" class="toggle toggle-secondary" checked />
    <input type="checkbox" class="toggle toggle-accent" checked />
    <input type="checkbox" class="toggle toggle-info" checked />
    <input type="checkbox" class="toggle toggle-success" checked />
    <input type="checkbox" class="toggle toggle-warning" checked />
    <input type="checkbox" class="toggle toggle-error" checked />
  </div>
`;
ColorVariants.storyName = 'Color Variants';

export const Sizes = () => `
  <div class="flex flex-wrap gap-4 items-center">
    <input type="checkbox" class="toggle toggle-xs" checked />
    <input type="checkbox" class="toggle toggle-sm" checked />
    <input type="checkbox" class="toggle toggle-md" checked />
    <input type="checkbox" class="toggle toggle-lg" checked />
  </div>
`;
Sizes.storyName = 'All Sizes';

export const WithLabel = () => `
  <div class="form-control w-52">
    <label class="label cursor-pointer">
      <span class="label-text">Enable notifications</span>
      <input type="checkbox" class="toggle toggle-primary" checked />
    </label>
  </div>
`;
WithLabel.storyName = 'With Label';

export const Disabled = () => `
  <div class="flex flex-wrap gap-4">
    <input type="checkbox" class="toggle" disabled />
    <input type="checkbox" class="toggle" disabled checked />
  </div>
`;

export const SettingsExample = () => `
  <div class="form-control w-80">
    <label class="label cursor-pointer">
      <span class="label-text">Email notifications</span>
      <input type="checkbox" class="toggle toggle-primary" checked />
    </label>
    <label class="label cursor-pointer">
      <span class="label-text">Push notifications</span>
      <input type="checkbox" class="toggle toggle-primary" />
    </label>
    <label class="label cursor-pointer">
      <span class="label-text">SMS notifications</span>
      <input type="checkbox" class="toggle toggle-primary" />
    </label>
    <label class="label cursor-pointer">
      <span class="label-text">Dark mode</span>
      <input type="checkbox" class="toggle toggle-secondary" />
    </label>
  </div>
`;
SettingsExample.storyName = 'Settings Example';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex flex-wrap gap-4 mb-4">
      <input type="checkbox" class="toggle" checked />
      <input type="checkbox" class="toggle toggle-primary" checked />
      <input type="checkbox" class="toggle toggle-secondary" checked />
      <input type="checkbox" class="toggle toggle-accent" checked />
    </div>
    <div class="form-control w-52">
      <label class="label cursor-pointer">
        <span class="label-text">Dark mode option</span>
        <input type="checkbox" class="toggle toggle-primary" checked />
      </label>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};

export const Interactive = {
  render: ({ checked, variant, size, disabled }) => {
    const classes = ['toggle'];
    if (variant !== 'default') classes.push(`toggle-${variant}`);
    if (size !== 'md') classes.push(`toggle-${size}`);

    return `<input type="checkbox" class="${classes.join(' ')}" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''} />`;
  },
  args: {
    checked: true,
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    checked: { control: 'boolean', description: 'Checked state' },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
      description: 'Color variant',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Toggle size',
    },
    disabled: { control: 'boolean', description: 'Disabled state' },
  },
};
