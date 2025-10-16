import { useEffect } from 'react';
import { isBridgeMessage, isClickPayload } from 'lib/bridge/helpers';
import type React from 'react';

type ClickEvent = MouseEvent | TouchEvent;

type EventHandler = (event?: ClickEvent) => void;

const useClickOutside = <T extends HTMLElement>(
    ref: React.RefObject<T> | null,
    handler: EventHandler,
): void => {
    useEffect(() => {
        const listener = (event?: ClickEvent) => {
            if (event) {
                const target: HTMLElement = event.target as HTMLElement;

                if (!ref || !ref.current || ref.current.contains(target)) {
                    return;
                }

                handler(event);
            } else {
                handler();
            }
        };

        const postMessageHandler = (event: MessageEvent) => {
            if (isBridgeMessage(event) && isClickPayload(event.data.payload)) {
                listener();
            }
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        window.addEventListener('message', postMessageHandler);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
            window.removeEventListener('message', postMessageHandler);
        };
    }, [ref, handler]);
};

export { useClickOutside };
