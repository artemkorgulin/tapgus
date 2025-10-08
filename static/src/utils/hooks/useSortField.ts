import { useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { usePersistedState } from 'utils/hooks/usePersistedState';
import type { Nullable } from 'utils/types/common';
import { SORT_DIRECTIONS } from 'utils/types/enum';

export type SortState = Nullable<SORT_DIRECTIONS>;

type UseSortFieldReturn = [
    SortState,
    Dispatch<SetStateAction<SortState>>,
    () => void,
];

export const useSortField = (
    key: string,
    disablePersist?: boolean,
): UseSortFieldReturn => {
    const [sortState, setSortState] = usePersistedState<SortState>(
        null,
        key,
        disablePersist,
    );

    const sortToggle = useCallback(() => {
        setSortState((prevDirection) => {
            switch (prevDirection) {
                case null:
                    return SORT_DIRECTIONS.ASC;
                case SORT_DIRECTIONS.ASC:
                    return SORT_DIRECTIONS.DESC;
                case SORT_DIRECTIONS.DESC:
                    return null;
            }
        });
    }, [setSortState]);

    return [sortState, setSortState, sortToggle];
};
