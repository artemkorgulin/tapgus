import type { TProfileRoutes } from 'utils/constants/routes';
import { ROUTES } from 'utils/constants/routes';
import { convertToAbsolute, convertToRelative } from 'utils/helpers/nav-items';

const getAdminNavList = (userRoutes: TProfileRoutes) => [
    {
        path: userRoutes.INDEX_ADMIN,
        title: 'admin',
    },
    {
        path: userRoutes.ADMIN_PAGE_ROUNDS,
        title: 'rounds',
    },
    {
        path: userRoutes.ADMIN_PAGE_COOLDOWN_ROUNDS,
        title: 'coldown',
        isDisabled: true,
    },
    {
        path: userRoutes.ADMIN_PAGE_ROUNDS_USER,
        title: 'rounds user',
    },
    {
        path: userRoutes.ADMIN_PAGE_STATISTICS_ROUNDS,
        title: 'statistics',
    }
];

const NAV_VIEWER = getAdminNavList(ROUTES.VIEWER);
export const NAV_VIEWER_ABS = convertToAbsolute(NAV_VIEWER);
export const NAV_VIEWER_REL = convertToRelative(NAV_VIEWER);

const NAV_USER = getAdminNavList(ROUTES.USER);
export const NAV_USER_REL = convertToRelative(NAV_USER);
