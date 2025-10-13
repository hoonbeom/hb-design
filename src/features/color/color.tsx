import { Typography } from '@/ui/display/typography';

import { ColorBox } from './ui';

export const Color = () => {
    return (
        <>
            <Typography variant="display-100-B">Colors</Typography>
            <div className="flex flex-col gap-4 *:gap-4">
                <div className="flex items-center">
                    <Typography variant="subtitle-300-B" className="w-24">
                        Primary
                    </Typography>
                    <ColorBox className="bg-primary-100">
                        <Typography variant="body-300-M">100</Typography>
                    </ColorBox>
                    <ColorBox className="bg-primary-200">
                        <Typography variant="body-300-M">200</Typography>
                    </ColorBox>
                    <ColorBox className="bg-primary-300">
                        <Typography variant="body-300-M">300</Typography>
                    </ColorBox>
                    <ColorBox className="bg-primary-400">
                        <Typography variant="body-300-M">400</Typography>
                    </ColorBox>
                    <ColorBox className="bg-primary-500">
                        <Typography variant="body-300-M">500</Typography>
                    </ColorBox>
                    <ColorBox className="bg-primary-600">600</ColorBox>
                    <ColorBox className="bg-primary-700 text-white">700</ColorBox>
                    <ColorBox className="bg-primary-800 text-white">800</ColorBox>
                    <ColorBox className="bg-primary-900 text-white">900</ColorBox>
                </div>
                <div className="flex items-center">
                    <Typography variant="subtitle-300-B" className="w-24">
                        Secondary
                    </Typography>
                    <ColorBox className="bg-secondary-100">100</ColorBox>
                    <ColorBox className="bg-secondary-200">200</ColorBox>
                    <ColorBox className="bg-secondary-300">300</ColorBox>
                    <ColorBox className="bg-secondary-400">400</ColorBox>
                    <ColorBox className="bg-secondary-500">500</ColorBox>
                    <ColorBox className="bg-secondary-600">600</ColorBox>
                    <ColorBox className="bg-secondary-700 text-white">700</ColorBox>
                    <ColorBox className="bg-secondary-800 text-white">800</ColorBox>
                    <ColorBox className="bg-secondary-900 text-white">900</ColorBox>
                </div>
                <div className="flex items-center">
                    <Typography variant="subtitle-300-B" className="w-24">
                        Gray
                    </Typography>
                    <ColorBox className="bg-gray-100">100</ColorBox>
                    <ColorBox className="bg-gray-200">200</ColorBox>
                    <ColorBox className="bg-gray-300">300</ColorBox>
                    <ColorBox className="bg-gray-400">400</ColorBox>
                    <ColorBox className="bg-gray-500">500</ColorBox>
                    <ColorBox className="bg-gray-600">600</ColorBox>
                    <ColorBox className="bg-gray-700 text-white">700</ColorBox>
                    <ColorBox className="bg-gray-800 text-white">800</ColorBox>
                    <ColorBox className="bg-gray-900 text-white">900</ColorBox>
                </div>
            </div>
        </>
    );
};
