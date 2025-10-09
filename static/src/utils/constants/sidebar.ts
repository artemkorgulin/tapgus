import { ENV_IS_DEVELOP } from 'app-env';
import type { FC } from 'react';
import type { Nullable } from 'utils/types/common';
import type { SVGComponentProps } from 'utils/types/ui';

import ProductsICO from 'assets/icons/analitic.svg?react';
import KnowledgeICO from 'assets/icons/brain.svg?react';
import CompanyICO from 'assets/icons/company.svg?react';
import RDPIco from 'assets/icons/rdp.svg?react';
import TeamworkICO from 'assets/icons/rocket.svg?react';
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
        key: ROUTES.TEAMWORK,
        title: 'Teamwork',
        path: ROUTES.TEAMWORK,
        icon: TeamworkICO,
    },
    {
        key: ROUTES.ADMIN,
        title: 'admin',
        path: ROUTES.ADMIN,
        icon: TeamsICO,
        isDisabled: true,
    },
    {
        key: ROUTES.TEAMS,
        title: 'Teams',
        path: ROUTES.TEAMS,
        icon: TeamsICO,
    },

    {
        key: ROUTES.PRODUCTS,
        title: 'Products',
        path: ROUTES.PRODUCTS,
        icon: ProductsICO,
    },
    {
        key: ROUTES.KNOWLEDGE,
        title: 'Knowledge',
        path: ROUTES.KNOWLEDGE,
        icon: KnowledgeICO,
        isDisabled: true,
    },
    {
        key: ROUTES.COMPANY,
        title: 'Company',
        path: ROUTES.COMPANY,
        icon: CompanyICO,
        isDisabled: true,
    },
    {
        key: ROUTES.RDP,
        title: 'RDP',
        path: ROUTES.RDP,
        icon: RDPIco,
    },
];

if (ENV_IS_DEVELOP) {
    SIDEBAR_ITEMS.push({
        key: DEV_ROUTES.UI_BOOK,
        title: 'UI библиотека',
        path: DEV_ROUTES.UI_BOOK,
        icon: KnowledgeICO,
    });
}
