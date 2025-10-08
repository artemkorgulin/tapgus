import { useEffect, useState } from 'react';
import { catchHandler } from 'utils/helpers/api';
import type { Nullable } from 'utils/types/common';

export type TUseQueryReturn<T> = {
    isLoading: boolean;
    error: string;
    data: Nullable<T>;
};

type MethodWithPayload<TData, TProps> = (payload: TProps) => Promise<TData>;

type MethodWithoutPayload<TData> = () => Promise<TData>;

type TApiMethod<TData, TProps> =
    | MethodWithoutPayload<TData>
    | MethodWithPayload<TData, TProps>;

export const useQuery = <TData, TProps>(
    apiMethod: TApiMethod<TData, TProps>,
    payload?: TProps,
    initialData: Nullable<TData> = null,
    skip = false,
): TUseQueryReturn<TData> => {
    const [data, setData] = useState<Nullable<TData>>(initialData);
    const [isLoading, setIsLoading] = useState<boolean>(data === null);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        function getData() {
            setIsLoading(true);

            (payload
                ? apiMethod(payload)
                : (apiMethod as MethodWithoutPayload<TData>)()
            )
                .then(setData)
                .catch(catchHandler(setError))
                .finally(() => {
                    setIsLoading(false);
                });
        }

        if (!skip) {
            getData();
        }
    }, [apiMethod, payload, skip]);

    return { data, isLoading, error };
};
