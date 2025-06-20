import { default as React } from 'react';
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    defaultIndex?: number;
}
export declare function Tabs({ className, children, defaultIndex, ref, ...props }: TabsProps & {
    ref?: React.Ref<HTMLDivElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace Tabs {
    var displayName: string;
}
export interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare function TabList({ className, children, ref, ...props }: TabListProps & {
    ref?: React.Ref<HTMLDivElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace TabList {
    var displayName: string;
}
export interface TabProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    isActive?: boolean;
    onSelect?: () => void;
}
export declare function Tab({ className, children, isActive, onSelect, ref, ...props }: TabProps & {
    ref?: React.Ref<HTMLButtonElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace Tab {
    var displayName: string;
}
export interface TabPanelsProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare function TabPanels({ className, children, ref, ...props }: TabPanelsProps & {
    ref?: React.Ref<HTMLDivElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace TabPanels {
    var displayName: string;
}
export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    isActive?: boolean;
}
export declare function TabPanel({ className, children, isActive, ref, ...props }: TabPanelProps & {
    ref?: React.Ref<HTMLDivElement>;
}): import("react/jsx-runtime").JSX.Element | null;
export declare namespace TabPanel {
    var displayName: string;
}
//# sourceMappingURL=tabs.d.ts.map