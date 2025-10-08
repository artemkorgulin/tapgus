import { logoutAction } from 'router/actions/logoutAction';
import { ROUTES } from 'utils/constants/routes';

export const ACTION_ROUTES = [
    { path: ROUTES.ACTIONS.LOGOUT, action: logoutAction },
];
