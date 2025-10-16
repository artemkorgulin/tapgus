import { createElement, forwardRef } from 'react';

import { getTypography } from './helper';
import type { TypographyProps } from './type';

export const Typography = forwardRef<HTMLElement, TypographyProps>(
    (props, ref) => {
        const {
            as = 'span',
            children,
            className,
            variant,
            isUppercase,
            isNumber,
            isVertical,
            isNoWrap,
            ...htmlProps
        } = props;

        return createElement(
            as,
            {
                ref,
                className: getTypography(className, {
                    variant,
                    isUppercase,
                    isNumber,
                    isVertical,
                    isNoWrap,
                }),
                ...htmlProps,
            },
            children,
        );
    },
);

Typography.displayName = 'Typography';
