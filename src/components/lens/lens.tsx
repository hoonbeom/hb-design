import { useState, type PropsWithChildren } from 'react';

import { Content } from './content';

type LensProps = PropsWithChildren<{
    children: React.ReactNode;
    lensSize?: number;
    zoomFactor?: number;
}>;

export const Lens = ({ children, lensSize = 200, zoomFactor = 2 }: LensProps) => {
    const [hovered, setHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            className="relative z-20 overflow-hidden"
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
            onPointerMove={handlePointerMove}
        >
            {children}
            {hovered && (
                <Content x={position.x} y={position.y} lensSize={lensSize} zoomFactor={zoomFactor}>
                    {children}
                </Content>
            )}
        </div>
    );
};
