import type { TComponent } from 'utils/types/elements';

import { ButtonInvisible } from 'components/uiKit/ButtonInvisible';
import { Typography } from 'components/uiKit/Typography';

export const PlanItem: TComponent = () => {
    return (
        <div className='flex flex-row items-center justify-between'>
            <Typography variant='secondary'>21.12.2023</Typography>
            <Typography isUppercase>Название компетенции</Typography>
            <Typography isUppercase>Senior</Typography>
            <ButtonInvisible
                variant='solid'
                className='h-6 px-[8px] py-[1.5px]'
            >
                К тесту
            </ButtonInvisible>
        </div>
    );
};
