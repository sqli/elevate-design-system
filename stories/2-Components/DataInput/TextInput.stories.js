/**
 * @component TextInput
 * @description DaisyUI Text Input component with SQLI theme
 * @see https://daisyui.com/components/input/
 */
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

export const ColorVariants = () => `
  <div class="flex flex-col gap-4 w-full max-w-xs">
    <input type="text" placeholder="Primary" class="input input-bordered input-primary" />
    <input type="text" placeholder="Secondary" class="input input-bordered input-secondary" />
    <input type="text" placeholder="Accent" class="input input-bordered input-accent" />
    <input type="text" placeholder="Info" class="input input-bordered input-info" />
    <input type="text" placeholder="Success" class="input input-bordered input-success" />
    <input type="text" placeholder="Warning" class="input input-bordered input-warning" />
    <input type="text" placeholder="Error" class="input input-bordered input-error" />
  </div>
`;
ColorVariants.storyName = 'Color Variants';

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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
      </svg>
      <input type="text" class="grow" placeholder="Email" />
    </label>
    <label class="input input-bordered flex items-center gap-2 w-full max-w-xs">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
      </svg>
      <input type="text" class="grow" placeholder="Username" />
    </label>
    <label class="input input-bordered flex items-center gap-2 w-full max-w-xs">
      <input type="text" class="grow" placeholder="Search" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
        <path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" />
      </svg>
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
