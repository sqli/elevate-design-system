import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { Input } from '../../../src/components/Input';
import { Label } from '../../../src/components/Label';
import { Textarea } from '../../../src/components/Textarea';
import { Button } from '../../../src/components/Button';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Data Input/Fieldset',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Fieldset** groups related form elements with a legend.

Uses native HTML \`<fieldset>\` and \`<legend>\` elements combined with the design system's Input, Label, and Button components.

## Usage
\`\`\`tsx
<fieldset className="border border-border p-4 rounded-lg">
  <legend className="text-sm font-medium px-2">Legend</legend>
  <Input placeholder="Field" />
</fieldset>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <fieldset className="w-xs bg-base-200 border border-border p-4 rounded-lg">
    <legend className="text-sm font-medium px-2">Personal Information</legend>
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="fs-name">Name</Label>
        <Input id="fs-name" placeholder="Enter your name" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="fs-email">Email</Label>
        <Input id="fs-email" type="email" placeholder="Enter your email" />
      </div>
    </div>
  </fieldset>
);

export const WithBorder = () => (
  <fieldset className="border border-border p-4 rounded-lg">
    <legend className="text-sm font-medium px-2">Account Settings</legend>
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <Label htmlFor="notif-email">Email notifications</Label>
        <input type="checkbox" id="notif-email" className="toggle toggle-primary" />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="notif-sms">SMS notifications</Label>
        <input type="checkbox" id="notif-sms" className="toggle toggle-primary" />
      </div>
    </div>
  </fieldset>
);

export const MultipleFieldsets = () => (
  <div className="flex flex-col gap-4">
    <fieldset className="border border-border p-4 rounded-lg">
      <legend className="text-sm font-medium px-2">Shipping Address</legend>
      <div className="flex flex-col gap-3">
        <Input placeholder="Street" />
        <div className="flex gap-2">
          <Input placeholder="City" className="flex-1" />
          <Input placeholder="ZIP" className="w-24" />
        </div>
      </div>
    </fieldset>
    <fieldset className="border border-border p-4 rounded-lg">
      <legend className="text-sm font-medium px-2">Billing Address</legend>
      <div className="flex items-center gap-2">
        <input type="checkbox" id="same-as-shipping" className="checkbox checkbox-sm" />
        <Label htmlFor="same-as-shipping">Same as shipping</Label>
      </div>
    </fieldset>
  </div>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <fieldset className="border border-border p-4 rounded-lg">
      <legend className="text-sm font-medium px-2">Contact Form</legend>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="dark-subject">Subject</Label>
          <Input id="dark-subject" placeholder="Enter subject" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="dark-message">Message</Label>
          <Textarea id="dark-message" placeholder="Enter message" />
        </div>
        <Button variant="primary">Send</Button>
      </div>
    </fieldset>
  </DarkModeWrapper>
);
DarkMode.parameters = darkModeParameters;
