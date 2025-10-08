import { ENV_USE_MOCKED_USER } from 'app-env';
import type { Nullable } from 'utils/types/common';

/**
 * Возвращает [payload undefined, mockData, true]
 */
export const getMockProps = <T extends unknown>(
    mockData: T,
    payload = undefined,
    skip = true,
): [unknown, Nullable<T>, boolean] =>
    ENV_USE_MOCKED_USER ? [payload, mockData, skip] : [payload, null, false];

/**
 * Возвращает [ mockData, true]
 */
export const getMockPropsLess = <T extends unknown>(
    mockData: T,
    skip = true,
): [Nullable<T>, boolean] =>
    ENV_USE_MOCKED_USER ? [mockData, skip] : [null, false];
