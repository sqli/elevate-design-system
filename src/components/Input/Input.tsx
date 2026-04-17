import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const inputVariants = cva(
  'flex w-full rounded-md border bg-transparent text-base-content transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-base-content/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-border',
        ghost: 'border-transparent hover:bg-base-200',
        error: 'border-error focus-visible:ring-error',
      },
      inputSize: {
        xs: 'h-6 px-2 text-xs',
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, type, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(inputVariants({ variant, inputSize }), className)}
      {...props}
    />
  )
);
Input.displayName = 'Input';

export { inputVariants };
