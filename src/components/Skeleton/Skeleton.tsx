import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'animate-pulse rounded-md bg-base-300',
        className
      )}
      {...props}
    />
  )
);
Skeleton.displayName = 'Skeleton';
