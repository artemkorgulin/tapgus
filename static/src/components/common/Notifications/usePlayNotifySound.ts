import { useEffect } from 'react';
import { usePersistedState } from 'utils/hooks/usePersistedState';
import type { Nullable } from 'utils/types/common';

import reminderFile from 'assets/sound/reminder.ogg';

import { LAST_NOTIFY_ID_CACHE_KEY } from './constants';
import type { TNotifyMessage } from './type';

const reminderLink = new URL(reminderFile, import.meta.url);
const reminderSound = new Audio(reminderLink.href);

/**
 *
 * Костыль для принятия решения, проигрывать звук уведомления или нет.
 * В текущей архитектуре мы не получаем событие,
 * поэтому возможно принять решение, только основываясь на данных.
 *
 * PS
 * Здесь могут быть трудности с тестированием,
 * т.к. значение lastNotifyId записывается в localStorage.
 *
 * В кейсах с переключением пользователя,
 * тестирование может показать ложно-отрицательные результаты
 *
 * Поэтому потребуется очищать localStorage между тестами.
 */
export const usePlayNotifySound = (
    data: Nullable<TNotifyMessage[]>,
    hasActive: boolean,
) => {
    const [lastNotifyId, setLastNotifyId] = usePersistedState(
        '0',
        LAST_NOTIFY_ID_CACHE_KEY,
        true,
        true,
    );

    useEffect(() => {
        if (data && data.length) {
            const newNotifyId = data[0].ID;
            const isWillPlay = Number(newNotifyId) > Number(lastNotifyId);

            if (hasActive && isWillPlay) {
                reminderSound.play();
                setLastNotifyId(newNotifyId);
            }
        }
    }, [data, hasActive, lastNotifyId, setLastNotifyId]);
};
