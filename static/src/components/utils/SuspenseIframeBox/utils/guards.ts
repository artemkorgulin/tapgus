import type { TBitrixParamsFallback, TLocationState } from './type';

/**
 * Здесь должно быть описание функции
 * @param state
 */
export const hasIframePath = (
    state?: TLocationState,
): state is NonNullable<TLocationState> =>
    !!state &&
    state.hasOwnProperty('iframePath') &&
    state.iframePath.length > 0;

/**
 * Здесь должно быть описание функции
 * @param params
 */
export const isFallback = (
    params?: Partial<TBitrixParamsFallback>,
): params is TBitrixParamsFallback => typeof params?.['*'] === 'string';
