import { forwardRef } from 'react';
import cn from 'clsx';
import type { TInputCustomProps } from 'utils/types/elements';

import { getTypography } from 'components/uiKit/Typography';

import css from './style.module.scss';

type InputProps = TInputCustomProps & {
    inputTypography?: string;
    variant?: 'with_corners' | 'cut_corner' | 'default';
};

const inputTypographyDefault = getTypography('text-secondary', {
    variant: 'secondary',
});

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        className,
        leftElement,
        rightElement,
        hasError,
        inputTypography = inputTypographyDefault,
        variant = 'default',
        spellCheck = 'false',
        ...inputProps
    } = props;

    return (
        <label
            className={cn(
                css.label,
                css[`variant-${variant}`],
                {
                    [css.hasError]: hasError,
                    [css.hasLeftElement]: !!leftElement,
                    [css.hasRightElement]: !!rightElement,
                    [css.disabled]: inputProps.disabled,
                },
                className,
            )}
        >
            <div className={css.leftElement}>{leftElement}</div>
            <input
                ref={ref}
                className={cn(css.input, inputTypography)}
                spellCheck={spellCheck}
                {...inputProps}
            />
            <div className={css.rightElement}>{rightElement}</div>
        </label>
    );
});

Input.displayName = 'Input';

export { Input };
