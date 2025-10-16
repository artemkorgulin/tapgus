import type { Nullable } from 'utils/types/common';
import type { TComponent } from 'utils/types/elements';

import { Spinner } from 'components/uiKit/Spinner';
import { Typography } from 'components/uiKit/Typography';
import { Condition } from 'components/utils/Condition';

import css from './style.module.scss';

type TFallbackProps = {
    isLoading: boolean;
    emptyMessage: Nullable<string>;
    errorMessage: Nullable<string>;
};

export const Fallback: TComponent<TFallbackProps> = ({
    isLoading,
    emptyMessage,
    errorMessage,
}) => {
    return (
        <div className={css.fallback}>
            <Condition
                isValue={isLoading}
                then={
                    <Spinner size='sm' variant='dots' className={css.loader} />
                }
                else={<Typography>{emptyMessage ?? null}</Typography>}
            />
            <Typography>{errorMessage ?? null}</Typography>
        </div>
    );
};
