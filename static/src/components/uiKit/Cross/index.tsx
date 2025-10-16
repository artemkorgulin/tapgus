import cn from 'clsx';
import type { TComponent } from 'utils/types/elements';

import DotMdIcon from './svg/dot-md.svg?react';
import DotSmIcon from './svg/dot-sm.svg?react';
import SolidMdIcon from './svg/solid-md.svg?react';
import SolidSmIcon from './svg/solid-sm.svg?react';
import UnderlayIcon from './svg/underlay.svg?react';
import XIcon from './svg/x.svg?react';
import YIcon from './svg/y.svg?react';
import css from './style.module.scss';

type CrossProps = {
    className?: string;
    isHovered?: boolean;
    isDisabled?: boolean;
    hasUnderlay?: boolean;
    hasSolidBg?: boolean;
    variant?: 'md' | 'sm';
};

type TCrossComponent = TComponent<CrossProps> & { containerClassName: string };

const Cross: TCrossComponent = ({
    isHovered = false,
    isDisabled = false,
    className,
    hasUnderlay = false,
    hasSolidBg = false,
    variant = 'sm',
}) => {
    return (
        <span
            className={cn(
                css.cross,
                {
                    [css.sm]: variant === 'sm',
                    [css.md]: variant === 'md',
                    [css.hovered]: isHovered && !isDisabled,
                },
                className,
            )}
        >
            {hasUnderlay ? (
                <UnderlayIcon className={cn(css.icon, css.underlay)} />
            ) : null}
            {hasSolidBg && variant === 'sm' ? (
                <SolidSmIcon className={cn(css.icon, css.solid)} />
            ) : null}
            {hasSolidBg && variant === 'md' ? (
                <SolidMdIcon className={cn(css.icon, css.solid)} />
            ) : null}
            <XIcon
                aria-label={'static-x'}
                className={cn(css.icon, css.masked, css.x)}
            />
            <YIcon
                aria-label={'static-y'}
                className={cn(css.icon, css.masked, css.y)}
            />
            <XIcon
                aria-label={'scale-x'}
                className={cn(css.icon, css.masked, css.x, css.dynamic)}
            />
            <YIcon
                aria-label={'scale-y'}
                className={cn(css.icon, css.masked, css.y, css.dynamic)}
            />
            {variant === 'sm' ? (
                <DotSmIcon className={css.icon} />
            ) : (
                <DotMdIcon className={css.icon} />
            )}
        </span>
    );
};

Cross.containerClassName = css.hoveredContainer;

export { Cross };
