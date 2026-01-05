/**
 * @component Toast
 * @description DaisyUI Toast component with SQLI theme
 * @see https://daisyui.com/components/toast/
 */
export default {
  title: 'Components/Feedback/Toast',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Toast** component for notification messages.

## Usage
\`\`\`html
<div class="toast">
  <div class="alert alert-info">
    <span>New message arrived.</span>
  </div>
</div>
\`\`\`

## Positions
- \`toast-start\`, \`toast-center\`, \`toast-end\`
- \`toast-top\`, \`toast-middle\`, \`toast-bottom\`

Combine for all 9 positions: e.g., \`toast-top toast-end\`
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="relative h-32 w-full">
    <div class="toast toast-end">
      <div class="alert alert-info">
        <span>New message arrived.</span>
      </div>
    </div>
  </div>
`;

export const TopStart = () => `
  <div class="relative h-32 w-full">
    <div class="toast toast-top toast-start">
      <div class="alert alert-info">
        <span>Top start toast</span>
      </div>
    </div>
  </div>
`;
TopStart.storyName = 'Top Start';

export const TopCenter = () => `
  <div class="relative h-32 w-full">
    <div class="toast toast-top toast-center">
      <div class="alert alert-info">
        <span>Top center toast</span>
      </div>
    </div>
  </div>
`;
TopCenter.storyName = 'Top Center';

export const TopEnd = () => `
  <div class="relative h-32 w-full">
    <div class="toast toast-top toast-end">
      <div class="alert alert-success">
        <span>Top end toast</span>
      </div>
    </div>
  </div>
`;
TopEnd.storyName = 'Top End';

export const MiddleCenter = () => `
  <div class="relative h-32 w-full">
    <div class="toast toast-middle toast-center">
      <div class="alert alert-warning">
        <span>Middle center toast</span>
      </div>
    </div>
  </div>
`;
MiddleCenter.storyName = 'Middle Center';

export const BottomEnd = () => `
  <div class="relative h-32 w-full">
    <div class="toast toast-bottom toast-end">
      <div class="alert alert-error">
        <span>Bottom end toast</span>
      </div>
    </div>
  </div>
`;
BottomEnd.storyName = 'Bottom End';

export const MultipleToasts = () => `
  <div class="relative h-48 w-full">
    <div class="toast toast-end">
      <div class="alert alert-info">
        <span>New mail arrived.</span>
      </div>
      <div class="alert alert-success">
        <span>Message sent successfully.</span>
      </div>
      <div class="alert alert-warning">
        <span>Warning: Check your settings.</span>
      </div>
    </div>
  </div>
`;
MultipleToasts.storyName = 'Multiple Toasts';

export const WithActions = () => `
  <div class="relative h-32 w-full">
    <div class="toast toast-end">
      <div class="alert">
        <span>New message arrived.</span>
        <div>
          <button class="btn btn-sm">Dismiss</button>
          <button class="btn btn-sm btn-primary">View</button>
        </div>
      </div>
    </div>
  </div>
`;
WithActions.storyName = 'With Actions';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg relative h-48">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="toast toast-end">
      <div class="alert alert-info">
        <span>Info toast in dark mode.</span>
      </div>
      <div class="alert alert-success">
        <span>Success toast in dark mode.</span>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
