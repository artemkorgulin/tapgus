import type { FunctionComponentElement, ReactNode } from 'react';
import type { UIMatch } from 'react-router-dom';
import type { Nullable } from 'utils/types/common';
import type { TComponent } from 'utils/types/elements';

export type TRoutePropsWithCrumb = {
    PATH: string;
    CRUMB: Nullable<string>;
};

export type TCrumbReturnNode = { crumb: () => ReactNode };

export type TCrumbReturnElement<T> = {
    crumb: (data: T) => FunctionComponentElement<T>;
};

export type TCrumbType<T extends UIMatch> =
    | TRoutePropsWithCrumb
    | TComponent<T>
    | ReactNode;

export type TRouteCrumbHandle<T extends UIMatch> = {
    crumb: (matchData: T) => ReactNode;
};
