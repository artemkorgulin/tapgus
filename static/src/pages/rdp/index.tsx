import { lazy } from 'react';
import { LayoutContent } from 'layouts/content';
import { ROUTES } from 'utils/constants/routes';

import { WithIframe } from 'components/utils/WithIframe';

import { NAV_VIEWER_ABS } from 'pages/profile/constants';

const SummaryStatisticsPage = lazy(() => import('./SummaryStatistics/'));

export const RDP_ROUTES = [
    {
        path: ROUTES.RDP,
        element: <LayoutContent navItems={NAV_VIEWER_ABS} />,
        children: [
            {
                index: true,
                element: <WithIframe fallback={<SummaryStatisticsPage />} />,
            },
        ],
    },
];
