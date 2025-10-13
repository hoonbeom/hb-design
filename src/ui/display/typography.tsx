import { Children, Fragment, isValidElement, type PropsWithChildren } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/shared/lib/util';

import { typography } from '../lib/variants';

export const Typography = ({
    children,
    variant,
    asChild,
    className
}: PropsWithChildren<{ variant: keyof typeof typography; asChild?: boolean; className?: string }>) => {
    const Comp = asChild ? Slot : 'div';

    if (asChild) {
        const childrenArray = Children.toArray(children);
        const child = childrenArray[0];

        if (childrenArray.length !== 1 || !isValidElement(child) || child.type === Fragment) {
            console.error('Typography with asChild prop must have exactly one child element');
            return null;
        }
    }

    return <Comp className={cn(typography[variant], className)}>{children}</Comp>;
};
