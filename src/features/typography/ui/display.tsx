import { Typography } from '@/ui/display/typography';
import type { typography } from '@/ui/lib/variants';

export const Display = ({ variant }: { variant: keyof typeof typography }) => {
    return (
        <div>
            <Typography variant="subtitle-500-B" className="text-secondary">
                {variant}
            </Typography>
            <Typography variant={variant}>HB design System</Typography>
        </div>
    );
};
