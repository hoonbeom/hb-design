import type { PropsWithChildren } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/shared/lib/util';

import { typography } from '../lib/variants';

export const Typography = ({ children, variant, asChild }: PropsWithChildren<{ variant: keyof typeof typography; asChild?: boolean }>) => {
    const Comp = asChild ? Slot : 'div';
    return <Comp className={cn(typography[variant])}>{children}</Comp>;
};
