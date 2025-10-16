import cn from 'clsx';
import { NavLink } from 'react-router-dom';
import type { SidebarItem } from 'utils/constants/sidebar';
import type { TComponent } from 'utils/types/elements';

import css from './style.module.scss';

export const Item: TComponent<Omit<SidebarItem, 'key'>> = ({
    path,
    icon: Icon,
    title,
    target,
    isDisabled,
}) => (
    <li className={cn(css.nav_item, { [css.disabled]: isDisabled })}>
        <NavLink
            to={path}
            className={({ isActive }) =>
                cn({
                    [css.active]: isActive,
                })
            }
            target={target}
            end={false}
        >
            <div className={css.container}>
                <div className={css.icon}>
                    {Icon && <Icon className='h-6 w-6' />}
                </div>
                <div className={css.title}>{title}</div>
            </div>
        </NavLink>
    </li>
);
