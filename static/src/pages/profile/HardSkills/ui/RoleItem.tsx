import type { PropsWithChildren } from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import type { TComponent } from 'utils/types/elements';

import { DotsIcon } from 'assets/icons';

import { Typography } from 'components/uiKit/Typography';

import css from './style.module.scss';

export const RoleItem: TComponent<PropsWithChildren<LinkProps>> = (props) => {
    const { children, ...linkProps } = props;
    return (
        <Link className={css.role_item} {...linkProps} to='#'>
            <Typography
                variant='secondary'
                className='w-fit bg-blue px-[8px] py-[1.5px] text-white'
            >
                {children}
            </Typography>
            <DotsIcon className='rotate-180' />
        </Link>
    );
};
