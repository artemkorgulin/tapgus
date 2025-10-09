import { LayoutContent } from 'layouts/content';
import { userLoader } from 'router/loaders/userLoader';
import { viewerLoader } from 'router/loaders/viewerLoader';
import { ROUTES } from 'utils/constants/routes';

import { NAV_USER_REL, NAV_VIEWER_REL } from './constants';
import { createAdminRoutes } from './helpers';

export const ADMIN_ROUTERS = [
    createAdminRoutes(ROUTES.VIEWER, {
        loader: viewerLoader,
        element: <LayoutContent navItems={NAV_VIEWER_REL} />,
    }),

    createAdminRoutes(ROUTES.USER, {
        loader: userLoader,
        element: <LayoutContent navItems={NAV_USER_REL} />,
    }),
];
