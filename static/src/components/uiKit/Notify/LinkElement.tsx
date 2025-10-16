import { Link } from 'react-router-dom';
import type { TComponent } from 'utils/types/elements';

import { Typography } from 'components/uiKit/Typography';

import css from './style.module.scss';

type LinkElementProps = {
    onClick: () => void;
    url?: string;
};

// todo: i18n in
export const LinkElement: TComponent<LinkElementProps> = ({ url, onClick }) =>
    url ? (
        <Typography variant='secondary' className={css.link}>
            <Link to={url} onClick={onClick}>
                смотреть
            </Link>
        </Typography>
    ) : null;
