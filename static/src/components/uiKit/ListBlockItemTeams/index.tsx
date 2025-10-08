import type { IBaseListItem, IListBlockItemTeams } from 'api/api.v2.types';
import cn from 'clsx';
import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes';
import type { TComponent } from 'utils/types/elements';

import { DotsIcon } from 'assets/icons';

import { AchievementItem_DRAFT } from 'components/uiKit/AchievementItem_DRAFT';
import { HoverElement } from 'components/uiKit/HoverElement';
import { Avatar } from 'components/uiKit/UserAvatar';

import css from './style.module.scss';

export interface IListBlockItemTeamsProps
    extends IBaseListItem,
        IListBlockItemTeams {
    hoverContent: ReactElement;
    hasAchivs?: boolean;
}

export const ListBlockItemTeams: TComponent<IListBlockItemTeamsProps> = ({
    id,
    avatar,
    accent,
    name,
    hoverContent,
    hasAchivs = false,
}) => {
    return (
        <Link to={`${ROUTES.TEAMS}/${id}`}>
            <div
                className={cn(
                    css.list_block_item,
                    HoverElement.containerClassName,
                )}
            >
                <div className={css.member}>
                    <Avatar url={avatar}>
                        <HoverElement className={css.hoverIcon} hasCorners>
                            {hoverContent}
                        </HoverElement>
                    </Avatar>
                    <div className={css.info}>
                        <div className='flex flex-row gap-[0.438rem]'>
                            <div className={css.title}>{accent}</div>
                            <DotsIcon />
                        </div>
                        <div className={css.team}>{name}</div>
                    </div>
                </div>
                {hasAchivs && (
                    <div className={css.achivs_list}>
                        <AchievementItem_DRAFT />
                        <AchievementItem_DRAFT />
                        <AchievementItem_DRAFT />
                        <AchievementItem_DRAFT />
                    </div>
                )}
            </div>
        </Link>
    );
};
