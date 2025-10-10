import { ENV_USE_MOCKED_USER } from 'app-env';
import type { LoaderFunction } from 'react-router-dom';
import { MOCKED_USER } from 'utils/constants/auth';

export const userLoader: LoaderFunction = async ({ }) => {
    try {
        if (ENV_USE_MOCKED_USER) {
            return MOCKED_USER;
        }

        return null;
    } catch (error) {
        throw error;
    }
};
