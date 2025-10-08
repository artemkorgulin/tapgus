import { lazy } from 'react';
import { LayoutContent } from 'layouts/content';
import { ROUTES } from 'utils/constants/routes';
import { setCrumb } from 'utils/helpers/breadcrumbs';

import { WithIframe } from 'components/utils/WithIframe';

import { NAV_VIEWER_ABS } from 'pages/profile/constants';

import { ProductDetailsCrumb } from './ProductDetails/crumb';
import { NAV_PRODUCT } from './constants';

const ProductList = lazy(() => import('./ProductList'));
const ProductDetails = lazy(() => import('./ProductDetails'));

export const PRODUCT_ROUTERS = [
    {
        path: ROUTES.PRODUCTS,
        element: (
            <WithIframe
                fallback={
                    <LayoutContent navItems={NAV_VIEWER_ABS}>
                        <ProductList />
                    </LayoutContent>
                }
                isFallbackOnly
            />
        ),
    },
    {
        route: ROUTES.PRODUCTS_DETAILS,
        element: <LayoutContent navItems={NAV_PRODUCT} />,
        handle: setCrumb(ProductDetailsCrumb),
        children: [
            {
                index: true,
                handle: setCrumb(ProductDetailsCrumb),
                element: <WithIframe fallback={<ProductDetails />} />,
            },
            {
                path: '*',
                element: <WithIframe />,
            },
        ],
    },
];
