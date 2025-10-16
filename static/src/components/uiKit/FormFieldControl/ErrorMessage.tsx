import type { TComponent } from 'utils/types/elements';

import { Typography } from 'components/uiKit/Typography';

import css from './style.module.scss';

type FormControlErrorProps = { error: string };

export const ErrorMessage: TComponent<FormControlErrorProps> = ({ error }) => (
    <Typography as='span' variant='secondary' className={css.error}>
        {error}
    </Typography>
);
