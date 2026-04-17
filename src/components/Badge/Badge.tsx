import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-base-200 text-base-content',
        primary: 'bg-primary text-primary-content',
        secondary: 'bg-secondary text-secondary-content',
        accent: 'bg-accent text-accent-content',
        info: 'bg-info text-info-content',
        success: 'bg-success text-success-content',
        warning: 'bg-warning text-warning-content',
        error: 'bg-error text-error-content',
        outline: 'border border-current bg-transparent',
        ghost: 'bg-transparent text-base-content',
      },
      size: {
        xs: 'text-xs px-1.5 py-0.5 rounded-sm',
        sm: 'text-xs px-2 py-0.5 rounded-sm',
        md: 'text-sm px-2.5 py-0.5 rounded-md',
        lg: 'text-sm px-3 py-1 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Badge.displayName = 'Badge';

export { badgeVariants };
