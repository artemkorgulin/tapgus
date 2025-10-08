import { lazy } from 'react';
import { LayoutContent } from 'layouts/content';
import { LayoutMain } from 'layouts/main';
import { DEV_ROUTES, ROUTES } from 'utils/constants/routes';

import { WithIframe } from 'components/utils/WithIframe';

const UiBook = lazy(() => import('./UiBook'));

export const BITRIX_FALLBACK_ROUTERS = [
    {
        path: ROUTES.BITRIX_FALLBACK,
        element: (
            <LayoutContent>
                <WithIframe />
            </LayoutContent>
        ),
    },
];

export const DEV_ROUTERS = [
    {
        path: DEV_ROUTES.UI_BOOK,
        element: (
            <LayoutMain>
                <LayoutContent>
                    <UiBook />
                </LayoutContent>
            </LayoutMain>
        ),
    },
];

export const ERROR_ROUTERS = [
    { path: ROUTES.NOT_FOUND, element: '404 - not found' },
    { path: ROUTES.NOT_FOUND_USER, element: '404 - user not found' },
    { path: '*', element: '404 - page not found' },
];
