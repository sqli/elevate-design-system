/**
 * SQLI Typography
 *
 * TWK Everett font family with DaisyUI and Tailwind utilities.
 */
export default {
  title: 'Foundations/Typography',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
SQLI Typography using **TWK Everett** font family.

## Font Weights
- Light (300) - Body text
- Regular (400) - Standard text
- Medium (500) - Headings, emphasis
- Bold (700) - Strong headings

## Usage with Tailwind
\`\`\`html
<h1 class="text-5xl font-medium">Heading 1</h1>
<p class="text-base font-light">Body text</p>
\`\`\`

## Related
- [Design Tokens](?path=/docs/foundations-design-tokens--docs) - Typography tokens, CSS variables
- [Colors](?path=/docs/foundations-colors--docs) - Text colors
        `,
      },
    },
  },
};

export const FontFamily = () => `
  <div class="flex flex-col gap-6">
    <h3 class="text-lg font-medium mb-4">TWK Everett Font Family</h3>
    <div class="flex flex-col gap-4">
      <div class="p-4 bg-base-200 rounded-lg">
        <p class="font-light text-4xl">The quick brown fox jumps over the lazy dog</p>
        <p class="text-sm opacity-70 mt-2">font-light (300)</p>
      </div>
      <div class="p-4 bg-base-200 rounded-lg">
        <p class="font-normal text-4xl">The quick brown fox jumps over the lazy dog</p>
        <p class="text-sm opacity-70 mt-2">font-normal (400)</p>
      </div>
      <div class="p-4 bg-base-200 rounded-lg">
        <p class="font-medium text-4xl">The quick brown fox jumps over the lazy dog</p>
        <p class="text-sm opacity-70 mt-2">font-medium (500)</p>
      </div>
      <div class="p-4 bg-base-200 rounded-lg">
        <p class="font-bold text-4xl">The quick brown fox jumps over the lazy dog</p>
        <p class="text-sm opacity-70 mt-2">font-bold (700)</p>
      </div>
    </div>
  </div>
`;
FontFamily.storyName = 'Font Family';

export const Headings = () => `
  <div class="flex flex-col gap-6">
    <h3 class="text-lg font-medium mb-4">Heading Styles</h3>
    <div class="flex flex-col gap-4 p-6 bg-base-200 rounded-lg">
      <h1 class="text-6xl font-medium">Heading 1 (text-6xl)</h1>
      <h2 class="text-5xl font-medium">Heading 2 (text-5xl)</h2>
      <h3 class="text-4xl font-medium">Heading 3 (text-4xl)</h3>
      <h4 class="text-3xl font-medium">Heading 4 (text-3xl)</h4>
      <h5 class="text-2xl font-medium">Heading 5 (text-2xl)</h5>
      <h6 class="text-xl font-medium">Heading 6 (text-xl)</h6>
    </div>
  </div>
`;
Headings.storyName = 'Headings';

export const BodyText = () => `
  <div class="flex flex-col gap-6">
    <h3 class="text-lg font-medium mb-4">Body Text Sizes</h3>
    <div class="flex flex-col gap-4">
      <div class="p-4 bg-base-200 rounded-lg">
        <p class="text-lg font-light">Large body text (text-lg font-light)</p>
        <p class="text-sm opacity-70 mt-1">Use for lead paragraphs</p>
      </div>
      <div class="p-4 bg-base-200 rounded-lg">
        <p class="text-base font-light">Default body text (text-base font-light)</p>
        <p class="text-sm opacity-70 mt-1">Standard paragraph text</p>
      </div>
      <div class="p-4 bg-base-200 rounded-lg">
        <p class="text-sm font-normal">Small text (text-sm font-normal)</p>
        <p class="text-sm opacity-70 mt-1">Captions, labels, metadata</p>
      </div>
      <div class="p-4 bg-base-200 rounded-lg">
        <p class="text-xs font-normal">Extra small text (text-xs font-normal)</p>
        <p class="text-sm opacity-70 mt-1">Fine print, disclaimers</p>
      </div>
    </div>
  </div>
`;
BodyText.storyName = 'Body Text';

export const Promise = () => `
  <div class="flex flex-col gap-6">
    <h3 class="text-lg font-medium mb-4">SQLI Promise</h3>
    <div class="flex flex-col gap-4">
      <div class="p-6 bg-base-200 rounded-lg">
        <p class="text-2xl font-medium">Elevate. Digitally</p>
        <p class="text-sm opacity-70 mt-2">Standard (text-2xl)</p>
      </div>
      <div class="p-6 bg-base-200 rounded-lg">
        <p class="text-4xl font-medium">Elevate. Digitally</p>
        <p class="text-sm opacity-70 mt-2">Large (text-4xl)</p>
      </div>
      <div data-theme="sqli-dark" class="p-6 rounded-lg bg-base-100">
        <p class="text-4xl font-medium">Elevate. Digitally</p>
        <p class="text-sm opacity-70 mt-2">On dark background</p>
      </div>
    </div>
  </div>
`;
Promise.storyName = 'SQLI Promise';

export const TextSamples = () => `
  <div class="flex flex-col gap-6">
    <h3 class="text-lg font-medium mb-4">Text Samples</h3>
    <article class="prose max-w-none">
      <h1>Elevate. Digitally</h1>
      <p class="lead text-lg font-light">
        SQLI is a European digital services group, a leader in digital experience, founded in 1990.
      </p>
      <h2>Our Mission</h2>
      <p>
        We help organizations create meaningful connections with their customers through innovative digital experiences. Our team of experts combines creativity and technology to deliver transformative solutions.
      </p>
      <h3>What We Do</h3>
      <ul>
        <li>Digital Strategy & Consulting</li>
        <li>Experience Design</li>
        <li>Technology Implementation</li>
        <li>Digital Commerce</li>
      </ul>
      <blockquote>
        "Transforming businesses through innovative digital experiences."
      </blockquote>
    </article>
  </div>
`;
TextSamples.storyName = 'Text Samples';

export const LineHeights = () => `
  <div class="flex flex-col gap-6">
    <h3 class="text-lg font-medium mb-4">Line Heights</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="p-4 bg-base-200 rounded-lg">
        <p class="leading-tight mb-2">Tight line height. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
        <p class="text-xs opacity-60">leading-tight (1.25)</p>
      </div>
      <div class="p-4 bg-base-200 rounded-lg">
        <p class="leading-normal mb-2">Normal line height. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
        <p class="text-xs opacity-60">leading-normal (1.5)</p>
      </div>
      <div class="p-4 bg-base-200 rounded-lg">
        <p class="leading-relaxed mb-2">Relaxed line height. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
        <p class="text-xs opacity-60">leading-relaxed (1.625)</p>
      </div>
    </div>
  </div>
`;
LineHeights.storyName = 'Line Heights';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="p-8 rounded-lg bg-base-100">
    <h3 class="text-lg font-medium mb-6">Dark Mode Typography</h3>
    <div class="flex flex-col gap-4">
      <h1 class="text-5xl font-medium">Elevate. Digitally</h1>
      <p class="text-lg font-light opacity-80">
        SQLI is a European digital services group, a leader in digital experience.
      </p>
      <p class="text-base font-light">
        We help organizations create meaningful connections with their customers through innovative digital experiences.
      </p>
      <div class="flex gap-4 mt-4">
        <button class="btn btn-primary">Learn More</button>
        <a class="link link-primary">Contact Us</a>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
