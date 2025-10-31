import { Header } from '@/features';

export const Home = () => {
    return (
        <>
            <Header />
            <div className="flex">
                <aside className="w-0 -translate-x-72 transition-all duration-300 min-[56rem]:w-64 min-[56rem]:translate-x-0 min-[56rem]:border">SIDEBAR</aside>
                <main className="flex-1">
                    <div className="mx-auto max-w-4xl border">MAIN</div>
                </main>
            </div>
        </>
    );
};
