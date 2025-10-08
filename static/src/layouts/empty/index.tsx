import cn from 'clsx';
import type { PropsWithChildren } from 'react';
import type { TComponent } from 'utils/types/elements';

import css from './style.module.scss';

export const LayoutBlank: TComponent<PropsWithChildren> = ({ children }) => {
    return (
        <div className='flex flex-col justify-center items-center bg-milk w-screen h-screen'>
            <div
                className={cn(
                    'bg-white p-8 shadow-card flex flex-col gap-8',
                    css.container,
                )}
            >
                {children}
            </div>
        </div>
    );
};
