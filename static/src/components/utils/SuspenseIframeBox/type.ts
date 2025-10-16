import type { TIframeOptions } from 'lib/bridge';
import type { RefObject } from 'react';
import type { Nullable } from 'utils/types/common';

export type TIframeBoxPageVariant = 'page' | 'page_v2';

export type TIframeBoxComponentVariants =
    | 'header_component'
    | 'header_component_v2'
    | 'pixel';

export type IframeBoxProps = {
    variant: TIframeBoxPageVariant | TIframeBoxComponentVariants;
    path?: string;
    isDebug?: boolean;
    isHideScroll?: boolean;
    blobUrl?: Nullable<string>;
    iframeRef?: RefObject<HTMLIFrameElement>;
} & Partial<TIframeOptions>;
