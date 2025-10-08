import cn from 'clsx';
import type { ReactElement } from 'react';
import type { Nullable } from 'utils/types/common';
import type { TComponent } from 'utils/types/elements';

import { Typography } from 'components/uiKit/Typography';

import css from './style.module.scss';

type THoverContentProps = {
    iconElement: ReactElement;
    title?: Nullable<string>;
};

export const HoverElementContent: TComponent<THoverContentProps> = ({
    title,
    iconElement,
}) => {
    return (
        <>
            {iconElement}
            <Typography
                className={cn(css.title, { hidden: !title })}
                isUppercase
            >
                {title}
            </Typography>
        </>
    );
};
