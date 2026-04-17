import React, { useState } from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper, darkModeParameters } from '../utils/story-helpers';

const meta: Meta = {
  title: 'Foundations/Animations',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Animations & Transitions

The Elevate Design System uses **Tailwind CSS 4 animation and transition utilities** for consistent motion across components.

### Transition Utilities

| Utility | Properties |
|---------|-----------|
| \`transition\` | color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter |
| \`transition-colors\` | color, background-color, border-color |
| \`transition-opacity\` | opacity |
| \`transition-shadow\` | box-shadow |
| \`transition-transform\` | transform |
| \`transition-all\` | all properties |

### Duration

| Utility | Duration |
|---------|----------|
| \`duration-75\` | 75ms |
| \`duration-100\` | 100ms |
| \`duration-150\` | 150ms (default) |
| \`duration-200\` | 200ms |
| \`duration-300\` | 300ms |
| \`duration-500\` | 500ms |
| \`duration-700\` | 700ms |
| \`duration-1000\` | 1000ms |

### Easing

| Utility | Curve |
|---------|-------|
| \`ease-linear\` | linear |
| \`ease-in\` | cubic-bezier(0.4, 0, 1, 1) |
| \`ease-out\` | cubic-bezier(0, 0, 0.2, 1) |
| \`ease-in-out\` | cubic-bezier(0.4, 0, 0.2, 1) |

### Built-in Animations

| Utility | Effect |
|---------|--------|
| \`animate-spin\` | Continuous 360deg rotation |
| \`animate-ping\` | Pulse scale + fade (notification badge) |
| \`animate-pulse\` | Gentle opacity pulse (skeleton loaders) |
| \`animate-bounce\` | Bounce effect |

### SQLI Recommendations

- **Buttons/links**: \`transition-colors duration-150\`
- **Cards/panels**: \`transition-shadow duration-200\`
- **Theme switching**: \`transition-colors duration-200\`
- **Modals/dialogs**: \`duration-200 ease-out\` (open), \`duration-150 ease-in\` (close)
- **Reduced motion**: Always wrap decorative animations with \`motion-safe:\` or check \`prefers-reduced-motion\`
        `,
      },
    },
  },
};

export default meta;

// =============================================================================
// Data (module-level constants)
// =============================================================================

const transitions = [
  { name: 'transition-colors', classes: 'transition-colors duration-200', desc: 'Color transitions' },
  { name: 'transition-opacity', classes: 'transition-opacity duration-200', desc: 'Opacity transitions' },
  { name: 'transition-shadow', classes: 'transition-shadow duration-200', desc: 'Shadow transitions' },
  { name: 'transition-transform', classes: 'transition-transform duration-200', desc: 'Transform transitions' },
  { name: 'transition-all', classes: 'transition-all duration-200', desc: 'All properties' },
];

const durations = [
  { name: '75', ms: 75 },
  { name: '100', ms: 100 },
  { name: '150', ms: 150 },
  { name: '200', ms: 200 },
  { name: '300', ms: 300 },
  { name: '500', ms: 500 },
  { name: '700', ms: 700 },
  { name: '1000', ms: 1000 },
];

const easings = [
  { name: 'ease-linear', css: 'linear' },
  { name: 'ease-in', css: 'cubic-bezier(0.4, 0, 1, 1)' },
  { name: 'ease-out', css: 'cubic-bezier(0, 0, 0.2, 1)' },
  { name: 'ease-in-out', css: 'cubic-bezier(0.4, 0, 0.2, 1)' },
];

// =============================================================================
// Shared sub-component
// =============================================================================

const AnimationShowcase: React.FC<{ showLabels?: boolean }> = ({ showLabels = true }) => (
  <div className="flex flex-wrap gap-12">
    <div className="flex flex-col items-center gap-3">
      <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      <code className="text-xs">animate-spin</code>
      {showLabels && <span className="text-[10px] text-base-content/50">Loading spinners</span>}
    </div>

    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <div className="w-4 h-4 rounded-full bg-error" />
        <div className="absolute inset-0 w-4 h-4 rounded-full bg-error animate-ping" />
      </div>
      <code className="text-xs">animate-ping</code>
      {showLabels && <span className="text-[10px] text-base-content/50">Notification badges</span>}
    </div>

    <div className="flex flex-col items-center gap-3">
      <div className="w-32 h-4 rounded bg-base-300 animate-pulse" />
      <code className="text-xs">animate-pulse</code>
      {showLabels && <span className="text-[10px] text-base-content/50">Skeleton loaders</span>}
    </div>

    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 rounded bg-primary animate-bounce" />
      <code className="text-xs">animate-bounce</code>
      {showLabels && <span className="text-[10px] text-base-content/50">Scroll indicators</span>}
    </div>
  </div>
);

