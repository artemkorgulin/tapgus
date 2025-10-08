import cn from 'clsx';
import type { PropsWithChildren } from 'react';
import type { TComponent } from 'utils/types/elements';

import { ErrorMessageAnimated } from './ErrorMessageAnimated';

type FormControl = PropsWithChildren & {
    error?: string;
    className?: string;
};

export const FieldControl: TComponent<FormControl> = (props) => {
    const { className, error, children } = props;

    return (
        <div className={cn('flex flex-col', className)}>
            {children}
            <ErrorMessageAnimated error={error} />
        </div>
    );
};
