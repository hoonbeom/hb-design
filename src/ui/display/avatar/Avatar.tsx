import React from 'react';
import { cn } from '../../../lib/utils';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children?: React.ReactNode;
}

const avatarSizes = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16',
};

export function Avatar({
  className,
  src,
  alt,
  size = 'md',
  children,
  ref,
  ...props
}: AvatarProps & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div
      ref={ref}
      className={cn(
        'relative flex shrink-0 overflow-hidden rounded-full',
        avatarSizes[size],
        className
      )}
      {...props}
    >
      {src ? (
        <img className="aspect-square h-full w-full" src={src} alt={alt} />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-100">
          {children || (
            <span className="text-sm font-medium text-gray-600">
              {alt?.charAt(0).toUpperCase() || 'U'}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

Avatar.displayName = 'Avatar';
