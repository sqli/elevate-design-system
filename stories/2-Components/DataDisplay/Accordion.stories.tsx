import React from 'react';
import type { Meta } from '@storybook/react-vite';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../../../src/components/Accordion';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Data Display/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
React **Accordion** component built on Radix UI primitives with SQLI themes.

## Usage
\`\`\`tsx
import {
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from '@sqli/elevate-design-system/react';

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content for section 1</AccordionContent>
  </AccordionItem>
</Accordion>
\`\`\`

## Types
- \`single\` - Only one item open at a time (with optional \`collapsible\`)
- \`multiple\` - Multiple items can be open simultaneously

## Features
- Keyboard navigation (Arrow keys, Home, End)
- Animated expand/collapse
- Accessible with ARIA attributes
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger>Click to open this one and close others</AccordionTrigger>
      <AccordionContent>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Click to open this one and close others</AccordionTrigger>
      <AccordionContent>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Click to open this one and close others</AccordionTrigger>
      <AccordionContent>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const SingleCollapsible = () => (
  <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger>Expand with arrow icon</AccordionTrigger>
      <AccordionContent>
        <p>Content for the first section.</p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Another section</AccordionTrigger>
      <AccordionContent>
        <p>Content for the second section.</p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
SingleCollapsible.storyName = 'Single (Collapsible)';

export const Multiple = () => (
  <Accordion type="multiple" className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger>Independent section 1</AccordionTrigger>
      <AccordionContent>
        <p>This section can be opened independently of others.</p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Independent section 2</AccordionTrigger>
      <AccordionContent>
        <p>Multiple sections can be open at the same time.</p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Independent section 3</AccordionTrigger>
      <AccordionContent>
        <p>Open as many as you want simultaneously.</p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
Multiple.storyName = 'Multiple Open';

export const FAQ = () => (
  <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="faq-1">
      <AccordionTrigger>What is Elevate Design System?</AccordionTrigger>
      <AccordionContent>
        <p>Elevate is SQLI's design system built on Tailwind CSS and Radix UI, providing themed components for web applications.</p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="faq-2">
      <AccordionTrigger>How do I install it?</AccordionTrigger>
      <AccordionContent>
        <p>Install via npm: <code className="bg-base-200 px-1.5 py-0.5 rounded text-sm">npm install @sqli/elevate-design-system</code></p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="faq-3">
      <AccordionTrigger>Does it support dark mode?</AccordionTrigger>
      <AccordionContent>
        <p>Yes, the design system includes both sqli-light and sqli-dark themes that can be applied via the <code className="bg-base-200 px-1.5 py-0.5 rounded text-sm">data-theme</code> attribute.</p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
FAQ.storyName = 'FAQ Example';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <Accordion type="single" collapsible defaultValue="dark-1" className="w-full">
      <AccordionItem value="dark-1">
        <AccordionTrigger>First section</AccordionTrigger>
        <AccordionContent>
          <p>Accordion content in dark mode.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="dark-2">
        <AccordionTrigger>Second section</AccordionTrigger>
        <AccordionContent>
          <p>More content here.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = darkModeParameters;
