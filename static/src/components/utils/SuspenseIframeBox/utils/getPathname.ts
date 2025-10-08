import { generatePath, matchPath } from 'lib/router';

import {
    BITRIX_PATH_MAP,
    REACT_PATH_MAP,
    VIEWER_DYNAMIC_PATHS,
} from './constants';
import { hasIframePath, isFallback } from './guards';
import type { TBitrixParamsFallback, TLocationState } from './type';

/**
 * Возвращает роут в битриксе
 * @param viewerId
 * @param reactPathName
 */
const getBitrixPath = (viewerId: string, reactPathName: string) =>
    getPathname(viewerId, reactPathName, BITRIX_PATH_MAP);

/**
 * Возвращает роут React при синхронизации роутинга из iframe
 * @param viewerId
 * @param bitrixPathname
 */
export const getReactPath = (bitrixPathname: string) =>
    getPathname('', bitrixPathname, REACT_PATH_MAP);

/**
 * Возвращает связанный с pathname путь в битрикс/реакт;
 * Для pathname с параметрами;
 * Например на вход передадим: /teams/123 ;
 * Функция найдет шаблон /teams/:teamId в маппинге;
 * И вернет связанный роут
 * @param from - pathname
 * @param store - карта связей pathname
 */
export const getDynamicPath = (from: string, store = REACT_PATH_MAP) => {
    let targetPath;
    let match;

    for (const [_pattern, _targetPath] of store.entries()) {
        match = matchPath(_pattern, from);

        if (match) {
            targetPath = _targetPath;
            break;
        }
    }

    if (match && targetPath) {
        return generatePath(targetPath, match.params);
    }

    return false; // todo: return null?
};

/**
 * Возвращает связанный с pathname путь в битрикс/реакт
 * @param viewerId - id текущего пользователя
 * @param pathname
 * @param store
 */
export function getPathname(
    viewerId: string,
    pathname: string,
    store = REACT_PATH_MAP,
) {
    if (store.has(pathname)) {
        const pathnameResult = store.get(pathname);

        // Для роутов viewer, userId берется из контекста, а не из pathname
        if (viewerId && pathnameResult && VIEWER_DYNAMIC_PATHS.has(pathname)) {
            return generatePath(pathnameResult, { userId: viewerId });
        }

        return pathnameResult;
    }

    return getDynamicPath(pathname, store);
}

type TGetBitrixPathnameProps = {
    viewerId: string;
    pathname: string;
    search?: string;
    state?: TLocationState;
    matchParams?: Partial<TBitrixParamsFallback>;
};

/**
 * Возвращает роут битрикса, сопоставляя аргументы с картой связей BITRIX_PATH_MAP
 */
export function getBitrixPathname(props: TGetBitrixPathnameProps) {
    const {
        viewerId,
        pathname: reactPathName,
        search = '',
        state,
        matchParams,
    } = props;
    const bitrixPathname = getBitrixPathName();
    return bitrixPathname ? `${bitrixPathname}${search}` : false;

    function getBitrixPathName() {
        if (isFallback(matchParams)) {
            return `/${matchParams['*']}`;
        }

        if (hasIframePath(state)) {
            return state.iframePath;
        }

        return getBitrixPath(viewerId, reactPathName);
    }
}
