/**
 * @component Select
 * @description DaisyUI Select component with SQLI theme
 * @see https://daisyui.com/components/select/
 */
export default {
  title: 'Components/Data Input/Select',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Select** dropdown component.

## Usage
\`\`\`html
<select class="select select-bordered w-full max-w-xs">
  <option disabled selected>Pick one</option>
  <option>Option 1</option>
</select>
\`\`\`

## Variants
- \`select-bordered\` - With border
- \`select-ghost\` - Ghost style

## Sizes
- \`select-xs\`, \`select-sm\`, \`select-md\`, \`select-lg\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'ghost'],
      description: 'Select style variant',
      table: { defaultValue: { summary: 'bordered' } },
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
      description: 'Select color',
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Select size',
      table: { defaultValue: { summary: 'md' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the select',
      table: { defaultValue: { summary: 'false' } },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
  },
  args: {
    variant: 'bordered',
    color: 'default',
    size: 'md',
    disabled: false,
    placeholder: 'Select an option',
  },
};

export const Default = () => `
  <select class="select w-full max-w-xs">
    <option disabled selected>Pick your favorite Simpson</option>
    <option>Homer</option>
    <option>Marge</option>
    <option>Bart</option>
    <option>Lisa</option>
    <option>Maggie</option>
  </select>
`;

export const Bordered = () => `
  <select class="select select-bordered w-full max-w-xs">
    <option disabled selected>Who shot first?</option>
    <option>Han Solo</option>
    <option>Greedo</option>
  </select>
`;

export const Ghost = () => `
  <select class="select select-ghost w-full max-w-xs">
    <option disabled selected>Pick a language</option>
    <option>JavaScript</option>
    <option>TypeScript</option>
    <option>Python</option>
    <option>Go</option>
  </select>
`;

export const Colors = () => `
  <div class="flex flex-col gap-4 w-full max-w-xs">
    <select class="select select-primary w-full">
      <option disabled selected>Primary</option>
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
    <select class="select select-secondary w-full">
      <option disabled selected>Secondary</option>
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
    <select class="select select-accent w-full">
      <option disabled selected>Accent</option>
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
    <select class="select select-info w-full">
      <option disabled selected>Info</option>
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
    <select class="select select-success w-full">
      <option disabled selected>Success</option>
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
    <select class="select select-warning w-full">
      <option disabled selected>Warning</option>
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
    <select class="select select-error w-full">
      <option disabled selected>Error</option>
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
  </div>
`;
Colors.storyName = 'All Colors';

export const Sizes = () => `
  <div class="flex flex-col gap-4 w-full max-w-xs">
    <select class="select select-bordered select-xs w-full">
      <option disabled selected>Extra Small</option>
      <option>Option 1</option>
    </select>
    <select class="select select-bordered select-sm w-full">
      <option disabled selected>Small</option>
      <option>Option 1</option>
    </select>
    <select class="select select-bordered select-md w-full">
      <option disabled selected>Medium</option>
      <option>Option 1</option>
    </select>
    <select class="select select-bordered select-lg w-full">
      <option disabled selected>Large</option>
      <option>Option 1</option>
    </select>
  </div>
`;
Sizes.storyName = 'All Sizes';

export const Disabled = () => `
  <select class="select select-bordered w-full max-w-xs" disabled>
    <option>You can't touch this</option>
  </select>
`;

export const WithLabel = () => `
  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">Pick the best fantasy franchise</span>
      <span class="label-text-alt">Alt label</span>
    </div>
    <select class="select select-bordered">
      <option disabled selected>Pick one</option>
      <option>Star Wars</option>
      <option>Harry Potter</option>
      <option>Lord of the Rings</option>
      <option>Game of Thrones</option>
    </select>
    <div class="label">
      <span class="label-text-alt">Alt label</span>
      <span class="label-text-alt">Alt label</span>
    </div>
  </label>
`;
WithLabel.storyName = 'With Label';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex flex-col gap-4 w-full max-w-xs">
      <select class="select select-bordered w-full">
        <option disabled selected>Select an option</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <select class="select select-primary w-full">
        <option disabled selected>Primary select</option>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};

export const Interactive = (args) => {
  const variantClass = args.variant === 'default' ? '' : `select-${args.variant}`;
  const colorClass = args.color === 'default' ? '' : `select-${args.color}`;
  const sizeClass = args.size === 'md' ? '' : `select-${args.size}`;
  const disabledAttr = args.disabled ? 'disabled' : '';

  return `
    <select class="select ${variantClass} ${colorClass} ${sizeClass} w-full max-w-xs" ${disabledAttr}>
      <option disabled selected>${args.placeholder}</option>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  `;
};
Interactive.storyName = 'Interactive';
Interactive.parameters = {
  docs: {
    description: {
      story: 'Use the controls panel to customize the select.',
    },
  },
};
