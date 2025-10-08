import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import { scrollIntoView, scrollToElement } from 'utils/helpers/scroll';

type TUsePageControlsView = (
    currentPage: number,
    pagesCount: number,
) => {
    containerRef: RefObject<HTMLDivElement>;
    firstPageRef: RefObject<HTMLButtonElement>;
    lastPageRef: RefObject<HTMLButtonElement>;
};

export const usePageControlsView: TUsePageControlsView = (
    currentPage,
    pagesCount,
) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const firstPageRef = useRef<HTMLButtonElement>(null);
    const lastPageRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (
            containerRef.current &&
            firstPageRef.current &&
            lastPageRef.current
        ) {
            switch (currentPage) {
                case 0:
                    scrollToElement(containerRef.current);
                    break;

                case pagesCount:
                    scrollToElement(containerRef.current, {
                        left: containerRef.current.scrollWidth,
                    });
                    break;

                default:
                    const element = <HTMLElement>(
                        containerRef.current.childNodes[currentPage - 1]
                    );
                    scrollIntoView(element);
                    break;
            }
        }
    }, [currentPage, pagesCount]);

    return { containerRef, firstPageRef, lastPageRef };
};
