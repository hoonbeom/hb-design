import React from 'react';
import { cn } from '../../lib/utils';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

const headingStyles = {
  1: 'text-4xl font-bold tracking-tight',
  2: 'text-3xl font-bold tracking-tight',
  3: 'text-2xl font-semibold tracking-tight',
  4: 'text-xl font-semibold',
  5: 'text-lg font-medium',
  6: 'text-base font-medium',
};

export function Heading({
  className,
  level = 1,
  children,
  ref,
  ...props
}: HeadingProps & { ref?: React.Ref<HTMLHeadingElement> }) {
  const baseProps = {
    ref,
    className: cn(headingStyles[level], className),
    ...props,
  };

  switch (level) {
    case 1:
      return <h1 {...baseProps}>{children}</h1>;
    case 2:
      return <h2 {...baseProps}>{children}</h2>;
    case 3:
      return <h3 {...baseProps}>{children}</h3>;
    case 4:
      return <h4 {...baseProps}>{children}</h4>;
    case 5:
      return <h5 {...baseProps}>{children}</h5>;
    case 6:
      return <h6 {...baseProps}>{children}</h6>;
    default:
      return <h1 {...baseProps}>{children}</h1>;
  }
}

Heading.displayName = 'Heading'; 