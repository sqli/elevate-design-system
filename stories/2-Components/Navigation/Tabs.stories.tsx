import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../../src/components/Tabs';
import { Card, CardBody } from '../../../src/components/Card';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

export default {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Accessible tabs component built on Radix UI Tabs primitive with SQLI themes.

## Usage
\`\`\`tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@sqli/elevate-design-system';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
\`\`\`

## Features
- Keyboard navigation (arrow keys)
- ARIA-compliant tab pattern
- Active tab indicator via primary color
- Disabled tab support
`,
      },
    },
  },
};

export const Default = () => (
  <Tabs defaultValue="tab1">
    <TabsList>
      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      <TabsTrigger value="tab3">Tab 3</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">Content for Tab 1</TabsContent>
    <TabsContent value="tab2">Content for Tab 2</TabsContent>
    <TabsContent value="tab3">Content for Tab 3</TabsContent>
  </Tabs>
);

export const WithDisabled = () => (
  <Tabs defaultValue="tab1">
    <TabsList>
      <TabsTrigger value="tab1">Active</TabsTrigger>
      <TabsTrigger value="tab2">Normal</TabsTrigger>
      <TabsTrigger value="tab3" disabled>
        Disabled
      </TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">This tab is selected by default.</TabsContent>
    <TabsContent value="tab2">This is the second tab.</TabsContent>
  </Tabs>
);

export const WithRichContent = () => (
  <Tabs defaultValue="overview" className="w-full max-w-2xl">
    <TabsList>
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="features">Features</TabsTrigger>
      <TabsTrigger value="pricing">Pricing</TabsTrigger>
    </TabsList>
    <TabsContent value="overview">
      <Card>
        <CardBody>
          <h3 className="text-lg font-medium mb-2">Product Overview</h3>
          <p className="text-sm opacity-80">
            The Elevate Design System provides a comprehensive set of React
            components built on Radix UI primitives, styled with Tailwind CSS
            and SQLI brand themes.
          </p>
        </CardBody>
      </Card>
    </TabsContent>
    <TabsContent value="features">
      <Card>
        <CardBody>
          <h3 className="text-lg font-medium mb-2">Key Features</h3>
          <ul className="list-disc list-inside text-sm space-y-1 opacity-80">
            <li>Accessible by default (WAI-ARIA)</li>
            <li>Light and dark theme support</li>
            <li>Keyboard navigation</li>
            <li>Composable API</li>
          </ul>
        </CardBody>
      </Card>
    </TabsContent>
    <TabsContent value="pricing">
      <Card>
        <CardBody>
          <h3 className="text-lg font-medium mb-2">Pricing</h3>
          <p className="text-sm opacity-80">
            The Elevate Design System is available for all SQLI projects at no
            additional cost.
          </p>
        </CardBody>
      </Card>
    </TabsContent>
  </Tabs>
);

export const ManyTabs = () => (
  <Tabs defaultValue="tab1">
    <TabsList>
      {Array.from({ length: 6 }, (_, i) => (
        <TabsTrigger key={i} value={`tab${i + 1}`}>
          Tab {i + 1}
        </TabsTrigger>
      ))}
    </TabsList>
    {Array.from({ length: 6 }, (_, i) => (
      <TabsContent key={i} value={`tab${i + 1}`}>
        Content for Tab {i + 1}
      </TabsContent>
    ))}
  </Tabs>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Dark mode tab content.</TabsContent>
      <TabsContent value="tab2">Second tab content in dark mode.</TabsContent>
      <TabsContent value="tab3">Third tab content in dark mode.</TabsContent>
    </Tabs>
  </DarkModeWrapper>
);
DarkMode.parameters = darkModeParameters;

export const Interactive = {
  args: {
    tabCount: 3,
    defaultTab: 'tab1',
  },
  argTypes: {
    tabCount: {
      control: { type: 'range', min: 2, max: 8, step: 1 },
      description: 'Number of tabs to display',
    },
    defaultTab: {
      control: { type: 'text' },
      description: 'Default active tab value (e.g., "tab1")',
    },
  },
  render: (args: { tabCount: number; defaultTab: string }) => (
    <Tabs defaultValue={args.defaultTab}>
      <TabsList>
        {Array.from({ length: args.tabCount }, (_, i) => (
          <TabsTrigger key={i} value={`tab${i + 1}`}>
            Tab {i + 1}
          </TabsTrigger>
        ))}
      </TabsList>
      {Array.from({ length: args.tabCount }, (_, i) => (
        <TabsContent key={i} value={`tab${i + 1}`}>
          Content for Tab {i + 1}. Use the controls to adjust the number of
          tabs.
        </TabsContent>
      ))}
    </Tabs>
  ),
};
