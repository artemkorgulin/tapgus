import { forwardRef, useState, useTransition } from 'react';
import cn from 'clsx';
import type { ComponentPropsWithoutRef, ReactElement } from 'react';

import defaultAvatar from 'assets/temp/avatar.webp';

import type { TImgFallbackDefaultProps } from './defaultFallbackRenderer';
import { defaultFallbackRenderer } from './defaultFallbackRenderer';
import { isImageCached } from './helper';
import css from './style.module.scss';

type TImgFallbackProps = ComponentPropsWithoutRef<'img'> & {
    src: string;
    isDebugFallback?: boolean;
    fallbackSrc?: string;
    fallback?: ReactElement;
    fallbackRenderer?: (props: TImgFallbackDefaultProps) => ReactElement;
};

const SuspenseImg = forwardRef<HTMLImageElement, TImgFallbackProps>(
    (props, ref) => {
        const {
            alt,
            src,
            loading,
            className,
            fallback,
            fallbackSrc = defaultAvatar,
            fallbackRenderer = defaultFallbackRenderer,
            isDebugFallback = false,
            ...imgProps
        } = props;

        const [, startTransition] = useTransition();

        const [isCached, setIsCached] = useState(() =>
            isImageCached({ loading, src }),
        );

        const [isLoading, setIsLoading] = useState(!isCached);
        const [imgSrc, setImgSrc] = useState(src);

        const handleImageLoaded = () => {
            startTransition(() => {
                setIsLoading(false);
                setIsCached(true);
            });
        };

        const handleImageError = () => {
            if (!isDebugFallback) {
                startTransition(() => {
                    setIsLoading(false);
                    setImgSrc(fallbackSrc);
                });
            }
        };

        if (isCached) {
            return (
                <img
                    ref={ref}
                    {...imgProps}
                    alt={alt}
                    src={imgSrc}
                    className={cn(className, css.img)}
                    loading={loading}
                />
            );
        }

        return (
            <>
                {fallbackRenderer(
                    {
                        ...imgProps,
                        loading,
                        alt,
                        src: imgSrc,
                        isLoading,
                        className,
                        onLoad: handleImageLoaded,
                        onError: handleImageError,
                        children: fallback,
                    },
                    ref,
                )}
            </>
        );
    },
);

SuspenseImg.displayName = 'SuspenseImg';

export { SuspenseImg };
