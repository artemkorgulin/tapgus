import cn from 'clsx';
import { NavLink } from 'react-router-dom';
import type { TComponent, TNavItem } from 'utils/types/elements';

import { Cross } from 'components/uiKit/Cross';

import css from './style.module.scss';

type HorizontalMenuItemProps = TNavItem & { hasCounter?: boolean };

export const Item: TComponent<HorizontalMenuItemProps> = ({
    title,
    path,
    isDisabled,
    hasCounter,
}) => {
    return (
        <li
            className={cn(
                css.nav_item,
                { [css.disabled]: isDisabled, [css.counter]: hasCounter },
                Cross.containerClassName,
            )}
        >
            <NavLink
                to={path}
                className={({ isActive }) =>
                    cn(css.link, {
                        [css.active]: isActive,
                    })
                }
                end
            >
                <div className={css.text}>{title}</div>
                <div className={css.num} />
                <Cross
                    className={css.cross}
                    isDisabled={isDisabled}
                    hasSolidBg
                    hasUnderlay
                />
            </NavLink>
        </li>
    );
};
