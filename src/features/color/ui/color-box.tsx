import type { PropsWithChildren } from 'react';

import { cn } from '@/shared/lib/util';

export const ColorBox = ({ className, children }: PropsWithChildren<{ className?: string }>) => {
    return <div className={cn('flex aspect-square h-10 items-center justify-center rounded', className)}>{children}</div>;
};
