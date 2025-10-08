import type { Nullable } from 'utils/types/common';

export type TReactPath = string;

export type TBitrixPath = string;

export type TLocationState = Nullable<{ iframePath: string }>;

export type TBitrixParamsFallback = { ['*']: string };
