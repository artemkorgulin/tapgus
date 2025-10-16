import jwt, { Secret } from 'jsonwebtoken';
import { ENV_PRIVATE_KEY } from 'app-env';
export const SECRET_KEY: Secret = String(ENV_PRIVATE_KEY);

export const authDecode = async (token: string) => {
    if (!token) {
        throw new Error(`token not decoded`);
    }

    const decoded: any = jwt.verify(token, SECRET_KEY);
    return decoded;
};
