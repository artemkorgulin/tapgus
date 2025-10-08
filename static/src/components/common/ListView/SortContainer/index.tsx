import type { PropsWithChildren } from 'react';
import type { TComponent } from 'utils/types/elements';

import css from './style.module.scss';

export const SortContainer: TComponent<PropsWithChildren> = ({ children }) => (
    <div className={css.sort_container}>{children}</div>
);
