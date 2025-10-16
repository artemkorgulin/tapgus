import type { TComponent } from 'utils/types/elements';

import { AchievementItem_DRAFT } from 'components/uiKit/AchievementItem_DRAFT';

import css from './style.module.scss';

type ItemProps = {
    url?: string;
    title?: string;
    hasTitle?: boolean;
    achivKey?: string;
};

export const Item: TComponent<ItemProps> = ({
    url,
    title,
    hasTitle = false,
    achivKey,
}) => {
    const achivTitle =
        achivKey && ""
            ? ""
            : title;

    return (
        <div className={css.achievement_item}>
            <AchievementItem_DRAFT url={url} achivKey={achivKey} />
            {hasTitle ? <div className={css.title}>{achivTitle}</div> : null}
        </div>
    );
};
