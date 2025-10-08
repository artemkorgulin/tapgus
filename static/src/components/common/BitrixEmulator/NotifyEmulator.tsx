import { useState } from 'react';
import { BRIDGE_ACTION, postMessage } from 'lib/bridge';
import type { TComponent } from 'utils/types/elements';

import { NOTIFY, NOTIFY_NEW } from 'components/common/BitrixEmulator/mocks';
import { STATUS_TYPES } from 'components/common/Notifications';
import { ButtonWithCorners } from 'components/uiKit/ButtonWithCorners';

export const NotifyEmulator: TComponent = () => {
    const [newNotifyList, setNewNotifyList] = useState(NOTIFY_NEW);

    const getNotify = () => {
        postMessage(BRIDGE_ACTION.NOTIFY, NOTIFY, true);
    };

    const getNewNotify = () => {
        postMessage(BRIDGE_ACTION.NOTIFY, newNotifyList, true);
    };

    const getNewNotifyWithSound = () => {
        const data = [
            {
                ...newNotifyList[0],
                ID: `${Number(newNotifyList[0].ID) + 1}`,
                STATUS: STATUS_TYPES.ACTIVE,
            },
            ...newNotifyList,
        ];

        setNewNotifyList(data);

        postMessage(BRIDGE_ACTION.NOTIFY, data, true);
    };

    return (
        <>
            <ButtonWithCorners onClick={getNotify}>
                Get Notify
            </ButtonWithCorners>
            <ButtonWithCorners onClick={getNewNotify}>
                Get New Notify
            </ButtonWithCorners>
            <ButtonWithCorners onClick={getNewNotifyWithSound}>
                Get Notify With Sound
            </ButtonWithCorners>
        </>
    );
};
