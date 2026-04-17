import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const textareaVariants = cva(
  'flex min-h-[80px] w-full rounded-md border bg-transparent px-3 py-2 text-sm text-base-content transition-colors placeholder:text-base-content/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-border',
        ghost: 'border-transparent hover:bg-base-200',
        error: 'border-error focus-visible:ring-error',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(textareaVariants({ variant }), className)}
      {...props}
    />
  )
);
Textarea.displayName = 'Textarea';

export { textareaVariants };
