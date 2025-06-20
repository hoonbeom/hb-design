import { default as React } from 'react';
export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    trigger: React.ReactNode;
    children: React.ReactNode;
    align?: 'left' | 'right';
}
export declare function Dropdown({ className, trigger, children, align, ref, ...props }: DropdownProps & {
    ref?: React.Ref<HTMLDivElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace Dropdown {
    var displayName: string;
}
export interface DropdownItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    onClick?: () => void;
}
export declare function DropdownItem({ className, children, onClick, ref, ...props }: DropdownItemProps & {
    ref?: React.Ref<HTMLDivElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace DropdownItem {
    var displayName: string;
}
//# sourceMappingURL=dropdown.d.ts.map