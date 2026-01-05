/**
 * @component Button
 * @description DaisyUI Button component with SQLI theme
 * @see https://daisyui.com/components/button/
 */
export default {
  title: 'Components/Actions/Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Button** component styled with SQLI themes.

## Usage
\`\`\`html
<button class="btn">Default</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
\`\`\`

## Variants
- \`btn-primary\` - Primary action (Cobalt in light, Sky in dark)
- \`btn-secondary\` - Secondary action
- \`btn-accent\` - Accent color
- \`btn-neutral\` - Neutral (Midnight)
- \`btn-ghost\` - Ghost style
- \`btn-link\` - Link style
- \`btn-outline\` - Outline style

## Sizes
- \`btn-xs\` - Extra small
- \`btn-sm\` - Small
- \`btn-md\` - Medium (default)
- \`btn-lg\` - Large
        `,
      },
    },
  },
};

export const Default = () => `
  <button class="btn">Default Button</button>
`;

export const Variants = () => `
  <div class="flex flex-wrap gap-2">
    <button class="btn">Default</button>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-accent">Accent</button>
    <button class="btn btn-neutral">Neutral</button>
    <button class="btn btn-info">Info</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-warning">Warning</button>
    <button class="btn btn-error">Error</button>
  </div>
`;
Variants.storyName = 'Color Variants';

export const Outline = () => `
  <div class="flex flex-wrap gap-2">
    <button class="btn btn-outline">Default</button>
    <button class="btn btn-outline btn-primary">Primary</button>
    <button class="btn btn-outline btn-secondary">Secondary</button>
    <button class="btn btn-outline btn-accent">Accent</button>
    <button class="btn btn-outline btn-info">Info</button>
    <button class="btn btn-outline btn-success">Success</button>
    <button class="btn btn-outline btn-warning">Warning</button>
    <button class="btn btn-outline btn-error">Error</button>
  </div>
`;
Outline.storyName = 'Outline Variants';

export const Sizes = () => `
  <div class="flex flex-wrap gap-2 items-center">
    <button class="btn btn-xs">Extra Small</button>
    <button class="btn btn-sm">Small</button>
    <button class="btn btn-md">Medium</button>
    <button class="btn btn-lg">Large</button>
  </div>
`;
Sizes.storyName = 'All Sizes';

export const Ghost = () => `
  <div class="flex flex-wrap gap-2">
    <button class="btn btn-ghost">Ghost</button>
    <button class="btn btn-ghost btn-primary">Ghost Primary</button>
  </div>
`;

export const Link = () => `
  <div class="flex flex-wrap gap-2">
    <button class="btn btn-link">Link Button</button>
    <button class="btn btn-link btn-primary">Primary Link</button>
  </div>
`;

export const WithIcons = () => `
  <div class="flex flex-wrap gap-2">
    <button class="btn btn-primary">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      Like
    </button>
    <button class="btn btn-secondary">
      Settings
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </button>
  </div>
`;

export const Loading = () => `
  <div class="flex flex-wrap gap-2">
    <button class="btn btn-primary">
      <span class="loading loading-spinner"></span>
      Loading
    </button>
    <button class="btn btn-square">
      <span class="loading loading-spinner"></span>
    </button>
  </div>
`;

export const Disabled = () => `
  <div class="flex flex-wrap gap-2">
    <button class="btn" disabled>Disabled</button>
    <button class="btn btn-primary" disabled>Disabled Primary</button>
    <button class="btn btn-outline" disabled>Disabled Outline</button>
  </div>
`;

export const Shapes = () => `
  <div class="flex flex-wrap gap-2 items-center">
    <button class="btn btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <button class="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <button class="btn btn-wide">Wide</button>
    <button class="btn btn-block">Block (Full Width)</button>
  </div>
`;

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex flex-wrap gap-2 mb-4">
      <button class="btn">Default</button>
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-accent">Accent</button>
      <button class="btn btn-neutral">Neutral</button>
    </div>
    <div class="flex flex-wrap gap-2">
      <button class="btn btn-outline btn-primary">Outline Primary</button>
      <button class="btn btn-ghost">Ghost</button>
      <button class="btn btn-link">Link</button>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};

export const Interactive = {
  render: ({ label, variant, size, outline, disabled }) => {
    const classes = ['btn'];
    if (variant !== 'default') classes.push(`btn-${variant}`);
    if (size !== 'md') classes.push(`btn-${size}`);
    if (outline) classes.push('btn-outline');

    return `
      <button class="${classes.join(' ')}" ${disabled ? 'disabled' : ''}>
        ${label}
      </button>
    `;
  },
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'md',
    outline: false,
    disabled: false,
  },
  argTypes: {
    label: { control: 'text', description: 'Button text' },
    variant: {
      control: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'accent',
        'neutral',
        'info',
        'success',
        'warning',
        'error',
        'ghost',
        'link',
      ],
      description: 'Color variant',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Button size',
    },
    outline: { control: 'boolean', description: 'Outline style' },
    disabled: { control: 'boolean', description: 'Disabled state' },
  },
};
