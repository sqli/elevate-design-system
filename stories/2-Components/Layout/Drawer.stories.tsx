import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { Button } from '../../../src/components/Button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogTitle,
} from '../../../src/components/Dialog';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Layout/Drawer',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Drawer/Sidebar component for side navigation using the Dialog component.

## Usage
\`\`\`tsx
import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogTitle } from '@sqli/elevate-design-system/react';
import { DarkModeWrapper } from '../../utils/story-helpers';

<Dialog>
  <DialogTrigger asChild>
    <Button variant="primary">Open drawer</Button>
  </DialogTrigger>
  <DialogContent className="fixed left-0 top-0 h-full w-80 translate-x-0 translate-y-0 rounded-none">
    <DialogTitle>Navigation</DialogTitle>
    <nav>
      <ul>
        <li><a>Item 1</a></li>
      </ul>
    </nav>
  </DialogContent>
</Dialog>
\`\`\`

## Variants
- Default - Left side drawer
- Right side - Position content on the right
        `,
      },
    },
  },
};

export default meta;

const drawerContentClass =
  'fixed left-0 top-0 h-full w-80 max-w-none -translate-x-0 translate-y-0 rounded-none data-[state=open]:animate-in data-[state=open]:slide-in-from-left data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left';

const drawerContentRightClass =
  'fixed right-0 left-auto top-0 h-full w-80 max-w-none translate-x-0 translate-y-0 rounded-none data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right';

export const Default = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="primary">Open drawer</Button>
    </DialogTrigger>
    <DialogContent className={drawerContentClass}>
      <DialogTitle>Navigation</DialogTitle>
      <ul className="menu bg-base-200 text-base-content min-h-0 w-full p-4 rounded-lg mt-4">
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
        <li><a>Sidebar Item 3</a></li>
      </ul>
      <div className="mt-auto pt-4">
        <DialogClose asChild>
          <Button variant="ghost" block>Close</Button>
        </DialogClose>
      </div>
    </DialogContent>
  </Dialog>
);

export const RightSide = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="primary">Open drawer (right)</Button>
    </DialogTrigger>
    <DialogContent className={drawerContentRightClass}>
      <DialogTitle>Navigation</DialogTitle>
      <ul className="menu bg-base-200 text-base-content min-h-0 w-full p-4 rounded-lg mt-4">
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
        <li><a>Sidebar Item 3</a></li>
      </ul>
      <div className="mt-auto pt-4">
        <DialogClose asChild>
          <Button variant="ghost" block>Close</Button>
        </DialogClose>
      </div>
    </DialogContent>
  </Dialog>
);
RightSide.storyName = 'Right Side';

export const WithNavbar = () => (
  <div className="flex flex-col w-full">
    <div className="flex items-center bg-base-300 w-full px-4 py-2 rounded-lg">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" square size="sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </DialogTrigger>
        <DialogContent className={drawerContentClass}>
          <DialogTitle>Menu</DialogTitle>
          <ul className="menu bg-base-200 text-base-content min-h-0 w-full p-4 rounded-lg mt-4">
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
          <div className="mt-auto pt-4">
            <DialogClose asChild>
              <Button variant="ghost" block>Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
      <span className="mx-2 flex-1 px-2 text-base-content font-bold">SQLI</span>
      <div className="hidden lg:flex gap-2">
        <Button variant="ghost" size="sm">Item 1</Button>
        <Button variant="ghost" size="sm">Item 2</Button>
      </div>
    </div>
    <div className="p-4 text-base-content">
      Click the hamburger menu to open the sidebar drawer.
    </div>
  </div>
);
WithNavbar.storyName = 'With Navbar';

export const WithMenuContent = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="primary">Open drawer</Button>
    </DialogTrigger>
    <DialogContent className={drawerContentClass}>
      <DialogTitle>Navigation</DialogTitle>
      <ul className="menu bg-base-200 text-base-content min-h-0 w-full p-4 rounded-lg mt-4">
        <li className="menu-title">Navigation</li>
        <li><a>Dashboard</a></li>
        <li><a>Projects</a></li>
        <li><a>Settings</a></li>
      </ul>
      <div className="mt-auto pt-4">
        <DialogClose asChild>
          <Button variant="ghost" block>Close</Button>
        </DialogClose>
      </div>
    </DialogContent>
  </Dialog>
);
WithMenuContent.storyName = 'With Menu Content';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open drawer</Button>
      </DialogTrigger>
      <DialogContent className={drawerContentClass}>
        <DialogTitle>Navigation</DialogTitle>
        <ul className="menu bg-base-200 text-base-content min-h-0 w-full p-4 rounded-lg mt-4">
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
        <div className="mt-auto pt-4">
          <DialogClose asChild>
            <Button variant="ghost" block>Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
