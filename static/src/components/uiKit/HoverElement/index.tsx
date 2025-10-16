import cn from 'clsx';
import type { PropsWithChildren, ReactElement } from 'react';
import type { TComponent } from 'utils/types/elements';

import css from './style.module.scss';

type THoverElementProps = PropsWithChildren<{
    iconElement?: ReactElement;
    className?: string;
    hasCorners?: boolean;
}>;

type THoverElementComponent = TComponent<THoverElementProps> & {
    containerClassName: string;
};

const HoverElement: THoverElementComponent = ({
    children,
    hasCorners = false,
    className,
}) => {
    return (
        <div className={css.logo_overlay}>
            <div
                className={cn(
                    css.logo_overlay_scale,
                    {
                        [css.corners]: hasCorners,
                    },
                    className,
                )}
            >
                {children}
            </div>
        </div>
    );
};

HoverElement.containerClassName = css.container;

export { HoverElement };
