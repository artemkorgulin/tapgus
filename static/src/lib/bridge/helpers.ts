import { BRIDGE_ACTION, BRIDGE_TYPE } from './enum';
import type { TBridgePayload, TMessageEvent } from './type';

/**
 * Проверяет имя источника
 * @param  {MessageEvent} event
 * @returns {boolean}
 */
export const isBridgeMessage = (event: MessageEvent): event is TMessageEvent =>
    event.data.source === BRIDGE_TYPE.APP;

/**
 * Проверяет доменное имя источника
 * @param {MessageEvent} event
 * @returns {boolean}
 */
export const isSubDomainMessage = (event: MessageEvent): boolean => {
    try {
        const currentDomain = window.location.hostname;
        const messageDomain = new URL(event.origin).hostname;
        return messageDomain.endsWith(`.${currentDomain}`);
    } catch (err) {
        console.error(err);
        return false;
    }
};

export const isInIframe = (isEmulate?: boolean) => {
    if (isEmulate) {
        return true;
    }

    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
};

export const isClickPayload = (
    payload: TBridgePayload,
): payload is TBridgePayload<null> => payload.action === BRIDGE_ACTION.CLICK;
