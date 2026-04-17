import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Loading } from '../../../src/components/Loading';
import { Button } from '../../../src/components/Button';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

const meta: Meta<typeof Loading> = {
  title: 'Components/Feedback/Loading',
  component: Loading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
React **Loading** spinner component, built with class-variance-authority.

## Usage
\`\`\`tsx
import { Loading } from '@sqli/elevate-design-system/react';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

<Loading size="md" variant="primary" />
\`\`\`

## Sizes
- \`xs\`, \`sm\`, \`md\`, \`lg\`, \`xl\`

## Variants
- \`default\`, \`primary\`, \`secondary\`, \`accent\`
- \`info\`, \`success\`, \`warning\`, \`error\`
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the spinner',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
      description: 'Color variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {
    size: 'lg',
  },
};

export const SizesAndVariants = () => (
  <div className="flex flex-wrap gap-8 items-center">
    <div className="text-center">
      <Loading size="xs" variant="primary" />
      <p className="text-sm mt-2">xs</p>
    </div>
    <div className="text-center">
      <Loading size="sm" variant="primary" />
      <p className="text-sm mt-2">sm</p>
    </div>
    <div className="text-center">
      <Loading size="md" variant="primary" />
      <p className="text-sm mt-2">md</p>
    </div>
    <div className="text-center">
      <Loading size="lg" variant="primary" />
      <p className="text-sm mt-2">lg</p>
    </div>
    <div className="text-center">
      <Loading size="xl" variant="primary" />
      <p className="text-sm mt-2">xl</p>
    </div>
  </div>
);
SizesAndVariants.storyName = 'All Sizes';

export const Sizes = () => (
  <div className="flex flex-wrap gap-8 items-center">
    <div className="text-center">
      <Loading size="xs" />
      <p className="text-sm mt-2">xs</p>
    </div>
    <div className="text-center">
      <Loading size="sm" />
      <p className="text-sm mt-2">sm</p>
    </div>
    <div className="text-center">
      <Loading size="md" />
      <p className="text-sm mt-2">md</p>
    </div>
    <div className="text-center">
      <Loading size="lg" />
      <p className="text-sm mt-2">lg</p>
    </div>
    <div className="text-center">
      <Loading size="xl" />
      <p className="text-sm mt-2">xl</p>
    </div>
  </div>
);
Sizes.storyName = 'All Sizes (Default)';

export const Colors = () => (
  <div className="flex flex-wrap gap-4 items-center">
    <Loading size="lg" variant="primary" />
    <Loading size="lg" variant="secondary" />
    <Loading size="lg" variant="accent" />
    <Loading size="lg" variant="default" />
    <Loading size="lg" variant="info" />
    <Loading size="lg" variant="success" />
    <Loading size="lg" variant="warning" />
    <Loading size="lg" variant="error" />
  </div>
);

export const InButton = () => (
  <div className="flex flex-wrap gap-4">
    <Button variant="outline" square loading>
      <span className="sr-only">Loading</span>
    </Button>
    <Button variant="outline" loading>
      Loading
    </Button>
    <Button variant="primary" loading>
      Processing
    </Button>
  </div>
);
InButton.storyName = 'In Button';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="flex flex-wrap gap-8">
      <Loading size="lg" variant="primary" />
      <Loading size="lg" variant="secondary" />
      <Loading size="lg" variant="accent" />
      <Loading size="lg" variant="default" />
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = darkModeParameters;

export const Interactive: Story = {
  args: {
    size: 'lg',
    variant: 'primary',
  },
};
Interactive.parameters = {
  docs: {
    description: {
      story: 'Use the controls panel to customize the loading spinner.',
    },
  },
};
