import { useState } from 'react';
import cn from 'clsx';
import type { GroupBase } from 'react-select';
import ReactSelect, { components as componentsDefault } from 'react-select';
import { useAsync } from 'react-select/async';
import type { ICustomSelectProps, TSelectProps } from 'react-select/base';
import { THEME } from 'utils/constants/theme';

import { getClassNames } from './ui/classNames';
import { SELECT_VARIANTS } from './ui/enum';
import css from './ui/style.module.scss';
import { getStyles } from './ui/styles';
import {
    ClearIndicator,
    ControlWithIcon as Control,
    DropdownIndicator,
    Option,
    Placeholder,
    SingleValue,
} from './SelectComponents';

const sizeStyle = 'min-w-12 h-12';
const tw = {
    sizeStyle,
    control: `hover:cursor-pointer min-h-12 h-12 bg-transparent`,
    dropdownIndicator: `${sizeStyle} items-center justify-center`,
    customIcon: 'h-12 w-12 p-3 transition-color duration-base',
    indicatorsContainer: `${sizeStyle} `,
};

export const Select = <
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>,
>(
    props: TSelectProps<Option, IsMulti, Group>,
) => {
    const {
        variant = SELECT_VARIANTS.DEFAULT,
        components = {},
        hasSeparator = false,
        isAsync = false,
        iconElement,

        // async props
        loadOptions,
        defaultOptions,
        cacheOptions,
        isLoading,

        ...selectProps
    } = props;

    const [styles] = useState(getStyles<Option, IsMulti, Group>(variant));
    const [classNames] = useState(
        getClassNames<Option, IsMulti, Group>(variant),
    );
    const [customProps] = useState({
        iconElement,
        iconClassName: cn(css.icon, tw.customIcon),
    });

    const asyncProps = useAsync<Option, IsMulti, Group, ICustomSelectProps>({
        loadOptions,
        defaultOptions,
        cacheOptions,
        isLoading,
    });

    const IndicatorSeparator = hasSeparator
        ? componentsDefault.IndicatorSeparator
        : null;

    return (
        <ReactSelect
            {...selectProps}
            {...customProps}
            {...(isAsync ? asyncProps : {})}
            components={{
                IndicatorSeparator,
                DropdownIndicator,
                ClearIndicator,
                Control,
                Option,
                Placeholder,
                SingleValue,
                ...components,
            }}
            styles={styles}
            classNames={classNames}
            theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                    ...theme.colors,
                    primary: THEME.colors['blue'],
                },
            })}
        />
    );
};
