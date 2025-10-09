import { ENV_USE_MOCKED_USER } from 'app-env';
import type { LoaderFunction } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { MOCKED_USER } from 'utils/constants/auth';
import { SLUG } from 'utils/constants/path-slug';
import { ROUTES } from 'utils/constants/routes';
import { checkAuth } from 'utils/helpers/auth';

/**
 * Извлекает имя параметра из slug
 * @param slug
 * @example
 * getParamKeyFromSlug(":userId"); // "userId"
 */
const getParamKeyFromSlug = (slug: string) => slug.slice(1);

export const userLoader: LoaderFunction = async ({ params }) => {
    try {
        if (ENV_USE_MOCKED_USER) {
            return MOCKED_USER;
        }

        const paramKey = getParamKeyFromSlug(SLUG.USER_ID);
        const userId = params[paramKey];
        console.log(userId);
        if (checkAuth()) {
            return redirect(ROUTES.TAPGUSS);
        }

        return redirect(ROUTES.NOT_FOUND_USER);
    } catch (error) {
        throw error;
    }
};
