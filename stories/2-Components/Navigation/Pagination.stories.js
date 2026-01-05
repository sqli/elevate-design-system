/**
 * @component Pagination
 * @description DaisyUI Pagination component with SQLI theme
 * @see https://daisyui.com/components/pagination/
 */
export default {
  title: 'Components/Navigation/Pagination',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Pagination** component using join group.

## Usage
\`\`\`html
<div class="join">
  <button class="join-item btn">1</button>
  <button class="join-item btn btn-active">2</button>
  <button class="join-item btn">3</button>
</div>
\`\`\`
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="join">
    <button class="join-item btn">1</button>
    <button class="join-item btn btn-active">2</button>
    <button class="join-item btn">3</button>
    <button class="join-item btn">4</button>
  </div>
`;

export const WithPrevNext = () => `
  <div class="join">
    <button class="join-item btn">«</button>
    <button class="join-item btn">Page 22</button>
    <button class="join-item btn">»</button>
  </div>
`;
WithPrevNext.storyName = 'With Prev/Next';

export const WithLabels = () => `
  <div class="join">
    <button class="join-item btn">Previous</button>
    <button class="join-item btn">Next</button>
  </div>
`;
WithLabels.storyName = 'With Labels';

export const Sizes = () => `
  <div class="flex flex-col gap-4 items-start">
    <div>
      <p class="text-sm mb-2 opacity-70">Extra Small (xs)</p>
      <div class="join">
        <button class="join-item btn btn-xs">1</button>
        <button class="join-item btn btn-xs btn-active">2</button>
        <button class="join-item btn btn-xs">3</button>
      </div>
    </div>
    <div>
      <p class="text-sm mb-2 opacity-70">Small (sm)</p>
      <div class="join">
        <button class="join-item btn btn-sm">1</button>
        <button class="join-item btn btn-sm btn-active">2</button>
        <button class="join-item btn btn-sm">3</button>
      </div>
    </div>
    <div>
      <p class="text-sm mb-2 opacity-70">Medium (md)</p>
      <div class="join">
        <button class="join-item btn">1</button>
        <button class="join-item btn btn-active">2</button>
        <button class="join-item btn">3</button>
      </div>
    </div>
    <div>
      <p class="text-sm mb-2 opacity-70">Large (lg)</p>
      <div class="join">
        <button class="join-item btn btn-lg">1</button>
        <button class="join-item btn btn-lg btn-active">2</button>
        <button class="join-item btn btn-lg">3</button>
      </div>
    </div>
  </div>
`;
Sizes.storyName = 'All Sizes';

export const RadioGroup = () => `
  <div class="join">
    <input class="join-item btn" type="radio" name="options" aria-label="1" />
    <input class="join-item btn" type="radio" name="options" aria-label="2" checked />
    <input class="join-item btn" type="radio" name="options" aria-label="3" />
    <input class="join-item btn" type="radio" name="options" aria-label="4" />
  </div>
`;
RadioGroup.storyName = 'Radio Group';

export const Disabled = () => `
  <div class="join">
    <button class="join-item btn">1</button>
    <button class="join-item btn btn-active">2</button>
    <button class="join-item btn btn-disabled">...</button>
    <button class="join-item btn">99</button>
    <button class="join-item btn">100</button>
  </div>
`;
Disabled.storyName = 'With Disabled';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="join">
      <button class="join-item btn">«</button>
      <button class="join-item btn">1</button>
      <button class="join-item btn btn-active">2</button>
      <button class="join-item btn">3</button>
      <button class="join-item btn">»</button>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
