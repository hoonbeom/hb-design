import React, { useState } from 'react';
import { cn } from '../../../lib/utils';

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

const tooltipPositions = {
  top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
};

export function Tooltip({
  className,
  content,
  children,
  position = 'top',
  delay = 200,
  ref,
  ...props
}: TooltipProps & { ref?: React.Ref<HTMLDivElement> }) {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    const id = setTimeout(() => setIsVisible(true), delay);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(false);
  };

  return (
    <div
      ref={ref}
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      {...props}
    >
      {children}
      {isVisible && (
        <div
          className={cn(
            'absolute z-50 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-sm text-white shadow-lg',
            tooltipPositions[position],
            className
          )}
          role="tooltip"
        >
          {content}
          <div
            className={cn(
              'absolute h-2 w-2 rotate-45 transform bg-gray-900',
              position === 'top' && 'left-1/2 top-full -mt-1 -translate-x-1/2',
              position === 'bottom' &&
                'bottom-full left-1/2 -mb-1 -translate-x-1/2',
              position === 'left' && 'left-full top-1/2 -ml-1 -translate-y-1/2',
              position === 'right' &&
                'right-full top-1/2 -mr-1 -translate-y-1/2'
            )}
          />
        </div>
      )}
    </div>
  );
}

Tooltip.displayName = 'Tooltip';
