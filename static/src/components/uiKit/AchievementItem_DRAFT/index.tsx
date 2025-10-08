import cn from 'clsx';
import type { TComponent } from 'utils/types/elements';

import achivsFallbackImg from 'assets/achivs/grade/pre_senior.svg';

import { Spinner } from 'components/uiKit/Spinner';
import { SuspenseImg } from 'components/utils/SuspenseImg';

import { ACHIV_ICONS_DRAFT } from './constants';
import css from './style.module.scss';

type TAchievementItem_DRAFTProps = {
    url?: string;
    achivKey?: string;
};

export const AchievementItem_DRAFT: TComponent<TAchievementItem_DRAFTProps> = ({
    url,
    achivKey,
}) => {
    if (url) {
        return (
            <SuspenseImg
                src={url}
                fallbackSrc={achivsFallbackImg}
                fallback={<Spinner size='xs' variant='dots' />}
                className={css.achievement}
                alt='achiv'
            />
        );
    }

    if (achivKey && ACHIV_ICONS_DRAFT?.[achivKey]) {
        return <>{ACHIV_ICONS_DRAFT[achivKey]}</>;
    }

    return <div className={cn(css.achievement, css.fallback)} />;
};
