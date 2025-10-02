import { ColorBox } from './ui';

export const Color = () => {
    return (
        <>
            <div>Colors</div>
            <div className="flex flex-col gap-4 *:gap-4">
                <div className="flex items-center">
                    <div className="w-20">Primary</div>
                    <ColorBox className="bg-primary-100">100</ColorBox>
                    <ColorBox className="bg-primary-200">200</ColorBox>
                    <ColorBox className="bg-primary-300">300</ColorBox>
                    <ColorBox className="bg-primary-400">400</ColorBox>
                    <ColorBox className="bg-primary-500">500</ColorBox>
                    <ColorBox className="bg-primary-600">600</ColorBox>
                    <ColorBox className="bg-primary-700 text-white">700</ColorBox>
                    <ColorBox className="bg-primary-800 text-white">800</ColorBox>
                    <ColorBox className="bg-primary-900 text-white">900</ColorBox>
                </div>
                <div className="flex items-center">
                    <div className="w-20">Secondary</div>
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
                    <div className="w-20">Gray</div>
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
