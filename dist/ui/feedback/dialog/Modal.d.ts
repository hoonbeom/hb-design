import { default as React } from 'react';
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
export declare function Modal({ className, isOpen, onClose, children, ref, ...props }: ModalProps & {
    ref?: React.Ref<HTMLDivElement>;
}): import("react/jsx-runtime").JSX.Element | null;
export declare namespace Modal {
    var displayName: string;
}
//# sourceMappingURL=Modal.d.ts.map