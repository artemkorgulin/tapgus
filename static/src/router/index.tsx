import { LayoutBlank } from 'layouts/empty';
import { LayoutMain } from 'layouts/main';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter, redirect } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes';
import { CommonCrumb, setCrumb } from 'utils/helpers/breadcrumbs';

import { ErrorBoundary } from 'components/uiKit/ErrorBoundary';

import { ACTION_ROUTES } from 'pages/actions';
import { AUTH_ROUTERS } from 'pages/auth';
import * as COMMON from 'pages/common';
import { PRODUCT_ROUTERS } from 'pages/product';
import { PROFILE_ROUTERS } from 'pages/profile';
import { RDP_ROUTES } from 'pages/rdp';
import { TEAM_ROUTERS } from 'pages/team';

import { viewerLoader } from './loaders/viewerLoader';

const routeObject: RouteObject[] = [
    ...AUTH_ROUTERS,
    {
        index: true,
        loader: async () => redirect(ROUTES.VIEWER.INDEX),
    },
    {
        path: ROUTES.HOME,
        handle: setCrumb(CommonCrumb, 'home'),
        loader: viewerLoader,
        element: <LayoutMain />,
        errorElement: (
            <LayoutBlank>
                <ErrorBoundary />
            </LayoutBlank>
        ),
        children: [
            ...PROFILE_ROUTERS,
            ...TEAM_ROUTERS,
            ...PRODUCT_ROUTERS,
            ...RDP_ROUTES,
            ...COMMON.BITRIX_FALLBACK_ROUTERS,
            ...COMMON.ERROR_ROUTERS,
        ],
    },

    ...ACTION_ROUTES,
    ...COMMON.ERROR_ROUTERS,
    ...COMMON.DEV_ROUTERS,
];

export const router = createBrowserRouter(routeObject);
