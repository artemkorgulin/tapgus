import type { ComponentPropsWithoutRef } from 'react';
import type { Nullable } from 'utils/types/common';

// При использовании с loading='lazy' мы никогда не делаем проверку на кэш.
// Т.к. вызов проверки само по себе вызывает загрузку изображения.
export const isImageCached = (
    props: Pick<ComponentPropsWithoutRef<'img'>, 'loading' | 'src'>,
) => {
    if (props.loading === 'lazy' || !props.src) {
        return false;
    }

    let img: Nullable<HTMLImageElement> = new Image();
    img.src = props.src;

    if (img.complete) {
        img = null;
        return true;
    }

    return false;
};
