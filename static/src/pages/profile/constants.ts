import type { TProfileRoutes } from 'utils/constants/routes';
import { ROUTES } from 'utils/constants/routes';
import { convertToAbsolute, convertToRelative } from 'utils/helpers/nav-items';

const getProfileNavList = (userRoutes: TProfileRoutes) => [
    {
        path: userRoutes.INDEX,
        title: 'main',
    },
    {
        path: userRoutes.TEAMWORK_STATISTICS,
        title: 'statistics',
    },
    {
        path: userRoutes.TEAMWORK_LEGEND,
        title: 'legend',
        isDisabled: true,
    },
    {
        path: userRoutes.TEAMWORK_HARD_SKILLS,
        title: 'hard skills',
    },
    {
        path: userRoutes.TEAMWORK_SOFT_SKILLS,
        title: 'soft skills',
    },
    {
        path: userRoutes.TEAMWORK_RESOURCES,
        title: 'achievements',
        isDisabled: true,
    },
    {
        path: userRoutes.TEAMWORK_REPORTS_AND_PLANS,
        title: 'interests',
        isDisabled: true,
    },
];

const NAV_VIEWER = getProfileNavList(ROUTES.VIEWER);
export const NAV_VIEWER_ABS = convertToAbsolute(NAV_VIEWER);
export const NAV_VIEWER_REL = convertToRelative(NAV_VIEWER);

const NAV_USER = getProfileNavList(ROUTES.USER);
export const NAV_USER_REL = convertToRelative(NAV_USER);
