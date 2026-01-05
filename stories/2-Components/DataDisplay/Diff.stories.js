/**
 * @component Diff
 * @description DaisyUI Diff component with SQLI theme
 * @see https://daisyui.com/components/diff/
 */
export default {
  title: 'Components/Data Display/Diff',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Diff** component for comparing two items side by side.

## Usage
\`\`\`html
<div class="diff aspect-[16/9]">
  <div class="diff-item-1">
    <div class="bg-primary text-primary-content">SQLI</div>
  </div>
  <div class="diff-item-2">
    <div class="bg-base-200">SQLI</div>
  </div>
  <div class="diff-resizer"></div>
</div>
\`\`\`
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="diff aspect-[16/9] w-full max-w-lg">
    <div class="diff-item-1">
      <div class="bg-primary text-primary-content grid place-content-center text-4xl font-bold h-full">SQLI</div>
    </div>
    <div class="diff-item-2">
      <div class="bg-base-200 grid place-content-center text-4xl font-bold h-full">SQLI</div>
    </div>
    <div class="diff-resizer"></div>
  </div>
`;

export const Themes = () => `
  <div class="diff aspect-[16/9] w-full max-w-lg">
    <div class="diff-item-1">
      <div data-theme="sqli-dark" class="bg-base-100 text-base-content grid place-content-center text-2xl font-bold h-full p-8">
        <h2 class="text-3xl mb-4">Dark Theme</h2>
        <p class="text-sm opacity-70">sqli-dark</p>
      </div>
    </div>
    <div class="diff-item-2">
      <div data-theme="sqli-light" class="bg-base-100 text-base-content grid place-content-center text-2xl font-bold h-full p-8">
        <h2 class="text-3xl mb-4">Light Theme</h2>
        <p class="text-sm opacity-70">sqli-light</p>
      </div>
    </div>
    <div class="diff-resizer"></div>
  </div>
`;
Themes.storyName = 'Theme Comparison';

export const ColorComparison = () => `
  <div class="diff aspect-[16/9] w-full max-w-lg">
    <div class="diff-item-1">
      <div class="bg-secondary text-secondary-content grid place-content-center text-4xl font-bold h-full">Sky</div>
    </div>
    <div class="diff-item-2">
      <div class="bg-primary text-primary-content grid place-content-center text-4xl font-bold h-full">Cobalt</div>
    </div>
    <div class="diff-resizer"></div>
  </div>
`;
ColorComparison.storyName = 'Color Comparison';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="diff aspect-[16/9] w-full max-w-lg">
      <div class="diff-item-1">
        <div class="bg-primary text-primary-content grid place-content-center text-4xl font-bold h-full">Before</div>
      </div>
      <div class="diff-item-2">
        <div class="bg-secondary text-secondary-content grid place-content-center text-4xl font-bold h-full">After</div>
      </div>
      <div class="diff-resizer"></div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
