export function getSessionStorageOrDefault(key: any, defaultValue: any): any | null {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
        return defaultValue;
    }
    return stored;
}

export function useSessionStorage(key: any, defaultValue: any) {
    sessionStorage.setItem(key, defaultValue);
}
