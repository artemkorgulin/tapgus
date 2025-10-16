import cn from 'clsx';
import type { PropsWithChildren } from 'react';
import type { Nullable } from 'utils/types/common';
import type { TButtonCustomProps, TComponent } from 'utils/types/elements';
import type { SORT_DIRECTIONS } from 'utils/types/enum';

import { ButtonInvisible } from 'components/uiKit/ButtonInvisible';

import css from './style.module.scss';

type SortControlProps = PropsWithChildren<
    TButtonCustomProps & {
        direction: Nullable<SORT_DIRECTIONS>;
        onClick: () => void;
    }
>;

export const SortControl: TComponent<SortControlProps> = ({
    children,
    direction,
    ...props
}) => {
    return (
        <ButtonInvisible
            className={cn(css.sort_control, direction && css[direction])}
            {...props}
        >
            {children}
        </ButtonInvisible>
    );
};
