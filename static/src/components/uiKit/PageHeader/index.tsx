import type { ReactNode } from 'react';
import type { TComponent } from 'utils/types/elements';

import type { PageLogoVariants } from './PageHeaderLogo';
import { PageHeaderLogo } from './PageHeaderLogo';
import css from './style.module.scss';

export type PageHeaderProps = {
    title: string;
    logoVariant: PageLogoVariants;
    rightElement?: ReactNode;
};

export const PageHeader: TComponent<PageHeaderProps> = ({
    title,
    logoVariant,
    rightElement,
}) => {
    return (
        <div className={css.page_header}>
            <div className={css.row}>
                <div className={css.header}>
                    <PageHeaderLogo variant={logoVariant} />
                    <h1 className={css.title}>{title}</h1>
                </div>
            </div>
            {rightElement}
        </div>
    );
};
