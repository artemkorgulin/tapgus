import { LABELS, RADAR_COLOR_TOKENS } from '../constants';
import type { LEGEND_ITEM } from '../enum';

type TCustomRadarProps = {
    isHide: boolean;
    dataKey: LEGEND_ITEM;
    isDashed?: boolean;
};

export const customRadarProps = ({
    dataKey,
    isHide,
    isDashed = false,
}: TCustomRadarProps) => ({
    name: LABELS[dataKey],
    dataKey,
    stroke: RADAR_COLOR_TOKENS[dataKey],
    fill: 'none',
    strokeDasharray: isDashed ? '4,2' : undefined,
    hide: isHide,
    dot: { fill: RADAR_COLOR_TOKENS[dataKey], stroke: 'none' },
    activeDot: {
        fill: RADAR_COLOR_TOKENS.bg,
        stroke: RADAR_COLOR_TOKENS[dataKey],
        strokeWidth: 1,
    },
});
