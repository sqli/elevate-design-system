import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const cardVariants = cva(
  'rounded-lg bg-panel-solid text-base-content overflow-hidden',
  {
    variants: {
      variant: {
        default: 'shadow-3',
        bordered: 'border border-border',
        ghost: '',
      },
      padding: {
        none: '',
        compact: '',
        normal: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'normal',
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  side?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, side, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        cardVariants({ variant, padding }),
        side && 'flex flex-row',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

export const CardBody = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 flex flex-col gap-2', className)} {...props} />
  )
);
CardBody.displayName = 'CardBody';

export const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2 ref={ref} className={cn('text-xl font-medium', className)} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

export const CardActions = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center gap-2 pt-2', className)} {...props} />
  )
);
CardActions.displayName = 'CardActions';

export const CardFigure = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <figure ref={ref} className={cn('overflow-hidden', className)} {...props} />
  )
);
CardFigure.displayName = 'CardFigure';

export { cardVariants };
