import { useEffect, useState } from 'react';

import debounce from 'lodash/debounce';

interface DebounceSettings {
    leading?: boolean | undefined;
    maxWait?: number | undefined;
    trailing?: boolean | undefined;
}

export function useDebouncedValue<TValue = unknown>(
    value: TValue,
    delay = 300,
    options: DebounceSettings = {},
) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = debounce(
            (newValue) => {
                setDebouncedValue(newValue);
            },
            delay,
            options,
        );

        handler(value);

        return () => {
            handler.cancel();
        };
    }, [value, delay, options]);

    return debouncedValue;
}
