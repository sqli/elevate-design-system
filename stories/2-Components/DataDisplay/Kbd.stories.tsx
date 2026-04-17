import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Kbd } from '../../../src/components/Kbd';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta<typeof Kbd> = {
  title: 'Components/Data Display/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
React **Kbd** component for displaying keyboard keys and shortcuts.

## Usage
\`\`\`tsx
import { Kbd } from '@sqli/elevate-design-system/react';
import { DarkModeWrapper } from '../../utils/story-helpers';

<Kbd>A</Kbd>
<Kbd size="lg">Shift</Kbd>
\`\`\`

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
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Kbd size',
    },
    children: {
      control: 'text',
      description: 'Key label',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  args: {
    children: 'A',
  },
};

export const KeyCombination = () => (
  <div className="flex gap-1 items-center">
    <Kbd>Ctrl</Kbd>
    <span>+</span>
    <Kbd>Shift</Kbd>
    <span>+</span>
    <Kbd>Del</Kbd>
  </div>
);
KeyCombination.storyName = 'Key Combination';

export const ArrowKeys = () => (
  <div className="flex flex-col items-center gap-1">
    <Kbd>{'\u25B2'}</Kbd>
    <div className="flex gap-12">
      <Kbd>{'\u25C0'}</Kbd>
      <Kbd>{'\u25B6'}</Kbd>
    </div>
    <Kbd>{'\u25BC'}</Kbd>
  </div>
);
ArrowKeys.storyName = 'Arrow Keys';

export const FunctionKeys = () => (
  <div className="flex gap-1 flex-wrap">
    {['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'].map((key) => (
      <Kbd key={key}>{key}</Kbd>
    ))}
  </div>
);
FunctionKeys.storyName = 'Function Keys';

export const FullKeyboard = () => (
  <div className="flex flex-col gap-1">
    <div className="flex justify-center gap-1 w-full">
      {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((key) => (
        <Kbd key={key}>{key}</Kbd>
      ))}
    </div>
    <div className="flex justify-center gap-1 w-full">
      {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((key) => (
        <Kbd key={key}>{key}</Kbd>
      ))}
    </div>
    <div className="flex justify-center gap-1 w-full">
      {['z', 'x', 'c', 'v', 'b', 'n', 'm', '/'].map((key) => (
        <Kbd key={key}>{key}</Kbd>
      ))}
    </div>
  </div>
);
FullKeyboard.storyName = 'Full Keyboard';

export const Sizes = () => (
  <div className="flex items-center gap-4">
    <div className="text-center">
      <Kbd size="xs">Shift</Kbd>
      <p className="text-xs mt-1">xs</p>
    </div>
    <div className="text-center">
      <Kbd size="sm">Shift</Kbd>
      <p className="text-xs mt-1">sm</p>
    </div>
    <div className="text-center">
      <Kbd size="md">Shift</Kbd>
      <p className="text-xs mt-1">md</p>
    </div>
    <div className="text-center">
      <Kbd size="lg">Shift</Kbd>
      <p className="text-xs mt-1">lg</p>
    </div>
  </div>
);
Sizes.storyName = 'All Sizes';

export const InText = () => (
  <p className="text-base-content">
    Press <Kbd size="sm">F</Kbd> to pay respects.
  </p>
);
InText.storyName = 'In Text';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="flex gap-4">
      <div className="flex gap-1 items-center">
        <Kbd>{'\u2318'}</Kbd>
        <span className="text-base-content">+</span>
        <Kbd>C</Kbd>
      </div>
      <div className="flex gap-1 items-center">
        <Kbd>{'\u2318'}</Kbd>
        <span className="text-base-content">+</span>
        <Kbd>V</Kbd>
      </div>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
