import { forwardRef } from 'react';
import cn from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

import css from './style.module.scss';
import type { PageClickHandler } from './type';

type TPageButtonProps = ComponentPropsWithoutRef<'button'> & {
    index: number;
    currentPage: number;
    onPageClick: PageClickHandler;
    sticky?: 'start' | 'end' | false;
};

export const PageButton = forwardRef<HTMLButtonElement, TPageButtonProps>(
    (props, ref) => {
        const {
            index,
            currentPage,
            onPageClick,
            sticky = false,
            ...buttonProps
        } = props;

        return (
            <button
                ref={ref}
                title={`${index}`}
                className={cn(css.item, {
                    [css.current]: currentPage === index,
                    [css.stickyStart]: sticky === 'start',
                    [css.stickyEnd]: sticky === 'end',
                })}
                onClick={() => {
                    onPageClick(index);
                }}
                {...buttonProps}
            />
        );
    },
);

PageButton.displayName = 'PageButton';
