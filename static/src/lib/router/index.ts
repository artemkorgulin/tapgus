import {
    generatePath as _generatePath,
    matchPath as _matchPath,
} from 'react-router-dom';

/**
 /**
 * Возвращает путь с интерполированными параметрами.
 * Добавляет '/' в конец сгенерированного pathname (важно для бэкенд-фронта)
 *
 * @see https://reactrouter.com/utils/generate-path
 * @param originalPath
 * @param params
 */
export const generatePath: typeof _generatePath = (originalPath, params) =>
    _generatePath(originalPath, params) + '/';

/**
 * Выполняет сопоставление с шаблоном имени URL-адреса и возвращает информацию о
 * матч.
 *
 * @see https://reactrouter.com/utils/match-path
 */
export const matchPath = _matchPath;
