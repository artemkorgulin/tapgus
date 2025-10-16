import cn from 'clsx';
import type { MouseEventHandler } from 'react';
import type { TComponent } from 'utils/types/elements';

import { Cross } from 'components/uiKit/Cross';
import { Typography } from 'components/uiKit/Typography';

import css from './style.module.scss';
import type { TLegendItemProps } from './type';

export const LegendListItem: TComponent<TLegendItemProps> = (props) => {
    const { onClick, index, ...payload } = props;

    const clickHandler: MouseEventHandler = (event) => {
        onClick?.(payload, index, event);
    };

    return (
        <button
            className={cn(
                css.legend_button,
                {
                    [css.inactive]: payload.inactive,
                    [css.self]: payload.dataKey === 'self',
                    [css.boss]: payload.dataKey === 'boss',
                    [css.mate]: payload.dataKey === 'mate',
                },
                Cross.containerClassName,
            )}
            onClick={clickHandler}
        >
            <Cross variant='md' hasUnderlay />
            <Typography as='span' isUppercase className={css.content}>
                {payload.value}
            </Typography>
        </button>
    );
};
