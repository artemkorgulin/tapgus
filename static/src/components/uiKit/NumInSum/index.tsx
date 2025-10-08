import type { TComponent } from 'utils/types/elements';

import SlashIcon from 'assets/icons/slash.svg?react';

import { Typography } from 'components/uiKit/Typography';

import css from './style.module.scss';

type NumInNumProps = {
    num: number | string;
    sum: number | string;
    isMonoSpace?: boolean;
};

export const NumInSum: TComponent<NumInNumProps> = ({
    num,
    sum,
    isMonoSpace,
}) => (
    <div className={css.num_in_sum}>
        <Typography
            className={css.left}
            variant={isMonoSpace ? 'secondary' : 'primary'}
            isNumber
        >
            {num}
        </Typography>
        <SlashIcon />
        <Typography variant={isMonoSpace ? 'secondary' : 'primary'} isNumber>
            {sum}
        </Typography>
    </div>
);
