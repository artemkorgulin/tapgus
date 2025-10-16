import { expect, test } from 'vitest';

import { getIssue, getTask } from './utils.cjs';

test('Получаем идентификатор проекта и номер задачи из названия ветки', () => {
    expect(getTask('feat/PCD-333-abra-kadabrav2')).toStrictEqual([
        'PCD',
        '333',
    ]);
    expect(getTask('PCD-333-abra-kadabra')).toStrictEqual(['PCD', '333']);
    expect(getTask('PCD-333')).toStrictEqual(['PCD', '333']);
});

test('Получаем слитно идентификатор проекта и номер задачи из названия ветки', () => {
    expect(getIssue('feat/PCD-333-abra-kadabrav2')).toBe('PCD-333');
    expect(getIssue('PCD-321-abra-kadabra')).toBe('PCD-321');
    expect(getIssue('PCD-123')).toBe('PCD-123');
});
