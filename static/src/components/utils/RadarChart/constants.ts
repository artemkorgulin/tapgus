import { THEME } from 'utils/constants/theme';

import type { LEGEND_ITEM } from './enum';

// todo: research i18n correct usage in
export const LABELS: Record<LEGEND_ITEM, string> = {
    self: 'Самооценка',
    mate: 'Коллеги',
    boss: 'Руководители',
};

export const RADAR_COLOR_TOKENS = {
    text: THEME.colors['primary'],
    bg: THEME.colors['white'],
    counterBg: THEME.colors['primary'],
    grid: THEME.colors['gray'],
    self: THEME.colors['radar_self'],
    boss: THEME.colors['radar_boss'],
    mate: THEME.colors['radar_mate'],
};
