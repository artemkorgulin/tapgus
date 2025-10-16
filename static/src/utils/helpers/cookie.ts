import Cookies from 'js-cookie';

export type TCookieAttributes = Cookies.CookieAttributes;

const get = (key: string) => Cookies.get(key);

const set = (key: string, value: string, options?: TCookieAttributes) =>
    Cookies.set(key, value, options);

const remove = (key: string, options?: TCookieAttributes) =>
    Cookies.remove(key, options);

const has = (key: string) => Boolean(get(key));

export const cookieHelpers = {
    get,
    set,
    has,
    remove,
};
