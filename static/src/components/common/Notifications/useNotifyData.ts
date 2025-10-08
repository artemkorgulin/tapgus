import { useEffect, useState } from 'react';
import { adapters } from 'api/adapters';
import { ENV_USE_BITRIX_EMULATOR } from 'app-env';
import { BRIDGE_ACTION, useBitrixMessageData } from 'lib/bridge';

import { notifyActions } from './actions';
import { STATUS_TYPES } from './enum';
import type { TIframeRefOptional, TNotifyMessage } from './type';

export const useNotifyData = (
    iframeRef: TIframeRefOptional,
    isEmulate = ENV_USE_BITRIX_EMULATOR,
) => {
    const bitrixNotifyData = useBitrixMessageData<TNotifyMessage[]>(
        BRIDGE_ACTION.NOTIFY,
        [],
    );

    const [notifyData, setNotifyData] = useState(
        adapters.notifyMessagesV1(bitrixNotifyData),
    );

    useEffect(() => {
        setNotifyData(adapters.notifyMessagesV1(bitrixNotifyData));
    }, [bitrixNotifyData]);

    const readAll = () => {
        setNotifyData((prevData) =>
            prevData.map((message) => ({
                ...message,
                STATUS: STATUS_TYPES.READ,
            })),
        );
        notifyActions.readMany(notifyData, iframeRef, isEmulate);
    };

    const removeOne = (notifyId: string) => {
        setNotifyData((prevData) =>
            prevData.filter((message) => message.ID !== notifyId),
        );
        notifyActions.removeOne(notifyId, iframeRef, isEmulate);
    };

    return { data: notifyData, readAll, removeOne };
};
