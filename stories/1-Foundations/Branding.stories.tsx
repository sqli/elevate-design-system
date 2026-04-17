import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../utils/story-helpers';

/**
 * SQLI Branding
 *
 * Logo and Ascenders - core brand identity elements.
 */
const meta: Meta = {
  title: 'Foundations/Branding',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `The SQLI brand identity includes the logo and ascenders.

## Logo
The SQLI logo must always be used with the correct background/logo color combinations according to the brand guidelines.
- Always written in **lowercase**: sqli
- In text, write **SQLI** in uppercase

## Ascenders
Ascenders are vertical graphic elements extracted from the letters "l" and "i" of the SQLI logo.

**Usage Rules:**
- Use as a complement to the logo, never alone without content
- Place in corners, not in the center
- Never use as a replacement for the logo`,
      },
    },
  },
};

export default meta;

// =============================================================================
// LOGO STORIES
// =============================================================================

export const LogoDefault = () => (
  <div className="h-12">
    <img src="/logos/Logo_midnight.svg" alt="SQLI" className="h-full w-auto" />
  </div>
);
LogoDefault.storyName = 'Logo';

export const LogoVariants = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="card bg-base-200">
      <div className="flex items-center justify-center rounded-t-box p-8" style={{ backgroundColor: 'var(--color-sqli-cream)' }}>
        <img src="/logos/Logo_midnight.svg" alt="SQLI" className="h-12 w-auto" />
      </div>
      <div className="text-center py-2 text-sm">Midnight on Cream</div>
    </div>

    <div className="card bg-base-200">
      <div className="flex items-center justify-center rounded-t-box p-8" style={{ backgroundColor: 'var(--color-sqli-midnight)' }}>
        <img src="/logos/Logo_cream.svg" alt="SQLI" className="h-12 w-auto" />
      </div>
      <div className="text-center py-2 text-sm">Cream on Midnight</div>
    </div>

    <div className="card bg-base-200">
      <div className="flex items-center justify-center rounded-t-box p-8" style={{ backgroundColor: 'var(--color-sqli-midnight)' }}>
        <img src="/logos/Logo_sky.svg" alt="SQLI" className="h-12 w-auto" />
      </div>
      <div className="text-center py-2 text-sm">Sky on Midnight</div>
    </div>

    <div className="card bg-base-200">
      <div className="flex items-center justify-center rounded-t-box p-8" style={{ backgroundColor: 'var(--color-sqli-cobalt)' }}>
        <img src="/logos/Logo_cream.svg" alt="SQLI" className="h-12 w-auto" />
      </div>
      <div className="text-center py-2 text-sm">Cream on Cobalt</div>
    </div>

    <div className="card bg-base-200">
      <div className="flex items-center justify-center rounded-t-box p-8" style={{ backgroundColor: 'var(--color-sqli-sky)' }}>
        <img src="/logos/Logo_midnight.svg" alt="SQLI" className="h-12 w-auto" />
      </div>
      <div className="text-center py-2 text-sm">Midnight on Sky</div>
    </div>
  </div>
);
LogoVariants.storyName = 'Logo / Color Variants';

export const LogoSizes = () => (
  <div className="flex flex-col gap-8 items-start">
    <div>
      <p className="text-sm text-base-content/70 mb-2">XS (1rem / 16px)</p>
      <img src="/logos/Logo_midnight.svg" alt="SQLI" className="h-4 w-auto" />
    </div>

    <div>
      <p className="text-sm text-base-content/70 mb-2">SM (1.5rem / 24px)</p>
      <img src="/logos/Logo_midnight.svg" alt="SQLI" className="h-6 w-auto" />
    </div>

    <div>
      <p className="text-sm text-base-content/70 mb-2">MD (2rem / 32px) - default</p>
      <img src="/logos/Logo_midnight.svg" alt="SQLI" className="h-8 w-auto" />
    </div>

    <div>
      <p className="text-sm text-base-content/70 mb-2">LG (3rem / 48px)</p>
      <img src="/logos/Logo_midnight.svg" alt="SQLI" className="h-12 w-auto" />
    </div>

    <div>
      <p className="text-sm text-base-content/70 mb-2">XL (4rem / 64px)</p>
      <img src="/logos/Logo_midnight.svg" alt="SQLI" className="h-16 w-auto" />
    </div>

    <div>
      <p className="text-sm text-base-content/70 mb-2">2XL (6rem / 96px)</p>
      <img src="/logos/Logo_midnight.svg" alt="SQLI" className="h-24 w-auto" />
    </div>
  </div>
);
LogoSizes.storyName = 'Logo / Sizes';

// =============================================================================
// ASCENDER STORIES
// =============================================================================

export const AscenderDefault = () => (
  <div className="h-24">
    <img src="/logos/Ascenders-midnight.svg" alt="SQLI Ascenders" className="h-full w-auto" />
  </div>
);
AscenderDefault.storyName = 'Ascender';

