import { useEffect, useState } from 'react';

import type { BRIDGE_ACTION } from './enum';
import { isBridgeMessage } from './helpers';
import type { TBridgePayload } from './type';

/**
 * Получает сообщение из iframe
 * @param action
 * @param initialData
 */
export const useBitrixMessageData = <T = unknown>(
    action: BRIDGE_ACTION,
    initialData: T,
): T => {
    const [data, setData] = useState<T>(initialData);

    useEffect(() => {
        const isMyAction = (
            payload: TBridgePayload,
        ): payload is TBridgePayload<T> => payload.action === action;

        const receiveNotify = (event: MessageEvent) => {
            if (isBridgeMessage(event) && isMyAction(event.data.payload)) {
                setData(event.data.payload.data);
            }
        };

        window.addEventListener('message', receiveNotify);

        return () => {
            window.removeEventListener('message', receiveNotify);
        };
    }, [action]);

    return data;
};
