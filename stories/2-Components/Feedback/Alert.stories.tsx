import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from '../../../src/components/Alert';
import { Button } from '../../../src/components/Button';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const SuccessIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WarningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const ErrorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  default: <InfoIcon />,
  info: <InfoIcon />,
  success: <SuccessIcon />,
  warning: <WarningIcon />,
  error: <ErrorIcon />,
};

const meta: Meta<typeof Alert> = {
  title: 'Components/Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
React **Alert** component for user notifications, built with class-variance-authority.

## Usage
\`\`\`tsx
import { Alert } from '@sqli/elevate-design-system/react';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

<Alert variant="info" icon={<InfoIcon />}>
  New software update available.
</Alert>
\`\`\`

## Variants
- \`default\` - Neutral alert
- \`info\` - Information (blue)
- \`success\` - Success (green)
- \`warning\` - Warning (yellow)
- \`error\` - Error (red)

## Props
- \`icon\` - ReactNode displayed before the message
- \`action\` - ReactNode displayed after the message (e.g., buttons)
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'error'],
      description: 'Alert variant/type',
    },
    children: {
      control: 'text',
      description: 'Alert message content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: 'Default alert message',
    icon: <InfoIcon />,
  },
};

export const Info = () => (
  <Alert variant="info" icon={<InfoIcon />}>
    New software update available.
  </Alert>
);

export const Success = () => (
  <Alert variant="success" icon={<SuccessIcon />}>
    Your purchase has been confirmed!
  </Alert>
);

export const Warning = () => (
  <Alert variant="warning" icon={<WarningIcon />}>
    Warning: Invalid email address!
  </Alert>
);

export const Error = () => (
  <Alert variant="error" icon={<ErrorIcon />}>
    Error! Task failed successfully.
  </Alert>
);

export const Variants = () => (
  <div className="flex flex-col gap-4">
    <Alert variant="info" icon={<InfoIcon />}>
      Info: This is an informational message.
    </Alert>
    <Alert variant="success" icon={<SuccessIcon />}>
      Success: Operation completed.
    </Alert>
    <Alert variant="warning" icon={<WarningIcon />}>
      Warning: Please review before continuing.
    </Alert>
    <Alert variant="error" icon={<ErrorIcon />}>
      Error: Something went wrong.
    </Alert>
  </div>
);
Variants.storyName = 'All Variants';

export const WithActions = () => (
  <Alert
    icon={<InfoIcon />}
    action={
      <div className="flex gap-2">
        <Button size="sm">Deny</Button>
        <Button size="sm" variant="primary">Accept</Button>
      </div>
    }
  >
    We use cookies for no reason.
  </Alert>
);
WithActions.storyName = 'With Actions';

export const WithoutIcon = () => (
  <div className="flex flex-col gap-4">
    <Alert>Default alert without icon</Alert>
    <Alert variant="info">Info alert without icon</Alert>
    <Alert variant="success">Success alert without icon</Alert>
  </div>
);
WithoutIcon.storyName = 'Without Icons';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="flex flex-col gap-4">
      <Alert variant="info" icon={<InfoIcon />}>
        Info alert in dark mode.
      </Alert>
      <Alert variant="success" icon={<SuccessIcon />}>
        Success alert in dark mode.
      </Alert>
      <Alert variant="warning" icon={<WarningIcon />}>
        Warning alert in dark mode.
      </Alert>
      <Alert variant="error" icon={<ErrorIcon />}>
        Error alert in dark mode.
      </Alert>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = darkModeParameters;

export const Interactive: Story = {
  render: (args) => {
    const icon = args.variant ? iconMap[args.variant] : iconMap.default;
    return (
      <Alert {...args} icon={icon}>
        {args.children}
      </Alert>
    );
  },
  args: {
    variant: 'info',
    children: 'This is an alert message.',
  },
};
Interactive.parameters = {
  docs: {
    description: {
      story: 'Use the controls panel to customize the alert.',
    },
  },
};
