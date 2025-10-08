import type { PropsWithChildren } from 'react';
import { useFormContext } from 'react-hook-form';
import type { TComponent } from 'utils/types/elements';

export const WithFormDebug: TComponent<PropsWithChildren> = ({ children }) => {
    const { watch } = useFormContext();

    const formFields = watch();

    return (
        <div className='flex flex-row items-center gap-3'>
            <div className='flex flex-col gap-2'>{children}</div>
            <pre>{JSON.stringify(formFields, null, '  ')}</pre>
        </div>
    );
};
