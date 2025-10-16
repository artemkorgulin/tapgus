import type { NavigateOptions } from 'react-router/dist/lib/context';
import { ROUTES } from 'utils/constants/routes';

import { getReactPath } from './getPathname';

/**
 * Получает ссылку с бэкенда
 * Сопоставляет с роутингом React
 * Переходит на роут реакта, и подставляет iframePath для iframe
 * @param nextUrl
 * @param navigateFn
 */
export function routeSyncFx(
    nextUrl: string,
    navigateFn: (to: string, options?: NavigateOptions) => void,
) {
    if (nextUrl) {
        try {
            const url = new URL(nextUrl);
            const { pathname, search } = url;

            const reactPathname = getReactPath(pathname);

            if (reactPathname) {
                navigateFn(`${reactPathname}${search}`, {
                    state: {
                        iframePath: pathname,
                    },
                });
            } else {
                navigateFn(`${ROUTES.BITRIX_ROUTE}${pathname}${search}`);
            }
        } catch (error) {
            console.error(error);
        }
    }
}
