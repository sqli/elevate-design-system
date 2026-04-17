import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Navigation/Steps',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Steps component for process indicators.

## Usage
\`\`\`tsx
<ul className="steps">
  <li className="step step-primary">Register</li>
  <li className="step step-primary">Choose plan</li>
  <li className="step">Purchase</li>
</ul>
\`\`\`

## Variants
- \`steps-vertical\` - Vertical layout
- \`steps-horizontal\` - Horizontal layout (default)
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <ul className="steps">
    <li className="step step-primary">Register</li>
    <li className="step step-primary">Choose plan</li>
    <li className="step">Purchase</li>
    <li className="step">Receive Product</li>
  </ul>
);

export const WithDataContent = () => (
  <ul className="steps">
    <li className="step step-neutral" data-content="?">Step 1</li>
    <li className="step step-neutral" data-content="!">Step 2</li>
    <li className="step step-neutral" data-content="&#10003;">Step 3</li>
    <li className="step step-neutral" data-content="&#10005;">Step 4</li>
    <li className="step step-neutral" data-content="&#9733;">Step 5</li>
  </ul>
);
WithDataContent.storyName = 'With Custom Content';

export const WithNumbers = () => (
  <ul className="steps">
    <li className="step step-primary" data-content="1">Register</li>
    <li className="step step-primary" data-content="2">Choose plan</li>
    <li className="step" data-content="3">Purchase</li>
    <li className="step" data-content="4">Complete</li>
  </ul>
);
WithNumbers.storyName = 'With Numbers';

export const Colors = () => (
  <ul className="steps">
    <li className="step step-primary">Primary</li>
    <li className="step step-secondary">Secondary</li>
    <li className="step step-accent">Accent</li>
    <li className="step step-info">Info</li>
    <li className="step step-success">Success</li>
    <li className="step step-warning">Warning</li>
    <li className="step step-error">Error</li>
  </ul>
);
Colors.storyName = 'All Colors';

export const Vertical = () => (
  <ul className="steps steps-vertical">
    <li className="step step-primary">Register</li>
    <li className="step step-primary">Choose plan</li>
    <li className="step">Purchase</li>
    <li className="step">Receive Product</li>
  </ul>
);

export const Responsive = () => (
  <ul className="steps steps-vertical lg:steps-horizontal">
    <li className="step step-primary">Register</li>
    <li className="step step-primary">Choose plan</li>
    <li className="step">Purchase</li>
    <li className="step">Receive Product</li>
  </ul>
);

export const Scrollable = () => (
  <ul className="steps">
    <li className="step">Step 1</li>
    <li className="step step-primary">Step 2</li>
    <li className="step">Step 3</li>
    <li className="step">Step 4</li>
    <li className="step">Step 5</li>
    <li className="step step-secondary">Step 6</li>
    <li className="step">Step 7</li>
    <li className="step">Step 8</li>
  </ul>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <ul className="steps">
      <li className="step step-primary">Register</li>
      <li className="step step-primary">Choose plan</li>
      <li className="step">Purchase</li>
      <li className="step">Complete</li>
    </ul>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
