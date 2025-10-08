import { ROUTES } from 'utils/constants/routes';

export const getProfileLink = (userIdent: string) =>
    `${ROUTES.USER.BASE}/${userIdent}`;

/**
 * Принимает absolutePathname и возвращает какой-то из "кусочков" pathname
 * (по-умолчанию, вернет относительный путь)
 * @param absolutePathname абсолютный путь например /user/userId/statistics
 * @param index - индекс элемента (по умлочанию -1)
 * @result По-умолчанию получим последний элемент роута - "statistics"
 * @danger Не валидирует строку.
 * Может вернуть переданый аргумент, если параметр не содержит '/'
 */
export const getPathnamePart = (
    absolutePathname: string,
    index = -1,
): string => {
    // todo: убрать проверку в prod-сборке ? (absolutePathname часть строки содержит константы из кода)
    if (absolutePathname.includes('/')) {
        return absolutePathname.split('/').at(index) as string;
    }

    throw new Error(
        `В getPathnamePart была передана не валидная строка: "${absolutePathname}"!`,
    );
};
