type TKeyValPair = [string, string][];

/**
 * Меняет местами ключи и значения в массиве [string, string][]
 * @param arr
 */
export const invertKeyVal = (arr: TKeyValPair): TKeyValPair =>
    arr.map(([key, value]) => [value, key]);
