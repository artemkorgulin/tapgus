import { forwardRef, memo } from 'react';
import cn from 'clsx';
import type {
    ComponentPropsWithoutRef,
    ForwardedRef,
    PropsWithChildren,
} from 'react';

import { Spinner } from 'components/uiKit/Spinner';
import { Typography } from 'components/uiKit/Typography';

import css from './style.module.scss';

export type TImgFallbackDefaultProps = ComponentPropsWithoutRef<'img'> &
    PropsWithChildren<{
        src: string;
        isLoading: boolean;
        onLoad: () => void;
        onError: () => void;
    }>;

const DefaultFallbackRenderer = memo(
    forwardRef<HTMLImageElement, TImgFallbackDefaultProps>((props, ref) => {
        const {
            alt,
            src,
            isLoading,
            onLoad,
            onError,
            className,
            children,
            ...imgProps
        } = props;

        return (
            <div className={cn(className, css.container)}>
                <img
                    ref={ref}
                    {...imgProps}
                    alt={alt}
                    src={src}
                    className={cn(className, css.imgPos, {
                        [css.hide]: isLoading,
                    })}
                    onLoad={onLoad}
                    onError={onError}
                />
                <div
                    className={cn(className, css.imgPos, css.loader, {
                        [css.hide]: !isLoading,
                    })}
                >
                    {children ? (
                        children
                    ) : (
                        <>
                            <Spinner size='xs' variant='dots' />
                            <Typography className={css.alt} isUppercase>
                                {alt}
                            </Typography>
                        </>
                    )}
                </div>
            </div>
        );
    }),
);

DefaultFallbackRenderer.displayName = 'DefaultFallbackRenderer';

export const defaultFallbackRenderer = (
    props: TImgFallbackDefaultProps,
    ref?: ForwardedRef<HTMLImageElement>,
) => <DefaultFallbackRenderer ref={ref} {...props} />;
