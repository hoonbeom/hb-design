import { default as React } from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}
export declare function Input({ className, label, error, helperText, id, ref, ...props }: InputProps & {
    ref?: React.Ref<HTMLInputElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace Input {
    var displayName: string;
}
//# sourceMappingURL=input.d.ts.map