/**
 * @component Loading
 * @description DaisyUI Loading/Spinner component with SQLI theme
 * @see https://daisyui.com/components/loading/
 */
export default {
  title: 'Components/Feedback/Loading',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Loading** spinner components.

## Usage
\`\`\`html
<span class="loading loading-spinner"></span>
<span class="loading loading-dots"></span>
\`\`\`

## Types
- \`loading-spinner\` - Spinning circle
- \`loading-dots\` - Bouncing dots
- \`loading-ring\` - Ring animation
- \`loading-ball\` - Bouncing ball
- \`loading-bars\` - Animated bars
- \`loading-infinity\` - Infinity symbol

## Sizes
- \`loading-xs\`, \`loading-sm\`, \`loading-md\`, \`loading-lg\`
        `,
      },
    },
  },
};

export const Spinner = () => `
  <span class="loading loading-spinner loading-lg"></span>
`;

export const Types = () => `
  <div class="flex flex-wrap gap-8 items-center">
    <div class="text-center">
      <span class="loading loading-spinner loading-lg"></span>
      <p class="text-sm mt-2">spinner</p>
    </div>
    <div class="text-center">
      <span class="loading loading-dots loading-lg"></span>
      <p class="text-sm mt-2">dots</p>
    </div>
    <div class="text-center">
      <span class="loading loading-ring loading-lg"></span>
      <p class="text-sm mt-2">ring</p>
    </div>
    <div class="text-center">
      <span class="loading loading-ball loading-lg"></span>
      <p class="text-sm mt-2">ball</p>
    </div>
    <div class="text-center">
      <span class="loading loading-bars loading-lg"></span>
      <p class="text-sm mt-2">bars</p>
    </div>
    <div class="text-center">
      <span class="loading loading-infinity loading-lg"></span>
      <p class="text-sm mt-2">infinity</p>
    </div>
  </div>
`;
Types.storyName = 'All Types';

export const Sizes = () => `
  <div class="flex flex-wrap gap-8 items-center">
    <div class="text-center">
      <span class="loading loading-spinner loading-xs"></span>
      <p class="text-sm mt-2">xs</p>
    </div>
    <div class="text-center">
      <span class="loading loading-spinner loading-sm"></span>
      <p class="text-sm mt-2">sm</p>
    </div>
    <div class="text-center">
      <span class="loading loading-spinner loading-md"></span>
      <p class="text-sm mt-2">md</p>
    </div>
    <div class="text-center">
      <span class="loading loading-spinner loading-lg"></span>
      <p class="text-sm mt-2">lg</p>
    </div>
  </div>
`;
Sizes.storyName = 'All Sizes';

export const Colors = () => `
  <div class="flex flex-wrap gap-4 items-center">
    <span class="loading loading-spinner loading-lg text-primary"></span>
    <span class="loading loading-spinner loading-lg text-secondary"></span>
    <span class="loading loading-spinner loading-lg text-accent"></span>
    <span class="loading loading-spinner loading-lg text-neutral"></span>
    <span class="loading loading-spinner loading-lg text-info"></span>
    <span class="loading loading-spinner loading-lg text-success"></span>
    <span class="loading loading-spinner loading-lg text-warning"></span>
    <span class="loading loading-spinner loading-lg text-error"></span>
  </div>
`;

export const InButton = () => `
  <div class="flex flex-wrap gap-4">
    <button class="btn btn-square">
      <span class="loading loading-spinner"></span>
    </button>
    <button class="btn">
      <span class="loading loading-spinner"></span>
      Loading
    </button>
    <button class="btn btn-primary">
      <span class="loading loading-spinner"></span>
      Processing
    </button>
  </div>
`;
InButton.storyName = 'In Button';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex flex-wrap gap-8">
      <span class="loading loading-spinner loading-lg text-primary"></span>
      <span class="loading loading-dots loading-lg text-secondary"></span>
      <span class="loading loading-ring loading-lg text-accent"></span>
      <span class="loading loading-bars loading-lg"></span>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
