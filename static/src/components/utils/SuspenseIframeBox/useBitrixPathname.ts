import { useMemo } from 'react';
import { useLocation, useMatch } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes';
import { useViewerId } from 'utils/hooks/useViewerId';

import { getBitrixPathname } from './utils';

export const useBitrixPathname = () => {
    const viewerId = useViewerId();
    const location = useLocation();
    const match = useMatch(ROUTES.BITRIX_FALLBACK);
    const { pathname, search, state } = location;

    return useMemo(
        () =>
            getBitrixPathname({
                viewerId,
                pathname,
                search,
                state,
                matchParams: match?.params,
            }),
        [viewerId, pathname, state, match, search],
    );
};
