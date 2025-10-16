import { apiV1 } from 'api';
import { ENV_USE_LEGACY_AUTH } from 'app-env';
import { redirect } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes';
import { catchHandler } from 'utils/helpers/api';

export const loginLoader = async () => {
    try {
        if (ENV_USE_LEGACY_AUTH) {
            const isAuth = await apiV1.auth.checkAuth().catch(catchHandler());
            return isAuth ? redirect(ROUTES.HOME) : null;
        }

        return null;
    } catch (error) {
        throw error;
    }
};
