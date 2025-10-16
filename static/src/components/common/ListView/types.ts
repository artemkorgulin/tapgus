import type { PropsWithChildren, ReactElement } from 'react';
import type { Nullable } from 'utils/types/common';

import type { LIST_VIEW_MODE } from './enum';

export interface IListViewData {
    id: string;
    name: string;
    avatar: string;
    members?: number;
}

export type TListViewProps = {
    isLoading: boolean;
    errorMessage: string;
    rawData: Nullable<Array<IListViewData>>;
};

type TListViewAdditionalProps = {
    isShowCount: boolean;
    hasAnimations: boolean;
};

type TVariantsProps = { mode: LIST_VIEW_MODE; className?: string };

export type TListContainerProps = PropsWithChildren<
    TVariantsProps &
        Partial<TListViewAdditionalProps> & {
            isLoading: boolean;
            errorMessage: string;
            emptyMessage: Nullable<string>;
            isPending?: boolean;
        }
>;

export type TListItemProps = IListViewData &
    TVariantsProps &
    Partial<TListViewAdditionalProps> & {
        hoverContent: ReactElement;
        isLazyImage?: boolean;
    };
