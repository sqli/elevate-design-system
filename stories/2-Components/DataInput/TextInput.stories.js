/**
 * @component TextInput
 * @description DaisyUI Text Input component with SQLI theme
 * @see https://daisyui.com/components/input/
 */
import { heroicon } from '../../utils/heroicons.js';

export default {
  title: 'Components/Data Input/Text Input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Text Input** component for form fields.

## Usage
\`\`\`html
<input type="text" placeholder="Type here" class="input" />
<input type="text" class="input input-bordered" />
\`\`\`

## Modifiers
- \`input-bordered\` - With border
- \`input-ghost\` - Ghost style
- \`input-primary\`, \`input-secondary\`, etc. - Color variants
- \`input-xs\`, \`input-sm\`, \`input-md\`, \`input-lg\` - Sizes
        `,
      },
    },
  },
};

export const Default = () => `
  <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
`;

export const Bordered = () => `
  <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
`;

export const Ghost = () => `
  <input type="text" placeholder="Ghost input" class="input input-ghost w-full max-w-xs" />
`;

export const Sizes = () => `
  <div class="flex flex-col gap-4 w-full max-w-xs">
    <input type="text" placeholder="Extra Small" class="input input-bordered input-xs" />
    <input type="text" placeholder="Small" class="input input-bordered input-sm" />
    <input type="text" placeholder="Medium" class="input input-bordered input-md" />
    <input type="text" placeholder="Large" class="input input-bordered input-lg" />
  </div>
`;
Sizes.storyName = 'All Sizes';

export const Disabled = () => `
  <input type="text" placeholder="Disabled" class="input input-bordered w-full max-w-xs" disabled />
`;

export const WithLabel = () => `
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">What is your name?</span>
      <span class="label-text-alt">Required</span>
    </label>
    <input type="text" placeholder="John Doe" class="input input-bordered w-full max-w-xs" />
    <label class="label">
      <span class="label-text-alt">Enter your full name</span>
    </label>
  </div>
`;
WithLabel.storyName = 'With Label';

export const WithIcon = () => `
  <div class="flex flex-col gap-4">
    <label class="input input-bordered flex items-center gap-2 w-full max-w-xs">
      ${heroicon('envelope', { size: 16, variant: 'solid', class: 'h-4 w-4 opacity-70' })}
      <input type="text" class="grow" placeholder="Email" />
    </label>
    <label class="input input-bordered flex items-center gap-2 w-full max-w-xs">
      ${heroicon('user', { size: 16, variant: 'solid', class: 'h-4 w-4 opacity-70' })}
      <input type="text" class="grow" placeholder="Username" />
    </label>
    <label class="input input-bordered flex items-center gap-2 w-full max-w-xs">
      <input type="text" class="grow" placeholder="Search" />
      ${heroicon('magnifying-glass', { size: 16, variant: 'solid', class: 'h-4 w-4 opacity-70' })}
    </label>
  </div>
`;
WithIcon.storyName = 'With Icon';

export const Types = () => `
  <div class="flex flex-col gap-4 w-full max-w-xs">
    <input type="text" placeholder="Text" class="input input-bordered" />
    <input type="email" placeholder="Email" class="input input-bordered" />
    <input type="password" placeholder="Password" class="input input-bordered" />
    <input type="number" placeholder="Number" class="input input-bordered" />
    <input type="tel" placeholder="Phone" class="input input-bordered" />
    <input type="url" placeholder="URL" class="input input-bordered" />
  </div>
`;
Types.storyName = 'Input Types';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex flex-col gap-4 w-full max-w-xs">
      <input type="text" placeholder="Default" class="input input-bordered" />
      <input type="text" placeholder="Primary" class="input input-bordered input-primary" />
      <input type="text" placeholder="Secondary" class="input input-bordered input-secondary" />
      <div class="form-control">
        <label class="label">
          <span class="label-text">With Label</span>
        </label>
        <input type="text" placeholder="Email" class="input input-bordered" />
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};

export const Interactive = {
  render: ({ placeholder, variant, size, bordered, disabled }) => {
    const classes = ['input', 'w-full', 'max-w-xs'];
    if (bordered) classes.push('input-bordered');
    if (variant !== 'default') classes.push(`input-${variant}`);
    if (size !== 'md') classes.push(`input-${size}`);

    return `<input type="text" placeholder="${placeholder}" class="${classes.join(' ')}" ${disabled ? 'disabled' : ''} />`;
  },
  args: {
    placeholder: 'Type here',
    variant: 'default',
    size: 'md',
    bordered: true,
    disabled: false,
  },
  argTypes: {
    placeholder: { control: 'text', description: 'Placeholder text' },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
      description: 'Color variant',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Input size',
    },
    bordered: { control: 'boolean', description: 'Show border' },
    disabled: { control: 'boolean', description: 'Disabled state' },
  },
};
