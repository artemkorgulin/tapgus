import { createElement } from 'react';
import type { ReactNode } from 'react';
import type { UIMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import type { TComponent, TCProps } from 'utils/types/elements';

import type {
    TCrumbReturnElement,
    TCrumbReturnNode,
    TCrumbType,
    TRoutePropsWithCrumb,
} from './types';

const isComponent = <T extends UIMatch>(
    crumb: TCrumbType<T>,
): crumb is TComponent<T> => typeof crumb === 'function';

const isRouteObject = <T extends UIMatch>(
    crumb: TCrumbType<T>,
): crumb is TRoutePropsWithCrumb => typeof crumb === 'object';

/**
 * Функция с перегрузкой, для установки crumb в handle компонента Route
 * [подробности](https://reactrouter.com/en/main/hooks/use-matches#breadcrumbs)
 *
 * Принимает:
 * - ReactNode
 * - Объект роута с крошкой
 * - Компонент
 * - Компонент и children элемент
 */
export function setCrumb(crumbObject: TRoutePropsWithCrumb): TCrumbReturnNode;
export function setCrumb(crumbElement: ReactNode): TCrumbReturnNode;
export function setCrumb<T extends TCProps>(
    wrapperComponent: TComponent<T>,
    children?: ReactNode,
): TCrumbReturnElement<T>;

export function setCrumb<T extends UIMatch>(
    crumb: TCrumbType<T>,
    children?: ReactNode,
) {
    const crumbResult = (matchData: T) => {
        if (isComponent(crumb)) {
            return createElement(crumb, matchData, children);
        }

        if (isRouteObject(crumb)) {
            return <Link to={crumb.PATH}>{crumb.CRUMB}</Link>;
        }

        return crumb;
    };

    return {
        crumb: (matchData: T) => crumbResult(matchData),
    };
}
