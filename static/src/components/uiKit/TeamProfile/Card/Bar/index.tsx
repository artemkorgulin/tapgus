import type { TTeamDetails } from 'api/api.v2.types';
import type { TComponent } from 'utils/types/elements';

import ArrowDownThinIcon from 'assets/icons/arrow-down-thin.svg?react';

import { Achievements } from 'components/uiKit/Achievements';
import { ButtonInvisible } from 'components/uiKit/ButtonInvisible';
import { TeamLogo } from 'components/uiKit/TeamLogo';

import css from './style.module.scss';

type BarProps = Pick<TTeamDetails, 'achievements' | 'picture'>;

export const Bar: TComponent<BarProps> = (props) => {
    const { picture, achievements: items } = props;

    const isOverFlow = (items && items.length > 4) || false;

    return (
        <div className={css.team_bar}>
            <TeamLogo src={picture} />
            <div className={css.achivs}>
                <Achievements.List variant='team-profile-card'>
                    {items?.map((url, index) => (
                        <Achievements.Item key={index} url={url} />
                    ))}
                </Achievements.List>
                {isOverFlow ? (
                    <ButtonInvisible
                        className={css.achivs_more}
                        variant='opacity_invert'
                        leftElement={<ArrowDownThinIcon />}
                    />
                ) : null}
            </div>
        </div>
    );
};
