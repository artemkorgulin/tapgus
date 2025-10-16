import { useState } from 'react';
import type { ReactNode } from 'react';
import type { TComponent } from 'utils/types/elements';

import { PageButton } from './PageButton';
import css from './style.module.scss';
import type { PageClickHandler } from './type';
import { usePageControlsView } from './usePaginatorView';

type TPaginatorSquaresProps = {
    pageCount: number;
    currentPage: number;
    prevPageElement: ReactNode;
    nextPageElement: ReactNode;
    onPageClick: PageClickHandler;
};

export const PaginatorSquares: TComponent<TPaginatorSquaresProps> = ({
    pageCount,
    currentPage,
    prevPageElement,
    nextPageElement,
    onPageClick,
}) => {
    const [pages] = useState(
        new Array(pageCount).fill(null).map((_, index) => String(index)),
    );

    const { containerRef, firstPageRef, lastPageRef } = usePageControlsView(
        currentPage,
        pages.length,
    );

    return (
        <div className={css.pages_list}>
            {prevPageElement}
            <div ref={containerRef} className={css.container}>
                <PageButton
                    ref={firstPageRef}
                    index={0}
                    currentPage={currentPage}
                    onPageClick={onPageClick}
                    sticky='start'
                />
                {pages.map((id, index, arr) => {
                    if (id === pages[0] || id === pages[arr.length - 1]) {
                        return null;
                    }

                    return (
                        <PageButton
                            key={id}
                            index={index}
                            currentPage={currentPage}
                            onPageClick={onPageClick}
                        />
                    );
                })}
                <PageButton
                    ref={lastPageRef}
                    index={pages.length - 1}
                    currentPage={currentPage}
                    onPageClick={onPageClick}
                    sticky='end'
                />
            </div>
            {nextPageElement}
        </div>
    );
};
