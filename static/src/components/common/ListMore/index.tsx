import { useState } from 'react';
import cn from 'clsx';
import type {
    KeyboardEventHandler,
    MouseEventHandler,
    PropsWithChildren,
} from 'react';
import type { TComponent } from 'utils/types/elements';

import { Typography } from 'components/uiKit/Typography';

import css from './style.module.scss';

type TListMoreProps = {
    title: string;
    className?: string;
};

export const ListMore: TComponent<PropsWithChildren<TListMoreProps>> = ({
    title,
    children,
    className,
}) => {
    const [isAll, setAll] = useState(false);

    const handleClick: MouseEventHandler = () => setAll((v) => !v);

    const handleKeyDown: KeyboardEventHandler = (e) => {
        if (e.key === ' ') {
            setAll((v) => !v);
        }
    };

    return (
        <section className={cn(css.list_container, className)}>
            <h2 className={css.title}>{title}</h2>

            <div
                tabIndex={0}
                role='button'
                className={css.left}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
            >
                <Typography
                    isUppercase
                    isVertical
                    className='whitespace-nowrap'
                >
                    SHOW {isAll ? 'LESS' : 'ALL'}
                </Typography>
            </div>

            <div className={cn(css.list, { [css.full]: isAll })}>
                {children}
            </div>
        </section>
    );
};
