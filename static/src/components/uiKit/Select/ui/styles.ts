import type { GroupBase, StylesConfig } from 'react-select';
import { mergeStyles } from 'react-select';
import { THEME } from 'utils/constants/theme';

import { SELECT_VARIANTS } from './enum';

export const getStyles = <
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>,
>(
    variant: SELECT_VARIANTS,
): StylesConfig<Option, IsMulti, Group> => {
    const baseStyles: StylesConfig<Option, IsMulti, Group> = {
        control: (base) => ({
            ...base,
            borderStyle: 'none',
            backgroundColor: 'transparent',
        }),
        menu: (base) => ({
            ...base,
            marginTop: 0,
            marginBottom: 0,
            boxShadow: 'none',
            zIndex: 99,
        }),
        menuList: (base) => ({
            ...base,
            paddingTop: 0,
            paddingBottom: 0,
            cursor: 'pointer',
        }),
        valueContainer: (base, { selectProps }) => ({
            ...base,
            padding: selectProps.iconElement ? '6px 12px 6px 0' : '6px 12px',
        }),
        clearIndicator: (base) => ({
            ...base,
            padding: 0,
        }),
        dropdownIndicator: (base, state) => ({
            ...base,
            padding: 0,
            transition: '300ms transform, color',
            transform: state.selectProps.menuIsOpen
                ? 'scaleY(-1)'
                : 'scaleY(1)',
        }),
        option: (base) => ({
            ...base,
            cursor: 'pointer',
        }),
        placeholder: (base) => ({ ...base, color: undefined }),
    };

    switch (variant) {
        case SELECT_VARIANTS.DEFAULT:
            return mergeStyles(baseStyles, {
                dropdownIndicator: (base) => ({
                    ...base,
                    color: THEME.colors['blue'],
                }),
            });

        case SELECT_VARIANTS.BEVELED:
            return mergeStyles(baseStyles, {
                container: (base) => ({
                    ...base,
                    minWidth: 220,
                    maxWidth: 220,
                }),
            });

        case SELECT_VARIANTS.CORNERED:
            return mergeStyles(baseStyles, {
                control: (base, state) => ({
                    ...base,
                    backgroundColor: state.menuIsOpen
                        ? THEME.colors['white']
                        : 'transparent',
                }),
            });
    }
};
