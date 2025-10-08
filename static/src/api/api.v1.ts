import { ENV_BASE_LEGACY_API_URL } from 'app-env';

import type { TLegacyCheckAuthReq } from './api.v1.types';

const auth = {
    checkAuth: async () => {
        try {
            const response = await fetch(
                `${ENV_BASE_LEGACY_API_URL}/api/auth/checkauth`,
                {
                    method: 'POST',
                    credentials: 'include',
                    mode: 'cors',
                },
            );

            const { status }: TLegacyCheckAuthReq = await response.json();
            console.log(status);
            return status === 'success';
        } catch (e) {
            console.error(e);
            return false;
        }
    },

    logOut: async () => {
        try {
            await fetch(`${ENV_BASE_LEGACY_API_URL}/api/auth/logout`, {
                redirect: 'manual',
            });
            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    },
};

export const api = {
    auth,
};
