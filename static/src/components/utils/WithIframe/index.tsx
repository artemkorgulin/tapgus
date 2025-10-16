import { useState } from 'react';
import { ENV_USE_IFRAME_DEBUG, ENV_USE_IFRAMES } from 'app-env';
import type { TComponent } from 'utils/types/elements';

import { Condition } from 'components/utils/Condition';

import IframePage from 'pages/common/IframePage';

type TWithIframeProps = {
    fallback?: JSX.Element;
    isFallbackOnly?: boolean;
    children?: JSX.Element;
};

/**
 * Вшит флаг ENV_USE_IFRAMES, для возможности замены всех старых компонентов на новые, не трогая код
 * @param fallback - элемент без iframe (с новой интеграцией)
 * @param children - элемент с iframe, ссылающийся на бэкенд-компонент
 * @param isFallbackOnly - использовать только fallback (для страниц которые не планируем грузить в iframe)
 * @constructor
 */
export const WithIframe: TComponent<TWithIframeProps> = ({
    fallback = <>REACT ВЕРСИИ НЕТ</>,
    children = <IframePage />,
    isFallbackOnly = false,
}) => {
    const [isUseIframes, setIsUseIframes] = useState(
        isFallbackOnly ? false : ENV_USE_IFRAMES,
    );

    const contentSwitch = () => {
        if (isFallbackOnly) {
            console.error(
                'Для данной страницы не планируется поддерживать iframe!',
            );
        } else {
            setIsUseIframes((v) => !v);
        }
    };

    return (
        <>
            <Condition
                isValue={ENV_USE_IFRAME_DEBUG}
                then={
                    <button
                        className='fixed left-0 top-0 z-[1000] h-16 w-16
                            cursor-pointer bg-red text-center'
                        onClick={contentSwitch}
                    >
                        switch content
                    </button>
                }
            />
            {isUseIframes ? children : fallback}
        </>
    );
};
