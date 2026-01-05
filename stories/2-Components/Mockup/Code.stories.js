/**
 * @component Code Mockup
 * @description DaisyUI Code Mockup component with SQLI theme
 * @see https://daisyui.com/components/mockup-code/
 */
export default {
  title: 'Components/Mockup/Code',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Code Mockup** component for displaying code blocks.

## Usage
\`\`\`html
<div class="mockup-code">
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
</div>
\`\`\`

## Prefix
Use \`data-prefix\` attribute to add line prefixes like \`$\`, \`>\`, or line numbers.
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="mockup-code">
    <pre data-prefix="$"><code>npm i daisyui</code></pre>
  </div>
`;

export const MultiLine = () => `
  <div class="mockup-code">
    <pre data-prefix="$"><code>npm i daisyui</code></pre>
    <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
    <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
  </div>
`;
MultiLine.storyName = 'Multi Line';

export const WithLineNumbers = () => `
  <div class="mockup-code">
    <pre data-prefix="1"><code>import daisyui from 'daisyui';</code></pre>
    <pre data-prefix="2"><code></code></pre>
    <pre data-prefix="3"><code>export default {</code></pre>
    <pre data-prefix="4"><code>  plugins: [daisyui],</code></pre>
    <pre data-prefix="5"><code>}</code></pre>
  </div>
`;
WithLineNumbers.storyName = 'With Line Numbers';

export const HighlightedLine = () => `
  <div class="mockup-code">
    <pre data-prefix="1"><code>function greet(name) {</code></pre>
    <pre data-prefix="2" class="bg-warning text-warning-content"><code>  console.log("Hello, " + name);</code></pre>
    <pre data-prefix="3"><code>}</code></pre>
  </div>
`;
HighlightedLine.storyName = 'Highlighted Line';

export const NoPrefix = () => `
  <div class="mockup-code">
    <pre><code>const theme = 'sqli-light';</code></pre>
    <pre><code>document.documentElement.setAttribute('data-theme', theme);</code></pre>
  </div>
`;
NoPrefix.storyName = 'Without Prefix';

export const ColorVariants = () => `
  <div class="flex flex-col gap-4">
    <div class="mockup-code bg-primary text-primary-content">
      <pre data-prefix="$"><code>npm i daisyui</code></pre>
    </div>
    <div class="mockup-code bg-secondary text-secondary-content">
      <pre data-prefix="$"><code>npm i daisyui</code></pre>
    </div>
    <div class="mockup-code bg-neutral text-neutral-content">
      <pre data-prefix="$"><code>npm i daisyui</code></pre>
    </div>
  </div>
`;
ColorVariants.storyName = 'Color Variants';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="mockup-code">
      <pre data-prefix="$"><code>npm i daisyui</code></pre>
      <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
      <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
