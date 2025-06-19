import React from 'react';
import { cn } from '../../../lib/utils';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'body' | 'caption' | 'small' | 'large';
  children: React.ReactNode;
}

const textVariants = {
  body: 'text-base leading-relaxed',
  caption: 'text-sm text-gray-600',
  small: 'text-sm',
  large: 'text-lg leading-relaxed',
};

export function Text({
  className,
  variant = 'body',
  children,
  ref,
  ...props
}: TextProps & { ref?: React.Ref<HTMLParagraphElement> }) {
  return (
    <p ref={ref} className={cn(textVariants[variant], className)} {...props}>
      {children}
    </p>
  );
}

Text.displayName = 'Text';
