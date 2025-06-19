import React from 'react';
import { cn } from '../../../lib/utils';

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children?: React.ReactNode;
}

const iconSizes = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-12 w-12',
};

export function Icon({
  className,
  name,
  size = 'md',
  children,
  ref,
  ...props
}: IconProps & { ref?: React.Ref<SVGSVGElement> }) {
  return (
    <svg
      ref={ref}
      className={cn('inline-block', iconSizes[size], className)}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

Icon.displayName = 'Icon';
