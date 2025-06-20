import { ClassValue } from 'clsx';
import { default as default_2 } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';

export declare function Alert({ className, variant, children, ref, ...props }: AlertProps & {
    ref?: default_2.Ref<HTMLDivElement>;
}): JSX_2.Element;

export declare namespace Alert {
    var displayName: string;
}

declare interface AlertProps extends default_2.HTMLAttributes<HTMLDivElement> {
    variant?: 'info' | 'success' | 'warning' | 'error';
    children: default_2.ReactNode;
}

export declare function Avatar({ className, src, alt, size, children, ref, ...props }: AvatarProps & {
    ref?: default_2.Ref<HTMLDivElement>;
}): JSX_2.Element;

export declare namespace Avatar {
    var displayName: string;
}

declare interface AvatarProps extends default_2.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children?: default_2.ReactNode;
}

export declare function Badge({ className, variant, children, ref, ...props }: BadgeProps & {
    ref?: default_2.Ref<HTMLSpanElement>;
}): JSX_2.Element;

export declare namespace Badge {
    var displayName: string;
}

declare interface BadgeProps extends default_2.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    children: default_2.ReactNode;
}

export declare function Button({ className, variant, size, loading, disabled, children, ref, ...props }: ButtonProps & {
    ref?: default_2.Ref<HTMLButtonElement>;
}): JSX_2.Element;

export declare namespace Button {
    var displayName: string;
}

declare interface ButtonProps extends default_2.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
    children: default_2.ReactNode;
}

export declare function Card({ className, children, ref, ...props }: CardProps & {
    ref?: default_2.Ref<HTMLDivElement>;
}): JSX_2.Element;

export declare namespace Card {
    var displayName: string;
}

declare interface CardProps extends default_2.HTMLAttributes<HTMLDivElement> {
    children: default_2.ReactNode;
}

export declare function cn(...inputs: ClassValue[]): string;

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

declare interface DropdownItemProps extends default_2.HTMLAttributes<HTMLDivElement> {
    children: default_2.ReactNode;
    onClick?: () => void;
}

declare interface DropdownProps extends default_2.HTMLAttributes<HTMLDivElement> {
    trigger: default_2.ReactNode;
    children: default_2.ReactNode;
    align?: 'left' | 'right';
}

export declare function Heading({ className, level, children, ref, ...props }: HeadingProps & {
    ref?: default_2.Ref<HTMLHeadingElement>;
}): JSX_2.Element;

export declare namespace Heading {
    var displayName: string;
}

declare interface HeadingProps extends default_2.HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: default_2.ReactNode;
}

export declare function Icon({ className, name, size, children, ref, ...props }: IconProps & {
    ref?: default_2.Ref<SVGSVGElement>;
}): JSX_2.Element;

export declare namespace Icon {
    var displayName: string;
}

declare interface IconProps extends default_2.SVGAttributes<SVGSVGElement> {
    name: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children?: default_2.ReactNode;
}

export declare function Input({ className, label, error, helperText, id, ref, ...props }: InputProps & {
    ref?: default_2.Ref<HTMLInputElement>;
}): JSX_2.Element;

export declare namespace Input {
    var displayName: string;
}

declare interface InputProps extends default_2.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

export declare function Modal({ className, isOpen, onClose, children, ref, ...props }: ModalProps & {
    ref?: default_2.Ref<HTMLDivElement>;
}): JSX_2.Element | null;

export declare namespace Modal {
    var displayName: string;
}

declare interface ModalProps extends default_2.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    children: default_2.ReactNode;
}

export declare function Select({ className, label, error, helperText, options, placeholder, id, ref, ...props }: SelectProps & {
    ref?: default_2.Ref<HTMLSelectElement>;
}): JSX_2.Element;

export declare namespace Select {
    var displayName: string;
}

declare interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

declare interface SelectProps extends default_2.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    helperText?: string;
    options: SelectOption[];
    placeholder?: string;
}

export declare function Spinner({ className, size, color, ref, ...props }: SpinnerProps & {
    ref?: default_2.Ref<HTMLDivElement>;
}): JSX_2.Element;

export declare namespace Spinner {
    var displayName: string;
}

declare interface SpinnerProps extends default_2.HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'white' | 'gray';
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

declare interface TabListProps extends default_2.HTMLAttributes<HTMLDivElement> {
    children: default_2.ReactNode;
}

export declare function TabPanel({ className, children, isActive, ref, ...props }: TabPanelProps & {
    ref?: default_2.Ref<HTMLDivElement>;
}): JSX_2.Element | null;

export declare namespace TabPanel {
    var displayName: string;
}

declare interface TabPanelProps extends default_2.HTMLAttributes<HTMLDivElement> {
    children: default_2.ReactNode;
    isActive?: boolean;
}

export declare function TabPanels({ className, children, ref, ...props }: TabPanelsProps & {
    ref?: default_2.Ref<HTMLDivElement>;
}): JSX_2.Element;

export declare namespace TabPanels {
    var displayName: string;
}

declare interface TabPanelsProps extends default_2.HTMLAttributes<HTMLDivElement> {
    children: default_2.ReactNode;
}

declare interface TabProps extends default_2.HTMLAttributes<HTMLButtonElement> {
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

declare interface TabsProps extends default_2.HTMLAttributes<HTMLDivElement> {
    children: default_2.ReactNode;
    defaultIndex?: number;
}

declare function Text_2({ className, variant, children, ref, ...props }: TextProps & {
    ref?: default_2.Ref<HTMLParagraphElement>;
}): JSX_2.Element;

declare namespace Text_2 {
    var displayName: string;
}
export { Text_2 as Text }

declare interface TextProps extends default_2.HTMLAttributes<HTMLParagraphElement> {
    variant?: 'body' | 'caption' | 'small' | 'large';
    children: default_2.ReactNode;
}

export declare function Tooltip({ className, content, children, position, delay, ref, ...props }: TooltipProps & {
    ref?: default_2.Ref<HTMLDivElement>;
}): JSX_2.Element;

export declare namespace Tooltip {
    var displayName: string;
}

declare interface TooltipProps extends default_2.HTMLAttributes<HTMLDivElement> {
    content: string;
    children: default_2.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    delay?: number;
}

export { }
