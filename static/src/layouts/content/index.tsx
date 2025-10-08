import { Suspense } from 'react';
import { SplashScreenMain } from 'layouts/main';
import type { PropsWithChildren } from 'react';
import { useLoaderData, useOutlet } from 'react-router-dom';
import { ViewerDataContext } from 'utils/context/viewerData';
import type { TViewerData, TViewerDataLegacy } from 'utils/types/auth';
import type { TComponent, TNavItem } from 'utils/types/elements';

import { HeaderMenu } from 'components/common/HeaderMenu';

type TContentProps = {
    navItems?: TNavItem[];
};

export const LayoutContent: TComponent<PropsWithChildren<TContentProps>> = ({
    children,
    navItems,
}) => {
    const outlet = useOutlet();

    const userData = useLoaderData() as TViewerData | TViewerDataLegacy;

    return (
        <ViewerDataContext.Provider value={userData}>
            {navItems ? <HeaderMenu navItems={navItems} /> : null}
            <main className='h-contentFullHeight p-6'>
                <Suspense fallback={<SplashScreenMain />}>
                    {outlet || children}
                </Suspense>
            </main>
        </ViewerDataContext.Provider>
    );
};
