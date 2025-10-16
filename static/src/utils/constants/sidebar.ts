import { ENV_IS_DEVELOP } from 'app-env';
import type { FC } from 'react';
import type { Nullable } from 'utils/types/common';
import type { SVGComponentProps } from 'utils/types/ui';
import KnowledgeICO from 'assets/icons/brain.svg?react';
import TeamsICO from 'assets/icons/teams.svg?react';

import { DEV_ROUTES, ROUTES } from './routes';

export type SidebarItem = {
    key: string;
    title: string;
    path: string;
    icon: Nullable<FC<SVGComponentProps>>;
    isDisabled?: boolean;
    target?: '_blank';
};

export const SIDEBAR_ITEMS: SidebarItem[] = [
    {
        key: ROUTES.GAMER,
        title: 'user',
        path: ROUTES.GAMER,
        icon: TeamsICO,
        isDisabled: true,
    }
];

if (ENV_IS_DEVELOP) {
    SIDEBAR_ITEMS.push({
        key: DEV_ROUTES.UI_BOOK,
        title: 'UI библиотека',
        path: DEV_ROUTES.UI_BOOK,
        icon: KnowledgeICO,
    });
}
