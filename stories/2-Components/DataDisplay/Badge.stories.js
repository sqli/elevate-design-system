/**
 * @component Badge
 * @description DaisyUI Badge component with SQLI theme
 * @see https://daisyui.com/components/badge/
 */
export default {
  title: 'Components/Data Display/Badge',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Badge** component for labels and indicators.

## Usage
\`\`\`html
<span class="badge">Badge</span>
<span class="badge badge-primary">Primary</span>
\`\`\`

## Variants
- \`badge-primary\`, \`badge-secondary\`, \`badge-accent\`
- \`badge-info\`, \`badge-success\`, \`badge-warning\`, \`badge-error\`
- \`badge-outline\` - Outline style
- \`badge-ghost\` - Ghost style

## Sizes
- \`badge-xs\`, \`badge-sm\`, \`badge-md\`, \`badge-lg\`
        `,
      },
    },
  },
};

export const Default = () => `
  <span class="badge">Badge</span>
`;

export const Variants = () => `
  <div class="flex flex-wrap gap-2">
    <span class="badge">Default</span>
    <span class="badge badge-neutral">Neutral</span>
    <span class="badge badge-primary">Primary</span>
    <span class="badge badge-secondary">Secondary</span>
    <span class="badge badge-accent">Accent</span>
    <span class="badge badge-ghost">Ghost</span>
  </div>
`;
Variants.storyName = 'Color Variants';

export const Status = () => `
  <div class="flex flex-wrap gap-2">
    <span class="badge badge-info">Info</span>
    <span class="badge badge-success">Success</span>
    <span class="badge badge-warning">Warning</span>
    <span class="badge badge-error">Error</span>
  </div>
`;
Status.storyName = 'Status Badges';

export const Outline = () => `
  <div class="flex flex-wrap gap-2">
    <span class="badge badge-outline">Default</span>
    <span class="badge badge-outline badge-primary">Primary</span>
    <span class="badge badge-outline badge-secondary">Secondary</span>
    <span class="badge badge-outline badge-accent">Accent</span>
  </div>
`;

export const Sizes = () => `
  <div class="flex flex-wrap gap-2 items-center">
    <span class="badge badge-xs">xs</span>
    <span class="badge badge-sm">sm</span>
    <span class="badge badge-md">md</span>
    <span class="badge badge-lg">lg</span>
  </div>
`;
Sizes.storyName = 'All Sizes';

export const Empty = () => `
  <div class="flex flex-wrap gap-2 items-center">
    <span class="badge badge-xs badge-primary"></span>
    <span class="badge badge-sm badge-primary"></span>
    <span class="badge badge-md badge-primary"></span>
    <span class="badge badge-lg badge-primary"></span>
  </div>
`;
Empty.storyName = 'Empty Badges (Indicators)';

export const InButton = () => `
  <div class="flex flex-wrap gap-2">
    <button class="btn">
      Inbox
      <span class="badge badge-sm">+99</span>
    </button>
    <button class="btn">
      Notifications
      <span class="badge badge-sm badge-secondary">NEW</span>
    </button>
  </div>
`;
InButton.storyName = 'In Button';

export const InText = () => `
  <div class="flex flex-col gap-2">
    <p>
      This feature is <span class="badge badge-primary badge-sm">new</span>
    </p>
    <p>
      Status: <span class="badge badge-success badge-sm">Active</span>
    </p>
    <p>
      Priority: <span class="badge badge-error badge-sm">High</span>
    </p>
  </div>
`;
InText.storyName = 'In Text';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex flex-wrap gap-2 mb-4">
      <span class="badge">Default</span>
      <span class="badge badge-primary">Primary</span>
      <span class="badge badge-secondary">Secondary</span>
      <span class="badge badge-accent">Accent</span>
    </div>
    <div class="flex flex-wrap gap-2 mb-4">
      <span class="badge badge-info">Info</span>
      <span class="badge badge-success">Success</span>
      <span class="badge badge-warning">Warning</span>
      <span class="badge badge-error">Error</span>
    </div>
    <div class="flex flex-wrap gap-2">
      <span class="badge badge-outline badge-primary">Outline Primary</span>
      <span class="badge badge-outline badge-secondary">Outline Secondary</span>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};

export const Interactive = {
  render: ({ text, variant, size, outline }) => {
    const classes = ['badge'];
    if (variant !== 'default') classes.push(`badge-${variant}`);
    if (size !== 'md') classes.push(`badge-${size}`);
    if (outline) classes.push('badge-outline');

    return `<span class="${classes.join(' ')}">${text}</span>`;
  },
  args: {
    text: 'Badge',
    variant: 'primary',
    size: 'md',
    outline: false,
  },
  argTypes: {
    text: { control: 'text', description: 'Badge text' },
    variant: {
      control: 'select',
      options: [
        'default',
        'neutral',
        'primary',
        'secondary',
        'accent',
        'ghost',
        'info',
        'success',
        'warning',
        'error',
      ],
      description: 'Color variant',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Badge size',
    },
    outline: { control: 'boolean', description: 'Outline style' },
  },
};
