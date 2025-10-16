import { nanoid } from 'nanoid';
import type { TNavItem } from 'utils/types/elements';

import { getPathnamePart } from './router';

export const convertToRelative = (
    navList: Omit<TNavItem, 'idx'>[],
): TNavItem[] =>
    navList.map((item, index) => ({
        ...item,
        idx: nanoid(),
        path: index === 0 ? '' : getPathnamePart(item.path),
    }));

export const convertToAbsolute = (
    navList: Omit<TNavItem, 'idx'>[],
): TNavItem[] =>
    navList.map((item) => ({
        ...item,
        idx: nanoid(),
    }));

/**
 * Возвращает новый TNavItem с задизейбленными кнопками
 * @param nav
 */
export const setDisabled = (nav: TNavItem[]) =>
    nav.map((el) => ({
        ...el,
        isDisabled: true,
    }));
