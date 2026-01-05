/**
 * @component Collapse
 * @description DaisyUI Collapse component with SQLI theme
 * @see https://daisyui.com/components/collapse/
 */
export default {
  title: 'Components/Data Display/Collapse',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Collapse** component for showing/hiding content.

## Usage
\`\`\`html
<div class="collapse bg-base-200">
  <input type="checkbox" />
  <div class="collapse-title">Click me</div>
  <div class="collapse-content">Content</div>
</div>
\`\`\`

## Variants
- \`collapse-arrow\` - With arrow icon
- \`collapse-plus\` - With plus/minus icon
- \`collapse-open\` - Force open
- \`collapse-close\` - Force close
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="collapse bg-base-200">
    <input type="checkbox" />
    <div class="collapse-title text-xl font-medium">Click me to show/hide content</div>
    <div class="collapse-content">
      <p>Hidden content that reveals when you click the title.</p>
    </div>
  </div>
`;

export const WithArrow = () => `
  <div class="collapse collapse-arrow bg-base-200">
    <input type="checkbox" />
    <div class="collapse-title text-xl font-medium">Click to expand</div>
    <div class="collapse-content">
      <p>This collapse has an arrow indicator that rotates when opened.</p>
    </div>
  </div>
`;
WithArrow.storyName = 'With Arrow Icon';

export const WithPlus = () => `
  <div class="collapse collapse-plus bg-base-200">
    <input type="checkbox" />
    <div class="collapse-title text-xl font-medium">Click to expand</div>
    <div class="collapse-content">
      <p>This collapse has a plus/minus indicator.</p>
    </div>
  </div>
`;
WithPlus.storyName = 'With Plus Icon';

export const ForceOpen = () => `
  <div class="collapse collapse-open collapse-arrow bg-base-200">
    <input type="checkbox" />
    <div class="collapse-title text-xl font-medium">I am always open</div>
    <div class="collapse-content">
      <p>This content is forced to stay visible with collapse-open class.</p>
    </div>
  </div>
`;
ForceOpen.storyName = 'Force Open';

export const ForceClose = () => `
  <div class="collapse collapse-close collapse-arrow bg-base-200">
    <input type="checkbox" checked />
    <div class="collapse-title text-xl font-medium">I am always closed</div>
    <div class="collapse-content">
      <p>This content is forced to stay hidden with collapse-close class.</p>
    </div>
  </div>
`;
ForceClose.storyName = 'Force Close';

export const WithFocusable = () => `
  <div tabindex="0" class="collapse collapse-arrow bg-base-200">
    <div class="collapse-title text-xl font-medium">Focus me and press Enter</div>
    <div class="collapse-content">
      <p>This collapse uses tabindex for keyboard accessibility without checkbox.</p>
    </div>
  </div>
`;
WithFocusable.storyName = 'Focusable (tabindex)';

export const CardStyle = () => `
  <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
    <input type="checkbox" />
    <div class="collapse-title text-xl font-medium">Card-styled collapse</div>
    <div class="collapse-content">
      <p>This collapse looks like a card with border and rounded corners.</p>
    </div>
  </div>
`;
CardStyle.storyName = 'Card Style';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="space-y-4">
      <div class="collapse collapse-arrow bg-base-200">
        <input type="checkbox" checked />
        <div class="collapse-title font-medium">Collapse with arrow</div>
        <div class="collapse-content">
          <p>Content visible in dark mode.</p>
        </div>
      </div>
      <div class="collapse collapse-plus bg-base-200">
        <input type="checkbox" />
        <div class="collapse-title font-medium">Collapse with plus</div>
        <div class="collapse-content">
          <p>Another collapse content.</p>
        </div>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
