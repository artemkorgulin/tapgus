import { lazy } from 'react';
import type { NonIndexRouteObject } from 'react-router/dist/lib/context';
import type { TProfileRoutes } from 'utils/constants/routes';
import { CommonCrumb, setCrumb } from 'utils/helpers/breadcrumbs';

import { WithIframe } from 'components/utils/WithIframe';

import { ProfileCrumb } from './crumbs';

const Main = lazy(() => import('pages/profile/Main'));
const SoftSkills = lazy(() => import('pages/profile/soft-skills'));
const HardSkills = lazy(() => import('pages/profile/HardSkills'));

// todo: add context in
export const createProfileRoutes = (
    userRoutes: TProfileRoutes,
    routeProps: NonIndexRouteObject = {},
) => ({
    ...routeProps,
    path: userRoutes.INDEX,
    handle: setCrumb(ProfileCrumb),
    children: [
        {
            index: true,
            path: userRoutes.INDEX,
            element: <WithIframe fallback={<Main />} isFallbackOnly />,
        },
        {
            path: userRoutes.TEAMWORK_HARD_SKILLS,
            handle: setCrumb(CommonCrumb, 'hard-skills'),
            element: <WithIframe fallback={<HardSkills />} />,
        },
        {
            path: userRoutes.TEAMWORK_SOFT_SKILLS,
            handle: setCrumb(CommonCrumb, 'soft-skills'),
            element: <WithIframe fallback={<SoftSkills />} />,
        },

        {
            path: '*',
            element: <WithIframe />,
        },

        ...(routeProps?.children || []),
    ],
});
