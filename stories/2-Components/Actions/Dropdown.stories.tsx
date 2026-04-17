import React from 'react';
import type { Meta } from '@storybook/react-vite';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '../../../src/components/DropdownMenu';
import { Button } from '../../../src/components/Button';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/Actions/Dropdown',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
React **DropdownMenu** component built on Radix UI primitives with SQLI themes.

## Usage
\`\`\`tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@sqli/elevate-design-system/react';
import { Button } from '@sqli/elevate-design-system/react';
import { DarkModeWrapper } from '../../utils/story-helpers';

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
\`\`\`

## Features
- Accessible keyboard navigation
- Animated open/close transitions
- Configurable side and alignment
- Sub-menus, labels, separators
- Disabled items support
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button>Click me</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Item 1</DropdownMenuItem>
      <DropdownMenuItem>Item 2</DropdownMenuItem>
      <DropdownMenuItem>Item 3</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export const WithLabelsAndSeparators = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button>Account</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-48">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
WithLabelsAndSeparators.storyName = 'With Labels & Separators';

export const Positions = () => (
  <div className="flex flex-wrap gap-4 p-8">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Bottom (default)</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom">
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Top</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="top">
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Left</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="left">
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Right</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right">
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);
Positions.storyName = 'Dropdown Positions';

export const WithAlignment = () => (
  <div className="flex justify-between p-4">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Align Start</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
        <DropdownMenuItem>Item 3</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Align End</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
        <DropdownMenuItem>Item 3</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

export const WithSubMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button>Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-48">
      <DropdownMenuItem>New File</DropdownMenuItem>
      <DropdownMenuItem>Open File</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem>Email</DropdownMenuItem>
          <DropdownMenuItem>Slack</DropdownMenuItem>
          <DropdownMenuItem>Copy Link</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Settings</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
WithSubMenu.storyName = 'With Sub Menu';

export const WithDisabledItems = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button>Actions</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Duplicate</DropdownMenuItem>
      <DropdownMenuItem disabled>Archive (disabled)</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem disabled>Delete (disabled)</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
WithDisabledItems.storyName = 'With Disabled Items';

export const InNavbar = () => (
  <div className="flex items-center justify-between bg-base-200 rounded-lg px-4 py-2">
    <span className="text-xl font-medium text-base-content">SQLI</span>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-content text-sm font-medium cursor-pointer">
          JD
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>John Doe</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);
InNavbar.storyName = 'In Navbar';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="primary">Click me</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
        <DropdownMenuItem>Item 3</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
