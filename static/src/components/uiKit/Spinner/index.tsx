import cn from 'clsx';
import type { TComponent } from 'utils/types/elements';

import css from './style.module.scss';

type SpinnerProps = {
    size: 'xs' | 'sm' | 'lg';
    className?: string;
    isHidden?: boolean;
    variant?: 'default' | 'dots';
};

export const Spinner: TComponent<SpinnerProps> = ({
    size,
    className,
    variant = 'default',
    isHidden = false,
}) => (
    <div
        className={cn(
            css.spinner,
            {
                [css.size_xs]: size === 'xs',
                [css.size_sm]: size === 'sm',
                [css.size_lg]: size === 'lg',
                [css.variant_default]: variant === 'default',
                [css.variant_dots]: variant === 'dots',
                [css.hidden]: isHidden,
            },
            className,
        )}
    />
);
