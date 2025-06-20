import { default as React } from 'react';
export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    variant?: 'body' | 'caption' | 'small' | 'large';
    children: React.ReactNode;
}
export declare function Text({ className, variant, children, ref, ...props }: TextProps & {
    ref?: React.Ref<HTMLParagraphElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace Text {
    var displayName: string;
}
//# sourceMappingURL=text.d.ts.map