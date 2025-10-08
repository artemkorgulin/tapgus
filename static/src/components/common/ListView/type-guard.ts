import type { IListViewData } from './types';

export const hasMembers = (
    data: IListViewData[],
): data is Required<IListViewData>[] => data?.[0]?.members !== undefined;
