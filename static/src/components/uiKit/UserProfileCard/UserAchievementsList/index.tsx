import type { TUserData } from 'api/api.v2.types';
import type { TComponent } from 'utils/types/elements';

import { Achievements } from 'components/uiKit/Achievements';

type TUserAchivementsListProps = {
    achievements: TUserData['achivements'];
};

export const UserAchievementsList: TComponent<TUserAchivementsListProps> = ({
    achievements,
}) => {
    return (
        <Achievements.List variant='user-profile-card'>
            {achievements.map((el) => (
                <Achievements.Item
                    key={el.id}
                    title={el.name}
                    url={el.picture}
                    achivKey={el.name}
                    hasTitle
                />
            ))}
        </Achievements.List>
    );
};
