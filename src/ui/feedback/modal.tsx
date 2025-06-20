import React from 'react';
import { cn } from '../../lib/utils';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({
  className,
  isOpen,
  onClose,
  children,
  ref,
  ...props
}: ModalProps & { ref?: React.Ref<HTMLDivElement> }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div
        ref={ref}
        className={cn(
          'relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-large',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

Modal.displayName = 'Modal'; 