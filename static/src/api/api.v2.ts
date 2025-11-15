import { axiosInstance } from 'lib/api';
import {clearAuth, setAuth, setEnCryptedData} from 'utils/helpers/auth';
import {ENV_BASE_LEGACY_API_URL} from "../app-env";
import { useSessionStorage } from 'utils/hooks/useSession';

import type {
    TLoginReq,
    TLoginRes,
    TLoginJwtRes,
} from './api.v2.types';
import {
    TCheckRoleReq,
    TCheckRoleRes,
    TRoundAddReq,
    TRoundAddRes,
    TRoundItemeq,
    TRoundItemRes,
    TRoundListRes
} from "./api.v2.types";

let headersPost = {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: false
};

let headersGet = {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: false
};

const auth = {
    logIn: (data: TLoginReq) =>
        axiosInstance
            .post<never, TLoginRes | TLoginJwtRes>(`${ENV_BASE_LEGACY_API_URL}/auth/login`, data, headersPost)
            .then((response: any) => {
                if(response.data.accessToken && response.data.validateUser){
                    setAuth(response.data.accessToken);
                    setEnCryptedData(response.data.accessToken);
                }
            }),

    logOut: () =>
        axiosInstance.post(`${ENV_BASE_LEGACY_API_URL}/auth/logout`).then(() => {
            useSessionStorage("userId",String("0"));
            useSessionStorage("userUserName",String(""));
            clearAuth();
        }),
};

const rounds = {
    listRounds: () =>
        axiosInstance
            .get<never, TRoundListRes>(`${ENV_BASE_LEGACY_API_URL}/rounds/all`, headersGet),

    addRound: (data: TRoundAddReq) =>
        axiosInstance
            .post<never, TRoundAddRes>(`${ENV_BASE_LEGACY_API_URL}/rounds`,data, headersPost)
            .then((response: any) => {
                if(response) {

                }
            }),

    roundId: (data: TRoundItemeq) =>
        axiosInstance
            .get<never, TRoundItemRes>(`${ENV_BASE_LEGACY_API_URL}/rounds/${data.roundId}`, headersGet),
};

const user = {
    checkRole: (data: TCheckRoleReq) =>
        axiosInstance
            .post<never, TCheckRoleRes>(`${ENV_BASE_LEGACY_API_URL}/auth/checkRole`, data, headersPost),
};

export const api = {
    auth,
    user,
    rounds
};
