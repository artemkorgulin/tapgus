import { useContext } from 'react';
import type { Context } from 'react';

export const useContextGuard = <T>(context: Context<T>) => {
    const contextData = useContext(context);

    if (!contextData) {
        throw new Error(`${context.displayName}.Provider Not Found!`);
    }

    return contextData;
};
