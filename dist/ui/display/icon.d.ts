import { default as React } from 'react';
export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
    name: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children?: React.ReactNode;
}
export declare function Icon({ className, name, size, children, ref, ...props }: IconProps & {
    ref?: React.Ref<SVGSVGElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace Icon {
    var displayName: string;
}
//# sourceMappingURL=icon.d.ts.map