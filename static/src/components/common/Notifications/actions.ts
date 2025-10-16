import { BRIDGE_ACTION, postMessageToBitrix } from 'lib/bridge';
import type { Nullable } from 'utils/types/common';

import { hasContentWindow } from './helpers';
import type { TIframeRefOptional, TNotifyMessage } from './type';

export const notifyActions = {
    readMany: (
        data: Nullable<TNotifyMessage[]>,
        iframeRef: TIframeRefOptional,
        isEmulate = false,
    ) => {
        if (data && hasContentWindow(iframeRef)) {
            const ids = data
                .filter((el) => el.STATUS === 'ACTIVE')
                .map((el) => el.ID);

            if (ids.length) {
                postMessageToBitrix({
                    target: iframeRef.current.contentWindow,
                    action: BRIDGE_ACTION.NOTIFY_UPDATE,
                    data: ids,
                    isEmulate,
                });
            }
        }
    },

    removeOne: (
        notifyId: string,
        iframeRef: TIframeRefOptional,
        isEmulate = false,
    ) => {
        if (hasContentWindow(iframeRef)) {
            postMessageToBitrix({
                target: iframeRef.current.contentWindow,
                action: BRIDGE_ACTION.NOTIFY_REMOVE,
                data: notifyId,
                isEmulate,
            });
        }
    },
};
