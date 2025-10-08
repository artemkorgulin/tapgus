import type { LEGEND_ITEM } from './enum';

export type TDataType = Array<
    Record<LEGEND_ITEM, number> & {
        subject: string;
    }
>;
