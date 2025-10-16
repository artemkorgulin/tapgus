import type { BRIDGE_ACTION, BRIDGE_TYPE } from './enum';

export type TBridgePayload<TData = unknown, TAction = BRIDGE_ACTION> = {
    data: TData;
    action: TAction;
};

export type TBridgeMessage<TData = unknown, TAction = BRIDGE_ACTION> = {
    source: BRIDGE_TYPE;
    payload: TBridgePayload<TData, TAction>;
};

export type TMessageEvent<
    TData = unknown,
    TAction = BRIDGE_ACTION,
> = MessageEvent<TBridgeMessage<TData, TAction>>;
