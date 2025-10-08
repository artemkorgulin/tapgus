import cn from 'clsx';
import type { TComponent } from 'utils/types/elements';

import css from './style.module.scss';

export const UserStatistics: TComponent = () => {
    return (
        <section className={cn(css.statistics, 'opacity-50')}>
            <h2 className={css.title}>user statistics</h2>
            <div className={css.row}>
                <div className={css.item}>Tasks done </div>
                <div className={css.number}>n/a</div>
            </div>
            <div className={css.row}>
                <div className={css.item}>Reopened tasks </div>
                <div className={css.number}>n/a</div>
            </div>
            <div className={css.row}>
                <div className={css.item}>Activity level </div>
                <div className={css.number}>n/a</div>
            </div>
            <div className={css.row}>
                <div className={css.item}>Сompany experience </div>
                <div className={css.number}>n/a</div>
            </div>
            <div className={css.row}>
                <div className={css.item}>Skill points </div>
                <div className={css.number}>n/a</div>
            </div>
            <div className={css.row}>
                <div className={css.item}>Business Value </div>
                <div className={css.number}>n/a</div>
            </div>
        </section>
    );
};
