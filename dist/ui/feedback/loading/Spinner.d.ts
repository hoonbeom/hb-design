import { default as React } from 'react';
export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'white' | 'gray';
}
export declare function Spinner({ className, size, color, ref, ...props }: SpinnerProps & {
    ref?: React.Ref<HTMLDivElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace Spinner {
    var displayName: string;
}
//# sourceMappingURL=Spinner.d.ts.map