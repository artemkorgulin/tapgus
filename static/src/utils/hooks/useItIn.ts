import { useEffect, useState } from 'react';

interface IUseItInProps {
    parentElement: HTMLElement | null;
    childElement: HTMLElement | null;
}

export const useItIn = (props: IUseItInProps): boolean => {
    const { parentElement, childElement } = props;

    const [isItIn, setIsItIn] = useState<boolean>(false);

    useEffect(() => {
        if (!parentElement || !childElement) {
            return;
        }

        const parentCoords = parentElement.getBoundingClientRect();
        const childCoords = childElement.getBoundingClientRect();

        if (
            childCoords.top < parentCoords.top ||
            childCoords.right > parentCoords.right ||
            childCoords.bottom > parentCoords.bottom ||
            childCoords.left < parentCoords.left
        ) {
            setIsItIn(true);
            return;
        }

        setIsItIn(false);
    }, [parentElement, childElement]);

    return isItIn;
};
