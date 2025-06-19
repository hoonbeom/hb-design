import { default as React } from 'react';
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children?: React.ReactNode;
}
export declare function Avatar({ className, src, alt, size, children, ref, ...props }: AvatarProps & {
    ref?: React.Ref<HTMLDivElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace Avatar {
    var displayName: string;
}
//# sourceMappingURL=Avatar.d.ts.map