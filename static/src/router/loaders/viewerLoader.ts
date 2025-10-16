import { apiV1 } from 'api';
import { ENV_USE_LEGACY_AUTH, ENV_USE_MOCKED_USER } from 'app-env';
import type { LoaderFunction } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { MOCKED_VIEWER } from 'utils/constants/auth';
import { ROUTES } from 'utils/constants/routes';
import {getAuth} from "../../utils/helpers/auth";

/**
 * проверяет авторизацию:
 * - в режиме MODERN проверяет cookie
 * - в режиме LEGACY делает запрос /checkauth
 *
 * если проверка сфейлилась, то произойдет редирект на страницу входа.
 *
 * возвращает данные:
 * - в режиме MODERN вернет данные пользователя
 * - в режиме LEGACY вернет true/false
 *
 * LEGACY-режим использует основной лэйаут (в отличие от MODERN) для не авторизованного пользователя.
 * Поэтому в режиме LEGACY нужно вернуть true/false, чтобы скрывать компоненты, когда пользователь не авторизован.
 *
 * Например, данные о пользователе в шапке, кнопка выход и т.п.
 */
export const viewerLoader: LoaderFunction = async () => {
    try {
        if (ENV_USE_MOCKED_USER) {
            return MOCKED_VIEWER;
        }

        if (ENV_USE_LEGACY_AUTH) {
            const isAuth = await apiV1.auth.checkAuth();
            return isAuth || redirect(ROUTES.LOGIN);
        }

        if(String(getAuth()) == "undefined") {
            return redirect(ROUTES.LOGIN);
        }

        return null
    } catch (error) {
        throw error;
    }
};
