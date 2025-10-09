import { useDeferredValue, useEffect, useState } from 'react';
import { usePersistedState } from 'utils/hooks/usePersistedState';
import { useSortField } from 'utils/hooks/useSortField';
import type { Nullable } from 'utils/types/common';
import { SORT_DIRECTIONS } from 'utils/types/enum';

import { LIST_VIEW_MODE } from './enum';
import { hasMembers } from './type-guard';
import type { IListViewData, TListViewProps } from './types';

type UseListViewProps = Pick<TListViewProps, 'rawData'> & {
    persistKey: string;
    listSizeAnimationThreshold?: number;
};

// todo: i18n in
const locale = 'en-US';
const DATA_EMPTY = 'No data';
const DATA_NOT_FOUND = 'Data not found';

export const useListView = (props: UseListViewProps) => {
    const {
        rawData,
        persistKey: prefix,
        listSizeAnimationThreshold = 20,
    } = props;

    const keyWithPrefix = (key: string) => `${prefix}/${key}`;

    const [mode, setMode] = usePersistedState<LIST_VIEW_MODE>(
        LIST_VIEW_MODE.BG,
        keyWithPrefix('viewMode'),
    );
    const modeDef = useDeferredValue(mode);

    const [nameSort, setNameSort, toggleNameSort] = useSortField(
        keyWithPrefix('nameSort'),
    );
    const [memberSort, setMemberSort, toggleMemberSort] = useSortField(
        keyWithPrefix('memberSort'),
    );
    const nameSortDef = useDeferredValue(nameSort);
    const memberSortDef = useDeferredValue(memberSort);

    const [searchValue, setSearchValue] = useState<string>('');
    const searchValueDef = useDeferredValue(searchValue);
    const clearSearch = () => setSearchValue('');

    const [data, setData] = useState<Array<IListViewData>>([]);

    const sortByName = () => {
        toggleNameSort();
        setMemberSort(null);
    };

    const sortByMember = () => {
        toggleMemberSort();
        setNameSort(null);
    };

    useEffect(() => {
        if (rawData) {
            let newData = [...rawData];

            if (searchValueDef) {
                newData = newData.filter((v) =>
                    v.name
                        .toLocaleLowerCase(locale)
                        .includes(searchValueDef.toLocaleLowerCase(locale)),
                );
            }

            switch (nameSortDef) {
                case SORT_DIRECTIONS.ASC:
                    newData.sort((a, b) => {
                        const aText = a.name.toLocaleLowerCase(locale);
                        const bText = b.name.toLocaleLowerCase(locale);

                        return aText.localeCompare(bText);
                    });
                    break;

                case SORT_DIRECTIONS.DESC:
                    newData.sort((a, b) => {
                        const aText = a.name.toLocaleLowerCase(locale);
                        const bText = b.name.toLocaleLowerCase(locale);

                        return bText.localeCompare(aText);
                    });
                    break;
            }

            if (hasMembers(newData)) {
                switch (memberSortDef) {
                    case SORT_DIRECTIONS.ASC:
                        newData.sort((a, b) => a.members - b.members);
                        break;

                    case SORT_DIRECTIONS.DESC:
                        newData.sort((a, b) => b.members - a.members);
                        break;
                }
            }

            setData(newData);
        }
    }, [rawData, nameSortDef, memberSortDef, searchValueDef]);

    const hasAnimations = data.length <= listSizeAnimationThreshold;
    const dataEmpty = !rawData?.length ? DATA_EMPTY : null;
    const dataNotFound = searchValueDef && !data.length ? DATA_NOT_FOUND : null;
    const emptyMessage: Nullable<string> = dataEmpty || dataNotFound;
    const isPending =
        searchValue !== searchValueDef ||
        nameSort !== nameSortDef ||
        memberSort !== memberSortDef ||
        mode !== modeDef;

    return {
        data,
        mode,
        setMode,
        nameSort,
        sortByName,
        memberSort,
        sortByMember,
        searchValue,
        setSearchValue,
        clearSearch,
        emptyMessage,
        hasAnimations,
        isPending,
    };
};
