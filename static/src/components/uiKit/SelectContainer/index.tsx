import cn from 'clsx';
import type { ReactElement } from 'react';
import type { TComponent } from 'utils/types/elements';

import { Typography } from 'components/uiKit/Typography';

import css from './style.module.scss';

type TSelectContainerProps = {
    title: string;
    selectElement: ReactElement;
};

export const SelectContainer: TComponent<TSelectContainerProps> = ({
    title,
    selectElement,
}) => (
    <div
        className={cn(
            css.container,
            'z-10 flex w-full flex-row bg-white shadow-card',
        )}
    >
        <Typography
            as='label'
            isUppercase
            className={cn(css.label, 'text-secondary')}
        >
            {title}
        </Typography>
        {selectElement}
    </div>
);
