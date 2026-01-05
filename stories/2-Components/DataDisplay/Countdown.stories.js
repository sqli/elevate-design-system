/**
 * @component Countdown
 * @description DaisyUI Countdown component with SQLI theme
 * @see https://daisyui.com/components/countdown/
 */
export default {
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

export const Default = () => `
  <span class="countdown font-mono text-6xl">
    <span style="--value:15;"></span>
  </span>
`;

export const Clock = () => `
  <div class="flex gap-5">
    <div>
      <span class="countdown font-mono text-4xl">
        <span style="--value:10;"></span>
      </span>
      hours
    </div>
    <div>
      <span class="countdown font-mono text-4xl">
        <span style="--value:24;"></span>
      </span>
      min
    </div>
    <div>
      <span class="countdown font-mono text-4xl">
        <span style="--value:53;"></span>
      </span>
      sec
    </div>
  </div>
`;

export const WithLabels = () => `
  <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span style="--value:15;"></span>
      </span>
      days
    </div>
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span style="--value:10;"></span>
      </span>
      hours
    </div>
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span style="--value:24;"></span>
      </span>
      min
    </div>
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span style="--value:15;"></span>
      </span>
      sec
    </div>
  </div>
`;
WithLabels.storyName = 'With Labels';

export const InBoxes = () => `
  <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span class="countdown font-mono text-5xl">
        <span style="--value:15;"></span>
      </span>
      days
    </div>
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span class="countdown font-mono text-5xl">
        <span style="--value:10;"></span>
      </span>
      hours
    </div>
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span class="countdown font-mono text-5xl">
        <span style="--value:24;"></span>
      </span>
      min
    </div>
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span class="countdown font-mono text-5xl">
        <span style="--value:49;"></span>
      </span>
      sec
    </div>
  </div>
`;
InBoxes.storyName = 'In Boxes';

export const LargeText = () => `
  <span class="countdown font-mono text-8xl">
    <span style="--value:99;"></span>
  </span>
`;
LargeText.storyName = 'Large Text';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div class="flex flex-col p-2 bg-base-200 rounded-box text-base-content">
        <span class="countdown font-mono text-5xl">
          <span style="--value:15;"></span>
        </span>
        days
      </div>
      <div class="flex flex-col p-2 bg-base-200 rounded-box text-base-content">
        <span class="countdown font-mono text-5xl">
          <span style="--value:10;"></span>
        </span>
        hours
      </div>
      <div class="flex flex-col p-2 bg-base-200 rounded-box text-base-content">
        <span class="countdown font-mono text-5xl">
          <span style="--value:24;"></span>
        </span>
        min
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
