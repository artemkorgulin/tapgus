import { apiV1, apiV2 } from 'api';
import { ENV_USE_LEGACY_AUTH } from 'app-env';
import { redirect } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes';

export const logoutAction = async () => {
    if (ENV_USE_LEGACY_AUTH) {
        await apiV1.auth.logOut();
    } else {
        await apiV2.auth.logOut();
    }

    return redirect(ROUTES.LOGIN);
};
