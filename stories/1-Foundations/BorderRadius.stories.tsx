import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper, darkModeParameters } from '../utils/story-helpers';

const meta: Meta = {
  title: 'Foundations/Border Radius',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Border Radius

The design system defines **4 radius tokens** in \`tokens.json\` (DTCG), plus Tailwind's built-in radius utilities.

### SQLI Tokens (CSS Variables)

| Token | Value | Usage |
|-------|-------|-------|
| \`--radius-sm\` | 0.25rem (4px) | Small elements: badges, tags, chips |
| \`--radius-md\` | 0.5rem (8px) | Default: buttons, inputs, cards |
| \`--radius-lg\` | 0.75rem (12px) | Large containers: modals, panels |
| \`--radius-full\` | 9999px | Pills: avatars, toggle switches |

### Tailwind Utilities

\`\`\`tsx
<div className="rounded-sm" />   // --radius-sm
<div className="rounded-md" />   // --radius-md
<div className="rounded-lg" />   // --radius-lg
<div className="rounded-full" /> // --radius-full
\`\`\`
        `,
      },
    },
  },
};

export default meta;

const radiusTokens = [
  { name: '--radius-sm', tw: 'rounded-sm', value: '0.25rem (4px)', usage: 'Badges, tags, chips' },
  { name: '--radius-md', tw: 'rounded-md', value: '0.5rem (8px)', usage: 'Buttons, inputs, cards' },
  { name: '--radius-lg', tw: 'rounded-lg', value: '0.75rem (12px)', usage: 'Modals, panels, dialogs' },
  { name: '--radius-full', tw: 'rounded-full', value: '9999px', usage: 'Avatars, pills, toggles' },
];

export const RadiusTokens = () => (
  <div className="space-y-6">
    <h3 className="text-lg font-medium">Radius Tokens</h3>
    <p className="text-sm text-base-content/70">Design token-based border radii from <code>tokens.json</code>.</p>
    <div className="flex flex-wrap gap-8">
      {radiusTokens.map(({ name, tw, value, usage }) => (
        <div key={name} className="flex flex-col items-center gap-3">
          <div
            className={`w-24 h-24 bg-primary ${tw}`}
          />
          <div className="text-center">
            <code className="text-xs block">{name}</code>
            <span className="text-xs text-base-content/50 block">{value}</span>
            <span className="text-[10px] text-base-content/40 block mt-1">{usage}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const tailwindRadii = [
  { tw: 'rounded-none', label: 'none', value: '0' },
  { tw: 'rounded-xs', label: 'xs', value: '0.125rem' },
  { tw: 'rounded-sm', label: 'sm', value: '0.25rem' },
  { tw: 'rounded', label: 'default', value: '0.375rem' },
  { tw: 'rounded-md', label: 'md', value: '0.5rem' },
  { tw: 'rounded-lg', label: 'lg', value: '0.75rem' },
  { tw: 'rounded-xl', label: 'xl', value: '1rem' },
  { tw: 'rounded-2xl', label: '2xl', value: '1.25rem' },
  { tw: 'rounded-3xl', label: '3xl', value: '1.5rem' },
  { tw: 'rounded-full', label: 'full', value: '9999px' },
];

export const TailwindRadii = () => (
  <div className="space-y-6">
    <h3 className="text-lg font-medium">Tailwind Radius Utilities</h3>
    <p className="text-sm text-base-content/70">Full range of Tailwind border-radius utilities.</p>
    <div className="flex flex-wrap gap-6">
      {tailwindRadii.map(({ tw, label, value }) => (
        <div key={tw} className="flex flex-col items-center gap-2">
          <div className={`w-20 h-20 bg-primary opacity-70 ${tw}`} />
          <code className="text-xs">{label}</code>
          <span className="text-[10px] text-base-content/50">{value}</span>
        </div>
      ))}
    </div>
  </div>
);

export const ComponentExamples = () => (
  <div className="space-y-6">
    <h3 className="text-lg font-medium">Radius in Components</h3>
    <p className="text-sm text-base-content/70">How radius values map to common UI patterns.</p>

    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="badge rounded-sm bg-primary text-primary-content px-3 py-1">Badge (sm)</span>
        <code className="text-xs text-base-content/50">rounded-sm</code>
      </div>

      <div className="flex items-center gap-4">
        <button className="btn btn-primary rounded-md">Button (md)</button>
        <code className="text-xs text-base-content/50">rounded-md</code>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-64 p-4 rounded-lg bg-base-200 border border-border">
          <p className="text-sm">Card (lg)</p>
        </div>
        <code className="text-xs text-base-content/50">rounded-lg</code>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-content text-sm font-medium">SQ</div>
        <code className="text-xs text-base-content/50">rounded-full</code>
      </div>
    </div>
  </div>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium">Border Radius in Dark Mode</h3>
    <div className="flex flex-wrap gap-6">
      {radiusTokens.map(({ name, tw }) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <div className={`w-20 h-20 bg-primary ${tw}`} />
          <code className="text-xs">{name}</code>
        </div>
      ))}
    </div>
  </DarkModeWrapper>
);
DarkMode.parameters = darkModeParameters;
