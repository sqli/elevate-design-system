import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from '../../../src/components/Textarea';
import { Label } from '../../../src/components/Label';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Data Input/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'ghost', 'error'] },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: `
**Textarea** component for multiline text input, built with class-variance-authority.

## Variants
- \`default\` - Standard bordered textarea
- \`ghost\` - Transparent background, border on hover
- \`error\` - Error state with red border
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Bio',
  },
};

export const Variants = () => (
  <div className="flex flex-col gap-4 w-full max-w-xs">
    <Textarea placeholder="Default" variant="default" />
    <Textarea placeholder="Ghost" variant="ghost" />
    <Textarea placeholder="Error" variant="error" />
  </div>
);

export const Disabled: Story = {
  args: {
    placeholder: "You can't type here",
    disabled: true,
  },
};

export const WithLabel = () => (
  <div className="flex flex-col gap-2 w-full max-w-xs">
    <Label htmlFor="bio">Your bio</Label>
    <Textarea id="bio" placeholder="Tell us about yourself..." className="h-24" />
    <p className="text-xs text-base-content/50">Max 500 characters</p>
  </div>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="flex flex-col gap-4 w-full max-w-xs">
      <Textarea placeholder="Default textarea" />
      <Textarea placeholder="Error textarea" variant="error" />
    </div>
  </DarkModeWrapper>
);
DarkMode.parameters = darkModeParameters;
