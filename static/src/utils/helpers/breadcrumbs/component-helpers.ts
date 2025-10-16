import type { UIMatch } from 'react-router-dom';

import type { TRouteCrumbHandle } from './types';

const hasBreadcrumb = <T extends UIMatch>(
    handle: unknown,
): handle is TRouteCrumbHandle<T> =>
    handle ? handle.hasOwnProperty('crumb') : false;

export const getCrumbs = (matches: UIMatch[]) =>
    matches
        .filter((match) => Boolean(hasBreadcrumb(match.handle)))
        .map((match) =>
            hasBreadcrumb(match.handle) ? match.handle.crumb(match) : null,
        );
