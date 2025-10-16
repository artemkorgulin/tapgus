import { Fragment, useCallback, useState } from 'react';
import type { TComponent } from 'utils/types/elements';

import ArrowLeftThinIcon from 'assets/icons/arrow-left-thin.svg?react';
import ArrowRightThinIcon from 'assets/icons/arrow-right-thin.svg?react';

import { ButtonInvisible } from 'components/uiKit/ButtonInvisible';
import { NumInSum } from 'components/uiKit/NumInSum';
import { PaginatorSquares } from 'components/uiKit/PaginatorSquares';

import { PAGE_SIZE } from './constants';
import { getPaddedCount } from './helpers';
import css from './style.module.scss';
import type { TListBlockProps } from './type';

export const ListBlock = <T extends { id: string }>(
    props: TListBlockProps<T>,
): ReturnType<TComponent<TListBlockProps<T>>> => {
    const {
        title,
        data,
        renderItem,
        rightElement,
        pageSize = PAGE_SIZE,
    } = props;

    const [itemsCount] = useState(data.length);
    const [pageCount] = useState(Math.ceil(itemsCount / pageSize));

    const [currentPage, setCurrentPage] = useState(0);
    const pageClickHandler = useCallback((page: number) => {
        setCurrentPage(page);
    }, []);

    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;
    const currentCount = getPaddedCount(
        (currentPage + 1) * pageSize,
        itemsCount,
    );

    return (
        <section className={css.list_block}>
            <div className={css.head}>
                <h2>{title}</h2>
                {rightElement}
            </div>
            {/*// todo: Убрать gap внутри body*/}
            {/* todo и добавть в айтемы margin*/}
            <div className={css.body}>
                {data.slice(startIndex, endIndex).map((item) => (
                    <Fragment key={item.id}>{renderItem(item)}</Fragment>
                ))}
            </div>
            <div className={css.footer}>
                <div className={css.row}>
                    <NumInSum num={currentCount} sum={itemsCount} isMonoSpace />
                    {itemsCount > pageSize ? (
                        <PaginatorSquares
                            currentPage={currentPage}
                            pageCount={pageCount}
                            onPageClick={pageClickHandler}
                            prevPageElement={
                                <ButtonInvisible
                                    onClick={() => setCurrentPage((v) => v - 1)}
                                    disabled={currentPage === 0}
                                >
                                    <ArrowLeftThinIcon />
                                </ButtonInvisible>
                            }
                            nextPageElement={
                                <ButtonInvisible
                                    onClick={() => setCurrentPage((v) => v + 1)}
                                    disabled={
                                        currentCount === String(itemsCount)
                                    }
                                >
                                    <ArrowRightThinIcon />
                                </ButtonInvisible>
                            }
                        />
                    ) : null}
                </div>
            </div>
        </section>
    );
};
