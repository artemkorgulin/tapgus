import { NotifyConsumer } from './NotifyConsumer';
import { NotifyEmulator } from './NotifyEmulator';
import { RouteEmulator } from './RouteEmulator';

export const BitrixEmulator = () => {
    return (
        <div
            className='absolute right-0 top-0 z-[1000] flex h-full w-[300px]
                flex-col gap-2 bg-milk p-3'
        >
            <NotifyEmulator />
            <NotifyConsumer />
            <RouteEmulator />
        </div>
    );
};
