import type { TProfileRoutes } from 'utils/constants/routes';
import { ROUTES } from 'utils/constants/routes';
import { convertToAbsolute, convertToRelative } from 'utils/helpers/nav-items';

const getAdminNavList = (userRoutes: TProfileRoutes) => [
    {
        path: userRoutes.GAMER_PAGE_ROUNDS,
        title: 'rounds',
    }
];

const NAV_VIEWER = getAdminNavList(ROUTES.VIEWER);
export const NAV_VIEWER_ABS = convertToAbsolute(NAV_VIEWER);

export const NAV_VIEWER_REL = convertToRelative(NAV_VIEWER);

export const statusMatrix = <any>{
    "Y": "Раунд активен",
    "N": "Раунд завершен",
    "С": "Cooldown",
    '': "Раунд завершен"
};
