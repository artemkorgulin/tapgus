import { generatePath } from 'lib/router';
import { ROUTES } from 'utils/constants/routes';
import { describe, expect, it, vi } from 'vitest';

import { BITRIX_ROUTES } from './constants';
import { routeSyncFx } from './routeSyncFx';

const getAbsUrl = (pathname: string) => `https://localhost${pathname}`;

const testSync = (bitrixPath: string, reactPath: string) => {
    const navigate = vi.fn();

    const payloadUrl = getAbsUrl(bitrixPath);

    routeSyncFx(payloadUrl, navigate);

    expect(navigate).toHaveBeenCalled();
    expect(navigate).toHaveBeenCalledWith(reactPath, {
        state: {
            iframePath: bitrixPath,
        },
    });
};

describe('routeSyncEffect', () => {
    const params = { userId: '01' };

    it('mock: /profile/statistics/01', () =>
        testSync('/profile/statistics/01/', '/user/01/statistics/'));

    it('mock: unexpected path move to fallback', () => {
        const navigate = vi.fn();

        const bitrixPath = '/some/route/';
        const reactPath = '/bitrix/some/route/';
        const payloadUrl = getAbsUrl(bitrixPath);

        routeSyncFx(payloadUrl, navigate);

        expect(navigate).toHaveBeenCalled();
        expect(navigate).toHaveBeenCalledWith(reactPath);
    });

    it('unexpected path move to fallback', () => {
        const navigate = vi.fn();

        const bitrixPath = '/some/route/';
        const reactPath = `${ROUTES.BITRIX_ROUTE}/some/route/`;
        const payloadUrl = getAbsUrl(bitrixPath);

        routeSyncFx(payloadUrl, navigate);

        expect(navigate).toHaveBeenCalled();
        expect(navigate).toHaveBeenCalledWith(reactPath);
    });

    it(BITRIX_ROUTES.TEAMS, () => {
        testSync(BITRIX_ROUTES.TEAMS, ROUTES.TEAMS);
    });

    it(BITRIX_ROUTES.PRODUCTS, () => {
        testSync(BITRIX_ROUTES.PRODUCTS, ROUTES.PRODUCTS);
    });

    it(BITRIX_ROUTES.PROFILE, () => {
        const bitrixPath = generatePath(BITRIX_ROUTES.PROFILE, params);
        const reactPath = generatePath(ROUTES.USER.INDEX, params);

        testSync(bitrixPath, reactPath);
    });

    it(BITRIX_ROUTES.TEAMWORK_STATISTICS, () => {
        const bitrixPath = generatePath(
            BITRIX_ROUTES.TEAMWORK_STATISTICS,
            params,
        );
        const reactPath = generatePath(ROUTES.USER.TEAMWORK_STATISTICS, params);

        testSync(bitrixPath, reactPath);
    });

    it(BITRIX_ROUTES.TEAMWORK_HARD_SKILLS, () => {
        const bitrixPath = generatePath(
            BITRIX_ROUTES.TEAMWORK_HARD_SKILLS,
            params,
        );
        const reactPath = generatePath(
            ROUTES.USER.TEAMWORK_HARD_SKILLS,
            params,
        );

        testSync(bitrixPath, reactPath);
    });

    it(BITRIX_ROUTES.TEAMWORK_SOFT_SKILLS, () => {
        const bitrixPath = generatePath(
            BITRIX_ROUTES.TEAMWORK_SOFT_SKILLS,
            params,
        );
        const reactPath = generatePath(
            ROUTES.USER.TEAMWORK_SOFT_SKILLS,
            params,
        );

        testSync(bitrixPath, reactPath);
    });

    it(BITRIX_ROUTES.TEAM_DETAILS, () => {
        const params = { teamId: '01' };
        const bitrixPath = generatePath(BITRIX_ROUTES.TEAM_DETAILS, params);
        const reactPath = generatePath(ROUTES.TEAMS_DETAILS, params);

        testSync(bitrixPath, reactPath);
    });

    it(BITRIX_ROUTES.PRODUCT_DETAILS, () => {
        const params = { productId: '01' };
        const bitrixPath = generatePath(BITRIX_ROUTES.PRODUCT_DETAILS, params);
        const reactPath = generatePath(ROUTES.PRODUCTS_DETAILS, params);

        testSync(bitrixPath, reactPath);
    });
});
