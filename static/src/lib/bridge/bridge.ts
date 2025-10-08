import { ENV_EXTERNAL_BASE_URL } from 'app-env';

import { type BRIDGE_ACTION, BRIDGE_TYPE } from './enum';
import { isInIframe } from './helpers';

export const postMessage = (
    action: BRIDGE_ACTION,
    data: unknown,
    isEmulate?: boolean,
) => {
    if (!isInIframe(isEmulate)) {
        return;
    }

    const target = isEmulate ? window : window.parent;

    target.postMessage({
        source: BRIDGE_TYPE.APP,
        payload: {
            action,
            data,
        },
    });
};

type TPostMessageToBitrixProps = {
    data: unknown;
    action: BRIDGE_ACTION;
    target: Window;
    isEmulate?: boolean;
};

export const postMessageToBitrix = (props: TPostMessageToBitrixProps) => {
    const { action, data, isEmulate } = props;

    const target = isEmulate ? window : props.target;

    target.postMessage(
        {
            source: BRIDGE_TYPE.APP,
            payload: {
                action,
                data,
            },
        },
        ENV_EXTERNAL_BASE_URL,
    );
};
