import { ENV_USE_LEGACY_AUTH } from 'app-env';
import { createNestedRoutes } from 'utils/helpers/breadcrumbs';
import type { IntersectTypes } from 'utils/types/common';

import { SLUG } from './path-slug';

const BASE_ROUTES = {
    HOME: '/',
    TAPGUSS: '/tapguss',
    GAMER: '/user',
    LOGIN: '/login',
    LEGACY_LOGIN: '/legacy/login',
};

export const GAMER_MAN_ROUTES = {
    GAMER_PAGE_ROUNDS: `/rounds`,
    GAMER_PAGE_ROUNDS_USER: `/rounds`,
    GAMER_PAGE_STATISTICS_ROUNDS: `/statistics-rounds`,
    GAMER_PAGE_COOLDOWN_ROUNDS: `/cooldown-rounds`,
};

const GAMER_BASE = '/user';
const GAMER_INDEX = `${GAMER_BASE}`;
const GAMER_USER_ROUTES = createNestedRoutes(GAMER_INDEX, GAMER_MAN_ROUTES);

export const GAMER_ROUND_ROUTES = {
    GAMER_PAGE_DETAIL_STATISTICS: `/round/${SLUG.ROUND_ID}`,
    GAMER_PAGE_DETAIL: `/round`,
};
const GAMER_USER_ROUND_DETAIL_ROUTES = createNestedRoutes(GAMER_INDEX, GAMER_ROUND_ROUTES);

const BASE_ROUTE = '/bitrix';
const BITRIX_ROUTES = {
    BITRIX_ROUTE: BASE_ROUTE,
    BITRIX_FALLBACK: `${BASE_ROUTE}/*`,
};

export const DEV_ROUTES = {
    UI_BOOK: '/uibook',
};

export const ROUTES = {
    ...BASE_ROUTES,
    VIEWER: {
        ...GAMER_USER_ROUTES,
        ...GAMER_USER_ROUND_DETAIL_ROUTES,
        INDEX: GAMER_INDEX,
    },
    USER: {
        ...GAMER_USER_ROUTES,
        ...GAMER_USER_ROUND_DETAIL_ROUTES,
        INDEX: GAMER_INDEX,
        BASE: GAMER_BASE,
    },
    ...BITRIX_ROUTES,
    ACTIONS: {
        LOGOUT: '/actions/logout',
    },

    LOGIN: ENV_USE_LEGACY_AUTH ? '/login' : '/login',
    NOT_FOUND: '/not-found',
    NOT_FOUND_USER: '/user-not-found',
    NOT_FOUND_EXTERNAL_PATH: '/external-path-not-found',
};

export type TRoutesViewer = typeof ROUTES.VIEWER;
export type TRoutesUser = typeof ROUTES.USER;
export type TProfileRoutes = TRoutesViewer | TRoutesUser;
export type TUserRoutes = TRoutesViewer | TRoutesUser;
export type TProfileCommonProps = IntersectTypes<TRoutesViewer, TRoutesUser>;
