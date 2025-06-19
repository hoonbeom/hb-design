import React, { useState } from 'react';
import { cn } from '../../../lib/utils';

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  defaultIndex?: number;
}

export function Tabs({
  className,
  children,
  defaultIndex = 0,
  ref,
  ...props
}: TabsProps & { ref?: React.Ref<HTMLDivElement> }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div ref={ref} className={cn('w-full', className)} {...props}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            isActive: index === activeIndex,
            onSelect: () => setActiveIndex(index),
          });
        }
        return child;
      })}
    </div>
  );
}

Tabs.displayName = 'Tabs';

export interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function TabList({
  className,
  children,
  ref,
  ...props
}: TabListProps & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div
      ref={ref}
      className={cn('flex border-b border-gray-200', className)}
      role="tablist"
      {...props}
    >
      {children}
    </div>
  );
}

TabList.displayName = 'TabList';

export interface TabProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isActive?: boolean;
  onSelect?: () => void;
}

export function Tab({
  className,
  children,
  isActive = false,
  onSelect,
  ref,
  ...props
}: TabProps & { ref?: React.Ref<HTMLButtonElement> }) {
  return (
    <button
      ref={ref}
      className={cn(
        'border-b-2 px-4 py-2 text-sm font-medium transition-colors',
        isActive
          ? 'border-primary-500 text-primary-600'
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
        className
      )}
      onClick={onSelect}
      role="tab"
      aria-selected={isActive}
      {...props}
    >
      {children}
    </button>
  );
}

Tab.displayName = 'Tab';

export interface TabPanelsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function TabPanels({
  className,
  children,
  ref,
  ...props
}: TabPanelsProps & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={ref} className={cn('mt-4', className)} {...props}>
      {children}
    </div>
  );
}

TabPanels.displayName = 'TabPanels';

export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isActive?: boolean;
}

export function TabPanel({
  className,
  children,
  isActive = false,
  ref,
  ...props
}: TabPanelProps & { ref?: React.Ref<HTMLDivElement> }) {
  if (!isActive) return null;

  return (
    <div
      ref={ref}
      className={cn('outline-none', className)}
      role="tabpanel"
      {...props}
    >
      {children}
    </div>
  );
}

TabPanel.displayName = 'TabPanel';
