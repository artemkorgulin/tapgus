import type { BRIDGE_ACTION, TBridgePayload } from 'lib/bridge';
import type { RefObject } from 'react';

import type { STATUS_TYPES } from './enum';

export type TNotifyMessage = {
    ID: string;
    NAME: string;
    TEXT: string;
    TIMESTAMP_X: string;
    LINK: string;
    ACTIVE: unknown;
    ENTITY: unknown;
    STATUS: STATUS_TYPES;
    DATA?: string;
};

export type TNotifyDataPayload = TBridgePayload<
    Array<TNotifyMessage>,
    BRIDGE_ACTION.NOTIFY
>;

export type TIframeRefOptional = RefObject<HTMLIFrameElement> | undefined;
