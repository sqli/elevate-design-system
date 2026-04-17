import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../../../src/components/Badge';
import { Button } from '../../../src/components/Button';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

const meta: Meta<typeof Badge> = {
  title: 'Components/Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
React **Badge** component for labels and indicators, built with class-variance-authority.

## Usage
\`\`\`tsx
import { Badge } from '@sqli/elevate-design-system/react';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

<Badge variant="primary">New</Badge>
\`\`\`

## Variants
- \`default\` - Base style
- \`primary\`, \`secondary\`, \`accent\` - Brand colors
- \`info\`, \`success\`, \`warning\`, \`error\` - Status variants
- \`outline\` - Outline style
- \`ghost\` - Ghost style

## Sizes
- \`xs\`, \`sm\`, \`md\`, \`lg\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error', 'outline', 'ghost'],
      description: 'Color variant',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Badge size',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Variants = () => (
  <div className="flex flex-wrap gap-2">
    <Badge>Default</Badge>
    <Badge variant="primary">Primary</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="accent">Accent</Badge>
    <Badge variant="ghost">Ghost</Badge>
  </div>
);
Variants.storyName = 'Color Variants';

export const Status = () => (
  <div className="flex flex-wrap gap-2">
    <Badge variant="info">Info</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="error">Error</Badge>
  </div>
);
Status.storyName = 'Status Badges';

export const Outline = () => (
  <div className="flex flex-wrap gap-2">
    <Badge variant="outline">Outline</Badge>
  </div>
);

export const Sizes = () => (
  <div className="flex flex-wrap gap-2 items-center">
    <Badge size="xs">xs</Badge>
    <Badge size="sm">sm</Badge>
    <Badge size="md">md</Badge>
    <Badge size="lg">lg</Badge>
  </div>
);
Sizes.storyName = 'All Sizes';

export const Empty = () => (
  <div className="flex flex-wrap gap-2 items-center">
    <Badge size="xs" variant="primary" />
    <Badge size="sm" variant="primary" />
    <Badge size="md" variant="primary" />
    <Badge size="lg" variant="primary" />
  </div>
);
Empty.storyName = 'Empty Badges (Indicators)';

export const InButton = () => (
  <div className="flex flex-wrap gap-2">
    <Button>
      Inbox
      <Badge size="sm">+99</Badge>
    </Button>
    <Button>
      Notifications
      <Badge size="sm" variant="secondary">NEW</Badge>
    </Button>
  </div>
);
InButton.storyName = 'In Button';

export const InText = () => (
  <div className="flex flex-col gap-2">
    <p>
      This feature is <Badge variant="primary" size="sm">new</Badge>
    </p>
    <p>
      Status: <Badge variant="success" size="sm">Active</Badge>
    </p>
    <p>
      Priority: <Badge variant="error" size="sm">High</Badge>
    </p>
  </div>
);
InText.storyName = 'In Text';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="flex flex-wrap gap-2 mb-4">
      <Badge>Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="accent">Accent</Badge>
    </div>
    <div className="flex flex-wrap gap-2 mb-4">
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = darkModeParameters;

export const Interactive: Story = {
  args: {
    children: 'Badge',
    variant: 'primary',
    size: 'md',
  },
};
Interactive.parameters = {
  docs: {
    description: {
      story: 'Use the controls panel to customize the badge.',
    },
  },
};
