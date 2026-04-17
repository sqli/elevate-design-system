import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Data Display/Countdown',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Countdown** component for displaying time-based countdowns.

## Usage
\`\`\`html
<span class="countdown">
  <span style="--value:10;"></span>
</span>
\`\`\`

## Notes
- Uses CSS custom property \`--value\` for the number
- Animate by changing the \`--value\` with JavaScript
- Values: 0-99 for standard, 0-23 for hours, 0-59 for minutes/seconds
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <span className="countdown font-mono text-6xl">
    <span style={{ '--value': 15 } as React.CSSProperties}></span>
  </span>
);

export const Clock = () => (
  <div className="flex gap-5">
    <div>
      <span className="countdown font-mono text-4xl">
        <span style={{ '--value': 10 } as React.CSSProperties}></span>
      </span>
      hours
    </div>
    <div>
      <span className="countdown font-mono text-4xl">
        <span style={{ '--value': 24 } as React.CSSProperties}></span>
      </span>
      min
    </div>
    <div>
      <span className="countdown font-mono text-4xl">
        <span style={{ '--value': 53 } as React.CSSProperties}></span>
      </span>
      sec
    </div>
  </div>
);

export const WithLabels = () => (
  <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
    <div className="flex flex-col">
      <span className="countdown font-mono text-5xl">
        <span style={{ '--value': 15 } as React.CSSProperties}></span>
      </span>
      days
    </div>
    <div className="flex flex-col">
      <span className="countdown font-mono text-5xl">
        <span style={{ '--value': 10 } as React.CSSProperties}></span>
      </span>
      hours
    </div>
    <div className="flex flex-col">
      <span className="countdown font-mono text-5xl">
        <span style={{ '--value': 24 } as React.CSSProperties}></span>
      </span>
      min
    </div>
    <div className="flex flex-col">
      <span className="countdown font-mono text-5xl">
        <span style={{ '--value': 15 } as React.CSSProperties}></span>
      </span>
      sec
    </div>
  </div>
);
WithLabels.storyName = 'With Labels';

export const InBoxes = () => (
  <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span className="countdown font-mono text-5xl">
        <span style={{ '--value': 15 } as React.CSSProperties}></span>
      </span>
      days
    </div>
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span className="countdown font-mono text-5xl">
        <span style={{ '--value': 10 } as React.CSSProperties}></span>
      </span>
      hours
    </div>
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span className="countdown font-mono text-5xl">
        <span style={{ '--value': 24 } as React.CSSProperties}></span>
      </span>
      min
    </div>
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span className="countdown font-mono text-5xl">
        <span style={{ '--value': 49 } as React.CSSProperties}></span>
      </span>
      sec
    </div>
  </div>
);
InBoxes.storyName = 'In Boxes';

export const LargeText = () => (
  <span className="countdown font-mono text-8xl">
    <span style={{ '--value': 99 } as React.CSSProperties}></span>
  </span>
);
LargeText.storyName = 'Large Text';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-base-200 rounded-box text-base-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': 15 } as React.CSSProperties}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-base-200 rounded-box text-base-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': 10 } as React.CSSProperties}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-base-200 rounded-box text-base-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': 24 } as React.CSSProperties}></span>
        </span>
        min
      </div>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
