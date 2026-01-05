/**
 * @component Tabs
 * @description DaisyUI Tabs component with SQLI theme
 * @see https://daisyui.com/components/tabs/
 */
export default {
  title: 'Components/Navigation/Tabs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Tabs** component for tabbed navigation.

## Usage
\`\`\`html
<div role="tablist" class="tabs tabs-bordered">
  <a role="tab" class="tab">Tab 1</a>
  <a role="tab" class="tab tab-active">Tab 2</a>
  <a role="tab" class="tab">Tab 3</a>
</div>
\`\`\`

## Variants
- \`tabs-bordered\` - With bottom border
- \`tabs-lifted\` - Lifted style
- \`tabs-boxed\` - Boxed style

## Sizes
- \`tabs-xs\`, \`tabs-sm\`, \`tabs-md\`, \`tabs-lg\`
        `,
      },
    },
  },
};

export const Default = () => `
  <div role="tablist" class="tabs">
    <a role="tab" class="tab">Tab 1</a>
    <a role="tab" class="tab tab-active">Tab 2</a>
    <a role="tab" class="tab">Tab 3</a>
  </div>
`;

export const Bordered = () => `
  <div role="tablist" class="tabs tabs-bordered">
    <a role="tab" class="tab">Tab 1</a>
    <a role="tab" class="tab tab-active">Tab 2</a>
    <a role="tab" class="tab">Tab 3</a>
  </div>
`;

export const Lifted = () => `
  <div role="tablist" class="tabs tabs-lifted">
    <a role="tab" class="tab">Tab 1</a>
    <a role="tab" class="tab tab-active">Tab 2</a>
    <a role="tab" class="tab">Tab 3</a>
  </div>
`;

export const Boxed = () => `
  <div role="tablist" class="tabs tabs-boxed">
    <a role="tab" class="tab">Tab 1</a>
    <a role="tab" class="tab tab-active">Tab 2</a>
    <a role="tab" class="tab">Tab 3</a>
  </div>
`;

export const Sizes = () => `
  <div class="flex flex-col gap-6">
    <div>
      <p class="text-sm mb-2 opacity-70">Extra Small (xs)</p>
      <div role="tablist" class="tabs tabs-bordered tabs-xs">
        <a role="tab" class="tab">Tab 1</a>
        <a role="tab" class="tab tab-active">Tab 2</a>
        <a role="tab" class="tab">Tab 3</a>
      </div>
    </div>
    <div>
      <p class="text-sm mb-2 opacity-70">Small (sm)</p>
      <div role="tablist" class="tabs tabs-bordered tabs-sm">
        <a role="tab" class="tab">Tab 1</a>
        <a role="tab" class="tab tab-active">Tab 2</a>
        <a role="tab" class="tab">Tab 3</a>
      </div>
    </div>
    <div>
      <p class="text-sm mb-2 opacity-70">Medium (md)</p>
      <div role="tablist" class="tabs tabs-bordered tabs-md">
        <a role="tab" class="tab">Tab 1</a>
        <a role="tab" class="tab tab-active">Tab 2</a>
        <a role="tab" class="tab">Tab 3</a>
      </div>
    </div>
    <div>
      <p class="text-sm mb-2 opacity-70">Large (lg)</p>
      <div role="tablist" class="tabs tabs-bordered tabs-lg">
        <a role="tab" class="tab">Tab 1</a>
        <a role="tab" class="tab tab-active">Tab 2</a>
        <a role="tab" class="tab">Tab 3</a>
      </div>
    </div>
  </div>
`;
Sizes.storyName = 'All Sizes';

export const WithRadioInputs = () => `
  <div role="tablist" class="tabs tabs-lifted">
    <input type="radio" name="my_tabs" role="tab" class="tab" aria-label="Tab 1" />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
      Tab content 1
    </div>

    <input type="radio" name="my_tabs" role="tab" class="tab" aria-label="Tab 2" checked />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
      Tab content 2
    </div>

    <input type="radio" name="my_tabs" role="tab" class="tab" aria-label="Tab 3" />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
      Tab content 3
    </div>
  </div>
`;
WithRadioInputs.storyName = 'With Content Panels';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex flex-col gap-4">
      <div role="tablist" class="tabs tabs-bordered">
        <a role="tab" class="tab">Tab 1</a>
        <a role="tab" class="tab tab-active">Tab 2</a>
        <a role="tab" class="tab">Tab 3</a>
      </div>
      <div role="tablist" class="tabs tabs-boxed">
        <a role="tab" class="tab">Tab 1</a>
        <a role="tab" class="tab tab-active">Tab 2</a>
        <a role="tab" class="tab">Tab 3</a>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
