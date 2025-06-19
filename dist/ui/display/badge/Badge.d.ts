import { default as React } from 'react';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    children: React.ReactNode;
}
export declare function Badge({ className, variant, children, ref, ...props }: BadgeProps & {
    ref?: React.Ref<HTMLSpanElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace Badge {
    var displayName: string;
}
//# sourceMappingURL=Badge.d.ts.map