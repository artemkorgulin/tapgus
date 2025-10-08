import type { PropsWithChildren, ReactNode } from 'react';
import type { TComponent } from 'utils/types/elements';

import css from './style.module.scss';

type ContainerProps = PropsWithChildren & { logo: ReactNode };

export const Container: TComponent<ContainerProps> = ({ children, logo }) => (
    <aside className={css.sidebar}>
        {logo}
        <nav className={css.nav}>
            <ul className={css.list}>{children}</ul>
        </nav>
    </aside>
);
