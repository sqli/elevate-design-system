import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Navigation/Link',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Link component for navigation links.

## Usage
\`\`\`tsx
<a className="link">I'm a simple link</a>
<a className="link link-primary">Primary link</a>
\`\`\`

## Variants
- \`link-hover\` - Only show underline on hover
- Color variants: \`link-primary\`, \`link-secondary\`, etc.
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <a className="link text-base-content">I'm a simple link</a>
);

export const WithHover = () => (
  <a className="link link-hover text-base-content">I only have underline on hover</a>
);
WithHover.storyName = 'Hover Underline';

export const Colors = () => (
  <div className="flex flex-col gap-2">
    <a className="link link-primary">Primary link</a>
    <a className="link link-secondary">Secondary link</a>
    <a className="link link-accent">Accent link</a>
    <a className="link link-neutral">Neutral link</a>
    <a className="link link-info">Info link</a>
    <a className="link link-success">Success link</a>
    <a className="link link-warning">Warning link</a>
    <a className="link link-error">Error link</a>
  </div>
);
Colors.storyName = 'All Colors';

export const InText = () => (
  <p className="text-base-content">
    This is a paragraph with a <a className="link link-primary">link</a> inside it.
    You can also have <a className="link link-secondary">multiple links</a> in the same paragraph.
  </p>
);
InText.storyName = 'In Text';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="flex flex-col gap-2">
      <a className="link link-primary">Primary link</a>
      <a className="link link-secondary">Secondary link</a>
      <a className="link link-accent">Accent link</a>
      <a className="link link-hover text-base-content">Hover link</a>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
