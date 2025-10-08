import { useCallback, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

type TValue = string;

type TUpdater = () => void;

type TSetter = Dispatch<SetStateAction<string>>;

/**
 * Обновление ключа для сброса компонента
 */
export const useKey = (): [TValue, TUpdater, TSetter] => {
    const [key, setKey] = useState<TValue>(new Date().toISOString());

    const updateKey = useCallback(() => {
        setKey(new Date().toISOString());
    }, []);

    return [key, updateKey, setKey];
};
