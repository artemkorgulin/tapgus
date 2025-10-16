import type { AxiosError } from 'axios';
import { isAxiosError } from 'axios';
import { I18N } from 'lib/i18n/text';
import type { BitrixErrorData } from 'utils/types/api';

type AxiosErrorHandlerFn = (message: string) => void;

const errorHandlerFnDefault: AxiosErrorHandlerFn = () => {
    return null;
};

export const catchHandler =
    (errorHandlerFn = errorHandlerFnDefault) =>
    (error: AxiosError) => {
        if (isAxiosError<BitrixErrorData>(error)) {
            // todo: research i18n correct usage in

            errorHandlerFn(
                error?.response?.data.message ||
                    I18N.AXIOS_ERROR_NODE_UNKNOWN,
            );
        } else {
            console.error(error);
        }

        throw error;
    };
