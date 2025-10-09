import { ENV_BASE_LEGACY_API_URL } from 'app-env';

import type { TLegacyCheckAuthReq } from './api.v1.types';
import {setAuth, setToken} from 'utils/helpers/auth';

const auth = {
    checkAuth: async () => {
        try {
            const response = await fetch(
                `${ENV_BASE_LEGACY_API_URL}/auth/checkauth`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                    mode: 'cors',
                },
            );
            const { status, token }: TLegacyCheckAuthReq = await response.json();
            if(status === 'success'){
                setToken(String(token));
                setAuth(String(token));
            }
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
