import { lazy } from 'react';
import { LayoutContent } from 'layouts/content';
import { ROUTES } from 'utils/constants/routes';

import { NAV_VIEWER_ABS } from 'pages/admin/constants';

const RoundsList = lazy(() => import('./ListRounds'));
const StatistiscsRounds = lazy(() => import('./StatistiscsRounds'));
const CooldownRounds = lazy(() => import('./CooldownRounds'));
const RoundsUser = lazy(() => import('./RoundsUser'));

export const ADMIN_ROUTERS = [
    {
        route: ROUTES.USER.ADMIN_PAGE_ROUNDS,
        path: ROUTES.ADMIN,
        element: (
            <LayoutContent navItems={NAV_VIEWER_ABS}>
                <RoundsList />
            </LayoutContent>
        ),
    },
    {
        route: ROUTES.USER.ADMIN_PAGE_STATISTICS_ROUNDS,
        path: ROUTES.ADMIN,
        element: (
            <LayoutContent navItems={NAV_VIEWER_ABS}>
                <StatistiscsRounds />
            </LayoutContent>
        ),
    },
    {
        route: ROUTES.USER.ADMIN_PAGE_ROUNDS_USER,
        path: ROUTES.ADMIN,
        element: (
            <LayoutContent navItems={NAV_VIEWER_ABS}>
                <RoundsUser />
            </LayoutContent>
        ),
    },
    {
        route: ROUTES.USER.ADMIN_PAGE_COOLDOWN_ROUNDS,
        path: ROUTES.ADMIN,
        element: (
            <LayoutContent navItems={NAV_VIEWER_ABS}>
                <CooldownRounds />
            </LayoutContent>
        ),
    },
];
