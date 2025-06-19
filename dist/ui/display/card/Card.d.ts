import { default as React } from 'react';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare function Card({ className, children, ref, ...props }: CardProps & {
    ref?: React.Ref<HTMLDivElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace Card {
    var displayName: string;
}
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare function CardHeader({ className, children, ref, ...props }: CardHeaderProps & {
    ref?: React.Ref<HTMLDivElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace CardHeader {
    var displayName: string;
}
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}
export declare function CardTitle({ className, children, ref, ...props }: CardTitleProps & {
    ref?: React.Ref<HTMLHeadingElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace CardTitle {
    var displayName: string;
}
export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}
export declare function CardDescription({ className, children, ref, ...props }: CardDescriptionProps & {
    ref?: React.Ref<HTMLParagraphElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace CardDescription {
    var displayName: string;
}
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare function CardContent({ className, children, ref, ...props }: CardContentProps & {
    ref?: React.Ref<HTMLDivElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace CardContent {
    var displayName: string;
}
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare function CardFooter({ className, children, ref, ...props }: CardFooterProps & {
    ref?: React.Ref<HTMLDivElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace CardFooter {
    var displayName: string;
}
//# sourceMappingURL=Card.d.ts.map