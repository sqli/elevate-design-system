import React, { useState } from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../../utils/story-helpers';

const meta: Meta = {
  title: 'Components/Actions/Theme Controller',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DaisyUI **Theme Controller** for switching between themes.

## Usage
\`\`\`tsx
const [isDark, setIsDark] = useState(false);

<div data-theme={isDark ? 'sqli-dark' : 'sqli-light'}>
  <input
    type="checkbox"
    checked={isDark}
    onChange={() => setIsDark(!isDark)}
    className="toggle theme-controller"
    value="sqli-dark"
  />
</div>
\`\`\`

## SQLI Themes
- \`sqli-light\` - Light theme with Cream background
- \`sqli-dark\` - Dark theme with Midnight background
        `,
      },
    },
  },
};

export default meta;

export const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div data-theme={isDark ? 'sqli-dark' : 'sqli-light'} className="p-4 rounded-lg bg-base-100">
      <div className="flex items-center gap-4">
        <span className="label-text text-base-content">Light</span>
        <input
          type="checkbox"
          checked={isDark}
          onChange={() => setIsDark(!isDark)}
          className="toggle theme-controller"
          value="sqli-dark"
        />
        <span className="label-text text-base-content">Dark</span>
      </div>
    </div>
  );
};
ToggleTheme.storyName = 'Toggle Theme';

export const SwapIcons = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div data-theme={isDark ? 'sqli-dark' : 'sqli-light'} className="p-4 rounded-lg bg-base-100">
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          className="theme-controller"
          value="sqli-dark"
          checked={isDark}
          onChange={() => setIsDark(!isDark)}
        />
        <svg className="swap-off h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>
        <svg className="swap-on h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
    </div>
  );
};
SwapIcons.storyName = 'Swap Icons';

export const DropdownSelect = () => {
  const [theme, setTheme] = useState('sqli-light');
  return (
    <div data-theme={theme} className="p-4 rounded-lg bg-base-100">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Theme
          <svg width="12px" height="12px" className="inline-block h-2 w-2 fill-current opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl">
          <li>
            <button
              className={`btn btn-sm btn-block btn-ghost justify-start ${theme === 'sqli-light' ? 'btn-active' : ''}`}
              onClick={() => setTheme('sqli-light')}
            >
              Light
            </button>
          </li>
          <li>
            <button
              className={`btn btn-sm btn-block btn-ghost justify-start ${theme === 'sqli-dark' ? 'btn-active' : ''}`}
              onClick={() => setTheme('sqli-dark')}
            >
              Dark
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
DropdownSelect.storyName = 'Dropdown Select';

export const RadioButtons = () => {
  const [theme, setTheme] = useState('sqli-light');
  return (
    <div data-theme={theme} className="p-4 rounded-lg bg-base-100">
      <div className="flex flex-col gap-2">
        <div className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text text-base-content">Light Theme</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="sqli-light"
              checked={theme === 'sqli-light'}
              onChange={() => setTheme('sqli-light')}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text text-base-content">Dark Theme</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="sqli-dark"
              checked={theme === 'sqli-dark'}
              onChange={() => setTheme('sqli-dark')}
            />
          </label>
        </div>
      </div>
    </div>
  );
};
RadioButtons.storyName = 'Radio Buttons';

export const InNavbar = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div data-theme={isDark ? 'sqli-dark' : 'sqli-light'} className="rounded-lg">
      <div className="navbar bg-base-200 rounded-box">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">SQLI</a>
        </div>
        <div className="flex-none">
          <label className="swap swap-rotate mr-4">
            <input
              type="checkbox"
              className="theme-controller"
              value="sqli-dark"
              checked={isDark}
              onChange={() => setIsDark(!isDark)}
            />
            <svg className="swap-off h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg className="swap-on h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <button className="btn btn-primary btn-sm">Contact</button>
        </div>
      </div>
    </div>
  );
};
InNavbar.storyName = 'In Navbar';

export const ThemePreview = () => (
  <div className="flex gap-4">
    <div data-theme="sqli-light" className="bg-base-100 p-6 rounded-box shadow-lg flex-1">
      <h3 className="text-lg font-bold text-base-content mb-4">sqli-light</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        <button className="btn btn-primary btn-sm">Primary</button>
        <button className="btn btn-secondary btn-sm">Secondary</button>
        <button className="btn btn-accent btn-sm">Accent</button>
      </div>
      <div className="flex gap-2">
        <div className="badge badge-primary">Primary</div>
        <div className="badge badge-secondary">Secondary</div>
      </div>
    </div>
    <DarkModeWrapper>
      <h3 className="text-lg font-bold text-base-content mb-4">sqli-dark</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        <button className="btn btn-primary btn-sm">Primary</button>
        <button className="btn btn-secondary btn-sm">Secondary</button>
        <button className="btn btn-accent btn-sm">Accent</button>
      </div>
      <div className="flex gap-2">
        <div className="badge badge-primary">Primary</div>
        <div className="badge badge-secondary">Secondary</div>
      </div>
    </DarkModeWrapper>
  </div>
);
ThemePreview.storyName = 'Theme Preview';
