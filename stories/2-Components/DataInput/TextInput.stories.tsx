import React from 'react';
import { Input } from '../../../src/components/Input';
import { Label } from '../../../src/components/Label';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

export default {
  title: 'Components/DataInput/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'ghost', 'error'] },
    inputSize: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: { placeholder: 'Type here...' },
};

export const Variants = () => (
  <div className="flex flex-col gap-4 w-72">
    <Input placeholder="Default" variant="default" />
    <Input placeholder="Ghost" variant="ghost" />
    <Input placeholder="Error" variant="error" />
  </div>
);

export const Sizes = () => (
  <div className="flex flex-col gap-4 w-72">
    <Input placeholder="Extra Small" inputSize="xs" />
    <Input placeholder="Small" inputSize="sm" />
    <Input placeholder="Medium" inputSize="md" />
    <Input placeholder="Large" inputSize="lg" />
  </div>
);

export const WithLabel = () => (
  <div className="flex flex-col gap-2 w-72">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="you@example.com" />
  </div>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <div className="flex flex-col gap-4 w-72">
      <div className="flex flex-col gap-2">
        <Label htmlFor="dark-email">Email</Label>
        <Input id="dark-email" type="email" placeholder="you@example.com" />
      </div>
      <Input placeholder="Error state" variant="error" />
    </div>
  </DarkModeWrapper>
);
DarkMode.parameters = darkModeParameters;
