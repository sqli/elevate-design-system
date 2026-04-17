import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-content hover:bg-primary-hover',
        secondary: 'bg-secondary text-secondary-content hover:opacity-90',
        accent: 'bg-accent text-accent-content hover:opacity-90',
        ghost: 'hover:bg-base-200 text-base-content',
        outline: 'border border-border bg-transparent text-base-content hover:bg-base-200',
        link: 'text-primary underline-offset-4 hover:underline bg-transparent',
        error: 'bg-error text-error-content hover:opacity-90',
        success: 'bg-success text-success-content hover:opacity-90',
        warning: 'bg-warning text-warning-content hover:opacity-90',
        info: 'bg-info text-info-content hover:opacity-90',
      },
      size: {
        xs: 'h-6 px-2 text-xs gap-1 rounded-sm',
        sm: 'h-8 px-3 text-sm gap-1.5 rounded-sm',
        md: 'h-10 px-4 text-sm gap-2 rounded-md',
        lg: 'h-12 px-6 text-base gap-2 rounded-md',
      },
      block: {
        true: 'w-full',
      },
      circle: {
        true: 'rounded-full',
      },
      square: {
        true: 'aspect-square p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, block, circle, square, loading, children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, block, circle, square }), className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {children}
    </button>
  )
);
Button.displayName = 'Button';

export { buttonVariants };
