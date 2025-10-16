// Reference: https://gist.github.com/threepointone/e73a87f7bbbebc78cf71744469ec5a15
import { forwardRef, Suspense, useLayoutEffect, useRef, useState } from 'react';
import type { ComponentPropsWithoutRef, SyntheticEvent } from 'react';

type SuspenseIFrameProps = ComponentPropsWithoutRef<'iframe'> & {
    isDebug?: boolean;
    fallback?: JSX.Element;
    onLoad?: (e?: SyntheticEvent<HTMLIFrameElement, Event>) => void;
};

export const SuspenseIFrame = forwardRef<
    HTMLIFrameElement,
    SuspenseIFrameProps
>((props, ref) => {
    const { fallback, isDebug = false, ...rest } = props;

    const _fallback = fallback || 'loading...';

    return (
        <Suspense fallback={_fallback}>
            {isDebug ? (
                _fallback
            ) : (
                <SuspenseIFrameImplementation ref={ref} {...rest} />
            )}
        </Suspense>
    );
});

SuspenseIFrame.displayName = 'SuspenseIFrame';

const SuspenseIFrameImplementation = forwardRef<
    HTMLIFrameElement,
    SuspenseIFrameProps
>((props, ref) => {
    const awaiter = useRef<null | {
        promise: null | Promise<void>;
        resolve: () => void;
        reject: () => void;
    }>(null);
    const [, triggerLoad] = useState(false);

    if (awaiter.current?.promise) {
        throw awaiter.current.promise;
    }

    useLayoutEffect(() => {
        if (awaiter.current === null) {
            // @ts-expect-error from source
            awaiter.current = {};
            // @ts-expect-error from source
            awaiter.current.promise = new Promise<void>((resolve, reject) => {
                // @ts-expect-error from source
                Object.assign(awaiter.current, { resolve, reject });
            });
            triggerLoad(true);
        }
    }, []);

    return (
        <iframe
            ref={ref}
            {...props}
            title={props.title || props.src}
            onLoad={(e) => {
                // @ts-expect-error from source
                awaiter.current.promise = null;
                awaiter.current?.resolve();
                props.onLoad?.(e);
            }}
            onError={(err) => {
                // @ts-expect-error from source
                awaiter.current.promise = null;
                awaiter.current?.reject();
                props.onError?.(err);
            }}
        />
    );
});

SuspenseIFrameImplementation.displayName = 'SuspenseIFrameImplementation';
