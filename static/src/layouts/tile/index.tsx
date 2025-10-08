import type { ReactElement } from 'react';
import type { TComponent } from 'utils/types/elements';

import { BreadCrumbs } from 'components/common/BreadCrumbs';

import css from './style.module.scss';

type TileLayoutProps = {
    topRightElement?: ReactElement;
    topLeftElement?: ReactElement;
    bottomRightElement?: ReactElement;
    bottomLeftElement?: ReactElement;
};

export const TileLayout: TComponent<TileLayoutProps> = ({
    topRightElement,
    topLeftElement,
    bottomRightElement,
    bottomLeftElement,
}) => {
    return (
        <div className={css.tile_layout}>
            <section className={css.top_left}>
                <BreadCrumbs />
                {topLeftElement}
            </section>
            {topRightElement}
            {bottomLeftElement}
            {bottomRightElement}
        </div>
    );
};
