import type { TUserData } from 'api/api.v2.types';
import type { Nullable } from 'utils/types/common';

export type TViewerData = Nullable<TUserData>;

// todo: удалить в
export type TViewerDataLegacy = boolean;
