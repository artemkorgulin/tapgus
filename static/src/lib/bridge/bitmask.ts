const USE_NOTIFY = 'USE_NOTIFY';
const USE_SOUND = 'USE_SOUND';

const FLAGS = createFlags([USE_NOTIFY, USE_SOUND]);

type TFlagKey = keyof typeof FLAGS;

export type TIframeOptions = Record<TFlagKey, boolean>;

/**
 * Создает карту флагов
 * Значение каждого флага - степень двойки
 */
function createFlags<T extends string>(flagsArray: T[]): Record<T, number> {
    return flagsArray.reduce(
        (acc, flag, index) => ({ ...acc, [flag]: 1 << index }),
        {} as Record<T, number>,
    );
}

/**
 * Конвертирует флаги в маску
 */
export const getMaskFromOptions = (
    options: Partial<TIframeOptions>,
    flags = FLAGS,
): string => {
    let mask = 0;

    for (const flagKey in flags) {
        if (options[flagKey as TFlagKey]) {
            mask |= flags[flagKey as TFlagKey];
        }
    }

    return String(mask);
};

/**
 * Парсит маску и возвращает флаги
 */
export const getOptionsFromMask = (
    mask: string,
    flags = FLAGS,
): TIframeOptions => {
    const options = {} as TIframeOptions;

    for (const flagKey in flags) {
        options[flagKey as TFlagKey] =
            (Number(mask) & flags[flagKey as TFlagKey]) !== 0;
    }

    return options;
};
