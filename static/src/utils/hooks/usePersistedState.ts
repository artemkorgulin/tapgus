import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

type PersistedState<T> = [T, Dispatch<SetStateAction<T>>];

export const usePersistedState = <T>(
    defaultValue: T,
    cacheKey: string,
    isPersistEnable = true,
    isTabsSync = false,
): PersistedState<T> => {
    const [value, setValue] = useState<T>(() => {
        if (!isPersistEnable) {
            return defaultValue;
        }

        try {
            const value = window.localStorage.getItem(cacheKey);
            return value ? (JSON.parse(value) as T) : defaultValue;
        } catch (e) {
            console.error('using localStorage causes an error', e);
            return defaultValue;
        }
    });

    useEffect(() => {
        if (isPersistEnable) {
            try {
                window.localStorage.setItem(cacheKey, JSON.stringify(value));
            } catch (e) {
                console.error('using localStorage causes an error', e);
            }
        }
    }, [cacheKey, value, isPersistEnable]);

    useEffect(() => {
        const syncState = (e: StorageEvent) => {
            try {
                if (e.key === cacheKey && e.newValue) {
                    setValue(JSON.parse(e.newValue) as T);
                }
            } catch (e) {
                console.error('using localStorage causes an error', e);
            }
        };

        if (isTabsSync) {
            window.addEventListener('storage', syncState);
        }

        return () => {
            window.removeEventListener('storage', syncState);
        };
    }, [isTabsSync, cacheKey]);

    return [value, setValue];
};
