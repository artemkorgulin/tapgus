import {jwtDecode} from "jwt-decode";

export const authDecode = async (token: string) => {
    if (!token) {
        throw new Error(`token not decoded`);
    }

    return jwtDecode(token);
};
