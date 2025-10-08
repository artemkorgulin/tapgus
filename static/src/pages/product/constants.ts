import { ROUTES } from 'utils/constants/routes';
import { convertToRelative, setDisabled } from 'utils/helpers/nav-items';
import type { TNavItem } from 'utils/types/elements';

export const NAV_PRODUCT: TNavItem[] = convertToRelative([
    { path: '', title: 'main' },
    {
        path: ROUTES.PRODUCTS_STATISTICS,
        title: 'statistics',
        isDisabled: true,
    },
    {
        path: ROUTES.PRODUCTS_ARCHITECTURE,
        title: 'architecture',
        isDisabled: true,
    },
    {
        path: ROUTES.PRODUCTS_DOCUMENTATION,
        title: 'documentation',
        isDisabled: true,
    },
    {
        path: ROUTES.PRODUCTS_SUPPORT,
        title: 'support',
        isDisabled: true,
    },
    {
        path: ROUTES.PRODUCTS_RESOURCES,
        title: 'resources',
        isDisabled: true,
    },
    {
        path: ROUTES.PRODUCTS_REPORTS_AND_PLANS,
        title: 'reports and plans',
    },
    {
        path: ROUTES.PRODUCTS_VERSIONING,
        title: 'versioning',
        isDisabled: true,
    },
]);

export const NAV_PRODUCT_LIST = setDisabled(NAV_PRODUCT);
