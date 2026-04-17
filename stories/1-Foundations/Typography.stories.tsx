import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../utils/story-helpers';

/**
 * SQLI Typography
 *
 * TWK Everett font family with Tailwind utilities.
 */
const meta: Meta = {
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

export default meta;

export const FontFamily = () => (
  <div className="flex flex-col gap-6">
    <h3 className="text-lg font-medium mb-4">TWK Everett Font Family</h3>
    <div className="flex flex-col gap-4">
      <div className="p-4 bg-base-200 rounded-lg">
        <p className="font-light text-4xl">The quick brown fox jumps over the lazy dog</p>
        <p className="text-sm opacity-70 mt-2">font-light (300)</p>
      </div>
      <div className="p-4 bg-base-200 rounded-lg">
        <p className="font-normal text-4xl">The quick brown fox jumps over the lazy dog</p>
        <p className="text-sm opacity-70 mt-2">font-normal (400)</p>
      </div>
      <div className="p-4 bg-base-200 rounded-lg">
        <p className="font-medium text-4xl">The quick brown fox jumps over the lazy dog</p>
        <p className="text-sm opacity-70 mt-2">font-medium (500)</p>
      </div>
      <div className="p-4 bg-base-200 rounded-lg">
        <p className="font-bold text-4xl">The quick brown fox jumps over the lazy dog</p>
        <p className="text-sm opacity-70 mt-2">font-bold (700)</p>
      </div>
    </div>
  </div>
);
FontFamily.storyName = 'Font Family';

export const Headings = () => (
  <div className="flex flex-col gap-6">
    <h3 className="text-lg font-medium mb-4">Heading Styles</h3>
    <div className="flex flex-col gap-4 p-6 bg-base-200 rounded-lg">
      <h1 className="text-6xl font-medium">Heading 1 (text-6xl)</h1>
      <h2 className="text-5xl font-medium">Heading 2 (text-5xl)</h2>
      <h3 className="text-4xl font-medium">Heading 3 (text-4xl)</h3>
      <h4 className="text-3xl font-medium">Heading 4 (text-3xl)</h4>
      <h5 className="text-2xl font-medium">Heading 5 (text-2xl)</h5>
      <h6 className="text-xl font-medium">Heading 6 (text-xl)</h6>
    </div>
  </div>
);
Headings.storyName = 'Headings';

export const BodyText = () => (
  <div className="flex flex-col gap-6">
    <h3 className="text-lg font-medium mb-4">Body Text Sizes</h3>
    <div className="flex flex-col gap-4">
      <div className="p-4 bg-base-200 rounded-lg">
        <p className="text-lg font-light">Large body text (text-lg font-light)</p>
        <p className="text-sm opacity-70 mt-1">Use for lead paragraphs</p>
      </div>
      <div className="p-4 bg-base-200 rounded-lg">
        <p className="text-base font-light">Default body text (text-base font-light)</p>
        <p className="text-sm opacity-70 mt-1">Standard paragraph text</p>
      </div>
      <div className="p-4 bg-base-200 rounded-lg">
        <p className="text-sm font-normal">Small text (text-sm font-normal)</p>
        <p className="text-sm opacity-70 mt-1">Captions, labels, metadata</p>
      </div>
      <div className="p-4 bg-base-200 rounded-lg">
        <p className="text-xs font-normal">Extra small text (text-xs font-normal)</p>
        <p className="text-sm opacity-70 mt-1">Fine print, disclaimers</p>
      </div>
    </div>
  </div>
);
BodyText.storyName = 'Body Text';

export const Promise = () => (
  <div className="flex flex-col gap-6">
    <h3 className="text-lg font-medium mb-4">SQLI Promise</h3>
    <div className="flex flex-col gap-4">
      <div className="p-6 bg-base-200 rounded-lg">
        <p className="text-2xl font-medium">Elevate. Digitally</p>
        <p className="text-sm opacity-70 mt-2">Standard (text-2xl)</p>
      </div>
      <div className="p-6 bg-base-200 rounded-lg">
        <p className="text-4xl font-medium">Elevate. Digitally</p>
        <p className="text-sm opacity-70 mt-2">Large (text-4xl)</p>
      </div>
      <DarkModeWrapper>
        <p className="text-4xl font-medium">Elevate. Digitally</p>
        <p className="text-sm opacity-70 mt-2">On dark background</p>
      </DarkModeWrapper>
    </div>
  </div>
);
Promise.storyName = 'SQLI Promise';

export const TextSamples = () => (
  <div className="flex flex-col gap-6">
    <h3 className="text-lg font-medium mb-4">Text Samples</h3>
    <article className="prose max-w-none">
      <h1>Elevate. Digitally</h1>
      <p className="lead text-lg font-light">
        SQLI is a European digital services group, a leader in digital experience, founded in 1990.
      </p>
      <h2>Our Mission</h2>
      <p>
        We help organizations create meaningful connections with their customers through innovative digital experiences. Our team of experts combines creativity and technology to deliver transformative solutions.
      </p>
      <h3>What We Do</h3>
      <ul>
        <li>Digital Strategy &amp; Consulting</li>
        <li>Experience Design</li>
        <li>Technology Implementation</li>
        <li>Digital Commerce</li>
      </ul>
      <blockquote>
        &ldquo;Transforming businesses through innovative digital experiences.&rdquo;
      </blockquote>
    </article>
  </div>
);
TextSamples.storyName = 'Text Samples';

export const LineHeights = () => (
  <div className="flex flex-col gap-6">
    <h3 className="text-lg font-medium mb-4">Line Heights</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-4 bg-base-200 rounded-lg">
        <p className="leading-tight mb-2">Tight line height. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
        <p className="text-xs opacity-60">leading-tight (1.25)</p>
      </div>
      <div className="p-4 bg-base-200 rounded-lg">
        <p className="leading-normal mb-2">Normal line height. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
        <p className="text-xs opacity-60">leading-normal (1.5)</p>
      </div>
      <div className="p-4 bg-base-200 rounded-lg">
        <p className="leading-relaxed mb-2">Relaxed line height. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
        <p className="text-xs opacity-60">leading-relaxed (1.625)</p>
      </div>
    </div>
  </div>
);
LineHeights.storyName = 'Line Heights';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium mb-6">Dark Mode Typography</h3>
    <div className="flex flex-col gap-4">
      <h1 className="text-5xl font-medium">Elevate. Digitally</h1>
      <p className="text-lg font-light opacity-80">
        SQLI is a European digital services group, a leader in digital experience.
      </p>
      <p className="text-base font-light">
        We help organizations create meaningful connections with their customers through innovative digital experiences.
      </p>
      <div className="flex gap-4 mt-4">
        <button className="btn btn-primary">Learn More</button>
        <a className="link link-primary">Contact Us</a>
      </div>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
