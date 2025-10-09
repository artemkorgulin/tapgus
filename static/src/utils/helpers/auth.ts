import { cookieHelpers } from "utils/helpers/cookie";
import type { TCookieAttributes } from "utils/helpers/cookie";
import type { TViewerData, TViewerDataLegacy } from 'utils/types/auth';

const AUTH_COOKIE_KEY = 'accessToken';
const AUTH_COOKIE_TOKEN_KEY = 'token';

const getCookieOptions = ():TCookieAttributes => {
    const domain = location.hostname.split('.').slice(1).join('.');

    return {
        path: '/',
        sameSite: 'Lax',
        domain,
        secure: true,
    }
}

export const setAuth = (accessToken: string, options = getCookieOptions()) => {
    cookieHelpers.set(AUTH_COOKIE_KEY, accessToken, options);
};
export const setToken = (token: string | undefined, options = getCookieOptions()) => {
    cookieHelpers.set(AUTH_COOKIE_TOKEN_KEY, String(token), options);
};

export const getAuth = () => cookieHelpers.get(AUTH_COOKIE_KEY);

export const getToken = () => cookieHelpers.get(AUTH_COOKIE_TOKEN_KEY);

export const clearAuth = (options = getCookieOptions()) => {
    cookieHelpers.remove(AUTH_COOKIE_KEY, options);
    cookieHelpers.remove(AUTH_COOKIE_TOKEN_KEY, options);
};

export const checkAuth = () => cookieHelpers.has(AUTH_COOKIE_KEY);

export const isLegacyViewerData = (
    loaderData: TViewerData | TViewerDataLegacy,
): loaderData is TViewerDataLegacy =>
    typeof (loaderData as TViewerDataLegacy) === 'boolean';
