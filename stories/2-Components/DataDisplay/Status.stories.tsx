import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Data Display/Status',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Status** indicator component for showing status dots.

## Usage
\`\`\`html
<span class="status status-success"></span>
\`\`\`

## Colors
- \`status-primary\`, \`status-secondary\`, \`status-accent\`
- \`status-info\`, \`status-success\`, \`status-warning\`, \`status-error\`

## Sizes
- \`status-xs\`, \`status-sm\`, \`status-md\`, \`status-lg\`
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <span className="status status-primary"></span>
);

export const Colors = () => (
  <div className="flex gap-4">
    <span className="status status-primary"></span>
    <span className="status status-secondary"></span>
    <span className="status status-accent"></span>
    <span className="status status-info"></span>
    <span className="status status-success"></span>
    <span className="status status-warning"></span>
    <span className="status status-error"></span>
  </div>
);
Colors.storyName = 'All Colors';

export const Sizes = () => (
  <div className="flex items-center gap-4">
    <span className="status status-success status-xs"></span>
    <span className="status status-success status-sm"></span>
    <span className="status status-success status-md"></span>
    <span className="status status-success status-lg"></span>
  </div>
);
Sizes.storyName = 'All Sizes';

export const WithText = () => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <span className="status status-success"></span>
      <span>Online</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="status status-warning"></span>
      <span>Away</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="status status-error"></span>
      <span>Offline</span>
    </div>
  </div>
);
WithText.storyName = 'With Text';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="status status-success"></span>
        <span className="text-base-content">Online</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="status status-warning"></span>
        <span className="text-base-content">Away</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="status status-error"></span>
        <span className="text-base-content">Offline</span>
      </div>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
