import { Separator } from '@/ui/display/separator';
import { Typography as HBTypography } from '@/ui/display/typography';

import { Display } from './ui';


export const Typography = () => {
    return (
        <>
            <HBTypography variant="display-100-B" className="text-primary-700 mt-10 mb-5">
                Typography
            </HBTypography>
            <div className="mb-4 flex basis-1/3 gap-x-4 [&>div]:basis-1/3">
                <Display variant="display-100-R" />
                <Display variant="display-100-M" />
                <Display variant="display-100-B" />
            </div>
            <div className="mb-4 flex basis-1/3 gap-x-4 [&>div]:basis-1/3">
                <Display variant="display-200-R" />
                <Display variant="display-200-M" />
                <Display variant="display-200-B" />
            </div>
            <div className="mb-4 flex basis-1/3 gap-x-4 [&>div]:basis-1/3">
                <Display variant="display-300-R" />
                <Display variant="display-300-M" />
                <Display variant="display-300-B" />
            </div>
            <div className="mb-4 flex basis-1/3 gap-x-4 [&>div]:basis-1/3">
                <Display variant="display-400-R" />
                <Display variant="display-400-M" />
                <Display variant="display-400-B" />
            </div>
            <div className="mb-4 flex basis-1/3 gap-x-4 [&>div]:basis-1/3">
                <Display variant="display-500-R" />
                <Display variant="display-500-M" />
                <Display variant="display-500-B" />
            </div>
            <div className="flex basis-1/3 gap-x-4 [&>div]:basis-1/3">
                <Display variant="display-600-R" />
                <Display variant="display-600-M" />
                <Display variant="display-600-B" />
            </div>
            <Separator className="my-7" />
            <div className="mb-4 flex basis-1/3 gap-x-4 [&>div]:basis-1/3">
                <Display variant="subtitle-100-R" />
                <Display variant="subtitle-100-M" />
                <Display variant="subtitle-100-B" />
            </div>
            <div className="mb-4 flex basis-1/3 gap-x-4 [&>div]:basis-1/3">
                <Display variant="subtitle-200-R" />
                <Display variant="subtitle-200-M" />
                <Display variant="subtitle-200-B" />
            </div>
            <div className="mb-4 flex basis-1/3 gap-x-4 [&>div]:basis-1/3">
                <Display variant="subtitle-300-R" />
                <Display variant="subtitle-300-M" />
                <Display variant="subtitle-300-B" />
            </div>
            <div className="mb-4 flex basis-1/3 gap-x-4 [&>div]:basis-1/3">
                <Display variant="subtitle-400-R" />
                <Display variant="subtitle-400-M" />
                <Display variant="subtitle-400-B" />
            </div>
            <div className="mb-4 flex basis-1/3 gap-x-4 [&>div]:basis-1/3">
                <Display variant="subtitle-500-R" />
                <Display variant="subtitle-500-M" />
                <Display variant="subtitle-500-B" />
            </div>
            <Separator className="my-7" />
            <div className="mb-4 flex basis-1/3 gap-x-4 [&>div]:basis-1/3">
                <Display variant="body-50-R" />
                <Display variant="body-50-M" />
                <Display variant="body-50-B" />
            </div>
            <div className="mb-4 flex basis-1/3 gap-x-4 [&>div]:basis-1/3">
                <Display variant="body-100-R" />
                <Display variant="body-100-M" />
                <Display variant="body-100-B" />
            </div>

            <div className="mb-4 flex basis-1/3 gap-x-4 [&>div]:basis-1/3">
                <Display variant="body-150-R" />
                <Display variant="body-150-M" />
                <Display variant="body-150-B" />
            </div>

            <div className="mb-4 flex basis-1/3 gap-x-4 [&>div]:basis-1/3">
                <Display variant="body-200-R" />
                <Display variant="body-200-M" />
                <Display variant="body-200-B" />
            </div>
            <div className="mb-4 flex basis-1/3 gap-x-4 [&>div]:basis-1/3">
                <Display variant="body-250-R" />
                <Display variant="body-250-M" />
                <Display variant="body-250-B" />
            </div>
            <div className="mb-4 flex basis-1/3 gap-x-4 [&>div]:basis-1/3">
                <Display variant="body-300-R" />
                <Display variant="body-300-M" />
                <Display variant="body-300-B" />
            </div>
            <div className="mb-4 flex basis-1/3 gap-x-4 [&>div]:basis-1/3">
                <Display variant="body-350-R" />
                <Display variant="body-350-M" />
                <Display variant="body-350-B" />
            </div>
            <div className="mb-4 flex basis-1/3 gap-x-4 [&>div]:basis-1/3">
                <Display variant="body-400-R" />
                <Display variant="body-400-M" />
                <Display variant="body-400-B" />
            </div>
        </>
    );
};
