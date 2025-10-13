import { Lens } from './components';
import { Typography, Color } from './features';

export default function App() {
    return (
        <div className="mx-auto w-7xl">
            <Lens>
                <img
                    src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image placeholder"
                    width={500}
                    height={500}
                />
                <div>TEXT TEXT OTHER CONTENTS</div>
                <div>TEXT TEXT OTHER CONTENTS</div>
                <div>TEXT TEXT OTHER CONTENTS</div>
                <div>TEXT TEXT OTHER CONTENTS</div>
                <img
                    src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image placeholder"
                    width={500}
                    height={500}
                />
            </Lens>
            <Color />
            <Typography />
        </div>
    );
}
