import { FormProvider, useForm } from 'react-hook-form';
import type { TComponent } from 'utils/types/elements';

import { ToggleBox } from 'components/uiKit/Togglebox';

import { WithFormDebug } from './ui/WithFormDebug';

type TRadioboxExampleForm = {
    group_first: string;
    group_second: string;
};

export const RadioboxExamples: TComponent = () => {
    const methods = useForm<TRadioboxExampleForm>({
        defaultValues: {
            group_first: 'FirstValue',
            group_second: 'SecondValue',
        },
    });
    const { register } = methods;

    return (
        <FormProvider {...methods}>
            <WithFormDebug>
                <div className='flex gap-6'>
                    <div className='flex flex-col gap-2'>
                        <h3>Radio Group</h3>
                        <ToggleBox
                            type='radio'
                            label='First'
                            value={'FirstValue'}
                            {...register('group_first')}
                        />
                        <ToggleBox
                            type='radio'
                            label='Second'
                            value={'SecondValue'}
                            {...register('group_first')}
                        />
                        <ToggleBox
                            type='radio'
                            label='Third'
                            value={'ThirdValue'}
                            {...register('group_first')}
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3>Other Group</h3>
                        <ToggleBox
                            type='radio'
                            label='First'
                            value={'FirstValue'}
                            {...register('group_second')}
                        />
                        <ToggleBox
                            type='radio'
                            label='Second'
                            value={'SecondValue'}
                            {...register('group_second')}
                        />
                        <ToggleBox
                            type='radio'
                            label='Third'
                            value={'ThirdValue'}
                            {...register('group_second')}
                        />
                    </div>
                </div>
            </WithFormDebug>
            <h3>Disabled</h3>
            <div className='flex flex-row gap-2'>
                <ToggleBox
                    type='radio'
                    label='disabled'
                    title='disabled'
                    disabled
                />
                <ToggleBox
                    type='radio'
                    label='checked:disabled'
                    title='checked & disabled'
                    disabled
                    defaultChecked
                />
            </div>
        </FormProvider>
    );
};
