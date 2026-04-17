import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper } from '../utils/story-helpers';

/**
 * SQLI Color Palette
 *
 * SQLI brand colors with SQLI theme semantic colors.
 * Themes: sqli-light, sqli-dark
 */
const meta: Meta = {
  title: 'Foundations/Colors',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
SQLI color palette integrated with SQLI themes.

## Brand Colors
- **Cream** (#FFFAF0) - Primary background (light mode)
- **Midnight Blue** (#0F0E2B) - Text, graphic elements
- **Sky Blue** (#6DA5FF) - Accents, highlights, interactions (dark mode)
- **Cobalt Blue** (#1F24E9) - Interactions (light mode)

## Semantic Colors
The themes map SQLI colors to semantic colors:
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

export default meta;

export const BrandPalette = () => (
  <div className="flex flex-col gap-4">
    <h3 className="text-lg font-medium mb-4">Brand Colors</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex items-center gap-4 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-base-200)' }}>
        <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#FFFAF0', border: '1px solid rgba(0,0,0,0.1)' }} />
        <div>
          <div className="font-medium">Cream</div>
          <div className="font-mono text-sm opacity-70">#FFFAF0</div>
          <div className="text-sm opacity-60">Main background (light mode)</div>
        </div>
      </div>
      <div className="flex items-center gap-4 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-base-200)' }}>
        <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#0F0E2B' }} />
        <div>
          <div className="font-medium">Midnight Blue</div>
          <div className="font-mono text-sm opacity-70">#0F0E2B</div>
          <div className="text-sm opacity-60">Text, graphic elements</div>
        </div>
      </div>
      <div className="flex items-center gap-4 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-base-200)' }}>
        <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#6DA5FF' }} />
        <div>
          <div className="font-medium">Sky Blue</div>
          <div className="font-mono text-sm opacity-70">#6DA5FF</div>
          <div className="text-sm opacity-60">Accents, highlights</div>
        </div>
      </div>
      <div className="flex items-center gap-4 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-base-200)' }}>
        <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#1F24E9' }} />
        <div>
          <div className="font-medium">Cobalt Blue</div>
          <div className="font-mono text-sm opacity-70">#1F24E9</div>
          <div className="text-sm opacity-60">Interactions (light mode)</div>
        </div>
      </div>
    </div>
  </div>
);
BrandPalette.storyName = 'Brand Palette';

export const SemanticColors = () => (
  <div className="flex flex-col gap-6">
    <h3 className="text-lg font-medium">Semantic Colors</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        className="flex flex-col items-center gap-2 p-4 rounded-lg"
        style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-primary-content)' }}
      >
        <div className="font-medium">Primary</div>
        <div className="text-xs opacity-80">btn-primary</div>
      </div>
      <div
        className="flex flex-col items-center gap-2 p-4 rounded-lg"
        style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-secondary-content)' }}
      >
        <div className="font-medium">Secondary</div>
        <div className="text-xs opacity-80">btn-secondary</div>
      </div>
      <div
        className="flex flex-col items-center gap-2 p-4 rounded-lg"
        style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-content)' }}
      >
        <div className="font-medium">Accent</div>
        <div className="text-xs opacity-80">btn-accent</div>
      </div>
      <div
        className="flex flex-col items-center gap-2 p-4 rounded-lg"
        style={{ backgroundColor: 'var(--color-neutral)', color: 'var(--color-neutral-content)' }}
      >
        <div className="font-medium">Neutral</div>
        <div className="text-xs opacity-80">btn-neutral</div>
      </div>
    </div>
  </div>
);
SemanticColors.storyName = 'Semantic Colors';

export const StatusColors = () => (
  <div className="flex flex-col gap-6">
    <h3 className="text-lg font-medium">Status Colors</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        className="flex flex-col items-center gap-2 p-4 rounded-lg"
        style={{ backgroundColor: 'var(--color-info)', color: 'var(--color-info-content)' }}
      >
        <div className="font-medium">Info</div>
        <div className="text-xs opacity-80">alert-info</div>
      </div>
      <div
        className="flex flex-col items-center gap-2 p-4 rounded-lg"
        style={{ backgroundColor: 'var(--color-success)', color: 'var(--color-success-content)' }}
      >
        <div className="font-medium">Success</div>
        <div className="text-xs opacity-80">alert-success</div>
      </div>
      <div
        className="flex flex-col items-center gap-2 p-4 rounded-lg"
        style={{ backgroundColor: 'var(--color-warning)', color: 'var(--color-warning-content)' }}
      >
        <div className="font-medium">Warning</div>
        <div className="text-xs opacity-80">alert-warning</div>
      </div>
      <div
        className="flex flex-col items-center gap-2 p-4 rounded-lg"
        style={{ backgroundColor: 'var(--color-error)', color: 'var(--color-error-content)' }}
      >
        <div className="font-medium">Error</div>
        <div className="text-xs opacity-80">alert-error</div>
      </div>
    </div>
  </div>
);
StatusColors.storyName = 'Status Colors';

export const BaseColors = () => (
  <div className="flex flex-col gap-6">
    <h3 className="text-lg font-medium">Base Colors</h3>
    <div className="grid grid-cols-3 gap-4">
      <div
        className="flex flex-col items-center gap-2 p-4 rounded-lg"
        style={{ backgroundColor: 'var(--color-base-100)', border: '1px solid var(--color-base-300)' }}
      >
        <div className="font-medium">Base 100</div>
        <div className="text-xs opacity-70">base-100</div>
      </div>
      <div
        className="flex flex-col items-center gap-2 p-4 rounded-lg"
        style={{ backgroundColor: 'var(--color-base-200)' }}
      >
        <div className="font-medium">Base 200</div>
        <div className="text-xs opacity-70">base-200</div>
      </div>
      <div
        className="flex flex-col items-center gap-2 p-4 rounded-lg"
        style={{ backgroundColor: 'var(--color-base-300)' }}
      >
        <div className="font-medium">Base 300</div>
        <div className="text-xs opacity-70">base-300</div>
      </div>
    </div>
  </div>
);
BaseColors.storyName = 'Base Colors';

export const ApprovedCombinations = () => (
  <div className="flex flex-col gap-6">
    <h3 className="text-lg font-medium">Approved Combinations (Light Mode)</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-6 rounded-lg" style={{ background: '#FFFAF0', color: '#0F0E2B', border: '1px solid rgba(0,0,0,0.1)' }}>
        <strong>Cream + Midnight</strong>
        <p className="mt-2 opacity-80 text-sm">Primary text</p>
      </div>
      <div className="p-6 rounded-lg" style={{ background: '#FFFAF0', color: '#1F24E9', border: '1px solid rgba(0,0,0,0.1)' }}>
        <strong>Cream + Cobalt</strong>
        <p className="mt-2 opacity-80 text-sm">Links, CTAs</p>
      </div>
      <div className="p-6 rounded-lg" style={{ background: '#0F0E2B', color: '#FFFAF0' }}>
        <strong>Midnight + Cream</strong>
        <p className="mt-2 opacity-80 text-sm">Inverted mode</p>
      </div>
      <div className="p-6 rounded-lg" style={{ background: '#0F0E2B', color: '#6DA5FF' }}>
        <strong>Midnight + Sky</strong>
        <p className="mt-2 opacity-80 text-sm">Accents (dark)</p>
      </div>
      <div className="p-6 rounded-lg" style={{ background: '#6DA5FF', color: '#0F0E2B' }}>
        <strong>Sky + Midnight</strong>
        <p className="mt-2 opacity-80 text-sm">Accent sections</p>
      </div>
      <div className="p-6 rounded-lg" style={{ background: '#1F24E9', color: '#FFFAF0' }}>
        <strong>Cobalt + Cream</strong>
        <p className="mt-2 opacity-80 text-sm">Strong CTAs</p>
      </div>
    </div>
  </div>
);
ApprovedCombinations.storyName = 'Approved Combinations';

export const ThemeComparison = () => (
  <div className="flex flex-col gap-6">
    <h3 className="text-lg font-medium">Theme Comparison</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div data-theme="sqli-light" className="p-6 rounded-lg bg-base-100 border border-base-300">
        <h4 className="font-bold text-lg mb-4">sqli-light</h4>
        <div className="flex gap-2 mb-4">
          <button className="btn btn-primary btn-sm">Primary</button>
          <button className="btn btn-secondary btn-sm">Secondary</button>
        </div>
        <p className="text-base-content opacity-70 text-sm">Cream background with Midnight text. Cobalt for interactions.</p>
      </div>
      <DarkModeWrapper>
        <h4 className="font-bold text-lg mb-4">sqli-dark</h4>
        <div className="flex gap-2 mb-4">
          <button className="btn btn-primary btn-sm">Primary</button>
          <button className="btn btn-secondary btn-sm">Secondary</button>
        </div>
        <p className="text-base-content opacity-70 text-sm">Midnight background with Cream text. Sky for interactions.</p>
      </DarkModeWrapper>
    </div>
  </div>
);
ThemeComparison.storyName = 'Theme Comparison';
ThemeComparison.parameters = {
  backgrounds: { default: 'transparent' },
};

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium mb-6">Dark Mode (sqli-dark)</h3>
    <p className="mb-4 opacity-80">
      In dark mode, semantic colors adapt automatically:
    </p>
    <ul className="list-disc pl-6 mb-6 space-y-1 opacity-80">
      <li>Background: Midnight Blue</li>
      <li>Text: Cream</li>
      <li>Primary: Sky Blue (instead of Cobalt)</li>
    </ul>
    <div className="flex gap-4">
      <button className="btn btn-primary">Primary Button</button>
      <button className="btn btn-secondary">Secondary Button</button>
      <a className="link link-primary">Interactive Link</a>
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
