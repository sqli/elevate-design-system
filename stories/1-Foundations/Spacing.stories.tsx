import React from 'react';
import type { Meta } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Foundations/Spacing & Sizing',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Spacing & Sizing

Tailwind CSS 4 uses a **unified scale** for both spacing (\`p-*\`, \`m-*\`, \`gap-*\`) and sizing (\`w-*\`, \`h-*\`), based on a **4px (0.25rem) base unit**.

### Spacing Utilities

| Utility | Property |
|---------|----------|
| \`p-*\` | padding |
| \`m-*\` | margin |
| \`gap-*\` | flex/grid gap |
| \`space-x-*\`, \`space-y-*\` | child spacing |
| \`inset-*\` | top/right/bottom/left |

### Sizing Utilities

| Utility | Property |
|---------|----------|
| \`w-*\`, \`h-*\` | width, height |
| \`min-w-*\`, \`min-h-*\` | minimum dimensions |
| \`max-w-*\`, \`max-h-*\` | maximum dimensions |
| \`size-*\` | width + height simultaneously |

### Recommended Spacing

| Context | Spacing | Tailwind |
|---------|---------|----------|
| Tight inline | 4px | \`gap-1\` |
| Compact groups | 8px | \`gap-2\` |
| Default content | 16px | \`gap-4\` or \`p-4\` |
| Section padding | 24-32px | \`p-6\` to \`p-8\` |
| Page sections | 48-64px | \`py-12\` to \`py-16\` |
        `,
      },
    },
  },
};

export default meta;

const scale = [
  { name: '0', rem: '0', px: 0 },
  { name: '0.5', rem: '0.125rem', px: 2 },
  { name: '1', rem: '0.25rem', px: 4 },
  { name: '1.5', rem: '0.375rem', px: 6 },
  { name: '2', rem: '0.5rem', px: 8 },
  { name: '3', rem: '0.75rem', px: 12 },
  { name: '4', rem: '1rem', px: 16 },
  { name: '5', rem: '1.25rem', px: 20 },
  { name: '6', rem: '1.5rem', px: 24 },
  { name: '8', rem: '2rem', px: 32 },
  { name: '10', rem: '2.5rem', px: 40 },
  { name: '12', rem: '3rem', px: 48 },
  { name: '16', rem: '4rem', px: 64 },
  { name: '20', rem: '5rem', px: 80 },
  { name: '24', rem: '6rem', px: 96 },
  { name: '32', rem: '8rem', px: 128 },
  { name: '40', rem: '10rem', px: 160 },
  { name: '48', rem: '12rem', px: 192 },
  { name: '56', rem: '14rem', px: 224 },
  { name: '64', rem: '16rem', px: 256 },
  { name: '80', rem: '20rem', px: 320 },
  { name: '96', rem: '24rem', px: 384 },
];

export const Scale = () => (
  <div className="space-y-6">
    <h3 className="text-lg font-medium">Unified Scale</h3>
    <p className="text-sm text-base-content/70">
      Shared by <code>w-*</code>, <code>h-*</code>, <code>p-*</code>, <code>m-*</code>, <code>gap-*</code>, <code>size-*</code>.
    </p>
    <div className="space-y-2">
      {scale.map(({ name, rem, px }) => (
        <div key={name} className="flex items-center gap-4">
          <code className="w-10 text-right text-sm font-mono">{name}</code>
          <div
            className="h-4 rounded bg-primary"
            style={{ width: rem }}
          />
          <span className="text-xs text-base-content/50">{rem} ({px}px)</span>
        </div>
      ))}
    </div>
  </div>
);

export const PaddingDemo = () => (
  <div className="space-y-6">
    <h3 className="text-lg font-medium">Padding</h3>
    <p className="text-sm text-base-content/70">Visual padding reference on containers.</p>
    <div className="flex flex-wrap gap-6">
      {['p-2', 'p-4', 'p-6', 'p-8', 'p-12'].map((cls) => (
        <div key={cls} className="flex flex-col items-center gap-2">
          <div className={`${cls} border border-dashed border-primary rounded-lg`}>
            <div className="w-16 h-16 rounded bg-primary opacity-20" />
          </div>
          <code className="text-xs">{cls}</code>
        </div>
      ))}
    </div>
  </div>
);

export const GapDemo = () => (
  <div className="space-y-6">
    <h3 className="text-lg font-medium">Gap</h3>
    <p className="text-sm text-base-content/70">Flex/grid gap spacing between elements.</p>
    <div className="space-y-4">
      {['gap-1', 'gap-2', 'gap-4', 'gap-6', 'gap-8'].map((cls) => (
        <div key={cls}>
          <code className="text-xs mb-1 block">{cls}</code>
          <div className={`flex ${cls}`}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded bg-primary opacity-60" />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const maxWidths = [
  { name: 'max-w-xs', value: '20rem (320px)' },
  { name: 'max-w-sm', value: '24rem (384px)' },
  { name: 'max-w-md', value: '28rem (448px)' },
  { name: 'max-w-lg', value: '32rem (512px)' },
  { name: 'max-w-xl', value: '36rem (576px)' },
  { name: 'max-w-2xl', value: '42rem (672px)' },
  { name: 'max-w-3xl', value: '48rem (768px)' },
  { name: 'max-w-4xl', value: '56rem (896px)' },
  { name: 'max-w-5xl', value: '64rem (1024px)' },
  { name: 'max-w-6xl', value: '72rem (1152px)' },
  { name: 'max-w-7xl', value: '80rem (1280px)' },
];

export const MaxWidths = () => (
  <div className="space-y-6">
    <h3 className="text-lg font-medium">Max Widths</h3>
    <p className="text-sm text-base-content/70">Container max-width utilities for layout constraints.</p>
    <div className="space-y-3">
      {maxWidths.map(({ name, value }) => (
        <div key={name} className="space-y-1">
          <div className="flex items-center gap-3">
            <code className="text-xs w-28">{name}</code>
            <span className="text-xs text-base-content/50">{value}</span>
          </div>
          <div className={`h-3 rounded bg-primary opacity-30 ${name}`} />
        </div>
      ))}
    </div>
  </div>
);
