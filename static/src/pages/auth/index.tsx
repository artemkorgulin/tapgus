import { lazy } from 'react';
import { ENV_USE_LEGACY_AUTH } from 'app-env';
import { LayoutBlank } from 'layouts/empty';
import { LayoutMain } from 'layouts/main';
import { logoutAction } from 'router/actions/logoutAction';
import { loginLoader } from 'router/loaders/loginLoader';
import { ROUTES } from 'utils/constants/routes';

import { ErrorBoundary } from 'components/uiKit/ErrorBoundary';

const LoginPage = lazy(() => import('./Login'));
const LoginLegacyPage = lazy(() => import('./LoginLegacy'));

export const AUTH_ROUTERS = [
    ENV_USE_LEGACY_AUTH
        ? {
              path: ROUTES.LOGIN,
              loader: loginLoader,
              element: (
                  <LayoutMain>
                      <LoginLegacyPage />
                  </LayoutMain>
              ),
              errorElement: (
                  <LayoutMain>
                      <ErrorBoundary />
                  </LayoutMain>
              ),
          }
        : {
              path: ROUTES.LOGIN,
              loader: loginLoader,
              element: (
                  <LayoutBlank>
                      <LoginPage />
                  </LayoutBlank>
              ),
          },

    { path: ROUTES.ACTIONS.LOGOUT, action: logoutAction },
];
