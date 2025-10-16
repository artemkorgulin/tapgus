import { generatePath, matchPath } from 'lib/router';

import {
    BITRIX_PATH_MAP,
    REACT_PATH_MAP,
} from './constants';
import { hasIframePath } from './guards';
import {Params} from "react-router-dom";

/**
 * Возвращает роут в бэкенде
 * @param reactPathName
 */
const getBitrixPath = (reactPathName: string) =>
    getPathname(reactPathName, BITRIX_PATH_MAP);

/**
 * Возвращает роут React при синхронизации роутинга из iframe
 * @param bPathname
 */
export const getReactPath = (bPathname: string) =>
    getPathname(bPathname, REACT_PATH_MAP);

/**
 * Возвращает связанный с pathname путь в бэкенде/реакт;
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
 * Возвращает связанный с pathname путь в бэкенд/реакт
 * @param pathname
 * @param store
 */
export function getPathname(
    pathname: string,
    store = REACT_PATH_MAP,
) {
    if (store.has(pathname)) {
        const pathnameResult = store.get(pathname);

        return pathnameResult;
    }

    return getDynamicPath(pathname, store);
}

/**
 * Возвращает роут бэкенда, сопоставляя аргументы с картой связей *_PATH_MAP
 */
export function getBitrixPathname(props: {
    search: string;
    matchParams: Params<string> | undefined;
    state: any;
    pathname: string
}) {
    const {
        pathname: reactPathName,
        search = '',
        state,
    } = props;
    const bitrixPathname = getBitrixPathName();
    return bitrixPathname ? `${bitrixPathname}${search}` : false;

    function getBitrixPathName() {

        if (hasIframePath(state)) {
            return state.iframePath;
        }

        return getBitrixPath(reactPathName);
    }
}
