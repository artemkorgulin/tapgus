import type { TBitrixResponse } from 'api/api.v2.types';
import { ENV_BASE_API_URL } from 'app-env';
import type { Axios, AxiosResponse } from 'axios';
import axios, { isAxiosError } from 'axios';
import { clearAuth, getAuth } from 'utils/helpers/auth';

const onReject = (error: unknown) => {
    if (error && isAxiosError(error) && error.response?.status === 401) {
        // todo: заменить очистку на рефреш в рамках
        clearAuth();
        return Promise.reject(error);
    }

    return Promise.reject(error);
};

const createAxiosInstance = (url?: string): Axios => {
    const axiosInstance = axios.create({
        baseURL: url,
        timeout: 10000,
        withCredentials: true,
    });

    axiosInstance.interceptors.response.use(
        <T = unknown>(response: AxiosResponse<TBitrixResponse<T>>): T =>
            response.data.data,
        onReject,
    );

    return axiosInstance;
};

const createIframeInstance = (url?: string): Axios => {
    const iframeInstance = axios.create({
        baseURL: url,
        withCredentials: false,
    });

    iframeInstance.interceptors.request.use((config) => {
        const token = getAuth();

        if (token) {
            config.headers['Authorization'] = token;
        }

        return config;
    }, onReject);

    return iframeInstance;
};

export const axiosInstance = createAxiosInstance(ENV_BASE_API_URL);

// todo: удалить после релиза
export const iframeInstance = createIframeInstance(ENV_BASE_API_URL);
