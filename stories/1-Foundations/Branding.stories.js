/**
 * SQLI Branding
 *
 * Logo and Ascenders - core brand identity elements.
 */
export default {
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

// =============================================================================
// LOGO STORIES
// =============================================================================

export const LogoDefault = () => `
  <div class="h-12">
    <img src="/logos/Logo_midnight.svg" alt="SQLI" class="h-full w-auto">
  </div>
`;
LogoDefault.storyName = 'Logo';

export const LogoVariants = () => `
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="card bg-base-200">
      <div class="flex items-center justify-center rounded-t-box p-8" style="background-color: var(--color-sqli-cream);">
        <img src="/logos/Logo_midnight.svg" alt="SQLI" class="h-12 w-auto">
      </div>
      <div class="text-center py-2 text-sm">Midnight on Cream</div>
    </div>

    <div class="card bg-base-200">
      <div class="flex items-center justify-center rounded-t-box p-8" style="background-color: var(--color-sqli-midnight);">
        <img src="/logos/Logo_cream.svg" alt="SQLI" class="h-12 w-auto">
      </div>
      <div class="text-center py-2 text-sm">Cream on Midnight</div>
    </div>

    <div class="card bg-base-200">
      <div class="flex items-center justify-center rounded-t-box p-8" style="background-color: var(--color-sqli-midnight);">
        <img src="/logos/Logo_sky.svg" alt="SQLI" class="h-12 w-auto">
      </div>
      <div class="text-center py-2 text-sm">Sky on Midnight</div>
    </div>

    <div class="card bg-base-200">
      <div class="flex items-center justify-center rounded-t-box p-8" style="background-color: var(--color-sqli-cobalt);">
        <img src="/logos/Logo_cream.svg" alt="SQLI" class="h-12 w-auto">
      </div>
      <div class="text-center py-2 text-sm">Cream on Cobalt</div>
    </div>

    <div class="card bg-base-200">
      <div class="flex items-center justify-center rounded-t-box p-8" style="background-color: var(--color-sqli-sky);">
        <img src="/logos/Logo_midnight.svg" alt="SQLI" class="h-12 w-auto">
      </div>
      <div class="text-center py-2 text-sm">Midnight on Sky</div>
    </div>
  </div>
`;
LogoVariants.storyName = 'Logo / Color Variants';

export const LogoSizes = () => `
  <div class="flex flex-col gap-8 items-start">
    <div>
      <p class="text-sm text-base-content/70 mb-2">XS (1rem / 16px)</p>
      <img src="/logos/Logo_midnight.svg" alt="SQLI" class="h-4 w-auto">
    </div>

    <div>
      <p class="text-sm text-base-content/70 mb-2">SM (1.5rem / 24px)</p>
      <img src="/logos/Logo_midnight.svg" alt="SQLI" class="h-6 w-auto">
    </div>

    <div>
      <p class="text-sm text-base-content/70 mb-2">MD (2rem / 32px) - default</p>
      <img src="/logos/Logo_midnight.svg" alt="SQLI" class="h-8 w-auto">
    </div>

    <div>
      <p class="text-sm text-base-content/70 mb-2">LG (3rem / 48px)</p>
      <img src="/logos/Logo_midnight.svg" alt="SQLI" class="h-12 w-auto">
    </div>

    <div>
      <p class="text-sm text-base-content/70 mb-2">XL (4rem / 64px)</p>
      <img src="/logos/Logo_midnight.svg" alt="SQLI" class="h-16 w-auto">
    </div>

    <div>
      <p class="text-sm text-base-content/70 mb-2">2XL (6rem / 96px)</p>
      <img src="/logos/Logo_midnight.svg" alt="SQLI" class="h-24 w-auto">
    </div>
  </div>
`;
LogoSizes.storyName = 'Logo / Sizes';

// =============================================================================
// ASCENDER STORIES
// =============================================================================

export const AscenderDefault = () => `
  <div class="h-24">
    <img src="/logos/Ascenders-midnight.svg" alt="SQLI Ascenders" class="h-full w-auto">
  </div>
`;
AscenderDefault.storyName = 'Ascender';

export const AscenderVariants = () => `
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div class="card bg-base-200">
      <div class="flex items-center justify-center rounded-t-box p-8" style="background-color: var(--color-sqli-cream);">
        <img src="/logos/Ascenders-midnight.svg" alt="SQLI Ascenders" class="h-24 w-auto">
      </div>
      <div class="text-center py-2 text-sm">Midnight on Cream</div>
    </div>

    <div class="card bg-base-200">
      <div class="flex items-center justify-center rounded-t-box p-8" style="background-color: var(--color-sqli-midnight);">
        <img src="/logos/Ascenders-cream.svg" alt="SQLI Ascenders" class="h-24 w-auto">
      </div>
      <div class="text-center py-2 text-sm">Cream on Midnight</div>
    </div>

    <div class="card bg-base-200">
      <div class="flex items-center justify-center rounded-t-box p-8" style="background-color: var(--color-sqli-midnight);">
        <img src="/logos/Ascenders-sky.svg" alt="SQLI Ascenders" class="h-24 w-auto">
      </div>
      <div class="text-center py-2 text-sm">Sky on Midnight</div>
    </div>

    <div class="card bg-base-200">
      <div class="flex items-center justify-center rounded-t-box p-8" style="background-color: var(--color-sqli-cream);">
        <img src="/logos/Ascenders-cobalt.svg" alt="SQLI Ascenders" class="h-24 w-auto">
      </div>
      <div class="text-center py-2 text-sm">Cobalt on Cream</div>
    </div>
  </div>
`;
AscenderVariants.storyName = 'Ascender / Color Variants';

export const AscenderSizes = () => `
  <div class="flex gap-8 items-end flex-wrap">
    <div class="text-center">
      <img src="/logos/Ascenders-midnight.svg" alt="SQLI Ascenders" class="h-8 w-auto">
      <p class="text-sm text-base-content/70 mt-2">SM (2rem)</p>
    </div>

    <div class="text-center">
      <img src="/logos/Ascenders-midnight.svg" alt="SQLI Ascenders" class="h-16 w-auto">
      <p class="text-sm text-base-content/70 mt-2">MD (4rem)</p>
    </div>

    <div class="text-center">
      <img src="/logos/Ascenders-midnight.svg" alt="SQLI Ascenders" class="h-24 w-auto">
      <p class="text-sm text-base-content/70 mt-2">LG (6rem)</p>
    </div>

    <div class="text-center">
      <img src="/logos/Ascenders-midnight.svg" alt="SQLI Ascenders" class="h-32 w-auto">
      <p class="text-sm text-base-content/70 mt-2">XL (8rem)</p>
    </div>

    <div class="text-center">
      <img src="/logos/Ascenders-midnight.svg" alt="SQLI Ascenders" class="h-48 w-auto">
      <p class="text-sm text-base-content/70 mt-2">2XL (12rem)</p>
    </div>
  </div>
`;
AscenderSizes.storyName = 'Ascender / Sizes';

export const AscenderDecorativeUsage = () => `
  <div class="relative bg-sqli-midnight p-12 rounded-box overflow-hidden min-h-[300px]">
    <div class="absolute right-0 top-1/2 -translate-y-1/2 opacity-10">
      <img src="/logos/Ascenders-cream.svg" alt="" class="h-48 w-auto">
    </div>

    <div class="relative z-10 max-w-[60%]">
      <h2 class="text-3xl font-medium text-sqli-cream">Elevate. Digitally</h2>
      <p class="text-lg text-sqli-cream/80 mt-4">
        Ascenders can be used as a decorative background to add a subtle graphic touch.
      </p>
    </div>
  </div>
`;
AscenderDecorativeUsage.storyName = 'Ascender / Decorative Usage';

export const AscenderCornerPositioning = () => `
  <div class="grid grid-cols-2 gap-4">
    <div class="relative bg-sqli-cream border border-base-300 rounded-box h-[200px] overflow-hidden">
      <div class="absolute top-0 left-0 opacity-15">
        <img src="/logos/Ascenders-midnight.svg" alt="" class="h-24 w-auto">
      </div>
      <p class="absolute bottom-4 left-4 text-sm text-base-content/70">Top Left</p>
    </div>

    <div class="relative bg-sqli-cream border border-base-300 rounded-box h-[200px] overflow-hidden">
      <div class="absolute top-0 right-0 opacity-15">
        <img src="/logos/Ascenders-midnight.svg" alt="" class="h-24 w-auto">
      </div>
      <p class="absolute bottom-4 left-4 text-sm text-base-content/70">Top Right</p>
    </div>

    <div class="relative bg-sqli-cream border border-base-300 rounded-box h-[200px] overflow-hidden">
      <div class="absolute bottom-0 left-0 opacity-15">
        <img src="/logos/Ascenders-midnight.svg" alt="" class="h-24 w-auto">
      </div>
      <p class="absolute top-4 left-4 text-sm text-base-content/70">Bottom Left</p>
    </div>

    <div class="relative bg-sqli-cream border border-base-300 rounded-box h-[200px] overflow-hidden">
      <div class="absolute bottom-0 right-0 opacity-15">
        <img src="/logos/Ascenders-midnight.svg" alt="" class="h-24 w-auto">
      </div>
      <p class="absolute top-4 left-4 text-sm text-base-content/70">Bottom Right</p>
    </div>
  </div>
`;
AscenderCornerPositioning.storyName = 'Ascender / Corner Positioning';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="card bg-base-200">
        <div class="card-body items-center justify-center p-8">
          <img src="/logos/Logo_cream.svg" alt="SQLI" class="h-12 w-auto">
        </div>
        <div class="text-center py-2 text-sm">Logo</div>
      </div>
      <div class="card bg-base-200">
        <div class="card-body items-center justify-center p-8">
          <img src="/logos/Ascenders-cream.svg" alt="SQLI Ascenders" class="h-24 w-auto">
        </div>
        <div class="text-center py-2 text-sm">Ascenders</div>
      </div>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
