import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const loadingVariants = cva(
  'inline-block animate-spin rounded-full border-2 border-current border-t-transparent',
  {
    variants: {
      size: {
        xs: 'w-4 h-4',
        sm: 'w-5 h-5',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16',
      },
      variant: {
        default: 'text-base-content',
        primary: 'text-primary',
        secondary: 'text-secondary',
        accent: 'text-accent',
        info: 'text-info',
        success: 'text-success',
        warning: 'text-warning',
        error: 'text-error',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

export interface LoadingProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof loadingVariants> {}

export const Loading = forwardRef<HTMLSpanElement, LoadingProps>(
  ({ className, size, variant, ...props }, ref) => (
    <span
      ref={ref}
      role="status"
      className={cn(loadingVariants({ size, variant }), className)}
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </span>
  )
);
Loading.displayName = 'Loading';

export { loadingVariants };
