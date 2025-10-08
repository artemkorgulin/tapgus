import { forwardRef } from 'react';
import cn from 'clsx';
import type { PropsWithChildren } from 'react';

import { Typography } from 'components/uiKit/Typography';
import { Condition } from 'components/utils/Condition';

import css from './components/style.module.scss';
import type { TToggleBoxProps } from './components/types';
import { Variant } from './components/Variant';

export const ToggleBox = forwardRef<
    HTMLInputElement,
    TToggleBoxProps & PropsWithChildren
>((props, ref) => {
    const {
        label,
        children,
        className,
        type = 'checkbox',
        title,
        ...inputProps
    } = props;

    return (
        <label className={cn(className, css.toggle)} title={title}>
            <input
                ref={ref}
                {...inputProps}
                type={type === 'radio' ? 'radio' : 'checkbox'}
                className={cn(css.input, props.className)}
            />
            <span className={css.focusFilter}>
                <Variant type={type} />
            </span>
            <Condition
                isValue={Boolean(label)}
                then={
                    <Typography isUppercase isNoWrap>
                        {label}
                    </Typography>
                }
            />
            {children}
        </label>
    );
});

ToggleBox.displayName = 'ToggleBox';
