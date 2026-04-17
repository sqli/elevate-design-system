import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { Badge } from '../../../src/components/Badge';
import { Button } from '../../../src/components/Button';
import { Input } from '../../../src/components/Input';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Layout/Indicator',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Indicator layout component for notification badges on other elements.

## Usage
\`\`\`tsx
<div className="indicator">
  <Badge variant="secondary" className="indicator-item">99+</Badge>
  <Button>inbox</Button>
</div>
\`\`\`

## Positions
- \`indicator-top\`, \`indicator-middle\`, \`indicator-bottom\`
- \`indicator-start\`, \`indicator-center\`, \`indicator-end\`
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <div className="indicator">
    <Badge variant="secondary" className="indicator-item">99+</Badge>
    <Button variant="ghost" className="border border-border">inbox</Button>
  </div>
);

export const OnAvatar = () => (
  <div className="indicator">
    <Badge variant="secondary" className="indicator-item" />
    <div className="avatar">
      <div className="w-12 rounded bg-primary flex items-center justify-center text-primary-content font-bold">
        SQ
      </div>
    </div>
  </div>
);
OnAvatar.storyName = 'On Avatar';

export const OnCard = () => (
  <div className="indicator">
    <Badge variant="secondary" className="indicator-item indicator-center">NEW</Badge>
    <div className="card border border-border bg-base-100">
      <div className="card-body">
        <h2 className="card-title text-base-content">Card title</h2>
        <p className="text-base-content">Card content</p>
      </div>
    </div>
  </div>
);
OnCard.storyName = 'On Card';

export const Positions = () => (
  <div className="grid grid-cols-3 gap-8 p-4">
    <div className="indicator">
      <Badge variant="primary" className="indicator-item indicator-start indicator-top">top-start</Badge>
      <div className="grid h-20 w-32 place-items-center bg-base-300 text-base-content">content</div>
    </div>
    <div className="indicator">
      <Badge variant="secondary" className="indicator-item indicator-center indicator-top">top-center</Badge>
      <div className="grid h-20 w-32 place-items-center bg-base-300 text-base-content">content</div>
    </div>
    <div className="indicator">
      <Badge variant="accent" className="indicator-item indicator-end indicator-top">top-end</Badge>
      <div className="grid h-20 w-32 place-items-center bg-base-300 text-base-content">content</div>
    </div>
    <div className="indicator">
      <Badge variant="primary" className="indicator-item indicator-start indicator-middle">mid-start</Badge>
      <div className="grid h-20 w-32 place-items-center bg-base-300 text-base-content">content</div>
    </div>
    <div className="indicator">
      <Badge variant="secondary" className="indicator-item indicator-center indicator-middle">mid-center</Badge>
      <div className="grid h-20 w-32 place-items-center bg-base-300 text-base-content">content</div>
    </div>
    <div className="indicator">
      <Badge variant="accent" className="indicator-item indicator-end indicator-middle">mid-end</Badge>
      <div className="grid h-20 w-32 place-items-center bg-base-300 text-base-content">content</div>
    </div>
    <div className="indicator">
      <Badge variant="primary" className="indicator-item indicator-start indicator-bottom">btm-start</Badge>
      <div className="grid h-20 w-32 place-items-center bg-base-300 text-base-content">content</div>
    </div>
    <div className="indicator">
      <Badge variant="secondary" className="indicator-item indicator-center indicator-bottom">btm-center</Badge>
      <div className="grid h-20 w-32 place-items-center bg-base-300 text-base-content">content</div>
    </div>
    <div className="indicator">
      <Badge variant="accent" className="indicator-item indicator-end indicator-bottom">btm-end</Badge>
      <div className="grid h-20 w-32 place-items-center bg-base-300 text-base-content">content</div>
    </div>
  </div>
);
Positions.storyName = 'All Positions';

export const Multiple = () => (
  <div className="indicator">
    <Badge variant="secondary" className="indicator-item indicator-top indicator-start">A</Badge>
    <Badge variant="secondary" className="indicator-item indicator-top indicator-center">B</Badge>
    <Badge variant="secondary" className="indicator-item indicator-top indicator-end">C</Badge>
    <Badge variant="secondary" className="indicator-item indicator-bottom indicator-start">D</Badge>
    <Badge variant="secondary" className="indicator-item indicator-bottom indicator-center">E</Badge>
    <Badge variant="secondary" className="indicator-item indicator-bottom indicator-end">F</Badge>
    <div className="grid h-32 w-60 place-items-center bg-base-300 text-base-content">content</div>
  </div>
);
Multiple.storyName = 'Multiple Indicators';

export const OnInput = () => (
  <div className="indicator">
    <Badge variant="primary" className="indicator-item">Required</Badge>
    <Input type="text" placeholder="Your email" />
  </div>
);
OnInput.storyName = 'On Input';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="flex gap-4">
      <div className="indicator">
        <Badge variant="primary" className="indicator-item">5</Badge>
        <Button variant="ghost" className="border border-border">Messages</Button>
      </div>
      <div className="indicator">
        <Badge variant="secondary" className="indicator-item">NEW</Badge>
        <Button variant="primary">Features</Button>
      </div>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
