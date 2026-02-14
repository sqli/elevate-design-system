/**
 * @component Alert
 * @description DaisyUI Alert component with SQLI theme
 * @see https://daisyui.com/components/alert/
 */
import { heroicon } from '../../utils/heroicons.js';

export default {
  title: 'Components/Feedback/Alert',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Alert** component for user notifications.

## Usage
\`\`\`html
<div role="alert" class="alert">
  <span>Message</span>
</div>
\`\`\`

## Variants
- \`alert-info\` - Information (blue)
- \`alert-success\` - Success (green)
- \`alert-warning\` - Warning (yellow)
- \`alert-error\` - Error (red)
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'info', 'success', 'warning', 'error'],
      description: 'Alert variant/type',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    message: {
      control: { type: 'text' },
      description: 'Alert message content',
    },
    showIcon: {
      control: { type: 'boolean' },
      description: 'Show icon in alert',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    showActions: {
      control: { type: 'boolean' },
      description: 'Show action buttons',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    variant: 'info',
    message: 'This is an alert message.',
    showIcon: true,
    showActions: false,
  },
};

export const Default = () => `
  <div role="alert" class="alert">
    ${heroicon('information-circle', { class: 'stroke-info h-6 w-6 shrink-0' })}
    <span>Default alert message</span>
  </div>
`;

export const Info = () => `
  <div role="alert" class="alert alert-info">
    ${heroicon('information-circle', { class: 'h-6 w-6 shrink-0 stroke-current' })}
    <span>New software update available.</span>
  </div>
`;

export const Success = () => `
  <div role="alert" class="alert alert-success">
    ${heroicon('check-circle', { class: 'h-6 w-6 shrink-0 stroke-current' })}
    <span>Your purchase has been confirmed!</span>
  </div>
`;

export const Warning = () => `
  <div role="alert" class="alert alert-warning">
    ${heroicon('exclamation-triangle', { class: 'h-6 w-6 shrink-0 stroke-current' })}
    <span>Warning: Invalid email address!</span>
  </div>
`;

export const Error = () => `
  <div role="alert" class="alert alert-error">
    ${heroicon('x-circle', { class: 'h-6 w-6 shrink-0 stroke-current' })}
    <span>Error! Task failed successfully.</span>
  </div>
`;

export const AllVariants = () => `
  <div class="flex flex-col gap-4">
    <div role="alert" class="alert alert-info">
      ${heroicon('information-circle', { class: 'h-6 w-6 shrink-0 stroke-current' })}
      <span>Info: This is an informational message.</span>
    </div>
    <div role="alert" class="alert alert-success">
      ${heroicon('check-circle', { class: 'h-6 w-6 shrink-0 stroke-current' })}
      <span>Success: Operation completed.</span>
    </div>
    <div role="alert" class="alert alert-warning">
      ${heroicon('exclamation-triangle', { class: 'h-6 w-6 shrink-0 stroke-current' })}
      <span>Warning: Please review before continuing.</span>
    </div>
    <div role="alert" class="alert alert-error">
      ${heroicon('x-circle', { class: 'h-6 w-6 shrink-0 stroke-current' })}
      <span>Error: Something went wrong.</span>
    </div>
  </div>
`;
AllVariants.storyName = 'All Variants';

export const WithActions = () => `
  <div role="alert" class="alert">
    ${heroicon('information-circle', { class: 'stroke-info h-6 w-6 shrink-0' })}
    <span>We use cookies for no reason.</span>
    <div>
      <button class="btn btn-sm">Deny</button>
      <button class="btn btn-sm btn-primary">Accept</button>
    </div>
  </div>
`;
WithActions.storyName = 'With Actions';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex flex-col gap-4">
      <div role="alert" class="alert alert-info">
        ${heroicon('information-circle', { class: 'h-6 w-6 shrink-0 stroke-current' })}
        <span>Info alert in dark mode.</span>
      </div>
      <div role="alert" class="alert alert-success">
        ${heroicon('check-circle', { class: 'h-6 w-6 shrink-0 stroke-current' })}
        <span>Success alert in dark mode.</span>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};

// Interactive story with controls
const icons = {
  default: heroicon('information-circle', { class: 'stroke-info h-6 w-6 shrink-0' }),
  info: heroicon('information-circle', { class: 'h-6 w-6 shrink-0 stroke-current' }),
  success: heroicon('check-circle', { class: 'h-6 w-6 shrink-0 stroke-current' }),
  warning: heroicon('exclamation-triangle', { class: 'h-6 w-6 shrink-0 stroke-current' }),
  error: heroicon('x-circle', { class: 'h-6 w-6 shrink-0 stroke-current' }),
};

export const Interactive = (args) => {
  const variantClass = args.variant === 'default' ? '' : `alert-${args.variant}`;
  const icon = args.showIcon ? icons[args.variant] : '';
  const actions = args.showActions
    ? `<div><button class="btn btn-sm">Deny</button><button class="btn btn-sm btn-primary">Accept</button></div>`
    : '';

  return `
    <div role="alert" class="alert ${variantClass}">
      ${icon}
      <span>${args.message}</span>
      ${actions}
    </div>
  `;
};
Interactive.storyName = 'Interactive';
Interactive.parameters = {
  docs: {
    description: {
      story: 'Use the controls panel to customize the alert.',
    },
  },
};
