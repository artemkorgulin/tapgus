import { RoundsListItem } from 'components/uiKit/RoundsListItem';
import css from './style.module.scss';
export const RoundsList = () => {
    return (
        <div
            className='absolute right-0 top-0 z-[1000] flex h-full w-[300px]
                flex-col gap-2 bg-milk p-3'
        >
            <div className={css.rounds_list_box}>
                <RoundsListItem
                    title='Voluptate exercitation incididunt '
                    text='Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'
                    date='2024-01-18T14:19:52+03:00'
                />
            </div>
        </div>
    );
};
