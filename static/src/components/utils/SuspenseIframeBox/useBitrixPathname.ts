import { useMemo } from 'react';
import { useLocation, useMatch } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes';

import { getBitrixPathname } from './utils';

export const useBitrixPathname = () => {
    const location = useLocation();
    const match = useMatch(ROUTES.BITRIX_FALLBACK);
    const { pathname, search, state } = location;

    return useMemo(
        () =>
            getBitrixPathname({
                pathname,
                search,
                state,
                matchParams: match?.params,
            }),
        [pathname, state, match, search],
    );
};
