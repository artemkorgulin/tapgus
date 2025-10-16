import { forwardRef } from 'react';
import cn from 'clsx';
import type { TButtonCustomProps } from 'utils/types/elements';

import css from './style.module.scss';

type TButtonInvisibleProps = TButtonCustomProps & {
    isTab?: boolean;
    variant?: 'opacity_invert' | 'control' | 'underlay' | 'solid';
};

export const ButtonInvisible = forwardRef<
    HTMLButtonElement,
    TButtonInvisibleProps
>(
    (
        {
            variant = 'control',
            leftElement,
            children,
            rightElement,
            className,
            tabIndex = 0,
            isActive,
            isTab,
            ...props
        },
        ref,
    ) => {
        return (
            <button
                ref={ref}
                tabIndex={tabIndex}
                className={cn(
                    css.button,
                    {
                        [css.likeTab]: isTab,
                        [css.active]: isActive,
                        [css.solid]: variant === 'solid',
                        [css.opacityInvert]: variant === 'opacity_invert',
                        [css.control]: variant === 'control',
                        [css.underlay]: variant === 'underlay',
                    },
                    className,
                )}
                {...props}
            >
                <span className={css.icon}>{leftElement}</span>
                <span className={css.content}>{children}</span>
                <span className={css.icon}>{rightElement}</span>
            </button>
        );
    },
);

ButtonInvisible.displayName = 'ButtonInvisible';