// =============================================================================
// Stories
// =============================================================================

export const Transitions = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Transition Utilities</h3>
      <p className="text-sm text-base-content/70">Hover each box to see the transition in action.</p>
      <div className="flex flex-wrap gap-6">
        {transitions.map(({ name, classes, desc }) => (
          <div key={name} className="flex flex-col items-center gap-2 w-36">
            <div
              className={`w-24 h-24 rounded-lg cursor-pointer ${classes} ${
                hovered === name
                  ? 'bg-primary shadow-lg scale-110 opacity-100'
                  : 'bg-base-300 shadow-none scale-100 opacity-70'
              }`}
              onMouseEnter={() => setHovered(name)}
              onMouseLeave={() => setHovered(null)}
            />
            <code className="text-[10px] text-center">{name}</code>
            <span className="text-[10px] text-base-content/50 text-center">{desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Durations = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Duration Scale</h3>
      <p className="text-sm text-base-content/70">Click the button to toggle all bars and compare durations.</p>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => setActive((v) => !v)}
      >
        Toggle
      </button>
      <div className="space-y-3">
        {durations.map(({ name, ms }) => (
          <div key={name} className="flex items-center gap-4">
            <code className="w-28 text-xs text-right">duration-{name}</code>
            <div
              className="h-6 rounded bg-primary transition-all ease-in-out"
              style={{
                width: active ? '300px' : '40px',
                transitionDuration: `${ms}ms`,
              }}
            />
            <span className="text-xs text-base-content/50">{ms}ms</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const EasingCurves = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Easing Curves</h3>
      <p className="text-sm text-base-content/70">Click to compare easing functions at 500ms duration.</p>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => setActive((v) => !v)}
      >
        Toggle
      </button>
      <div className="space-y-3">
        {easings.map(({ name, css }) => (
          <div key={name} className="flex items-center gap-4">
            <code className="w-28 text-xs text-right">{name}</code>
            <div className="w-[320px] h-8 bg-base-200 rounded-lg relative">
              <div
                className="w-8 h-8 rounded-lg bg-primary absolute top-0"
                style={{
                  left: active ? 'calc(100% - 2rem)' : '0',
                  transition: `left 500ms ${css}`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const BuiltInAnimations = () => (
  <div className="space-y-6">
    <h3 className="text-lg font-medium">Built-in Animations</h3>
    <p className="text-sm text-base-content/70">Tailwind's built-in keyframe animations.</p>
    <AnimationShowcase />
  </div>
);

export const ReducedMotion = () => (
  <div className="space-y-6">
    <h3 className="text-lg font-medium">Reduced Motion</h3>
    <p className="text-sm text-base-content/70">
      Always respect <code>prefers-reduced-motion</code>. Use <code>motion-safe:</code> prefix for decorative animations.
    </p>

    <div className="p-4 rounded-lg bg-base-200 space-y-3">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-primary motion-safe:animate-bounce" />
        <div>
          <code className="text-xs block">motion-safe:animate-bounce</code>
          <span className="text-[10px] text-base-content/50">Animates only when user has no motion preference</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-primary motion-reduce:animate-none animate-spin" />
        <div>
          <code className="text-xs block">motion-reduce:animate-none</code>
          <span className="text-[10px] text-base-content/50">Stops animation when reduced motion is preferred</span>
        </div>
      </div>
    </div>

    <pre className="text-xs p-4 rounded-lg bg-base-200 overflow-x-auto"><code>{`// In CSS: check prefers-reduced-motion
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    animation: none;
    transition: none;
  }
}

// In Tailwind: use motion-safe/motion-reduce
<div className="motion-safe:animate-bounce" />
<div className="motion-reduce:transition-none" />`}</code></pre>
  </div>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium">Animations in Dark Mode</h3>
    <AnimationShowcase showLabels={false} />
  </DarkModeWrapper>
);
DarkMode.parameters = darkModeParameters;
