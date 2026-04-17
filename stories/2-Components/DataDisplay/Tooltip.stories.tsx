import React from 'react';
import type { Meta } from '@storybook/react-vite';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '../../../src/components/Tooltip';
import { Button } from '../../../src/components/Button';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Data Display/Tooltip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
React **Tooltip** component built on Radix UI primitives with SQLI themes.

## Usage
\`\`\`tsx
import {
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';
  TooltipProvider, Tooltip, TooltipTrigger, TooltipContent,
} from '@sqli/elevate-design-system/react';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>Tooltip text</TooltipContent>
  </Tooltip>
</TooltipProvider>
\`\`\`

## Positions
- \`side="top"\` (default)
- \`side="bottom"\`
- \`side="left"\`
- \`side="right"\`

## Features
- Accessible with ARIA attributes
- Animated entry/exit
- Configurable delay and offset
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>hello</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export const Positions = () => (
  <TooltipProvider>
    <div className="flex flex-wrap gap-4 p-8">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Top</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Bottom</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Left</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Right</p>
        </TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
);
Positions.storyName = 'All Positions';

export const WithButtons = () => (
  <TooltipProvider>
    <div className="flex flex-wrap gap-4 p-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="primary">Primary</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Primary tooltip</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Secondary</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Secondary tooltip</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="accent">Accent</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Accent tooltip</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="info">Info</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Info tooltip</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="success">Success</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Success tooltip</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="warning">Warning</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Warning tooltip</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="error">Error</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Error tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
);
WithButtons.storyName = 'With Button Variants';

export const ForceOpen = () => (
  <TooltipProvider>
    <div className="p-8">
      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <Button variant="outline">I'm always visible</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Force open</p>
        </TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
);
ForceOpen.storyName = 'Force Open';

export const OnText = () => (
  <TooltipProvider>
    <p className="text-base-content">
      A language based on{' '}
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="underline decoration-dotted cursor-help">HTML</span>
        </TooltipTrigger>
        <TooltipContent>
          <p>HyperText Markup Language</p>
        </TooltipContent>
      </Tooltip>
      {' '}and target a browser.
    </p>
  </TooltipProvider>
);
OnText.storyName = 'On Text';

export const MultilineContent = () => (
  <TooltipProvider>
    <div className="p-8">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover for long text</Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p>This is a very long tooltip text that demonstrates multiline content. It can contain helpful descriptions or additional information.</p>
        </TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
);
MultilineContent.storyName = 'Multiline Content';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-6">Dark Mode (sqli-dark)</h3>
    <TooltipProvider>
      <div className="flex flex-wrap gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="primary">Primary</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Primary tooltip</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Secondary</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Secondary tooltip</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Default</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Default tooltip</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = darkModeParameters;
