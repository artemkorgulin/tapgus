export const ENV_IS_DEVELOP = Boolean(import.meta.env.MODE === 'development');

/**
 * ENV_USE_LEGACY_AUTH - использовать старую авторизацию
 */
export const ENV_USE_LEGACY_AUTH = Boolean(
    import.meta.env.VITE_USE_LEGACY_AUTH === 'true',
);

/**
 * ENV_USE_IFRAMES - использовать iframe-компоненты
 */
export const ENV_USE_IFRAMES = Boolean(
    import.meta.env.VITE_USE_IFRAMES === 'true',
);

export const ENV_USE_IFRAME_DEBUG =
    import.meta.env.VITE_USE_IFRAME_DEBUG === 'true';

/**
 * ENV_EXTERNAL_BASE_URL - базовый URL iframe-компонентов
 */
export const ENV_EXTERNAL_BASE_URL = String(
    import.meta.env.VITE_EXTERNAL_BASE_URL,
);

/**
 * ENV_USE_MOCKED_USER - использовать замоканного пользователя
 */
export const ENV_USE_MOCKED_USER = Boolean(
    import.meta.env.VITE_USE_MOCKED_USER === 'true',
);

/**
 * ENV_BASE_API_URL - базовый URL к текущему API
 */
export const ENV_BASE_API_URL = String(import.meta.env.VITE_BASE_API_URL);

/**
 * ENV_ROUND_DURATION - Время на раунд в секундах
 */
export const ENV_ROUND_DURATION = String(
    import.meta.env.VITE_ROUND_DURATION,
);

/**
 * ENV_COOLDOWN_DURATION - Время между датой создания раунда и датой начала , время обратного отчёта в секундах
 */
export const ENV_COOLDOWN_DURATION = String(
    import.meta.env.VITE_COOLDOWN_DURATION,
);

/**
 * ENV_PRIVATE_KEY - Secret key
 */
export const ENV_PRIVATE_KEY = String(
    import.meta.env.VITE_PRIVATE_KEY,
);

/**
 * ENV_BASE_API_URL - базовый URL к Legacy API
 */
export const ENV_BASE_LEGACY_API_URL = String(
    import.meta.env.VITE_BASE_LEGACY_API_URL,
);

// BitrixEmulator on/off
export const ENV_USE_BITRIX_EMULATOR = Boolean(
    import.meta.env.VITE_USE_BITRIX_EMULATOR === 'true',
);
