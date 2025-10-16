import cn from 'clsx';
import type { TComponent } from 'utils/types/elements';

import css from './style.module.scss';
import type { TToggleVariantProps } from './types';

export const Variant: TComponent<TToggleVariantProps> = ({ type }) => {
    switch (type) {
        case 'checkbox':
            return (
                <span className={cn(css.mark_container, css.mod_check)}>
                    <span className={cn(css.mark, css.mod_check)} />
                </span>
            );
        case 'radio':
            return (
                <span className={cn(css.mark_container, css.mod_radio)}>
                    <span className={cn(css.mark, css.mod_radio)} />
                </span>
            );
        case 'switch':
            return (
                <span className={cn(css.mark_container, css.mod_switch)}>
                    <span className={cn(css.mark, css.mod_switch)} />
                </span>
            );
    }

    return null;
};
