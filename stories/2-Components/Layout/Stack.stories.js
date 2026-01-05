/**
 * @component Stack
 * @description DaisyUI Stack component with SQLI theme
 * @see https://daisyui.com/components/stack/
 */
export default {
  title: 'Components/Layout/Stack',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Stack** component for stacking elements on top of each other.

## Usage
\`\`\`html
<div class="stack">
  <div class="card bg-primary">Card 1</div>
  <div class="card bg-primary">Card 2</div>
  <div class="card bg-primary">Card 3</div>
</div>
\`\`\`
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="stack">
    <div class="card bg-primary text-primary-content w-36 shadow-md">
      <div class="card-body">
        <h2 class="card-title">A</h2>
      </div>
    </div>
    <div class="card bg-accent text-accent-content w-36 shadow-md">
      <div class="card-body">
        <h2 class="card-title">B</h2>
      </div>
    </div>
    <div class="card bg-secondary text-secondary-content w-36 shadow-md">
      <div class="card-body">
        <h2 class="card-title">C</h2>
      </div>
    </div>
  </div>
`;

export const StackedCards = () => `
  <div class="stack">
    <div class="card bg-base-100 w-64 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Notification 1</h2>
        <p>You have 3 unread messages.</p>
      </div>
    </div>
    <div class="card bg-base-100 w-64 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Notification 2</h2>
        <p>You have 2 unread messages.</p>
      </div>
    </div>
    <div class="card bg-base-100 w-64 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Notification 3</h2>
        <p>You have 1 unread message.</p>
      </div>
    </div>
  </div>
`;
StackedCards.storyName = 'Stacked Cards';

export const StackedImages = () => `
  <div class="stack">
    <div class="w-24 h-24 rounded-xl bg-primary flex items-center justify-center text-primary-content font-bold text-2xl">1</div>
    <div class="w-24 h-24 rounded-xl bg-secondary flex items-center justify-center text-secondary-content font-bold text-2xl">2</div>
    <div class="w-24 h-24 rounded-xl bg-accent flex items-center justify-center text-accent-content font-bold text-2xl">3</div>
  </div>
`;
StackedImages.storyName = 'Stacked Images';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="stack">
      <div class="card bg-primary text-primary-content w-36 shadow-md">
        <div class="card-body">
          <h2 class="card-title">A</h2>
        </div>
      </div>
      <div class="card bg-accent text-accent-content w-36 shadow-md">
        <div class="card-body">
          <h2 class="card-title">B</h2>
        </div>
      </div>
      <div class="card bg-secondary text-secondary-content w-36 shadow-md">
        <div class="card-body">
          <h2 class="card-title">C</h2>
        </div>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
