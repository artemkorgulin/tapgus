import type { IBaseListItem } from 'api/api.v2.types';
import type { ReactNode } from 'react';

export interface TListBlockProps<T extends IBaseListItem> {
    title: string;
    data: T[];
    renderItem: (data: T) => ReactNode;
    pageSize?: number;
    rightElement?: ReactNode;
}
