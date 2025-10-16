import { LayoutBlank } from 'layouts/empty';
import { LayoutMain } from 'layouts/main';
import { LayoutContent } from 'layouts/content';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter, redirect } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes';
import { CommonCrumb, setCrumb } from 'utils/helpers/breadcrumbs';

import { ErrorBoundary } from 'components/uiKit/ErrorBoundary';

import { ACTION_ROUTES } from 'pages/actions';
import { AUTH_ROUTERS } from 'pages/auth';
import * as COMMON from 'pages/common';
import { GAMER_ROUTERS } from 'pages/user';

import { viewerLoader } from './loaders/viewerLoader';
import {getAuth} from "../utils/helpers/auth";

let routeObject: RouteObject[];
if(String(getAuth()) == "undefined") {
    routeObject = [
        ...AUTH_ROUTERS,
        {
            index: true,
            loader: async () => redirect(ROUTES.VIEWER.INDEX),
        },
        {
            path: ROUTES.HOME,
            handle: setCrumb(CommonCrumb, 'home'),
            loader: viewerLoader,
            element: <LayoutMain/>,
            errorElement: (
                <LayoutBlank>
                    <ErrorBoundary/>
                </LayoutBlank>
            ),
            children: [
                ...COMMON.BITRIX_FALLBACK_ROUTERS,
                ...COMMON.ERROR_ROUTERS,
            ],
        },

        ...ACTION_ROUTES,
        ...COMMON.ERROR_ROUTERS,
        ...COMMON.DEV_ROUTERS,
    ];
} else {
    routeObject = [
        ...AUTH_ROUTERS,
        {
            index: true,
            loader: async () => redirect(ROUTES.VIEWER.GAMER_PAGE_DETAIL_STATISTICS),
        },
        {
            path: ROUTES.GAMER,
            loader: viewerLoader,
            element: <LayoutContent/>,
            children: [
                ...GAMER_ROUTERS,
            ],
        },
        ...ACTION_ROUTES,
        ...COMMON.ERROR_ROUTERS,
        ...COMMON.DEV_ROUTERS,
    ];
}

export const router = createBrowserRouter(routeObject);
