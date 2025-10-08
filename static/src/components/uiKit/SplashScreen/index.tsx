import cn from 'clsx';
import type { ReactNode } from 'react';
import type { TComponent } from 'utils/types/elements';

import { Spinner } from 'components/uiKit/Spinner';

type SplashScreenProps = {
    className?: string;
    children?: ReactNode;
};

export const SplashScreen: TComponent<SplashScreenProps> = ({
    className,
    children = <Spinner size='lg' />,
}) => {
    return (
        <div className={cn('z-50 flex items-center justify-center', className)}>
            {children}
        </div>
    );
};
