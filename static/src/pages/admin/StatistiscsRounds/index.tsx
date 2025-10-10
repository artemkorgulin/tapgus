import { TComponent } from 'utils/types/elements';
import css from './style.module.scss';
const StatisticsRounds: TComponent = () => {
    const userName = "Василий!";

    return (
        <div className='flex flex-col gap-2'>
            <div className={css.header}>
                <h2 className={css.title}>Раунд завершен:</h2>
                <span className={css.title}>{userName}</span>
            </div>
            <div className={css.list_rounds}>
                Всего:
                Победитель:
                Мои очки:
            </div>
        </div>
    );
};

export default StatisticsRounds;
