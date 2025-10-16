import cn from 'clsx';
import type { PropsWithChildren } from 'react';
import type { TComponent } from 'utils/types/elements';

import css from './style.module.scss';

// todo: to-r | to-b
type Variants = 'user-profile-card' | 'team-profile-card';

type ListProps = PropsWithChildren<{
    variant: Variants;
    className?: string;
}>;

export const List: TComponent<ListProps> = ({
    className,
    variant,
    children,
}) => {
    return (
        <div
            className={cn(
                css.achievements_list,
                {
                    [css.variant__user]: variant === 'user-profile-card',
                    [css.variant__team]: variant === 'team-profile-card',
                },
                className,
            )}
        >
            <div className={css.list}>{children}</div>
        </div>
    );
};
