import React from 'react';
import cn from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

import css from './style.module.scss';

export type ModeValue = {
    text: string;
    value: string;
};

type ModeRadioSelectProps = ComponentPropsWithoutRef<'input'> & {
    values: ModeValue[];
    className?: string;
    onChange?: (value: string) => void;
};

export const ModeRadioSelect: React.FC<ModeRadioSelectProps> = ({
    className,
    onChange,
    values,
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    return (
        <div className={cn(css.toggle_box, className)}>
            <fieldset className={css.toggler}>
                {values.map((v, indx) => (
                    <>
                        <input
                            type='radio'
                            name='toggler'
                            id={v.value}
                            value={v.value}
                            defaultChecked={indx === 0}
                            onChange={handleChange}
                        />
                        <label htmlFor={v.value}>{v.text}</label>
                    </>
                ))}
            </fieldset>
        </div>
    );
};
