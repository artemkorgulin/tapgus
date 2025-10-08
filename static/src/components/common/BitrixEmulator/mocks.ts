import type { TNotifyMessage } from 'components/common/Notifications';
import { STATUS_TYPES } from 'components/common/Notifications';

export const NOTIFY: Array<TNotifyMessage> = [
    {
        ID: '3',
        TIMESTAMP_X: '2024-02-16T09:41:45+03:00',
        ACTIVE: 'Y',
        ENTITY: 'MAP',
        NAME: 'Вам назначена карта компетенций',
        DATA: "{'mapId':37065}",
        TEXT: 'Вам назначена карта компетенций "FE-Frontend"',
        STATUS: STATUS_TYPES.READ,
        LINK: '/profile/skillset/37065/',
    },
    {
        ID: '2',
        TIMESTAMP_X: '2024-01-26T11:56:03+03:00',
        ACTIVE: 'Y',
        ENTITY: 'MAP',
        NAME: 'Вам назначена карта компетенций',
        DATA: "{'mapId':37441}",
        TEXT: 'Вам назначена карта компетенций "Новая карта компетенций"',
        STATUS: STATUS_TYPES.READ,
        LINK: '/profile/skillset/37441/',
    },
];

export const NOTIFY_NEW = [
    {
        ...NOTIFY[0],
        ID: '4',
        STATUS: STATUS_TYPES.ACTIVE,
    },
    ...NOTIFY,
];
