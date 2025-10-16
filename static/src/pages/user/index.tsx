import { lazy } from 'react';
import { LayoutContent } from 'layouts/content';
import { ROUTES } from 'utils/constants/routes';

const Rounds = lazy(() => import('./rounds'));
const Statistics = lazy(() => import('./statistics'));

export const GAMER_ROUTERS = [
    {
        route: ROUTES.USER.GAMER_PAGE_ROUNDS,
        path: ROUTES.GAMER,
        element: (
            <LayoutContent>
                <Rounds />
            </LayoutContent>
        ),
    },
    {
        route: ROUTES.USER.GAMER_PAGE_ROUNDS,
        path: '/user/rounds',
        element: (
            <LayoutContent>
                <Rounds />
            </LayoutContent>
        ),
    },
    {
        route: ROUTES.USER.GAMER_PAGE_DETAIL_STATISTICS,
        path: '/user/round/:roundId',
        element: (
            <LayoutContent>
                <Statistics />
            </LayoutContent>
        ),
    }
];
