import type { PropsWithChildren } from 'react';
import type { TComponent } from 'utils/types/elements';


export const LayoutBlank: TComponent<PropsWithChildren> = ({ children }) => {
    return (
        <div className='flex flex-col justify-center items-center bg-milk w-screen h-screen'>
            <div
                className='bg-white p-8 shadow-card flex flex-col gap-8'
            >
                {children}
            </div>
        </div>
    );
};
