import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../../src/components/Accordion';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Data Display/Collapse',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Collapse** component for showing/hiding content, built with the Accordion React component.

## Usage
\`\`\`tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@sqli/elevate-design-system/react';
import { DarkModeWrapper } from '../../utils/story-helpers';

<Accordion>
  <AccordionItem value="item-1">
    <AccordionTrigger>Click me</AccordionTrigger>
    <AccordionContent>Content</AccordionContent>
  </AccordionItem>
</Accordion>
\`\`\`

## Variants
- Single item collapse
- Multiple items (accordion group)
- With arrow or plus icon styling
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <Accordion type="single" collapsible className="w-full max-w-md">
    <AccordionItem value="item-1">
      <AccordionTrigger>Click me to show/hide content</AccordionTrigger>
      <AccordionContent>
        Hidden content that reveals when you click the title.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const MultipleItems = () => (
  <Accordion type="single" collapsible className="w-full max-w-md">
    <AccordionItem value="item-1">
      <AccordionTrigger>First item</AccordionTrigger>
      <AccordionContent>
        This is the content of the first collapse item.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Second item</AccordionTrigger>
      <AccordionContent>
        This is the content of the second collapse item.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Third item</AccordionTrigger>
      <AccordionContent>
        This is the content of the third collapse item.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
MultipleItems.storyName = 'Multiple Items';

export const DefaultOpen = () => (
  <Accordion type="single" collapsible defaultValue="item-1" className="w-full max-w-md">
    <AccordionItem value="item-1">
      <AccordionTrigger>I am open by default</AccordionTrigger>
      <AccordionContent>
        This content is visible by default because the accordion has a defaultValue set.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Click to expand</AccordionTrigger>
      <AccordionContent>
        Another collapse content.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
DefaultOpen.storyName = 'Default Open';

export const MultipleOpen = () => (
  <Accordion type="multiple" defaultValue={['item-1', 'item-2']} className="w-full max-w-md">
    <AccordionItem value="item-1">
      <AccordionTrigger>First section</AccordionTrigger>
      <AccordionContent>
        Multiple sections can be open at the same time with type=&quot;multiple&quot;.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Second section</AccordionTrigger>
      <AccordionContent>
        This section is also open by default.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Third section</AccordionTrigger>
      <AccordionContent>
        Click to expand this section too.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
MultipleOpen.storyName = 'Multiple Open';

export const CardStyle = () => (
  <Accordion type="single" collapsible className="w-full max-w-md">
    <AccordionItem value="item-1" className="border border-base-300 rounded-box">
      <AccordionTrigger>Card-styled collapse</AccordionTrigger>
      <AccordionContent>
        This collapse looks like a card with border and rounded corners.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
CardStyle.storyName = 'Card Style';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <Accordion type="single" collapsible defaultValue="item-1" className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Collapse with arrow</AccordionTrigger>
        <AccordionContent>
          Content visible in dark mode.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Collapse with plus</AccordionTrigger>
        <AccordionContent>
          Another collapse content.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
