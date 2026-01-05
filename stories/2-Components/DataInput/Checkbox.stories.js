/**
 * @component Checkbox
 * @description DaisyUI Checkbox component with SQLI theme
 * @see https://daisyui.com/components/checkbox/
 */
export default {
  title: 'Components/Data Input/Checkbox',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Checkbox** component for boolean selections.

## Usage
\`\`\`html
<input type="checkbox" class="checkbox" />
<input type="checkbox" class="checkbox checkbox-primary" checked />
\`\`\`

## Color Variants
- \`checkbox-primary\`, \`checkbox-secondary\`, \`checkbox-accent\`
- \`checkbox-info\`, \`checkbox-success\`, \`checkbox-warning\`, \`checkbox-error\`

## Sizes
- \`checkbox-xs\`, \`checkbox-sm\`, \`checkbox-md\`, \`checkbox-lg\`
        `,
      },
    },
  },
};

export const Default = () => `
  <input type="checkbox" class="checkbox" checked />
`;

export const ColorVariants = () => `
  <div class="flex flex-wrap gap-4">
    <input type="checkbox" class="checkbox" checked />
    <input type="checkbox" class="checkbox checkbox-primary" checked />
    <input type="checkbox" class="checkbox checkbox-secondary" checked />
    <input type="checkbox" class="checkbox checkbox-accent" checked />
    <input type="checkbox" class="checkbox checkbox-info" checked />
    <input type="checkbox" class="checkbox checkbox-success" checked />
    <input type="checkbox" class="checkbox checkbox-warning" checked />
    <input type="checkbox" class="checkbox checkbox-error" checked />
  </div>
`;
ColorVariants.storyName = 'Color Variants';

export const Sizes = () => `
  <div class="flex flex-wrap gap-4 items-center">
    <input type="checkbox" class="checkbox checkbox-xs" checked />
    <input type="checkbox" class="checkbox checkbox-sm" checked />
    <input type="checkbox" class="checkbox checkbox-md" checked />
    <input type="checkbox" class="checkbox checkbox-lg" checked />
  </div>
`;
Sizes.storyName = 'All Sizes';

export const WithLabel = () => `
  <div class="form-control">
    <label class="label cursor-pointer gap-4">
      <span class="label-text">Remember me</span>
      <input type="checkbox" class="checkbox checkbox-primary" checked />
    </label>
  </div>
`;
WithLabel.storyName = 'With Label';

export const Indeterminate = () => `
  <input type="checkbox" class="checkbox" id="indeterminate-checkbox" />
  <script>
    document.getElementById('indeterminate-checkbox').indeterminate = true;
  </script>
`;

export const Disabled = () => `
  <div class="flex flex-wrap gap-4">
    <input type="checkbox" class="checkbox" disabled />
    <input type="checkbox" class="checkbox" disabled checked />
  </div>
`;

export const FormExample = () => `
  <div class="form-control">
    <label class="label cursor-pointer justify-start gap-3">
      <input type="checkbox" class="checkbox checkbox-primary" />
      <span class="label-text">Option 1</span>
    </label>
    <label class="label cursor-pointer justify-start gap-3">
      <input type="checkbox" class="checkbox checkbox-primary" checked />
      <span class="label-text">Option 2</span>
    </label>
    <label class="label cursor-pointer justify-start gap-3">
      <input type="checkbox" class="checkbox checkbox-primary" />
      <span class="label-text">Option 3</span>
    </label>
  </div>
`;
FormExample.storyName = 'Form Example';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex flex-wrap gap-4 mb-4">
      <input type="checkbox" class="checkbox" checked />
      <input type="checkbox" class="checkbox checkbox-primary" checked />
      <input type="checkbox" class="checkbox checkbox-secondary" checked />
      <input type="checkbox" class="checkbox checkbox-accent" checked />
    </div>
    <div class="form-control">
      <label class="label cursor-pointer justify-start gap-3">
        <input type="checkbox" class="checkbox checkbox-primary" />
        <span class="label-text">Accept terms</span>
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
    const classes = ['checkbox'];
    if (variant !== 'default') classes.push(`checkbox-${variant}`);
    if (size !== 'md') classes.push(`checkbox-${size}`);

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
      description: 'Checkbox size',
    },
    disabled: { control: 'boolean', description: 'Disabled state' },
  },
};
