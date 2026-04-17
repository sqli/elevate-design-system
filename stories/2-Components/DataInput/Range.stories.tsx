import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from '../../../src/components/Slider';
import { Label } from '../../../src/components/Label';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

const meta: Meta<typeof Slider> = {
  title: 'Components/Data Input/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Slider** component built on Radix UI Slider primitive.

Provides a range input with customizable min, max, step, and default values.

## Usage
\`\`\`tsx
<Slider defaultValue={[40]} max={100} step={1} />
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [40],
    max: 100,
    step: 1,
    className: 'w-full max-w-xs',
  },
};

export const WithSteps = () => (
  <div className="w-full max-w-xs">
    <Slider defaultValue={[25]} max={100} step={25} />
    <div className="flex w-full justify-between px-2 text-xs mt-2">
      <span>0</span>
      <span>25</span>
      <span>50</span>
      <span>75</span>
      <span>100</span>
    </div>
  </div>
);

export const DifferentValues = () => (
  <div className="flex flex-col gap-6 w-full max-w-xs">
    <div>
      <p className="text-sm mb-2 opacity-70">25%</p>
      <Slider defaultValue={[25]} max={100} step={1} />
    </div>
    <div>
      <p className="text-sm mb-2 opacity-70">50%</p>
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
    <div>
      <p className="text-sm mb-2 opacity-70">75%</p>
      <Slider defaultValue={[75]} max={100} step={1} />
    </div>
  </div>
);

export const WithLabel = () => (
  <div className="flex flex-col gap-2 w-full max-w-xs">
    <div className="flex justify-between">
      <Label>Volume</Label>
      <span className="text-sm opacity-70">40%</span>
    </div>
    <Slider defaultValue={[40]} max={100} step={1} />
  </div>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="flex flex-col gap-6 w-full max-w-xs">
      <Slider defaultValue={[40]} max={100} step={1} />
      <Slider defaultValue={[60]} max={100} step={1} />
      <Slider defaultValue={[80]} max={100} step={1} />
    </div>
  </DarkModeWrapper>
);
DarkMode.parameters = darkModeParameters;
