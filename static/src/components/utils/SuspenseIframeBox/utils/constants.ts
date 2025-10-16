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
    [ROUTES.HOME, BITRIX_ROUTES.PROFILE]
];

/**
 * Создание связей для роутов прояиля viewer и user
 * @param profile
 */
const createProfileMap = (
    profile: TProfileRoutes,
): [TReactPath, TBitrixPath][] => [
    [profile.INDEX, BITRIX_ROUTES.PROFILE],
];

const USER_PATH_MAP = createProfileMap(ROUTES.USER);
const VIEWER_PATH_MAP = createProfileMap(ROUTES.VIEWER);

/**
 * Карта связей роутов Реакта с бэкенда
 */
const BITRIX_PATH_MAP = new Map<TReactPath, TBitrixPath>([
    ...BITRIX_PATH_ARR_RAW,
    ...USER_PATH_MAP,
    ...VIEWER_PATH_MAP,
]);

/**
 * Карта связей роутов бэкенда с Реактом
 * Используется для синхронизации роутинга, при переходах внутри iframe
 *
 * Примечание:
 * Связи из USER_PATH_MAP и VIEWER_PATH_MAP пересекаются,
 * поэтому воизбежание проблем c переходами по пользовательским
 * роутам, используем только USER_PATH_MAP
 *
 *
 * Разница из-за одинаковых значений в *_PATH_MAP:
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

export { BITRIX_PATH_MAP, BITRIX_ROUTES, REACT_PATH_MAP };
