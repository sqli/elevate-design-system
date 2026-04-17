import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

/**
 * Inline SVG-based RadialProgress component for story demonstrations.
 * No dedicated component exists in the design system; this uses a simple
 * SVG circle approach.
 */
interface RadialProgressProps {
  value: number;
  size?: number;
  thickness?: number;
  className?: string;
  children?: React.ReactNode;
}

const RadialProgress = ({
  value,
  size = 80,
  thickness = 6,
  className = '',
  children,
}: RadialProgressProps) => {
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(100, Math.max(0, value)) / 100) * circumference;

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={thickness}
          className="opacity-20"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={thickness}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
      </svg>
      <span className="absolute text-sm font-medium">
        {children ?? `${value}%`}
      </span>
    </div>
  );
};

const meta: Meta = {
  title: 'Components/Feedback/Radial Progress',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Radial Progress** indicator using inline SVG circles.

## Usage
\`\`\`tsx
// This is a story-only implementation using SVG.
// For production use, create a dedicated component.
<RadialProgress value={70} size={80} thickness={6} />
\`\`\`

## Props
- \`value\` - Progress value (0-100)
- \`size\` - Diameter in pixels (default: 80)
- \`thickness\` - Stroke width in pixels (default: 6)
        `,
      },
    },
  },
};

export default meta;

export const Default = () => (
  <RadialProgress value={70} />
);

export const Values = () => (
  <div className="flex gap-4">
    <RadialProgress value={0} />
    <RadialProgress value={20} />
    <RadialProgress value={60} />
    <RadialProgress value={80} />
    <RadialProgress value={100} />
  </div>
);

export const Colors = () => (
  <div className="flex flex-wrap gap-4">
    <RadialProgress value={70} className="text-primary" />
    <RadialProgress value={70} className="text-secondary" />
    <RadialProgress value={70} className="text-accent" />
    <RadialProgress value={70} className="text-info" />
    <RadialProgress value={70} className="text-success" />
    <RadialProgress value={70} className="text-warning" />
    <RadialProgress value={70} className="text-error" />
  </div>
);
Colors.storyName = 'All Colors';

export const CustomSize = () => (
  <div className="flex items-center gap-4">
    <RadialProgress value={70} size={64} />
    <RadialProgress value={70} size={96} />
    <RadialProgress value={70} size={128} />
    <RadialProgress value={70} size={192} />
  </div>
);
CustomSize.storyName = 'Custom Sizes';

export const CustomThickness = () => (
  <div className="flex items-center gap-4">
    <RadialProgress value={70} thickness={2} />
    <RadialProgress value={70} thickness={4} />
    <RadialProgress value={70} thickness={8} />
    <RadialProgress value={70} thickness={12} />
  </div>
);
CustomThickness.storyName = 'Custom Thickness';

export const WithBackground = () => (
  <div className="flex gap-4">
    <div className="rounded-full bg-primary p-2">
      <RadialProgress value={70} className="text-primary-content" />
    </div>
    <div className="rounded-full bg-secondary p-2">
      <RadialProgress value={80} className="text-secondary-content" />
    </div>
  </div>
);
WithBackground.storyName = 'With Background';

export const DarkMode = () => (
  <DarkModeWrapper>
    <h3 className="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    <div className="flex gap-4">
      <RadialProgress value={70} className="text-primary" />
      <RadialProgress value={80} className="text-secondary" />
      <RadialProgress value={90} />
    </div>
  </DarkModeWrapper>
);
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = darkModeParameters;
