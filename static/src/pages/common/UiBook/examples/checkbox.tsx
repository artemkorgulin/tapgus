import { FormProvider, useForm } from 'react-hook-form';

import { ToggleBox } from 'components/uiKit/Togglebox';

import { WithFormDebug } from './ui/WithFormDebug';

type TCheckboxExampleForm = {
    colors: string[];
};

export const CheckboxExamples = () => {
    const methods = useForm<TCheckboxExampleForm>({
        defaultValues: {
            colors: ['blue', 'flower', 'green'],
        },
    });
    const { register } = methods;

    return (
        <FormProvider {...methods}>
            <h3>Checkbox</h3>
            <WithFormDebug>
                <ToggleBox
                    type='checkbox'
                    label='Primary'
                    value='primary'
                    {...register('colors')}
                >
                    <span className='h-3 w-3 bg-primary' />
                </ToggleBox>
                <ToggleBox
                    type='checkbox'
                    label='Secondary'
                    value='secondary'
                    {...register('colors')}
                >
                    <span className='h-3 w-3 bg-secondary' />
                </ToggleBox>
                <ToggleBox
                    type='checkbox'
                    label='Flower'
                    value='flower'
                    {...register('colors')}
                >
                    <span className='h-3 w-3 bg-flower' />
                </ToggleBox>
                <ToggleBox
                    type='checkbox'
                    label='Blue'
                    value='blue'
                    {...register('colors')}
                >
                    <span className='h-3 w-3 bg-blue' />
                </ToggleBox>
                <ToggleBox
                    type='checkbox'
                    label='Orange'
                    title='disabled'
                    value='orange'
                    {...register('colors')}
                    disabled
                >
                    <span className='h-3 w-3 bg-orange-200' />
                </ToggleBox>
                <ToggleBox
                    type='checkbox'
                    label='Green'
                    value='green'
                    {...register('colors')}
                    disabled
                    title='checked & disabled'
                >
                    <span className='h-3 w-3 bg-green' />
                </ToggleBox>
            </WithFormDebug>
        </FormProvider>
    );
};
