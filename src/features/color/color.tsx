import { cn } from '@/shared/lib/util';

import { Typography } from '@/ui/display/typography';
import { typography } from '@/ui/lib/variants';

import { ColorBox } from './ui';

export const Color = () => {
    return (
        <>
            <Typography variant="display-100-B" className="text-primary-700 mb-5">
                Colors
            </Typography>
            <div className="flex flex-col gap-4 *:gap-4">
                <div className="flex items-center">
                    <Typography variant="subtitle-300-B" className="w-24">
                        Primary
                    </Typography>
                    <ColorBox className={cn('bg-primary-100', typography['body-300-B'])}>100</ColorBox>
                    <ColorBox className={cn('bg-primary-200', typography['body-300-B'])}>200</ColorBox>
                    <ColorBox className={cn('bg-primary-300', typography['body-300-B'])}>300</ColorBox>
                    <ColorBox className={cn('bg-primary-400', typography['body-300-B'])}>400</ColorBox>
                    <ColorBox className={cn('bg-primary-500', typography['body-300-B'])}>500</ColorBox>
                    <ColorBox className={cn('bg-primary-600', typography['body-300-B'])}>600</ColorBox>
                    <ColorBox className={cn('bg-primary-700 text-white', typography['body-300-B'])}>700</ColorBox>
                    <ColorBox className={cn('bg-primary-800 text-white', typography['body-300-B'])}>800</ColorBox>
                    <ColorBox className={cn('bg-primary-900 text-white', typography['body-300-B'])}>900</ColorBox>
                </div>
                <div className="flex items-center">
                    <Typography variant="subtitle-300-B" className="w-24">
                        Secondary
                    </Typography>
                    <ColorBox className={cn('bg-secondary-100', typography['body-300-B'])}>100</ColorBox>
                    <ColorBox className={cn('bg-secondary-200', typography['body-300-B'])}>200</ColorBox>
                    <ColorBox className={cn('bg-secondary-300', typography['body-300-B'])}>300</ColorBox>
                    <ColorBox className={cn('bg-secondary-400', typography['body-300-B'])}>400</ColorBox>
                    <ColorBox className={cn('bg-secondary-500', typography['body-300-B'])}>500</ColorBox>
                    <ColorBox className={cn('bg-secondary-600', typography['body-300-B'])}>600</ColorBox>
                    <ColorBox className={cn('bg-secondary-700 text-white', typography['body-300-B'])}>700</ColorBox>
                    <ColorBox className={cn('bg-secondary-800 text-white', typography['body-300-B'])}>800</ColorBox>
                    <ColorBox className={cn('bg-secondary-900 text-white', typography['body-300-B'])}>900</ColorBox>
                </div>
                <div className="flex items-center">
                    <Typography variant="subtitle-300-B" className="w-24">
                        Gray
                    </Typography>
                    <ColorBox className={cn('bg-gray-100', typography['body-300-B'])}>100</ColorBox>
                    <ColorBox className={cn('bg-gray-200', typography['body-300-B'])}>200</ColorBox>
                    <ColorBox className={cn('bg-gray-300', typography['body-300-B'])}>300</ColorBox>
                    <ColorBox className={cn('bg-gray-400', typography['body-300-B'])}>400</ColorBox>
                    <ColorBox className={cn('bg-gray-500', typography['body-300-B'])}>500</ColorBox>
                    <ColorBox className={cn('bg-gray-600', typography['body-300-B'])}>600</ColorBox>
                    <ColorBox className={cn('bg-gray-700 text-white', typography['body-300-B'])}>700</ColorBox>
                    <ColorBox className={cn('bg-gray-800 text-white', typography['body-300-B'])}>800</ColorBox>
                    <ColorBox className={cn('bg-gray-900 text-white', typography['body-300-B'])}>900</ColorBox>
                </div>
            </div>
        </>
    );
};
