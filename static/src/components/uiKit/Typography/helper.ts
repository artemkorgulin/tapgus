import cn from 'clsx';

import css from './style.module.scss';
import type { TypographyProps } from './type';

type TStyleProps = Pick<
    TypographyProps,
    'variant' | 'isUppercase' | 'isNumber' | 'isVertical' | 'isNoWrap'
>;

/**
 * Возвращет className со стилями типографики
 * @param className
 * @param props
 */
export function getTypography(
    className: string | undefined,
    props?: TStyleProps,
): string {
    const {
        variant = 'primary',
        isUppercase = false,
        isNumber = false,
        isVertical = false,
        isNoWrap = false,
    } = props || {};

    return cn(className, {
        uppercase: isUppercase,
        [css.primary]: variant === 'primary',
        [css.secondary]: variant === 'secondary',
        [css.h1]: variant === 'h1',
        [css.h2]: variant === 'h2',
        [css.h3]: variant === 'h3',
        [css.monospace]: isNumber,
        [css.vertical]: isVertical,
        [css.noWrap]: isNoWrap,
    });
}
