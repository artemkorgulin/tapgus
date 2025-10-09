import { adapters } from 'api/adapters';
import type { GenericAbortSignal } from 'axios';
import { axiosInstance, iframeInstance } from 'lib/api';
import qs from 'qs';
import { clearAuth, setAuth } from 'utils/helpers/auth';
import {ENV_BASE_LEGACY_API_URL} from "../app-env";

import type {
    TLoginReq,
    TLoginRes,
    TProductsListRaw,
    TTeamDetails,
    TTeamDetailsRaw,
    TTeamsListRaw,
    TUserData,
    TUserDataRaw,
} from './api.v2.types';

let headers = {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    }
};

const auth = {
    logIn: (data: TLoginReq) =>
        axiosInstance
            .post<never, TLoginRes>(`${ENV_BASE_LEGACY_API_URL}/auth/login`, data, headers)
            .then((data) => {
                if(data.accessToken){
                    setAuth(data.accessToken);
                } else if(data.token){
                    setAuth(data.token);
                }
            }),

    logOut: () =>
        axiosInstance.post(`${ENV_BASE_LEGACY_API_URL}/auth/logout`).then(() => {
            clearAuth();
        }),
};

const user = {
    getMe: (): Promise<TUserData> =>
        axiosInstance
            .get<never, TUserDataRaw>('/personal/')
            .then(adapters.userData),

    getOne: (id: string): Promise<TUserData> =>
        axiosInstance
            .post<never, TUserDataRaw>(`/personal/user/${id}/ `)
            .then(adapters.userData),

    findMany: (params: { login?: string; fio?: string; email?: string }) =>
        axiosInstance
            .post<
                never,
                TUserDataRaw[]
            >(`/personal/finder/?${qs.stringify(params)}`)
            .then(adapters.usersFound),
};

const teams = {
    getAll: () =>
        axiosInstance
            .post<never, TTeamsListRaw>('/teams/list/')
            .then(adapters.teamsList),

    getOne: (teamId: string): Promise<TTeamDetails> =>
        axiosInstance
            .post<never, TTeamDetailsRaw>(`/teams/${teamId}/`)
            .then(adapters.teamDetails),
};

const products = {
    getAll: async () => {
        const data = await axiosInstance.post<never, TProductsListRaw>(
            '/products/list/',
        );
        return adapters.productsList(data);
    },
};

const iframe = {
    getContent: (path: string, config?: { signal: GenericAbortSignal }) =>
        iframeInstance.get(`/api/page/${path}`, config),
};

export const api = {
    iframe,
    auth,
    user,
    teams,
    products,
};
