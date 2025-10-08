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
 * ENV_BASE_API_URL - базовый URL к Legacy API
 */
export const ENV_BASE_LEGACY_API_URL = String(
    import.meta.env.VITE_BASE_LEGACY_API_URL,
);

// BitrixEmulator on/off
export const ENV_USE_BITRIX_EMULATOR = Boolean(
    import.meta.env.VITE_USE_BITRIX_EMULATOR === 'true',
);
