import { useEffect } from 'react';
import { BRIDGE_ACTION, useBitrixMessageData } from 'lib/bridge';
import { useNavigate } from 'react-router';

import { routeSyncFx } from './utils/routeSyncFx';

/**
 * Синхронизирует роутинг из iframe в react
 */
export const useBitrixRouteSync = () => {
    const navigate = useNavigate();
    const nextUrl = useBitrixMessageData<string>(BRIDGE_ACTION.NAVIGATE, '');

    useEffect(() => {
        routeSyncFx(nextUrl, navigate);
    }, [nextUrl, navigate]);
};
