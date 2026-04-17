import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { Label } from '../../../src/components/Label';
import { Input } from '../../../src/components/Input';
import { Textarea } from '../../../src/components/Textarea';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

const meta: Meta<typeof Label> = {
  title: 'Components/Data Input/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Label** component built on Radix UI Label primitive.

Provides an accessible label associated with form controls via the \`htmlFor\` prop.

## Usage
\`\`\`tsx
<Label htmlFor="email">Email</Label>
<Input id="email" type="email" />
\`\`\`
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <div className="flex flex-col gap-2 w-full max-w-xs">
    <Label htmlFor="name">What is your name?</Label>
    <Input id="name" placeholder="Type here" />
  </div>
);

export const WithAltLabels = () => (
  <div className="flex flex-col gap-2 w-full max-w-xs">
    <div className="flex justify-between">
      <Label htmlFor="name-alt">What is your name?</Label>
      <span className="text-xs opacity-60">Required</span>
    </div>
    <Input id="name-alt" placeholder="Type here" />
    <div className="flex justify-between">
      <span className="text-xs opacity-60">Bottom left label</span>
      <span className="text-xs opacity-60">Bottom right label</span>
    </div>
  </div>
);

export const ForTextarea = () => (
  <div className="flex flex-col gap-2 w-full max-w-xs">
    <Label htmlFor="message">Message</Label>
    <Textarea id="message" placeholder="Write your message..." />
  </div>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="flex flex-col gap-2 w-full max-w-xs">
      <div className="flex justify-between">
        <Label htmlFor="dark-email">Email</Label>
        <span className="text-xs opacity-60">Required</span>
      </div>
      <Input id="dark-email" type="email" placeholder="email@example.com" />
      <span className="text-xs opacity-60">We will never share your email</span>
    </div>
  </DarkModeWrapper>
);
DarkMode.parameters = darkModeParameters;
