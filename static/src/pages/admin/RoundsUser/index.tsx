import { TComponent } from 'utils/types/elements';
import css from './style.module.scss';

const RoundsUser: TComponent = () => {
    const userName = "Василий!";

    return (
        <div className='flex flex-col gap-2'>
            <div className={css.header}>
                <h2 className={css.title}>Раунды:</h2>
                <span className={css.title}>{userName}</span>
            </div>
            <div className={css.list_rounds}>
                Раунд активен!
                До конца осталось: 00:23
                Мои очки - 123
            </div>
        </div>
    );
};

export default RoundsUser;
