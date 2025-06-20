import { default as default_2 } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';

export declare function Dropdown({ className, trigger, children, align, ref, ...props }: DropdownProps & {
    ref?: default_2.Ref<HTMLDivElement>;
}): JSX_2.Element;

export declare namespace Dropdown {
    var displayName: string;
}

export declare function DropdownItem({ className, children, onClick, ref, ...props }: DropdownItemProps & {
    ref?: default_2.Ref<HTMLDivElement>;
}): JSX_2.Element;

export declare namespace DropdownItem {
    var displayName: string;
}

export declare interface DropdownItemProps extends default_2.HTMLAttributes<HTMLDivElement> {
    children: default_2.ReactNode;
    onClick?: () => void;
}

export declare interface DropdownProps extends default_2.HTMLAttributes<HTMLDivElement> {
    trigger: default_2.ReactNode;
    children: default_2.ReactNode;
    align?: 'left' | 'right';
}

export declare function Tab({ className, children, isActive, onSelect, ref, ...props }: TabProps & {
    ref?: default_2.Ref<HTMLButtonElement>;
}): JSX_2.Element;

export declare namespace Tab {
    var displayName: string;
}

export declare function TabList({ className, children, ref, ...props }: TabListProps & {
    ref?: default_2.Ref<HTMLDivElement>;
}): JSX_2.Element;

export declare namespace TabList {
    var displayName: string;
}

export declare interface TabListProps extends default_2.HTMLAttributes<HTMLDivElement> {
    children: default_2.ReactNode;
}

export declare function TabPanel({ className, children, isActive, ref, ...props }: TabPanelProps & {
    ref?: default_2.Ref<HTMLDivElement>;
}): JSX_2.Element | null;

export declare namespace TabPanel {
    var displayName: string;
}

export declare interface TabPanelProps extends default_2.HTMLAttributes<HTMLDivElement> {
    children: default_2.ReactNode;
    isActive?: boolean;
}

export declare function TabPanels({ className, children, ref, ...props }: TabPanelsProps & {
    ref?: default_2.Ref<HTMLDivElement>;
}): JSX_2.Element;

export declare namespace TabPanels {
    var displayName: string;
}

export declare interface TabPanelsProps extends default_2.HTMLAttributes<HTMLDivElement> {
    children: default_2.ReactNode;
}

export declare interface TabProps extends default_2.HTMLAttributes<HTMLButtonElement> {
    children: default_2.ReactNode;
    isActive?: boolean;
    onSelect?: () => void;
}

export declare function Tabs({ className, children, defaultIndex, ref, ...props }: TabsProps & {
    ref?: default_2.Ref<HTMLDivElement>;
}): JSX_2.Element;

export declare namespace Tabs {
    var displayName: string;
}

export declare interface TabsProps extends default_2.HTMLAttributes<HTMLDivElement> {
    children: default_2.ReactNode;
    defaultIndex?: number;
}

export { }
