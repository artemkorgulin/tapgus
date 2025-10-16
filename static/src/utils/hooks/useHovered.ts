import { type MouseEventHandler, useCallback, useState } from 'react';

type UseHoveredCrossHandlers<T> = {
    onMouseEnter: MouseEventHandler<T>;
    onMouseLeave: MouseEventHandler<T>;
};

type UseHoveredCrossReturn<T> = [boolean, UseHoveredCrossHandlers<T>];

export const useHovered = <
    T extends HTMLElement,
>(): UseHoveredCrossReturn<T> => {
    const [isHovered, setIsHovered] = useState(false);

    const onMouseEnter = useCallback(() => setIsHovered(true), []);
    const onMouseLeave = useCallback(() => setIsHovered(false), []);

    return [isHovered, { onMouseEnter, onMouseLeave }];
};
