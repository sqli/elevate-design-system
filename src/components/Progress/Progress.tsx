import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const progressVariants = cva(
  'w-full overflow-hidden rounded-full bg-base-200',
  {
    variants: {
      size: {
        xs: 'h-1',
        sm: 'h-2',
        md: 'h-3',
        lg: 'h-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const progressBarVariants = cva(
  'h-full rounded-full transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-base-content',
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        accent: 'bg-accent',
        info: 'bg-info',
        success: 'bg-success',
        warning: 'bg-warning',
        error: 'bg-error',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface ProgressProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof progressVariants>,
    VariantProps<typeof progressBarVariants> {
  value?: number;
  max?: number;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, size, variant, value = 0, max = 100, ...props }, ref) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));
    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        className={cn(progressVariants({ size }), className)}
        {...props}
      >
        <div
          className={progressBarVariants({ variant })}
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  }
);
Progress.displayName = 'Progress';

export { progressVariants, progressBarVariants };
