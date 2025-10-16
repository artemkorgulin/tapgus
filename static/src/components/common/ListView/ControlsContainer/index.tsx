import type { PropsWithChildren } from 'react';
import type { TComponent } from 'utils/types/elements';

import css from './style.module.scss';

export const ControlsContainer: TComponent<PropsWithChildren> = ({
    children,
}) => <div className={css.controls_container}>{children}</div>;
