import { cn } from '@/shared/lib/util';

export const Separator = ({ className }: { className?: string }) => {
    return <div className={cn('h-px bg-gray-200', className)}></div>;
};
