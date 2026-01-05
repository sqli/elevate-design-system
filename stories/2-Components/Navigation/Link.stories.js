/**
 * @component Link
 * @description DaisyUI Link component with SQLI theme
 * @see https://daisyui.com/components/link/
 */
export default {
  title: 'Components/Navigation/Link',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Link** component for navigation links.

## Usage
\`\`\`html
<a class="link">I'm a simple link</a>
<a class="link link-primary">Primary link</a>
\`\`\`

## Variants
- \`link-hover\` - Only show underline on hover
- Color variants: \`link-primary\`, \`link-secondary\`, etc.
        `,
      },
    },
  },
};

export const Default = () => `
  <a class="link">I'm a simple link</a>
`;

export const WithHover = () => `
  <a class="link link-hover">I only have underline on hover</a>
`;
WithHover.storyName = 'Hover Underline';

export const Colors = () => `
  <div class="flex flex-col gap-2">
    <a class="link link-primary">Primary link</a>
    <a class="link link-secondary">Secondary link</a>
    <a class="link link-accent">Accent link</a>
    <a class="link link-neutral">Neutral link</a>
    <a class="link link-info">Info link</a>
    <a class="link link-success">Success link</a>
    <a class="link link-warning">Warning link</a>
    <a class="link link-error">Error link</a>
  </div>
`;
Colors.storyName = 'All Colors';

export const InText = () => `
  <p class="text-base-content">
    This is a paragraph with a <a class="link link-primary">link</a> inside it.
    You can also have <a class="link link-secondary">multiple links</a> in the same paragraph.
  </p>
`;
InText.storyName = 'In Text';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="flex flex-col gap-2">
      <a class="link link-primary">Primary link</a>
      <a class="link link-secondary">Secondary link</a>
      <a class="link link-accent">Accent link</a>
      <a class="link link-hover">Hover link</a>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
