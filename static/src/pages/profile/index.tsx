import { LayoutContent } from 'layouts/content';
import { userLoader } from 'router/loaders/userLoader';
import { viewerLoader } from 'router/loaders/viewerLoader';
import { ROUTES } from 'utils/constants/routes';

import { NAV_USER_REL, NAV_VIEWER_REL } from './constants';
import { createProfileRoutes } from './helpers';

export const PROFILE_ROUTERS = [
    createProfileRoutes(ROUTES.VIEWER, {
        loader: viewerLoader,
        element: <LayoutContent navItems={NAV_VIEWER_REL} />,
    }),

    createProfileRoutes(ROUTES.USER, {
        loader: userLoader,
        element: <LayoutContent navItems={NAV_USER_REL} />,
    }),
];
