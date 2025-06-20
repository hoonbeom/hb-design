import { default as React } from 'react';
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'info' | 'success' | 'warning' | 'error';
    children: React.ReactNode;
}
export declare function Alert({ className, variant, children, ref, ...props }: AlertProps & {
    ref?: React.Ref<HTMLDivElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace Alert {
    var displayName: string;
}
//# sourceMappingURL=alert.d.ts.map