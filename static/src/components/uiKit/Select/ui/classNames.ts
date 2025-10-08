import cn from 'clsx';
import type { ClassNamesConfig, GroupBase } from 'react-select';

import { SELECT_VARIANTS } from './enum';
import css from './style.module.scss';

const sizeStyle = 'min-w-12 h-12';
const tw = {
    sizeStyle,
    control: `hover:cursor-pointer min-h-12 h-12 bg-transparent`,
    dropdownIndicator: `${sizeStyle} items-center justify-center`,
    customIcon: 'h-12 w-12 p-3 transition-color duration-base',
    indicatorsContainer: `${sizeStyle} `,
};

export const getClassNames = <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>,
>(
    variant: SELECT_VARIANTS,
): ClassNamesConfig<Option, IsMulti, Group> => {
    const baseClassNames: ClassNamesConfig<Option, IsMulti, Group> = {
        container: () => css.customSelect,
        control: ({ isFocused, menuIsOpen }) =>
            cn(tw.control, css.control, {
                [css.controlFocus]: isFocused,
                [css.menuIsOpened]: menuIsOpen,
            }),
        indicatorsContainer: () => tw.indicatorsContainer,
        dropdownIndicator: () => tw.dropdownIndicator,
        menu: () => css.menu,
    };

    switch (variant) {
        case SELECT_VARIANTS.DEFAULT:
            return {
                ...baseClassNames,
                container: () => cn(css.customSelect, css.variant_default),
            };

        case SELECT_VARIANTS.CORNERED:
            return {
                ...baseClassNames,
                container: () => cn(css.customSelect, css.variant_cornered),
            };

        case SELECT_VARIANTS.BEVELED:
            return {
                ...baseClassNames,
                container: () => cn(css.customSelect, css.variant_beveled),
            };
    }
};
