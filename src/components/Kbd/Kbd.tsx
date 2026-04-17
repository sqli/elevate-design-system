import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const kbdVariants = cva(
  'inline-flex items-center justify-center rounded-sm border border-border bg-base-200 font-mono text-base-content',
  {
    variants: {
      size: {
        xs: 'px-1 text-xs min-w-5 h-5',
        sm: 'px-1.5 text-xs min-w-6 h-6',
        md: 'px-2 text-sm min-w-7 h-7',
        lg: 'px-2.5 text-base min-w-8 h-8',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof kbdVariants> {}

export const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ className, size, ...props }, ref) => (
    <kbd
      ref={ref}
      className={cn(kbdVariants({ size }), className)}
      {...props}
    />
  )
);
Kbd.displayName = 'Kbd';

export { kbdVariants };
