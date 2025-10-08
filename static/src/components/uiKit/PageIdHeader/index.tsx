import type { TComponent } from 'utils/types/elements';

import { Typography } from 'components/uiKit/Typography';

import css from './style.module.scss';

type PageIdHeader = {
    idx: string;
    text: string;
};

export const PageIdHeader: TComponent<PageIdHeader> = ({ idx, text }) => {
    return (
        <div data-id={idx} className={css.idx_header}>
            <Typography variant='h1' className={css.head}>
                {text}
            </Typography>
        </div>
    );
};
