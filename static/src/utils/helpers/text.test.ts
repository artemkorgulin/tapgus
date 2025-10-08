import { ROUTES } from 'utils/constants/routes';
import { describe, expect, test } from 'vitest';

import { addBitrixPrefixToRelativeLinks } from './text';

describe('Add prefix "/bitrix" to links inside text', () => {
    test('One link', () => {
        const text = `К вашему отчету <a href="/teams/40964/reports-and-plans/72158/">ссылка на отчет</a>`;
        const textRes = `К вашему отчету <a href="${ROUTES.BITRIX_ROUTE}/teams/40964/reports-and-plans/72158/">ссылка на отчет</a>`;

        expect(addBitrixPrefixToRelativeLinks(text)).toBe(textRes);
    });

    test('Multiple links', () => {
        const text = `<a href="/teams/1/">Ссылка на команду 1</a>,
        <a href="/teams/2/">Ссылка на команду 2</a>,
        <a href="/teams/3/">Ссылка на команду 3</a>`;

        const textRes = `<a href="${ROUTES.BITRIX_ROUTE}/teams/1/">Ссылка на команду 1</a>,
        <a href="${ROUTES.BITRIX_ROUTE}/teams/2/">Ссылка на команду 2</a>,
        <a href="${ROUTES.BITRIX_ROUTE}/teams/3/">Ссылка на команду 3</a>`;

        expect(addBitrixPrefixToRelativeLinks(text)).toBe(textRes);
    });

    test('Ignore absolute links', () => {
        const text = `<a href="http://google.com/">Ссылка 1</a>,
        <a href="/teams/2/">Ссылка 2</a>,
        <a href="https://rambler.ru/teams/3/">Ссылка 3</a>
        <a href="/teams/4/">Ссылка 4</a>`;

        const textRes = `<a href="http://google.com/">Ссылка 1</a>,
        <a href="${ROUTES.BITRIX_ROUTE}/teams/2/">Ссылка 2</a>,
        <a href="https://rambler.ru/teams/3/">Ссылка 3</a>
        <a href="${ROUTES.BITRIX_ROUTE}/teams/4/">Ссылка 4</a>`;

        expect(addBitrixPrefixToRelativeLinks(text)).toBe(textRes);
    });
});
