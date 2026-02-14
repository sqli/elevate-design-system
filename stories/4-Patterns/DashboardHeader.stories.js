/**
 * @component DashboardHeader
 * @description Dashboard navigation pattern with navbar, search, notifications, avatar dropdown, and breadcrumbs
 * @see https://daisyui.com/components/navbar/
 */
import { heroicon } from '../utils/heroicons.js';

export default {
  title: 'Patterns/Dashboard Header',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A complete **Dashboard Header** pattern combining Navbar, Search Input, Notification Badge, Avatar Dropdown, and Breadcrumbs.

## Features
- Navbar with logo area and hamburger menu toggle
- Inline search input
- Notification bell with unread count badge
- Avatar dropdown with profile menu
- Breadcrumbs row below the navbar for contextual navigation

## Usage
Copy the HTML structure and wire up your routing, notification count, and user avatar to match your application.
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="bg-base-200 min-h-[300px]">
    <!-- Navbar -->
    <div class="navbar bg-base-100 shadow-sm px-4">
      <!-- Left: hamburger + logo -->
      <div class="navbar-start">
        <button class="btn btn-ghost btn-square lg:hidden" aria-label="Open menu">
          ${heroicon('bars-3', { class: 'h-5 w-5' })}
        </button>
        <a class="btn btn-ghost text-xl font-bold gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Elevate
        </a>
      </div>

      <!-- Center: search -->
      <div class="navbar-center hidden md:flex">
        <div class="form-control">
          <div class="relative">
            <input type="text" placeholder="Search projects, users, tasks..." class="input input-bordered w-80 pl-10" />
            ${heroicon('magnifying-glass', { class: 'h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40' })}
          </div>
        </div>
      </div>

      <!-- Right: notifications + avatar -->
      <div class="navbar-end gap-2">
        <!-- Notification bell -->
        <button class="btn btn-ghost btn-circle" aria-label="Notifications">
          <div class="indicator">
            ${heroicon('bell', { class: 'h-5 w-5' })}
            <span class="badge badge-primary badge-xs indicator-item">3</span>
          </div>
        </button>

        <!-- Avatar dropdown -->
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold text-sm">
              JD
            </div>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg border border-base-300">
            <li class="menu-title">
              <span>Jane Doe</span>
            </li>
            <li><a>
              ${heroicon('user', { class: 'h-4 w-4' })}
              Profile
            </a></li>
            <li><a>
              ${heroicon('cog-6-tooth', { class: 'h-4 w-4' })}
              Settings
            </a></li>
            <div class="divider my-0"></div>
            <li><a class="text-error">
              ${heroicon('arrow-right', { class: 'h-4 w-4' })}
              Logout
            </a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Breadcrumbs -->
    <div class="bg-base-100 border-t border-base-200 px-6 py-2">
      <div class="breadcrumbs text-sm">
        <ul>
          <li>
            ${heroicon('home', { class: 'h-4 w-4 mr-1' })}
            <a>Dashboard</a>
          </li>
          <li><a>Projects</a></li>
          <li class="font-medium">Elevate Design System</li>
        </ul>
      </div>
    </div>
  </div>
`;

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-200 min-h-[300px]">
    <!-- Navbar -->
    <div class="navbar bg-base-100 shadow-sm px-4">
      <div class="navbar-start">
        <button class="btn btn-ghost btn-square lg:hidden" aria-label="Open menu">
          ${heroicon('bars-3', { class: 'h-5 w-5' })}
        </button>
        <a class="btn btn-ghost text-xl font-bold gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Elevate
        </a>
      </div>

      <div class="navbar-center hidden md:flex">
        <div class="form-control">
          <div class="relative">
            <input type="text" placeholder="Search projects, users, tasks..." class="input input-bordered w-80 pl-10" />
            ${heroicon('magnifying-glass', { class: 'h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40' })}
          </div>
        </div>
      </div>

      <div class="navbar-end gap-2">
        <button class="btn btn-ghost btn-circle" aria-label="Notifications">
          <div class="indicator">
            ${heroicon('bell', { class: 'h-5 w-5' })}
            <span class="badge badge-primary badge-xs indicator-item">3</span>
          </div>
        </button>

        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold text-sm">
              JD
            </div>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg border border-base-300">
            <li class="menu-title">
              <span>Jane Doe</span>
            </li>
            <li><a>
              ${heroicon('user', { class: 'h-4 w-4' })}
              Profile
            </a></li>
            <li><a>
              ${heroicon('cog-6-tooth', { class: 'h-4 w-4' })}
              Settings
            </a></li>
            <div class="divider my-0"></div>
            <li><a class="text-error">
              ${heroicon('arrow-right', { class: 'h-4 w-4' })}
              Logout
            </a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Breadcrumbs -->
    <div class="bg-base-100 border-t border-base-200 px-6 py-2">
      <div class="breadcrumbs text-sm">
        <ul>
          <li>
            ${heroicon('home', { class: 'h-4 w-4 mr-1' })}
            <a>Dashboard</a>
          </li>
          <li><a>Projects</a></li>
          <li class="font-medium">Elevate Design System</li>
        </ul>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
