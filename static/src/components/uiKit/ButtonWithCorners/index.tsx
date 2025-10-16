import { forwardRef } from 'react';
import cn from 'clsx';
import type { TButtonCustomProps } from 'utils/types/elements';

import css from './style.module.scss';

type TButtonWithCornersProps = TButtonCustomProps & {
    variant?: 'primary' | 'outline_gray' | 'outline_tertiary';
    iconColor?: 'default' | 'solid';
    size?: 'bg' | 'sm';
};

export const ButtonWithCorners = forwardRef<
    HTMLButtonElement,
    TButtonWithCornersProps
>((props, ref) => {
    const {
        children,
        leftElement,
        rightElement,
        leftElementClassName,
        rightElementClassName,
        className,
        variant = 'primary',
        iconColor = 'default',
        tabIndex = 0,
        size = 'sm',
        ...buttonProps
    } = props;

    return (
        <button
            ref={ref}
            tabIndex={tabIndex}
            className={cn(
                css.button_with_corners,
                css[size],
                {
                    [css.primary]: variant === 'primary',
                    [css.solid_color]: iconColor === 'solid',
                    [css.outline_gray]: variant === 'outline_gray',
                    [css.outline_tertiary]: variant === 'outline_tertiary',
                },
                className,
            )}
            {...buttonProps}
        >
            <span className={css.button}>
                <span className={cn(css.icon, leftElementClassName)}>
                    {leftElement}
                </span>
                {children}
                <span className={cn(css.icon, rightElementClassName)}>
                    {rightElement}
                </span>
            </span>
        </button>
    );
});

ButtonWithCorners.displayName = 'ButtonWithCorners';
