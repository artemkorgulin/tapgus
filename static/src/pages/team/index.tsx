import { lazy } from 'react';
import { LayoutContent } from 'layouts/content';
import { ROUTES } from 'utils/constants/routes';
import { setCrumb } from 'utils/helpers/breadcrumbs';

import { WithIframe } from 'components/utils/WithIframe';

import { NAV_VIEWER_ABS } from 'pages/profile/constants';

import { NAV_TEAM } from './constants';
import { TeamDetailsCrumb } from './TeamDetails';

const TeamList = lazy(() => import('./TeamList'));
const TeamDetails = lazy(() => import('./TeamDetails/page'));

export const TEAM_ROUTERS = [
    {
        path: ROUTES.TEAMS,
        element: (
            <WithIframe
                fallback={
                    <LayoutContent navItems={NAV_VIEWER_ABS}>
                        <TeamList />
                    </LayoutContent>
                }
                isFallbackOnly
            />
        ),
        children: [
            {
                path: ROUTES.TEAMS_ALL_REPORTS_AND_PLANS,
                element: <WithIframe />,
            },
        ],
    },
    {
        path: ROUTES.TEAMS_DETAILS,
        element: <LayoutContent navItems={NAV_TEAM} />,
        children: [
            {
                index: true,
                handle: setCrumb(TeamDetailsCrumb),
                element: <WithIframe fallback={<TeamDetails />} />,
            },
            { path: '*', element: <WithIframe /> },
        ],
    },
];
