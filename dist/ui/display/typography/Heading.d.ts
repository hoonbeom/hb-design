import { default as React } from 'react';
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
}
export declare function Heading({ className, level, children, ref, ...props }: HeadingProps & {
    ref?: React.Ref<HTMLHeadingElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace Heading {
    var displayName: string;
}
//# sourceMappingURL=Heading.d.ts.map