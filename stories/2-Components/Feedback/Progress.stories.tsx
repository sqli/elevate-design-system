import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from '../../../src/components/Progress';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

const meta: Meta<typeof Progress> = {
  title: 'Components/Feedback/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
React **Progress** bar component, built with class-variance-authority.

## Usage
\`\`\`tsx
import { Progress } from '@sqli/elevate-design-system/react';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

<Progress value={70} max={100} variant="primary" />
\`\`\`

## Sizes
- \`xs\`, \`sm\`, \`md\`, \`lg\`

## Variants
- \`default\`, \`primary\`, \`secondary\`, \`accent\`
- \`info\`, \`success\`, \`warning\`, \`error\`
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'Current progress value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Height of the progress bar',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
      description: 'Color variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 0,
    max: 100,
    className: 'w-56',
  },
};

export const Values = () => (
  <div className="flex flex-col gap-4 w-56">
    <Progress value={0} max={100} />
    <Progress value={10} max={100} />
    <Progress value={40} max={100} />
    <Progress value={70} max={100} />
    <Progress value={100} max={100} />
  </div>
);

export const Colors = () => (
  <div className="flex flex-col gap-4 w-56">
    <Progress value={40} max={100} variant="primary" />
    <Progress value={50} max={100} variant="secondary" />
    <Progress value={60} max={100} variant="accent" />
    <Progress value={70} max={100} variant="info" />
    <Progress value={80} max={100} variant="success" />
    <Progress value={90} max={100} variant="warning" />
    <Progress value={100} max={100} variant="error" />
  </div>
);
Colors.storyName = 'All Colors';

export const Sizes = () => (
  <div className="flex flex-col gap-4 w-56">
    <Progress value={60} max={100} variant="primary" size="xs" />
    <Progress value={60} max={100} variant="primary" size="sm" />
    <Progress value={60} max={100} variant="primary" size="md" />
    <Progress value={60} max={100} variant="primary" size="lg" />
  </div>
);
Sizes.storyName = 'All Sizes';

export const Indeterminate = () => (
  <Progress value={0} max={100} className="w-56" />
);

export const WithLabel = () => (
  <div className="w-56">
    <div className="flex justify-between mb-1">
      <span className="text-sm">Upload progress</span>
      <span className="text-sm">70%</span>
    </div>
    <Progress value={70} max={100} variant="primary" />
  </div>
);
WithLabel.storyName = 'With Label';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="flex flex-col gap-4 w-56">
      <Progress value={40} max={100} variant="primary" />
      <Progress value={60} max={100} variant="secondary" />
      <Progress value={80} max={100} variant="default" />
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = darkModeParameters;

export const Interactive: Story = {
  args: {
    value: 70,
    max: 100,
    variant: 'primary',
    size: 'md',
    className: 'w-56',
  },
};
Interactive.parameters = {
  docs: {
    description: {
      story: 'Use the controls panel to customize the progress bar.',
    },
  },
};
