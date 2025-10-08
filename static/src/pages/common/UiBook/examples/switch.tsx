import { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { ToggleBox } from 'components/uiKit/Togglebox';

import { WithFormDebug } from './ui/WithFormDebug';

type TToggleExampleForm = {
    quality: boolean;
    cheap: boolean;
    fast: boolean;
};

type TToggleKeys = keyof TToggleExampleForm;

const conflicts = new Map<TToggleKeys, TToggleKeys>([
    ['quality', 'fast'],
    ['cheap', 'quality'],
    ['fast', 'cheap'],
]);

export const SwitchExamples = () => {
    const [lastField, setLastField] = useState<TToggleKeys | null>(null);

    const options = useCallback(
        (fieldName: TToggleKeys) => ({
            onChange: () => {
                setLastField(fieldName);
            },
        }),
        [],
    );

    const methods = useForm<TToggleExampleForm>({
        defaultValues: {
            quality: true,
            cheap: false,
            fast: false,
        },
    });
    const { register, watch, setValue } = methods;

    const quality = watch('quality');
    const cheap = watch('cheap');
    const fast = watch('fast');

    useEffect(() => {
        if (lastField && quality && cheap && fast) {
            const target = conflicts.get(lastField);

            if (target) {
                setValue(target, false);
            }
        }
    }, [lastField, quality, cheap, fast, setValue]);

    return (
        <FormProvider {...methods}>
            <h3>Switch variants</h3>
            <WithFormDebug>
                <ToggleBox
                    type='switch'
                    label={'Quality'}
                    {...register('quality', options('quality'))}
                />
                <ToggleBox
                    type='switch'
                    label={'Cheap'}
                    {...register('cheap', options('cheap'))}
                />
                <ToggleBox
                    type='switch'
                    label={'Fast'}
                    {...register('fast', options('fast'))}
                />
                <ToggleBox
                    type='switch'
                    label='disabled'
                    title='disabled'
                    disabled
                />
                <ToggleBox
                    type='switch'
                    label='checked:disabled'
                    title='checked & disabled'
                    disabled
                    defaultChecked
                />
            </WithFormDebug>
        </FormProvider>
    );
};
