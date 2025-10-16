import { useMemo, useRef, useState } from 'react';
import type { RefObject } from 'react';
import { useClickOutside } from 'utils/hooks';
import type { TComponent } from 'utils/types/elements';

import { Content } from 'components/common/Notifications/Content';
import { Notify } from 'components/uiKit/Notify';

import { hasActiveMessages } from './helpers';
import css from './style.module.scss';
import { useNotifyData } from './useNotifyData';
import { usePlayNotifySound } from './usePlayNotifySound';

type TNotificationsProps = {
    iframeRef?: RefObject<HTMLIFrameElement>;
};

export const Notifications: TComponent<TNotificationsProps> = ({
    iframeRef,
}) => {
    const { data, readAll, removeOne } = useNotifyData(iframeRef);

    const containerRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const close = () => {
        setIsOpen(false);
    };

    const open = () => {
        setIsOpen((currentState) => !currentState);
        readAll();
    };

    const hasActive = useMemo(
        () => (data ? hasActiveMessages(data) : false),
        [data],
    );

    usePlayNotifySound(data, hasActive);

    useClickOutside<HTMLDivElement>(containerRef, close);

    return (
        <div className={css.notify}>
            <Notify.BellButton hasNew={hasActive} onClick={open} />
            {isOpen && (
                <div ref={containerRef} className={css.container}>
                    <div className={css.list}>
                        <Content data={data} removeOne={removeOne} />
                    </div>
                </div>
            )}
        </div>
    );
};
