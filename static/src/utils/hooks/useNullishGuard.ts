export const useNullishGuard = <T = unknown>(value: T) => {
    if (value === undefined || value === null) {
        throw new Error(`useNullishGuard: the value is equal ${value}`);
    }

    return value;
};
