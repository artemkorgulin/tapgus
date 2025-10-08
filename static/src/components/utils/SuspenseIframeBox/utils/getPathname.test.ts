import { generatePath } from 'lib/router';
import { ROUTES } from 'utils/constants/routes';
import { describe, expect, test } from 'vitest';

import { BITRIX_ROUTES } from './constants';
import { getBitrixPathname, getDynamicPath, getPathname } from './getPathname';
import type { TBitrixPath, TReactPath } from './type';

const MOCK_TARGET_PATH_MAP_RAW: [string, string][] = [
    ['/react/:id', '/target/:id'],
    ['/react/:id/other/:otherId', '/target/:id/:otherId'],
    ['/react/static', '/target/static/route'],
];
const MOCK_BITRIX_PATH_MAP = new Map<TReactPath, TBitrixPath>(
    MOCK_TARGET_PATH_MAP_RAW,
);

const MOCK_VIEWER_ID = 'viewer_id';
const MOCK_USER_ID = 'user_id';

describe('Сопоставление роутов React и Bitrix фронтендов', () => {
    const viewerId = MOCK_VIEWER_ID;
    const userId = MOCK_USER_ID;

    describe('Утилиты', () => {
        test('getDynamicPath - Сопоставление динамических путей', () => {
            const pathId = getDynamicPath('/react/01', MOCK_BITRIX_PATH_MAP);

            const pathMultiId = getDynamicPath(
                '/react/01/other/02',
                MOCK_BITRIX_PATH_MAP,
            );

            expect(pathId).toBe(`/target/01/`);

            expect(pathMultiId).toBe(`/target/01/02/`);
        });

        test('getPathname - Сопоставление статичных путей', () => {
            const staticPath = getPathname(
                '',
                '/react/static',
                MOCK_BITRIX_PATH_MAP,
            );

            expect(staticPath).toBe('/target/static/route');
        });

        test('generatePath - Возвращает путь с интерполированными параметрами.', () => {
            const pathSlug = generatePath('/path/:slug/route', { slug: 'to' });

            expect(pathSlug).toBe('/path/to/route/');
            expect(pathSlug).not.toBe('/path/to/route');
        });
    });

    describe('Роуты авторизованного пользователя (viewer)', () => {
        test('Профиль', () => {
            expect(
                getBitrixPathname({
                    viewerId,
                    pathname: ROUTES.VIEWER.INDEX,
                }),
            ).toBe(`/profile/${viewerId}/`);
        });

        test('Статистика', () => {
            expect(
                getBitrixPathname({
                    viewerId,
                    pathname: ROUTES.VIEWER.TEAMWORK_STATISTICS,
                }),
            ).toBe(`/profile/statistics/${viewerId}/`);
        });

        test('Hard skills', () => {
            expect(
                getBitrixPathname({
                    viewerId,
                    pathname: ROUTES.VIEWER.TEAMWORK_HARD_SKILLS,
                }),
            ).toBe(`/profile/${viewerId}/skillset/`);
        });

        test('Soft skills', () => {
            expect(
                getBitrixPathname({
                    viewerId,
                    pathname: ROUTES.VIEWER.TEAMWORK_SOFT_SKILLS,
                }),
            ).toBe(`/profile/soft-skills/${viewerId}/`);
        });
    });

    describe('Роуты других пользователей (user)', () => {
        const params = { userId };
        test('Профиль', () => {
            expect(
                getBitrixPathname({
                    viewerId,
                    pathname: generatePath(ROUTES.USER.INDEX, params),
                }),
            ).toBe(generatePath(BITRIX_ROUTES.PROFILE, params));
        });

        test('Статистика', () => {
            expect(
                getBitrixPathname({
                    viewerId,
                    pathname: generatePath(
                        ROUTES.USER.TEAMWORK_STATISTICS,
                        params,
                    ),
                }),
            ).toBe(generatePath(BITRIX_ROUTES.TEAMWORK_STATISTICS, params));
        });

        test('Hard skills', () => {
            expect(
                getBitrixPathname({
                    viewerId,
                    pathname: generatePath(
                        ROUTES.USER.TEAMWORK_HARD_SKILLS,
                        params,
                    ),
                }),
            ).toBe(generatePath(BITRIX_ROUTES.TEAMWORK_HARD_SKILLS, params));
        });

        test('Soft skills', () => {
            expect(
                getBitrixPathname({
                    viewerId,
                    pathname: generatePath(
                        ROUTES.USER.TEAMWORK_SOFT_SKILLS,
                        params,
                    ),
                }),
            ).toBe(generatePath(BITRIX_ROUTES.TEAMWORK_SOFT_SKILLS, params));
        });
    });

    test('Список команд', () => {
        expect(
            getBitrixPathname({
                viewerId,
                pathname: ROUTES.TEAMS,
            }),
        ).toBe(BITRIX_ROUTES.TEAMS);
    });

    test('Детали команды', () => {
        const params = { teamId: 123 };
        const pathname = generatePath(ROUTES.TEAMS_DETAILS, params);
        const target = generatePath(BITRIX_ROUTES.TEAM_DETAILS, params);

        expect(getBitrixPathname({ viewerId, pathname })).toBe(target);
    });

    test('Список продуктов', () => {
        expect(
            getBitrixPathname({
                viewerId,
                pathname: ROUTES.PRODUCTS,
            }),
        ).toBe(BITRIX_ROUTES.PRODUCTS);
    });

    test('Детали продукта', () => {
        const params = { productId: 123 };
        const pathname = generatePath(ROUTES.PRODUCTS_DETAILS, params);
        const target = generatePath(BITRIX_ROUTES.PRODUCT_DETAILS, params);

        expect(getBitrixPathname({ viewerId, pathname })).toBe(target);
    });

    describe('mocked', () => {
        /**
         * плюсы: наглядность
         * минусы: не зависит от фактической реализации карт связей
         */

        test('Список команд', () => {
            expect(
                getBitrixPathname({
                    viewerId,
                    pathname: '/teams',
                }),
            ).toBe(`/profile/teams/`);
        });

        test('Детали команды', () => {
            expect(
                getBitrixPathname({
                    viewerId,
                    pathname: '/teams/123',
                }),
            ).toBe(`/teams/123/`);
        });

        test('Список продуктов', () => {
            expect(
                getBitrixPathname({
                    viewerId,
                    pathname: '/products',
                }),
            ).toBe(`/profile/products/`);
        });

        test('Детали продукта', () => {
            expect(
                getBitrixPathname({
                    viewerId,
                    pathname: '/products/123',
                }),
            ).toBe(`/products/123/`);
        });

        describe('Роуты других пользователей (user)', () => {
            test('Профиль', () => {
                expect(
                    getBitrixPathname({
                        viewerId,
                        pathname: '/user/user_id',
                    }),
                ).toBe(`/profile/user_id/`);
            });

            test('Статистика', () => {
                expect(
                    getBitrixPathname({
                        viewerId,
                        pathname: '/user/user_id/statistics',
                    }),
                ).toBe(`/profile/statistics/user_id/`);
            });

            test('Hard skills', () => {
                expect(
                    getBitrixPathname({
                        viewerId,
                        pathname: `/user/user_id/hard-skills`,
                    }),
                ).toBe(`/profile/user_id/skillset/`);
            });

            test('Soft skills', () => {
                expect(
                    getBitrixPathname({
                        viewerId,
                        pathname: `/user/user_id/soft-skills`,
                    }),
                ).toBe(`/profile/soft-skills/user_id/`);
            });
        });
    });
});
