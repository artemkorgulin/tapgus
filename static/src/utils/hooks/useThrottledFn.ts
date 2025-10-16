import { useEffect, useMemo, useRef } from 'react';

import throttle from 'lodash/throttle';

interface IUseThrottledFn {
    (...args: Parameters<typeof throttle>): () => void;
}

export const useThrottledFn: IUseThrottledFn = (
    fn,
    delay = 200,
    options = {
        leading: true,
        trailing: false,
    },
) => {
    const fnRef = useRef(fn);
    const optionsRef = useRef(options);

    const throttledFn = useMemo(
        () => throttle(fnRef.current, delay, optionsRef.current),
        [fnRef, delay, optionsRef],
    );

    useEffect(() => {
        return () => {
            throttledFn.cancel();
        };
    }, [throttledFn]);

    return throttledFn;
};
