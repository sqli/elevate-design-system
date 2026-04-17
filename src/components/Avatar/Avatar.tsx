import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const avatarVariants = cva(
  'inline-flex items-center justify-center overflow-hidden bg-base-200 text-base-content font-medium select-none',
  {
    variants: {
      size: {
        xs: 'w-6 h-6 text-xs',
        sm: 'w-8 h-8 text-sm',
        md: 'w-12 h-12 text-base',
        lg: 'w-16 h-16 text-lg',
        xl: 'w-24 h-24 text-2xl',
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-md',
      },
    },
    defaultVariants: {
      size: 'md',
      shape: 'circle',
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size, shape, src, alt, fallback, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(avatarVariants({ size, shape }), className)}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt || ''} className="w-full h-full object-cover" />
      ) : (
        fallback || <span>{alt?.charAt(0)?.toUpperCase()}</span>
      )}
    </div>
  )
);
Avatar.displayName = 'Avatar';

export { avatarVariants };
