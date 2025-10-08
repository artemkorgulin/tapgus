import { SLUG } from 'utils/constants/path-slug';
import type { TProfileRoutes } from 'utils/constants/routes';
import { ROUTES } from 'utils/constants/routes';

import { invertKeyVal } from './lib';
import type { TBitrixPath, TReactPath } from './type';

const BITRIX_ROUTES = {
    PROFILE: `/profile/${SLUG.USER_ID}/`,
    TEAMWORK_STATISTICS: `/profile/statistics/${SLUG.USER_ID}/`,
    TEAMWORK_HARD_SKILLS: `/profile/${SLUG.USER_ID}/skillset/`,
    TEAMWORK_SOFT_SKILLS: `/profile/soft-skills/${SLUG.USER_ID}/`,
    TEAMS: '/profile/teams/',
    PRODUCTS: '/profile/products/',
    TEAM_DETAILS: `/teams/${SLUG.TEAM_ID}/`,
    TEAM_CALENDAR_AND_TASKS: `/teams/${SLUG.TEAM_ID}/calendar/`,
    TEAM_REPORTS_AND_PLANS: `/teams/${SLUG.TEAM_ID}/reports-and-plans/`,
    TEAM_ALL_REPORTS_AND_PLANS: `/teams/reports-and-plans/`,
    PRODUCT_DETAILS: `/products/${SLUG.PRODUCT_ID}/`,
    PRODUCT_REPORTS_AND_PLANS: `/products/${SLUG.PRODUCT_ID}/reports-and-plans/`,
    RDP: '/stats/rdp/',
};

const BITRIX_PATH_ARR_RAW: [TReactPath, TBitrixPath][] = [
    [ROUTES.TEAMWORK, BITRIX_ROUTES.PROFILE],
    [ROUTES.TEAMS, BITRIX_ROUTES.TEAMS],
    [ROUTES.PRODUCTS, BITRIX_ROUTES.PRODUCTS],
    [ROUTES.TEAMS_DETAILS, BITRIX_ROUTES.TEAM_DETAILS],
    [ROUTES.TEAMS_CALENDAR_AND_TASKS, BITRIX_ROUTES.TEAM_CALENDAR_AND_TASKS],
    [ROUTES.TEAMS_REPORTS_AND_PLANS, BITRIX_ROUTES.TEAM_REPORTS_AND_PLANS],
    [
        ROUTES.TEAMS_ALL_REPORTS_AND_PLANS,
        BITRIX_ROUTES.TEAM_ALL_REPORTS_AND_PLANS,
    ],

    [ROUTES.PRODUCTS_DETAILS, BITRIX_ROUTES.PRODUCT_DETAILS],
    [
        ROUTES.PRODUCTS_REPORTS_AND_PLANS,
        BITRIX_ROUTES.PRODUCT_REPORTS_AND_PLANS,
    ],
    [ROUTES.RDP, BITRIX_ROUTES.RDP],
];

/**
 * Создание связей для роутов прояиля viewer и user
 * @param profile
 */
const createProfileMap = (
    profile: TProfileRoutes,
): [TReactPath, TBitrixPath][] => [
    [profile.INDEX, BITRIX_ROUTES.PROFILE],
    [profile.TEAMWORK_STATISTICS, BITRIX_ROUTES.TEAMWORK_STATISTICS],
    [profile.TEAMWORK_HARD_SKILLS, BITRIX_ROUTES.TEAMWORK_HARD_SKILLS],
    [profile.TEAMWORK_SOFT_SKILLS, BITRIX_ROUTES.TEAMWORK_SOFT_SKILLS],
];

/**
 * Список динамических путей для viewer.
 * Данные пути не содержат slug, например: /me, /teamwork
 * Поэтому данные посдатвляются из контекста
 */
const VIEWER_DYNAMIC_PATHS = new Set(
    createProfileMap(ROUTES.VIEWER).map(([item]) => item),
);

const USER_PATH_MAP = createProfileMap(ROUTES.USER);
const VIEWER_PATH_MAP = createProfileMap(ROUTES.VIEWER);

/**
 * Карта связей роутов Реакта с Битриксом
 */
const BITRIX_PATH_MAP = new Map<TReactPath, TBitrixPath>([
    ...BITRIX_PATH_ARR_RAW,
    ...USER_PATH_MAP,
    ...VIEWER_PATH_MAP,
]);

/**
 * Карта связей роутов Битрикса с Реактом
 * Используется для синхронизации роутинга, при переходах внутри iframe
 *
 * Примечание:
 * Связи из USER_PATH_MAP и VIEWER_PATH_MAP пересекаются,
 * поэтому воизбежание проблем c переходами по пользовательским
 * роутам, используем только USER_PATH_MAP
 *
 * Пример проблемы:
 * BITRIX_PATH_MAP содержит 12 записей
 * REACT_PATH_MAP содержит 8 записей
 *
 * Разница из-за одинаковых значений в BITRIX_PATH_MAP:
 * new Map([
 *     [
 *         "/teamwork",
 *         "/profile/:userId/"
 *     ],
 *     [
 *         "/user/:userId",
 *         "/profile/:userId/"
 *     ],
 *     ...
 * ])
 */
const REACT_PATH_MAP = new Map(
    invertKeyVal([...BITRIX_PATH_ARR_RAW, ...USER_PATH_MAP]),
);

export { BITRIX_PATH_MAP, BITRIX_ROUTES, REACT_PATH_MAP, VIEWER_DYNAMIC_PATHS };
