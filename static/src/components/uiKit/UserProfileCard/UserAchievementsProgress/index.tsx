import type { TComponent } from 'utils/types/elements';

import { NumInSum } from 'components/uiKit/NumInSum';

import css from './style.module.scss';

export const UserAchievementsProgress: TComponent = () => {
    return (
        <div className={css.progress}>
            <div className={css.progress_bar} />

            <div className={css.counter_row}>
                <div className='uppercase'>user achievements</div>
                <NumInSum num={3} sum={20} />
            </div>
        </div>
    );
};
