import type {
    Payload,
    Props,
} from 'recharts/types/component/DefaultLegendContent';

import type { LEGEND_ITEM } from '../enum';

export type TLegendPayload = Payload & {
    dataKey: LEGEND_ITEM;
};

export type TLegendItemProps = TLegendPayload & {
    index: number;
    onClick: Props['onClick'];
};
