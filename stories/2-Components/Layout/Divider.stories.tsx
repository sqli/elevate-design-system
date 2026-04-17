import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from '../../../src/components/Divider';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta<typeof Divider> = {
  title: 'Components/Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
React **Divider** component for separating content sections.

## Usage
\`\`\`tsx
import { Divider } from '@sqli/elevate-design-system/react';
import { DarkModeWrapper } from '../../utils/story-helpers';

<Divider>OR</Divider>
<Divider />
<Divider orientation="vertical">OR</Divider>
\`\`\`

## Orientation
- \`horizontal\` - Horizontal divider (default)
- \`vertical\` - Vertical divider

## Label
- Pass children to show a label in the center of the divider
- Omit children for a plain line separator
        `,
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Divider orientation',
    },
    children: {
      control: 'text',
      description: 'Optional label text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    children: 'OR',
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col w-full">
        <div className="bg-base-200 rounded-lg grid h-20 place-items-center">content</div>
        <div className="py-2">
          <Story />
        </div>
        <div className="bg-base-200 rounded-lg grid h-20 place-items-center">content</div>
      </div>
    ),
  ],
};

export const NoText = () => (
  <div className="flex flex-col w-full">
    <div className="bg-base-200 rounded-lg grid h-20 place-items-center">content</div>
    <div className="py-2">
      <Divider />
    </div>
    <div className="bg-base-200 rounded-lg grid h-20 place-items-center">content</div>
  </div>
);
NoText.storyName = 'Without Text';

export const Vertical = () => (
  <div className="flex w-full h-32">
    <div className="bg-base-200 rounded-lg grid flex-grow place-items-center">content</div>
    <div className="px-2">
      <Divider orientation="vertical">OR</Divider>
    </div>
    <div className="bg-base-200 rounded-lg grid flex-grow place-items-center">content</div>
  </div>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="flex flex-col w-full">
      <div className="bg-base-200 rounded-lg grid h-16 place-items-center text-base-content">content</div>
      <div className="py-2">
        <Divider>OR</Divider>
      </div>
      <div className="bg-base-200 rounded-lg grid h-16 place-items-center text-base-content">content</div>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
