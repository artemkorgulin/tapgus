import { ENV_USE_LEGACY_AUTH } from 'app-env';
import { createNestedRoutes } from 'utils/helpers/breadcrumbs';
import type { IntersectTypes } from 'utils/types/common';

import { SLUG } from './path-slug';

const BASE_ROUTES = {
    HOME: '/',
    TAPGUSS: '/tapguss',
    ADMIN: '/admin',
    TEAMWORK: '/tapguss',
    TEAMS: '/teams',
    PRODUCTS: '/products',
    KNOWLEDGE: '/knowledge',
    COMPANY: '/company',
    RDP: '/rdp',
    LOGIN: '/login',
    LEGACY_LOGIN: '/legacy/login',
};

export const ADMIN_ROUTES = {
    ADMIN_PAGE_ROUNDS: `/rounds`,
    ADMIN_PAGE_ROUNDS_USER: `/rounds`,
    ADMIN_PAGE_STATISTICS_ROUNDS: `/statistics-rounds`,
    ADMIN_PAGE_COOLDOWN_ROUNDS: `/cooldown-rounds`,
};

const ADMIN_BASE = '/admin';
const ADMIN_INDEX = `${ADMIN_BASE}/${SLUG.USER_ID}`;
const ADMIN_USER_ROUTES = createNestedRoutes(ADMIN_INDEX, ADMIN_ROUTES);

export const TEAMWORK_ROUTES = {
    TEAMWORK_STATISTICS: `/statistics`,
    TEAMWORK_LEGEND: `/legend`,
    TEAMWORK_HARD_SKILLS: `/hard-skills`,
    TEAMWORK_SOFT_SKILLS: `/soft-skills`,
    TEAMWORK_RESOURCES: `/resources`,
    TEAMWORK_REPORTS_AND_PLANS: `/reports-and-plans`,
};

const USER_BASE = '/user';
const USER_INDEX = `${USER_BASE}/${SLUG.USER_ID}`;
const USER_ROUTES = createNestedRoutes(USER_INDEX, TEAMWORK_ROUTES);

const VIEWER_INDEX = BASE_ROUTES.TEAMWORK;
const VIEWER_ROUTES = createNestedRoutes(VIEWER_INDEX, TEAMWORK_ROUTES);

const TEAMS_ROUTES = {
    ...createNestedRoutes(`${BASE_ROUTES.TEAMS}/${SLUG.TEAM_ID}`, {
        TEAMS_STATISTICS: `/statistics`,
        TEAMS_LEGEND: `/legend`,
        TEAMS_CALENDAR_AND_TASKS: `/calendar`,
        TEAMS_RESOURCES: `/resources`,
        TEAMS_REPORTS_AND_PLANS: `/reports-and-plans`,
        TEAMS_EVENTS: `/events`,
        TEAMS_TOOLS: `/tools`,
        TEAMS_DETAILS: '',
    }),
    TEAMS_ALL_REPORTS_AND_PLANS: `${BASE_ROUTES.TEAMS}/all-reports-and-plans`,
};

const PRODUCTS_ROUTES = createNestedRoutes(
    `${BASE_ROUTES.PRODUCTS}/${SLUG.PRODUCT_ID}`,
    {
        PRODUCTS_STATISTICS: `/statistics`,
        PRODUCTS_ARCHITECTURE: `/architecture`,
        PRODUCTS_DOCUMENTATION: `/documentation`,
        PRODUCTS_SUPPORT: `/support`,
        PRODUCTS_RESOURCES: `/resources`,
        PRODUCTS_REPORTS_AND_PLANS: `/reports-and-plans`,
        PRODUCTS_VERSIONING: `/versioning`,
        PRODUCTS_DETAILS: '',
    },
);

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
        ...VIEWER_ROUTES,
        ...ADMIN_USER_ROUTES,
        INDEX: VIEWER_INDEX,
    },
    USER: {
        ...USER_ROUTES,
        ...ADMIN_USER_ROUTES,
        INDEX: USER_INDEX,
        BASE: USER_BASE,
    },
    ...TEAMS_ROUTES,
    ...PRODUCTS_ROUTES,
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
export type TProfileCommonProps = IntersectTypes<TRoutesViewer, TRoutesUser>;
