import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = 'horizontal', children, ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      className={cn(
        'flex items-center gap-4 text-sm text-base-content/50',
        orientation === 'horizontal'
          ? 'flex-row before:flex-1 before:h-px before:bg-border after:flex-1 after:h-px after:bg-border'
          : 'flex-col h-full before:flex-1 before:w-px before:bg-border after:flex-1 after:w-px after:bg-border',
        !children && orientation === 'horizontal' && 'before:flex-1 after:hidden h-px bg-border',
        !children && orientation === 'vertical' && 'before:flex-1 after:hidden w-px bg-border',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
Divider.displayName = 'Divider';
