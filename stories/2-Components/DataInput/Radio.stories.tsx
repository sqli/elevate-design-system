import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { RadioGroup, RadioGroupItem } from '../../../src/components/RadioGroup';
import { Label } from '../../../src/components/Label';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Data Input/Radio',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**RadioGroup** component built on Radix UI RadioGroup primitive.

Provides accessible radio button groups with single selection.

## Usage
\`\`\`tsx
<RadioGroup defaultValue="option-1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-1" id="option-1" />
    <Label htmlFor="option-1">Option 1</Label>
  </div>
</RadioGroup>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <RadioGroup defaultValue="red-pill">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="red-pill" id="red-pill" />
      <Label htmlFor="red-pill">Red pill</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="blue-pill" id="blue-pill" />
      <Label htmlFor="blue-pill">Blue pill</Label>
    </div>
  </RadioGroup>
);

export const FormExample = () => (
  <RadioGroup defaultValue="option-1">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-1" id="form-option-1" />
      <Label htmlFor="form-option-1">Option 1</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-2" id="form-option-2" />
      <Label htmlFor="form-option-2">Option 2</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-3" id="form-option-3" />
      <Label htmlFor="form-option-3">Option 3</Label>
    </div>
  </RadioGroup>
);

export const WithoutDefaultSelection = () => (
  <RadioGroup>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="a" id="no-default-a" />
      <Label htmlFor="no-default-a">Choice A</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="b" id="no-default-b" />
      <Label htmlFor="no-default-b">Choice B</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="c" id="no-default-c" />
      <Label htmlFor="no-default-c">Choice C</Label>
    </div>
  </RadioGroup>
);

export const Disabled = () => (
  <RadioGroup defaultValue="disabled-checked" disabled>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="disabled-checked" id="disabled-checked" />
      <Label htmlFor="disabled-checked">Disabled (checked)</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="disabled-unchecked" id="disabled-unchecked" />
      <Label htmlFor="disabled-unchecked">Disabled (unchecked)</Label>
    </div>
  </RadioGroup>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <RadioGroup defaultValue="dark-option-1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="dark-option-1" id="dark-option-1" />
        <Label htmlFor="dark-option-1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="dark-option-2" id="dark-option-2" />
        <Label htmlFor="dark-option-2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="dark-option-3" id="dark-option-3" />
        <Label htmlFor="dark-option-3">Option 3</Label>
      </div>
    </RadioGroup>
  </DarkModeWrapper>
);
DarkMode.parameters = darkModeParameters;
