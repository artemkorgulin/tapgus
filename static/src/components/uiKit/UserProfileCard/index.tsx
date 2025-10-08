import type { TUserData } from 'api/api.v2.types';
import type { TComponent } from 'utils/types/elements';

import imgUserDefault from 'assets/image/user_default.webp';

import css from './style.module.scss';
import { UserAchievementsList } from './UserAchievementsList';
import { UserAchievementsProgress } from './UserAchievementsProgress';

export const UserProfileCard: TComponent<{ user: TUserData }> = ({ user }) => {
    return (
        <div className={css.user_card}>
            <div className={css.avatar}>
                <img
                    className={css.img}
                    src={user.personalPhoto || imgUserDefault}
                    alt='avatar'
                />
            </div>

            <div className={css.meta}>
                <div className={css.container}>
                    <div className={css.username}>
                        <h1>{user.fio}</h1>
                    </div>

                    <UserAchievementsProgress />
                    <UserAchievementsList achievements={user.achivements} />
                </div>
            </div>
        </div>
    );
};
