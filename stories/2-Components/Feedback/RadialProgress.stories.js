/**
 * @component RadialProgress
 * @description DaisyUI Radial Progress component with SQLI theme
 * @see https://daisyui.com/components/radial-progress/
 */
export default {
  title: 'Components/Feedback/Radial Progress',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Radial Progress** component for circular progress indicators.

## Usage
\`\`\`html
<div class="radial-progress" style="--value:70;" role="progressbar">70%</div>
\`\`\`

## CSS Variables
- \`--value\` - Progress value (0-100)
- \`--size\` - Size of the component
- \`--thickness\` - Thickness of the circle stroke
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="radial-progress" style="--value:70;" role="progressbar">70%</div>
`;

export const Values = () => `
  <div class="flex gap-4">
    <div class="radial-progress" style="--value:0;" role="progressbar">0%</div>
    <div class="radial-progress" style="--value:20;" role="progressbar">20%</div>
    <div class="radial-progress" style="--value:60;" role="progressbar">60%</div>
    <div class="radial-progress" style="--value:80;" role="progressbar">80%</div>
    <div class="radial-progress" style="--value:100;" role="progressbar">100%</div>
  </div>
`;

export const Colors = () => `
  <div class="flex flex-wrap gap-4">
    <div class="radial-progress text-primary" style="--value:70;" role="progressbar">70%</div>
    <div class="radial-progress text-secondary" style="--value:70;" role="progressbar">70%</div>
    <div class="radial-progress text-accent" style="--value:70;" role="progressbar">70%</div>
    <div class="radial-progress text-info" style="--value:70;" role="progressbar">70%</div>
    <div class="radial-progress text-success" style="--value:70;" role="progressbar">70%</div>
    <div class="radial-progress text-warning" style="--value:70;" role="progressbar">70%</div>
    <div class="radial-progress text-error" style="--value:70;" role="progressbar">70%</div>
  </div>
`;
Colors.storyName = 'All Colors';

export const CustomSize = () => `
  <div class="flex items-center gap-4">
    <div class="radial-progress" style="--value:70; --size:4rem;" role="progressbar">70%</div>
    <div class="radial-progress" style="--value:70; --size:6rem;" role="progressbar">70%</div>
    <div class="radial-progress" style="--value:70; --size:8rem;" role="progressbar">70%</div>
    <div class="radial-progress" style="--value:70; --size:12rem;" role="progressbar">70%</div>
  </div>
`;
CustomSize.storyName = 'Custom Sizes';

export const CustomThickness = () => `
  <div class="flex items-center gap-4">
    <div class="radial-progress" style="--value:70; --thickness: 2px;" role="progressbar">70%</div>
    <div class="radial-progress" style="--value:70; --thickness: 4px;" role="progressbar">70%</div>
    <div class="radial-progress" style="--value:70; --thickness: 8px;" role="progressbar">70%</div>
    <div class="radial-progress" style="--value:70; --thickness: 12px;" role="progressbar">70%</div>
  </div>
`;
CustomThickness.storyName = 'Custom Thickness';

export const WithBackground = () => `
  <div class="flex gap-4">
    <div class="radial-progress bg-primary text-primary-content border-primary border-4" style="--value:70;" role="progressbar">70%</div>
    <div class="radial-progress bg-secondary text-secondary-content border-secondary border-4" style="--value:80;" role="progressbar">80%</div>
  </div>
`;
WithBackground.storyName = 'With Background';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex gap-4">
      <div class="radial-progress text-primary" style="--value:70;" role="progressbar">70%</div>
      <div class="radial-progress text-secondary" style="--value:80;" role="progressbar">80%</div>
      <div class="radial-progress" style="--value:90;" role="progressbar">90%</div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
