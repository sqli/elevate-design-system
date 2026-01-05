/**
 * @component Indicator
 * @description DaisyUI Indicator component with SQLI theme
 * @see https://daisyui.com/components/indicator/
 */
export default {
  title: 'Components/Layout/Indicator',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Indicator** component for notification badges on other elements.

## Usage
\`\`\`html
<div class="indicator">
  <span class="indicator-item badge badge-secondary">99+</span>
  <button class="btn">inbox</button>
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

export const Default = () => `
  <div class="indicator">
    <span class="indicator-item badge badge-secondary">99+</span>
    <button class="btn">inbox</button>
  </div>
`;

export const OnAvatar = () => `
  <div class="indicator">
    <span class="indicator-item badge badge-secondary"></span>
    <div class="avatar">
      <div class="w-12 rounded bg-primary flex items-center justify-center text-primary-content font-bold">
        SQ
      </div>
    </div>
  </div>
`;
OnAvatar.storyName = 'On Avatar';

export const OnCard = () => `
  <div class="indicator">
    <span class="indicator-item indicator-center badge badge-secondary">NEW</span>
    <div class="card border bg-base-100">
      <div class="card-body">
        <h2 class="card-title">Card title</h2>
        <p>Card content</p>
      </div>
    </div>
  </div>
`;
OnCard.storyName = 'On Card';

export const Positions = () => `
  <div class="grid grid-cols-3 gap-8 p-4">
    <div class="indicator">
      <span class="indicator-item indicator-start indicator-top badge badge-primary">top-start</span>
      <div class="grid h-20 w-32 place-items-center bg-base-300">content</div>
    </div>
    <div class="indicator">
      <span class="indicator-item indicator-center indicator-top badge badge-secondary">top-center</span>
      <div class="grid h-20 w-32 place-items-center bg-base-300">content</div>
    </div>
    <div class="indicator">
      <span class="indicator-item indicator-end indicator-top badge badge-accent">top-end</span>
      <div class="grid h-20 w-32 place-items-center bg-base-300">content</div>
    </div>
    <div class="indicator">
      <span class="indicator-item indicator-start indicator-middle badge badge-primary">mid-start</span>
      <div class="grid h-20 w-32 place-items-center bg-base-300">content</div>
    </div>
    <div class="indicator">
      <span class="indicator-item indicator-center indicator-middle badge badge-secondary">mid-center</span>
      <div class="grid h-20 w-32 place-items-center bg-base-300">content</div>
    </div>
    <div class="indicator">
      <span class="indicator-item indicator-end indicator-middle badge badge-accent">mid-end</span>
      <div class="grid h-20 w-32 place-items-center bg-base-300">content</div>
    </div>
    <div class="indicator">
      <span class="indicator-item indicator-start indicator-bottom badge badge-primary">btm-start</span>
      <div class="grid h-20 w-32 place-items-center bg-base-300">content</div>
    </div>
    <div class="indicator">
      <span class="indicator-item indicator-center indicator-bottom badge badge-secondary">btm-center</span>
      <div class="grid h-20 w-32 place-items-center bg-base-300">content</div>
    </div>
    <div class="indicator">
      <span class="indicator-item indicator-end indicator-bottom badge badge-accent">btm-end</span>
      <div class="grid h-20 w-32 place-items-center bg-base-300">content</div>
    </div>
  </div>
`;
Positions.storyName = 'All Positions';

export const Multiple = () => `
  <div class="indicator">
    <span class="indicator-item indicator-top indicator-start badge badge-secondary">A</span>
    <span class="indicator-item indicator-top indicator-center badge badge-secondary">B</span>
    <span class="indicator-item indicator-top indicator-end badge badge-secondary">C</span>
    <span class="indicator-item indicator-bottom indicator-start badge badge-secondary">D</span>
    <span class="indicator-item indicator-bottom indicator-center badge badge-secondary">E</span>
    <span class="indicator-item indicator-bottom indicator-end badge badge-secondary">F</span>
    <div class="grid h-32 w-60 place-items-center bg-base-300">content</div>
  </div>
`;
Multiple.storyName = 'Multiple Indicators';

export const OnInput = () => `
  <div class="indicator">
    <span class="indicator-item badge badge-primary">Required</span>
    <input type="text" placeholder="Your email" class="input input-bordered" />
  </div>
`;
OnInput.storyName = 'On Input';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex gap-4">
      <div class="indicator">
        <span class="indicator-item badge badge-primary">5</span>
        <button class="btn">Messages</button>
      </div>
      <div class="indicator">
        <span class="indicator-item badge badge-secondary">NEW</span>
        <button class="btn btn-primary">Features</button>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
