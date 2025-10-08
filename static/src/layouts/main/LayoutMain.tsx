import { HeaderUser } from 'layouts/main/HeaderUser';
import type { PropsWithChildren } from 'react';
import { useLoaderData, useOutlet } from 'react-router-dom';
import { SIDEBAR_ITEMS } from 'utils/constants/sidebar';
import { ViewerDataContext } from 'utils/context/viewerData';
import type { TViewerData, TViewerDataLegacy } from 'utils/types/auth';
import type { TComponent } from 'utils/types/elements';

import { SearchUser } from 'components/common/SearchUser';
import { Sidebar } from 'components/common/Sidebar';

import css from './style.module.scss';

export const LayoutMain: TComponent<PropsWithChildren> = ({ children }) => {
    const userData = useLoaderData() as TViewerData | TViewerDataLegacy;
    const outlet = useOutlet();

    return (
        <ViewerDataContext.Provider value={userData}>
            <div className={css.main_layout}>
                <div className={css.sidebar}>
                    <Sidebar navItems={SIDEBAR_ITEMS} />
                </div>
                <div className={css.content_container}>
                    <div className={css.header_container}>
                        <div className={css.top_header}>
                            <div className={css.search_container}>
                                <SearchUser />
                            </div>
                            <HeaderUser />
                        </div>
                    </div>
                    {outlet || children}
                </div>
            </div>
        </ViewerDataContext.Provider>
    );
};
