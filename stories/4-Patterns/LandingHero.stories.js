/**
 * @component LandingHero
 * @description Landing page hero section with heading, subtitle, CTA buttons, and stats
 * @see https://daisyui.com/components/hero/
 */
import { heroicon } from '../utils/heroicons.js';

export default {
  title: 'Patterns/Landing Hero',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A complete **Landing Hero** pattern combining Hero, Typography, Buttons, and Stats components.

## Features
- Large heading with highlighted/gradient keyword
- Subtitle paragraph with description text
- Two call-to-action buttons (primary + outline)
- Stats section below with key metrics
- Fully responsive layout

## Usage
Copy the HTML structure and replace the heading, description, CTA labels, and stat values to match your product or service.
        `,
      },
    },
  },
};

export const Default = () => `
  <div class="bg-base-100">
    <!-- Hero section -->
    <div class="hero min-h-[500px] bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-2xl">
          <h1 class="text-5xl font-bold leading-tight">
            Build better products with
            <span class="text-primary">Elevate</span>
          </h1>
          <p class="py-6 text-lg text-base-content/70 max-w-lg mx-auto">
            A comprehensive design system built on DaisyUI and Tailwind CSS.
            Ship consistent, accessible interfaces faster than ever.
          </p>
          <div class="flex gap-3 justify-center flex-wrap">
            <button class="btn btn-primary btn-lg">
              Get Started
              ${heroicon('arrow-right', { class: 'h-5 w-5' })}
            </button>
            <button class="btn btn-outline btn-lg">
              ${heroicon('document', { class: 'h-5 w-5' })}
              Documentation
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats section -->
    <div class="bg-base-100 py-8 border-t border-base-200">
      <div class="max-w-4xl mx-auto">
        <div class="stats stats-vertical sm:stats-horizontal shadow w-full">
          <div class="stat">
            <div class="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <div class="stat-title">Components</div>
            <div class="stat-value text-primary">60+</div>
            <div class="stat-desc">Ready to use out of the box</div>
          </div>
          <div class="stat">
            <div class="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <div class="stat-title">Theme Tokens</div>
            <div class="stat-value text-secondary">200+</div>
            <div class="stat-desc">Customizable design tokens</div>
          </div>
          <div class="stat">
            <div class="stat-figure text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div class="stat-title">Build Time</div>
            <div class="stat-value">0.8s</div>
            <div class="stat-desc">Average Tailwind CSS build</div>
          </div>
          <div class="stat">
            <div class="stat-figure text-info">
              ${heroicon('users', { class: 'h-8 w-8' })}
            </div>
            <div class="stat-title">Contributors</div>
            <div class="stat-value">12</div>
            <div class="stat-desc">Active team members</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100">
    <!-- Hero section -->
    <div class="hero min-h-[500px] bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-2xl">
          <h1 class="text-5xl font-bold leading-tight">
            Build better products with
            <span class="text-primary">Elevate</span>
          </h1>
          <p class="py-6 text-lg text-base-content/70 max-w-lg mx-auto">
            A comprehensive design system built on DaisyUI and Tailwind CSS.
            Ship consistent, accessible interfaces faster than ever.
          </p>
          <div class="flex gap-3 justify-center flex-wrap">
            <button class="btn btn-primary btn-lg">
              Get Started
              ${heroicon('arrow-right', { class: 'h-5 w-5' })}
            </button>
            <button class="btn btn-outline btn-lg">
              ${heroicon('document', { class: 'h-5 w-5' })}
              Documentation
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats section -->
    <div class="bg-base-100 py-8 border-t border-base-200">
      <div class="max-w-4xl mx-auto">
        <div class="stats stats-vertical sm:stats-horizontal shadow w-full">
          <div class="stat">
            <div class="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <div class="stat-title">Components</div>
            <div class="stat-value text-primary">60+</div>
            <div class="stat-desc">Ready to use out of the box</div>
          </div>
          <div class="stat">
            <div class="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <div class="stat-title">Theme Tokens</div>
            <div class="stat-value text-secondary">200+</div>
            <div class="stat-desc">Customizable design tokens</div>
          </div>
          <div class="stat">
            <div class="stat-figure text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div class="stat-title">Build Time</div>
            <div class="stat-value">0.8s</div>
            <div class="stat-desc">Average Tailwind CSS build</div>
          </div>
          <div class="stat">
            <div class="stat-figure text-info">
              ${heroicon('users', { class: 'h-8 w-8' })}
            </div>
            <div class="stat-title">Contributors</div>
            <div class="stat-value">12</div>
            <div class="stat-desc">Active team members</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
