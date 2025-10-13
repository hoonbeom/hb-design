import { useMemo, type PropsWithChildren } from 'react';

type ContentProps = PropsWithChildren<{
    children: React.ReactNode;
    x: number;
    y: number;
    lensSize: number;
    zoomFactor: number;
}>;

export const Content = ({ children, x, y, lensSize, zoomFactor }: ContentProps) => {
    const maskImage = useMemo(() => {
        return `radial-gradient(circle ${lensSize / 2}px at ${x}px ${y}px, black 100%, transparent 100%)`;
    }, [lensSize, x, y]);

    return (
        <div className="absolute inset-0 z-50" style={{ maskImage, WebkitMaskImage: maskImage }}>
            <div className="absolute inset-0" style={{ transform: `scale(${zoomFactor})`, transformOrigin: `${x}px ${y}px` }}>
                {children}
            </div>
        </div>
    );
};
