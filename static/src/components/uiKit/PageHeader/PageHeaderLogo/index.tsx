import cn from 'clsx';
import type { TComponent } from 'utils/types/elements';

import handsImage from 'assets/image/hands.webp';
import statsImage from 'assets/image/stats.webp';

import css from './style.module.scss';

export type PageLogoVariants = 'hands' | 'stats';

type PageLogoProps = {
    variant: PageLogoVariants;
};

const imageVariants: Record<PageLogoVariants, string> = {
    hands: handsImage,
    stats: statsImage,
};

export const PageHeaderLogo: TComponent<PageLogoProps> = ({ variant }) => (
    <img
        className={cn(css.logo, css[`variant_${variant}`])}
        src={imageVariants[variant]}
        alt='page-logo'
    />
);
