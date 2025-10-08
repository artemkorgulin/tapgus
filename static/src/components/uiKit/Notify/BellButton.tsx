import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import cn from 'clsx';

import NotificationAlertIcon from 'assets/icons/notification.alert.svg?react';
import NotificationIcon from 'assets/icons/notification.svg?react';

import css from './style.module.scss';

type NotifyButtonProps = {
    hasNew: boolean;
} & ComponentPropsWithoutRef<'button'>;

export const BellButton = forwardRef<HTMLButtonElement, NotifyButtonProps>(
    (props, ref) => {
        const { hasNew, className, ...buttonProps } = props;
        return (
            <button
                ref={ref}
                className={cn(css.button, className)}
                {...buttonProps}
            >
                <NotificationIcon />
                <NotificationAlertIcon
                    className={cn(css.badge, { [css.hasNew]: hasNew })}
                />
            </button>
        );
    },
);

BellButton.displayName = 'BellButton';