export const AscenderVariants = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="card bg-base-200">
      <div className="flex items-center justify-center rounded-t-box p-8" style={{ backgroundColor: 'var(--color-sqli-cream)' }}>
        <img src="/logos/Ascenders-midnight.svg" alt="SQLI Ascenders" className="h-24 w-auto" />
      </div>
      <div className="text-center py-2 text-sm">Midnight on Cream</div>
    </div>

    <div className="card bg-base-200">
      <div className="flex items-center justify-center rounded-t-box p-8" style={{ backgroundColor: 'var(--color-sqli-midnight)' }}>
        <img src="/logos/Ascenders-cream.svg" alt="SQLI Ascenders" className="h-24 w-auto" />
      </div>
      <div className="text-center py-2 text-sm">Cream on Midnight</div>
    </div>

    <div className="card bg-base-200">
      <div className="flex items-center justify-center rounded-t-box p-8" style={{ backgroundColor: 'var(--color-sqli-midnight)' }}>
        <img src="/logos/Ascenders-sky.svg" alt="SQLI Ascenders" className="h-24 w-auto" />
      </div>
      <div className="text-center py-2 text-sm">Sky on Midnight</div>
    </div>

    <div className="card bg-base-200">
      <div className="flex items-center justify-center rounded-t-box p-8" style={{ backgroundColor: 'var(--color-sqli-cream)' }}>
        <img src="/logos/Ascenders-cobalt.svg" alt="SQLI Ascenders" className="h-24 w-auto" />
      </div>
      <div className="text-center py-2 text-sm">Cobalt on Cream</div>
    </div>
  </div>
);
AscenderVariants.storyName = 'Ascender / Color Variants';

export const AscenderSizes = () => (
  <div className="flex gap-8 items-end flex-wrap">
    <div className="text-center">
      <img src="/logos/Ascenders-midnight.svg" alt="SQLI Ascenders" className="h-8 w-auto" />
      <p className="text-sm text-base-content/70 mt-2">SM (2rem)</p>
    </div>

    <div className="text-center">
      <img src="/logos/Ascenders-midnight.svg" alt="SQLI Ascenders" className="h-16 w-auto" />
      <p className="text-sm text-base-content/70 mt-2">MD (4rem)</p>
    </div>

    <div className="text-center">
      <img src="/logos/Ascenders-midnight.svg" alt="SQLI Ascenders" className="h-24 w-auto" />
      <p className="text-sm text-base-content/70 mt-2">LG (6rem)</p>
    </div>

    <div className="text-center">
      <img src="/logos/Ascenders-midnight.svg" alt="SQLI Ascenders" className="h-32 w-auto" />
      <p className="text-sm text-base-content/70 mt-2">XL (8rem)</p>
    </div>

    <div className="text-center">
      <img src="/logos/Ascenders-midnight.svg" alt="SQLI Ascenders" className="h-48 w-auto" />
      <p className="text-sm text-base-content/70 mt-2">2XL (12rem)</p>
    </div>
  </div>
);
AscenderSizes.storyName = 'Ascender / Sizes';

export const AscenderDecorativeUsage = () => (
  <div className="relative bg-sqli-midnight p-12 rounded-box overflow-hidden min-h-[300px]">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10">
      <img src="/logos/Ascenders-cream.svg" alt="" className="h-48 w-auto" />
    </div>

    <div className="relative z-10 max-w-[60%]">
      <h2 className="text-3xl font-medium text-sqli-cream">Elevate. Digitally</h2>
      <p className="text-lg text-sqli-cream/80 mt-4">
        Ascenders can be used as a decorative background to add a subtle graphic touch.
      </p>
    </div>
  </div>
);
AscenderDecorativeUsage.storyName = 'Ascender / Decorative Usage';

export const AscenderCornerPositioning = () => (
  <div className="grid grid-cols-2 gap-4">
    <div className="relative bg-sqli-cream border border-base-300 rounded-box h-[200px] overflow-hidden">
      <div className="absolute top-0 left-0 opacity-15">
        <img src="/logos/Ascenders-midnight.svg" alt="" className="h-24 w-auto" />
      </div>
      <p className="absolute bottom-4 left-4 text-sm text-base-content/70">Top Left</p>
    </div>

    <div className="relative bg-sqli-cream border border-base-300 rounded-box h-[200px] overflow-hidden">
      <div className="absolute top-0 right-0 opacity-15">
        <img src="/logos/Ascenders-midnight.svg" alt="" className="h-24 w-auto" />
      </div>
      <p className="absolute bottom-4 left-4 text-sm text-base-content/70">Top Right</p>
    </div>

    <div className="relative bg-sqli-cream border border-base-300 rounded-box h-[200px] overflow-hidden">
      <div className="absolute bottom-0 left-0 opacity-15">
        <img src="/logos/Ascenders-midnight.svg" alt="" className="h-24 w-auto" />
      </div>
      <p className="absolute top-4 left-4 text-sm text-base-content/70">Bottom Left</p>
    </div>

    <div className="relative bg-sqli-cream border border-base-300 rounded-box h-[200px] overflow-hidden">
      <div className="absolute bottom-0 right-0 opacity-15">
        <img src="/logos/Ascenders-midnight.svg" alt="" className="h-24 w-auto" />
      </div>
      <p className="absolute top-4 left-4 text-sm text-base-content/70">Bottom Right</p>
    </div>
  </div>
);
AscenderCornerPositioning.storyName = 'Ascender / Corner Positioning';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="card bg-base-200">
        <div className="card-body items-center justify-center p-8">
          <img src="/logos/Logo_cream.svg" alt="SQLI" className="h-12 w-auto" />
        </div>
        <div className="text-center py-2 text-sm">Logo</div>
      </div>
      <div className="card bg-base-200">
        <div className="card-body items-center justify-center p-8">
          <img src="/logos/Ascenders-cream.svg" alt="SQLI Ascenders" className="h-24 w-auto" />
        </div>
        <div className="text-center py-2 text-sm">Ascenders</div>
      </div>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
