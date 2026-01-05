/**
 * @component Accordion
 * @description DaisyUI Accordion component with SQLI theme
 * @see https://daisyui.com/components/accordion/
 */
export default {
  title: 'Components/Data Display/Accordion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Accordion** component for collapsible content sections.

## Usage
\`\`\`html
<div class="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion" checked />
  <div class="collapse-title">Title</div>
  <div class="collapse-content">Content</div>
</div>
\`\`\`

## Variants
- \`collapse-arrow\` - With arrow indicator
- \`collapse-plus\` - With plus/minus indicator
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="join join-vertical w-full">
    <div class="collapse collapse-arrow join-item border border-base-300 bg-base-200">
      <input type="radio" name="my-accordion-1" checked />
      <div class="collapse-title font-medium">Click to open this one and close others</div>
      <div class="collapse-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
    <div class="collapse collapse-arrow join-item border border-base-300 bg-base-200">
      <input type="radio" name="my-accordion-1" />
      <div class="collapse-title font-medium">Click to open this one and close others</div>
      <div class="collapse-content">
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
    <div class="collapse collapse-arrow join-item border border-base-300 bg-base-200">
      <input type="radio" name="my-accordion-1" />
      <div class="collapse-title font-medium">Click to open this one and close others</div>
      <div class="collapse-content">
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </div>
  </div>
`;

export const WithPlusIcon = () => `
  <div class="join join-vertical w-full">
    <div class="collapse collapse-plus join-item border border-base-300 bg-base-200">
      <input type="radio" name="my-accordion-2" checked />
      <div class="collapse-title font-medium">Expand with plus icon</div>
      <div class="collapse-content">
        <p>Content for the first section.</p>
      </div>
    </div>
    <div class="collapse collapse-plus join-item border border-base-300 bg-base-200">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title font-medium">Another section</div>
      <div class="collapse-content">
        <p>Content for the second section.</p>
      </div>
    </div>
  </div>
`;

export const WithCheckbox = () => `
  <div class="space-y-2">
    <div class="collapse collapse-arrow bg-base-200">
      <input type="checkbox" />
      <div class="collapse-title font-medium">Independent section 1</div>
      <div class="collapse-content">
        <p>This section can be opened independently of others.</p>
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="checkbox" />
      <div class="collapse-title font-medium">Independent section 2</div>
      <div class="collapse-content">
        <p>Multiple sections can be open at the same time.</p>
      </div>
    </div>
  </div>
`;
WithCheckbox.storyName = 'Multiple Open (Checkbox)';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="join join-vertical w-full">
      <div class="collapse collapse-arrow join-item border border-base-300 bg-base-200">
        <input type="radio" name="dark-accordion" checked />
        <div class="collapse-title font-medium">First section</div>
        <div class="collapse-content">
          <p>Accordion content in dark mode.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300 bg-base-200">
        <input type="radio" name="dark-accordion" />
        <div class="collapse-title font-medium">Second section</div>
        <div class="collapse-content">
          <p>More content here.</p>
        </div>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
