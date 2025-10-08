import { STATUS_TYPES } from './enum';
import type { TIframeRefOptional, TNotifyMessage } from './type';

export const hasActiveMessages = (data: TNotifyMessage[]) =>
    data.some((message) => message.STATUS === STATUS_TYPES.ACTIVE);

type TIframeRefWithWindow = {
    current: Omit<HTMLIFrameElement, 'contentWindow'> & {
        contentWindow: WindowProxy;
    };
};

export const hasContentWindow = (
    iframeRef: TIframeRefOptional,
): iframeRef is TIframeRefWithWindow =>
    Boolean(iframeRef && iframeRef.current && iframeRef.current.contentWindow);
