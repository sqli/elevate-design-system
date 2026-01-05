/**
 * SQLI Color Palette
 *
 * SQLI brand colors with DaisyUI semantic colors.
 * Themes: sqli-light, sqli-dark
 */
export default {
  title: 'Foundations/Colors',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
SQLI color palette integrated with DaisyUI themes.

## Brand Colors
- **Cream** (#FFFAF0) - Primary background (light mode)
- **Midnight Blue** (#0F0E2B) - Text, graphic elements
- **Sky Blue** (#6DA5FF) - Accents, highlights, interactions (dark mode)
- **Cobalt Blue** (#1F24E9) - Interactions (light mode)

## DaisyUI Semantic Colors
The themes map SQLI colors to DaisyUI semantic colors:
- \`primary\` - Cobalt (light) / Sky (dark)
- \`secondary\` - Sky (light) / Cobalt (dark)
- \`base-100\` - Cream (light) / Midnight (dark)
- \`base-content\` - Midnight (light) / Cream (dark)

## Related
- [Design Tokens](?path=/docs/foundations-design-tokens--docs) - CSS variables, OKLCH values
- [Theming](?path=/docs/foundations-theming--docs) - Theme switching, dark mode
        `,
      },
    },
  },
};

export const BrandPalette = () => `
  <div class="flex flex-col gap-4">
    <h3 class="text-lg font-medium mb-4">Brand Colors</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
        <div class="w-16 h-16 rounded-lg" style="background-color: #FFFAF0; border: 1px solid rgba(0,0,0,0.1);"></div>
        <div>
          <div class="font-medium">Cream</div>
          <div class="font-mono text-sm opacity-70">#FFFAF0</div>
          <div class="text-sm opacity-60">Main background (light mode)</div>
        </div>
      </div>
      <div class="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
        <div class="w-16 h-16 rounded-lg" style="background-color: #0F0E2B;"></div>
        <div>
          <div class="font-medium">Midnight Blue</div>
          <div class="font-mono text-sm opacity-70">#0F0E2B</div>
          <div class="text-sm opacity-60">Text, graphic elements</div>
        </div>
      </div>
      <div class="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
        <div class="w-16 h-16 rounded-lg" style="background-color: #6DA5FF;"></div>
        <div>
          <div class="font-medium">Sky Blue</div>
          <div class="font-mono text-sm opacity-70">#6DA5FF</div>
          <div class="text-sm opacity-60">Accents, highlights</div>
        </div>
      </div>
      <div class="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
        <div class="w-16 h-16 rounded-lg" style="background-color: #1F24E9;"></div>
        <div>
          <div class="font-medium">Cobalt Blue</div>
          <div class="font-mono text-sm opacity-70">#1F24E9</div>
          <div class="text-sm opacity-60">Interactions (light mode)</div>
        </div>
      </div>
    </div>
  </div>
`;
BrandPalette.storyName = 'Brand Palette';

export const SemanticColors = () => `
  <div class="flex flex-col gap-6">
    <h3 class="text-lg font-medium">DaisyUI Semantic Colors</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="flex flex-col items-center gap-2 p-4 rounded-lg bg-primary text-primary-content">
        <div class="font-medium">Primary</div>
        <div class="text-xs opacity-80">btn-primary</div>
      </div>
      <div class="flex flex-col items-center gap-2 p-4 rounded-lg bg-secondary text-secondary-content">
        <div class="font-medium">Secondary</div>
        <div class="text-xs opacity-80">btn-secondary</div>
      </div>
      <div class="flex flex-col items-center gap-2 p-4 rounded-lg bg-accent text-accent-content">
        <div class="font-medium">Accent</div>
        <div class="text-xs opacity-80">btn-accent</div>
      </div>
      <div class="flex flex-col items-center gap-2 p-4 rounded-lg bg-neutral text-neutral-content">
        <div class="font-medium">Neutral</div>
        <div class="text-xs opacity-80">btn-neutral</div>
      </div>
    </div>
  </div>
`;
SemanticColors.storyName = 'Semantic Colors';

export const StatusColors = () => `
  <div class="flex flex-col gap-6">
    <h3 class="text-lg font-medium">Status Colors</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="flex flex-col items-center gap-2 p-4 rounded-lg bg-info text-info-content">
        <div class="font-medium">Info</div>
        <div class="text-xs opacity-80">alert-info</div>
      </div>
      <div class="flex flex-col items-center gap-2 p-4 rounded-lg bg-success text-success-content">
        <div class="font-medium">Success</div>
        <div class="text-xs opacity-80">alert-success</div>
      </div>
      <div class="flex flex-col items-center gap-2 p-4 rounded-lg bg-warning text-warning-content">
        <div class="font-medium">Warning</div>
        <div class="text-xs opacity-80">alert-warning</div>
      </div>
      <div class="flex flex-col items-center gap-2 p-4 rounded-lg bg-error text-error-content">
        <div class="font-medium">Error</div>
        <div class="text-xs opacity-80">alert-error</div>
      </div>
    </div>
  </div>
`;
StatusColors.storyName = 'Status Colors';

export const BaseColors = () => `
  <div class="flex flex-col gap-6">
    <h3 class="text-lg font-medium">Base Colors</h3>
    <div class="grid grid-cols-3 gap-4">
      <div class="flex flex-col items-center gap-2 p-4 rounded-lg bg-base-100 border border-base-300">
        <div class="font-medium">Base 100</div>
        <div class="text-xs opacity-70">bg-base-100</div>
      </div>
      <div class="flex flex-col items-center gap-2 p-4 rounded-lg bg-base-200">
        <div class="font-medium">Base 200</div>
        <div class="text-xs opacity-70">bg-base-200</div>
      </div>
      <div class="flex flex-col items-center gap-2 p-4 rounded-lg bg-base-300">
        <div class="font-medium">Base 300</div>
        <div class="text-xs opacity-70">bg-base-300</div>
      </div>
    </div>
  </div>
`;
BaseColors.storyName = 'Base Colors';

export const ApprovedCombinations = () => `
  <div class="flex flex-col gap-6">
    <h3 class="text-lg font-medium">Approved Combinations (Light Mode)</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="p-6 rounded-lg" style="background: #FFFAF0; color: #0F0E2B; border: 1px solid rgba(0,0,0,0.1);">
        <strong>Cream + Midnight</strong>
        <p class="mt-2 opacity-80 text-sm">Primary text</p>
      </div>
      <div class="p-6 rounded-lg" style="background: #FFFAF0; color: #1F24E9; border: 1px solid rgba(0,0,0,0.1);">
        <strong>Cream + Cobalt</strong>
        <p class="mt-2 opacity-80 text-sm">Links, CTAs</p>
      </div>
      <div class="p-6 rounded-lg" style="background: #0F0E2B; color: #FFFAF0;">
        <strong>Midnight + Cream</strong>
        <p class="mt-2 opacity-80 text-sm">Inverted mode</p>
      </div>
      <div class="p-6 rounded-lg" style="background: #0F0E2B; color: #6DA5FF;">
        <strong>Midnight + Sky</strong>
        <p class="mt-2 opacity-80 text-sm">Accents (dark)</p>
      </div>
      <div class="p-6 rounded-lg" style="background: #6DA5FF; color: #0F0E2B;">
        <strong>Sky + Midnight</strong>
        <p class="mt-2 opacity-80 text-sm">Accent sections</p>
      </div>
      <div class="p-6 rounded-lg" style="background: #1F24E9; color: #FFFAF0;">
        <strong>Cobalt + Cream</strong>
        <p class="mt-2 opacity-80 text-sm">Strong CTAs</p>
      </div>
    </div>
  </div>
`;
ApprovedCombinations.storyName = 'Approved Combinations';

export const ThemeComparison = () => `
  <div class="flex flex-col gap-6">
    <h3 class="text-lg font-medium">Theme Comparison</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div data-theme="sqli-light" class="p-6 rounded-lg bg-base-100 border border-base-300">
        <h4 class="font-bold text-lg mb-4">sqli-light</h4>
        <div class="flex gap-2 mb-4">
          <button class="btn btn-primary btn-sm">Primary</button>
          <button class="btn btn-secondary btn-sm">Secondary</button>
        </div>
        <p class="text-base-content opacity-70 text-sm">Cream background with Midnight text. Cobalt for interactions.</p>
      </div>
      <div data-theme="sqli-dark" class="p-6 rounded-lg bg-base-100">
        <h4 class="font-bold text-lg mb-4">sqli-dark</h4>
        <div class="flex gap-2 mb-4">
          <button class="btn btn-primary btn-sm">Primary</button>
          <button class="btn btn-secondary btn-sm">Secondary</button>
        </div>
        <p class="text-base-content opacity-70 text-sm">Midnight background with Cream text. Sky for interactions.</p>
      </div>
    </div>
  </div>
`;
ThemeComparison.storyName = 'Theme Comparison';
ThemeComparison.parameters = {
  backgrounds: { default: 'transparent' },
};

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="p-8 rounded-lg bg-base-100">
    <h3 class="text-lg font-medium mb-6">Dark Mode (sqli-dark)</h3>
    <p class="mb-4 opacity-80">
      In dark mode, semantic colors adapt automatically:
    </p>
    <ul class="list-disc pl-6 mb-6 space-y-1 opacity-80">
      <li>Background: Midnight Blue</li>
      <li>Text: Cream</li>
      <li>Primary: Sky Blue (instead of Cobalt)</li>
    </ul>
    <div class="flex gap-4">
      <button class="btn btn-primary">Primary Button</button>
      <button class="btn btn-secondary">Secondary Button</button>
      <a class="link link-primary">Interactive Link</a>
    </div>
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
