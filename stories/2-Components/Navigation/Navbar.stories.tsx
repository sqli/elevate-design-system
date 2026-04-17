import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { Button } from '../../../src/components/Button';
import { Input } from '../../../src/components/Input';
import { Badge } from '../../../src/components/Badge';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Navigation/Navbar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Navbar component for site navigation.

## Usage
\`\`\`tsx
<nav className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">SQLI</a>
  </div>
  <div className="flex-none">
    <Button variant="primary" size="sm">Get started</Button>
  </div>
</nav>
\`\`\`

## Structure
- \`navbar-start\` - Left section
- \`navbar-center\` - Center section
- \`navbar-end\` - Right section
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <nav className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl text-base-content">SQLI</a>
    </div>
    <div className="flex-none">
      <Button variant="primary" size="sm">Get started</Button>
    </div>
  </nav>
);

export const WithTitle = () => (
  <nav className="navbar bg-base-100">
    <a className="btn btn-ghost text-xl text-base-content">Elevate Design System</a>
  </nav>
);
WithTitle.storyName = 'Title Only';

export const WithMenu = () => (
  <nav className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl text-base-content">SQLI</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><a>Link</a></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul className="bg-base-100 rounded-t-none p-2">
              <li><a>Link 1</a></li>
              <li><a>Link 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </nav>
);
WithMenu.storyName = 'With Menu';

export const WithSearch = () => (
  <nav className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl text-base-content">SQLI</a>
    </div>
    <div className="flex-none gap-2">
      <div className="form-control">
        <Input type="text" placeholder="Search" className="w-24 md:w-auto" />
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full bg-primary flex items-center justify-center text-primary-content">
            SQ
          </div>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
          <li>
            <a className="justify-between">
              Profile
              <Badge variant="primary" size="sm">New</Badge>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
);
WithSearch.storyName = 'With Search & Avatar';

export const WithIconButtons = () => (
  <nav className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl text-base-content">SQLI</a>
    </div>
    <div className="flex-none">
      <Button variant="ghost" square>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      </Button>
    </div>
  </nav>
);
WithIconButtons.storyName = 'With Icon Button';

export const Centered = () => (
  <nav className="navbar bg-base-100">
    <div className="navbar-start">
      <a className="btn btn-ghost text-xl text-base-content">SQLI</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Services</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <Button variant="primary">Contact us</Button>
    </div>
  </nav>
);

export const WithDropdown = () => (
  <nav className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl text-base-content">SQLI</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <Button variant="ghost" className="border border-border">Button</Button>
    </div>
  </nav>
);
WithDropdown.storyName = 'Responsive with Dropdown';

export const Colors = () => (
  <div className="flex flex-col gap-4">
    <nav className="navbar bg-neutral text-neutral-content">
      <a className="btn btn-ghost text-xl">Neutral</a>
    </nav>
    <nav className="navbar bg-base-300">
      <a className="btn btn-ghost text-xl text-base-content">Base 300</a>
    </nav>
    <nav className="navbar bg-primary text-primary-content">
      <a className="btn btn-ghost text-xl">Primary</a>
    </nav>
  </div>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <nav className="navbar bg-base-200 rounded-box">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-base-content">SQLI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>About</a></li>
        </ul>
        <Button variant="primary" size="sm">Contact</Button>
      </div>
    </nav>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
