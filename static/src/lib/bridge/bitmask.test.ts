import { describe, expect, test } from 'vitest';

import { getMaskFromOptions, getOptionsFromMask } from './bitmask';

describe('bitmask', () => {
    test('set params to bitmask', () => {
        const mask0 = getMaskFromOptions({
            USE_NOTIFY: false,
            USE_SOUND: false,
        });
        const mask1 = getMaskFromOptions({
            USE_NOTIFY: true,
            USE_SOUND: false,
        });
        const mask2 = getMaskFromOptions({
            USE_NOTIFY: false,
            USE_SOUND: true,
        });
        const mask3 = getMaskFromOptions({ USE_NOTIFY: true, USE_SOUND: true });

        expect(mask0).toBe('0');
        expect(mask1).toBe('1');
        expect(mask2).toBe('2');
        expect(mask3).toBe('3');
    });

    test('falsy options to bitmask', () => {
        const mask4 = getMaskFromOptions({});
        const mask5 = getMaskFromOptions({ USE_NOTIFY: true });
        const mask6 = getMaskFromOptions({ USE_SOUND: true });

        expect(mask4).toBe('0');
        expect(mask5).toBe('1');
        expect(mask6).toBe('2');
    });

    test('get params from bitmask', () => {
        const params0 = getOptionsFromMask('0');
        const params1 = getOptionsFromMask('1');
        const params2 = getOptionsFromMask('2');
        const params3 = getOptionsFromMask('3');

        expect(params0).toEqual({ USE_NOTIFY: false, USE_SOUND: false });
        expect(params1).toEqual({ USE_NOTIFY: true, USE_SOUND: false });
        expect(params2).toEqual({ USE_NOTIFY: false, USE_SOUND: true });
        expect(params3).toEqual({ USE_NOTIFY: true, USE_SOUND: true });
    });
});
