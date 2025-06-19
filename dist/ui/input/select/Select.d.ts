import { default as React } from 'react';
export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    helperText?: string;
    options: SelectOption[];
    placeholder?: string;
}
export declare function Select({ className, label, error, helperText, options, placeholder, id, ref, ...props }: SelectProps & {
    ref?: React.Ref<HTMLSelectElement>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace Select {
    var displayName: string;
}
//# sourceMappingURL=Select.d.ts.map