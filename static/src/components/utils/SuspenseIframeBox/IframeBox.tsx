import { useState } from 'react';
import { ENV_EXTERNAL_BASE_URL } from 'app-env';
import cn from 'clsx';
import { getMaskFromOptions } from 'lib/bridge';
import type { TComponent } from 'utils/types/elements';

import { Spinner } from 'components/uiKit/Spinner';
import { SuspenseIFrame } from 'components/utils/SuspenseIframe';

import css from './style.module.scss';
import type { IframeBoxProps } from './type';
import { useBitrixRouteSync } from './useBitrixRouteSync';
import { useScrollWidth } from './useScrollWidth';

// todo: удалить blobUrl после релиза
export const IframeBox: TComponent<IframeBoxProps> = ({
    iframeRef,
    path,
    variant,
    blobUrl,
    isHideScroll = false,
    isDebug = false,
    USE_NOTIFY = false,
    USE_SOUND = false,
}) => {
    const [maskedOptions] = useState(
        getMaskFromOptions({ USE_NOTIFY, USE_SOUND }),
    );

    const isPageV1 = variant === 'page';
    const isPageV2 = variant === 'page_v2';
    const isPageVariant = isPageV1 || isPageV2;
    const isPixel = variant === 'pixel';
    const scrollWidth = useScrollWidth();

    useBitrixRouteSync();

    return (
        <div
            className={cn(css.overflow, {
                [css.page]: isPageV1,
                [css.page_v2]: isPageV2,
                [css.header_component]: variant === 'header_component',
                [css.header_component_v2]: variant === 'header_component_v2',
                [css.pixel]: isPixel,
            })}
        >
            <div
                className={css.position}
                style={{
                    marginRight: isHideScroll ? `-${scrollWidth}px` : undefined,
                }}
            >
                <SuspenseIFrame
                    ref={iframeRef}
                    name={maskedOptions}
                    fallback={
                        <div className={css.loading}>
                            <Spinner size={isPageVariant ? 'lg' : 'sm'} />
                        </div>
                    }
                    className={isPixel ? 'hidden' : 'h-full w-full'}
                    src={
                        blobUrl ||
                        `${ENV_EXTERNAL_BASE_URL}/api/page/${path}`
                    }
                    isDebug={isDebug}
                />
            </div>
        </div>
    );
};
