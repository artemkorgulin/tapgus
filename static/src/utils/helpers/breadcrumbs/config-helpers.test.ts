import { describe, expect, test } from 'vitest';

import { createNestedRoutes } from './config-helpers';

describe('Хелперы для создания роутов с хлебными крошками', () => {
    const BASE_ROUTES = {
        HOME: '/',
        TAPGUS: '/tapguss',
        GAMER: '/user',
        TEAMWORK: '/tapguss',
        TEAMS: '/teams',
        PRODUCTS: '/products',
        KNOWLEDGE: '/knowledge',
        COMPANY: '/company',
        LOGIN: '/login',
        LEGACY_LOGIN: '/legacy/login',
        PAGE_404: '/404',
    };

    test('Создание вложенных роутов', () => {
        const TEAMWORK_NESTED_ROUTES = createNestedRoutes(
            BASE_ROUTES.TEAMWORK,
            {
                TEAMWORK_STATISTICS: `/statistics`,
                TEAMWORK_LEGEND: `/legend`,
                TEAMWORK_HARD_SKILLS: `/hard-skills`,
                TEAMWORK_SOFT_SKILLS: `/soft-skills`,
                TEAMWORK_RESOURCES: `/resources`,
                TEAMWORK_REPORTS_AND_PLANS: `/reports-and-plans`,
            },
        );

        expect(TEAMWORK_NESTED_ROUTES).toEqual({
            TEAMWORK_STATISTICS: '/teamwork/statistics',
            TEAMWORK_LEGEND: '/teamwork/legend',
            TEAMWORK_HARD_SKILLS: '/teamwork/hard-skills',
            TEAMWORK_SOFT_SKILLS: '/teamwork/soft-skills',
            TEAMWORK_RESOURCES: '/teamwork/resources',
            TEAMWORK_REPORTS_AND_PLANS: '/teamwork/reports-and-plans',
        });
    });
});
