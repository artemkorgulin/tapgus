import type { TComponent } from 'utils/types/elements';

import { Typography } from 'components/uiKit/Typography';

export const HistoryItem: TComponent = () => {
    return (
        <div className='flex flex-row justify-between'>
            <Typography variant='secondary'>21.12.2023</Typography>
            <Typography isUppercase>Название компетенции</Typography>
            <Typography isUppercase>Senior</Typography>
            <Typography isUppercase className='text-green'>
                Достигнут новый грейд
            </Typography>
        </div>
    );
};
