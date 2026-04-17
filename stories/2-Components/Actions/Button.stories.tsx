import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../../../src/components/Button';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

const meta: Meta<typeof Button> = {
  title: 'Components/Actions/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
React **Button** component with SQLI themes, built with class-variance-authority.

## Usage
\`\`\`tsx
import { Button } from '@sqli/elevate-design-system/react';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

<Button variant="primary">Click me</Button>
\`\`\`

## Variants
- \`primary\` - Primary action (Cobalt in light, Sky in dark)
- \`secondary\` - Secondary action
- \`accent\` - Accent color
- \`ghost\` - Ghost style
- \`outline\` - Outline style
- \`link\` - Link style
- \`info\`, \`success\`, \`warning\`, \`error\` - Status variants

## Sizes
- \`xs\` - Extra small
- \`sm\` - Small
- \`md\` - Medium (default)
- \`lg\` - Large
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'ghost', 'outline', 'link', 'error', 'success', 'warning', 'info'],
      description: 'Color variant',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Button size',
    },
    loading: { control: 'boolean', description: 'Loading state with spinner' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    block: { control: 'boolean', description: 'Full width button' },
    circle: { control: 'boolean', description: 'Circle shape' },
    square: { control: 'boolean', description: 'Square shape' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Variants = () => (
  <div className="flex flex-wrap gap-2">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="accent">Accent</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="link">Link</Button>
    <Button variant="info">Info</Button>
    <Button variant="success">Success</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="error">Error</Button>
  </div>
);
Variants.storyName = 'Color Variants';

export const Sizes = () => (
  <div className="flex flex-wrap gap-2 items-center">
    <Button size="xs">Extra Small</Button>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
);
Sizes.storyName = 'All Sizes';

export const States = () => (
  <div className="flex flex-wrap gap-2">
    <Button>Normal</Button>
    <Button disabled>Disabled</Button>
    <Button loading>Loading</Button>
    <Button block>Full Width</Button>
  </div>
);

export const Shapes = () => (
  <div className="flex flex-wrap gap-2 items-center">
    <Button circle>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </Button>
    <Button square>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </Button>
    <Button block>Block (Full Width)</Button>
  </div>
);

export const WithIcons = () => (
  <div className="flex flex-wrap gap-2">
    <Button variant="primary">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      Like
    </Button>
    <Button variant="secondary">
      Settings
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </Button>
  </div>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="flex flex-wrap gap-2 mb-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
    </div>
    <div className="flex flex-wrap gap-2">
      <Button variant="info">Info</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="error">Error</Button>
      <Button variant="link">Link</Button>
    </div>
  </DarkModeWrapper>
);
DarkMode.parameters = darkModeParameters;

export const Interactive: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
    block: false,
  },
};
Interactive.parameters = {
  docs: {
    description: {
      story: 'Use the controls panel to customize the button.',
    },
  },
};
