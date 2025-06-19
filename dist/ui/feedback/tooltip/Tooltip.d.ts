import { default as React } from 'react';
export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
    content: string;
    children: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    delay?: number;
}
export declare function Tooltip({ className, content, children, position, delay, ref, ...props }: TooltipProps & {
    ref?: React.Ref<HTMLDivElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace Tooltip {
    var displayName: string;
}
//# sourceMappingURL=Tooltip.d.ts.map