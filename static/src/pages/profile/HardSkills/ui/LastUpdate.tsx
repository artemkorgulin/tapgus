import type { PropsWithChildren } from 'react';
import type { TComponent } from 'utils/types/elements';

import { CaretLIcon, CaretRIcon } from 'assets/icons';

import { Typography } from 'components/uiKit/Typography';

export const LastUpdate: TComponent<PropsWithChildren> = (props) => (
    <>
        <CaretLIcon className='text-secondary' />
        <Typography isUppercase className='text-secondary'>
            последнее обновление:
        </Typography>
        <Typography>{props.children}</Typography>
        <CaretRIcon className='text-secondary' />
    </>
);
