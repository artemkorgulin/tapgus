import type { PropsWithChildren } from 'react';
import type { TComponent } from 'utils/types/elements';

import css from './style.module.scss';

export const Container: TComponent<PropsWithChildren> = ({ children }) => {
    return (
        <aside className='z-40 bg-milk'>
            <nav>
                <ol className={css.nav}>{children}</ol>
            </nav>
        </aside>
    );
};
