import type { SubmitHandler } from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';
import type { Nullable } from 'utils/types/common';
import type { TComponent } from 'utils/types/elements';

import DownloadIcon from 'assets/icons/download.svg?react';
import ResetFiltes from 'assets/icons/reset-filters.svg?react';
import UserIcon from 'assets/icons/user.svg?react';

import { ButtonWithCorners } from 'components/uiKit/ButtonWithCorners';
import { ModeRadioSelect } from 'components/uiKit/ModeRadioSelect';
import { Select, SELECT_VARIANTS } from 'components/uiKit/Select';

interface IFormInput {
    iceCreamType: Nullable<{ label: string; value: string }>;
}

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const required = {
    required: 'Выбери мороженное!',
};

const ModeValues = [
    { text: 'По департаментам', value: 'depart' },
    { text: 'По должностям', value: 'workposition' },
];

export const SelectExamples: TComponent = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        reValidateMode: 'onSubmit',
        defaultValues: {
            iceCreamType: null,
        },
    });
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
            <h3>Select - cornered</h3>
            <Controller
                name='iceCreamType'
                control={control}
                render={({ field }) => (
                    <Select
                        {...field}
                        isClearable
                        options={options}
                        variant={SELECT_VARIANTS.CORNERED}
                        iconElement={<UserIcon />}
                        placeholder={'TEAM SQUAD'}
                    />
                )}
                rules={required}
            />
            {errors.iceCreamType && (
                <p role='alert' className='text-red'>
                    {errors.iceCreamType?.message}
                </p>
            )}
            <ButtonWithCorners type='submit'>Отправить</ButtonWithCorners>

            <ModeRadioSelect values={ModeValues} />

            <div className='flex justify-between'>
                <ButtonWithCorners
                    size='bg'
                    type='reset'
                    variant='outline_gray'
                    leftElement={<ResetFiltes />}
                >
                    Сбросить фильтры
                </ButtonWithCorners>

                <ButtonWithCorners type='reset' variant='outline_gray'>
                    <DownloadIcon />
                </ButtonWithCorners>
            </div>

            <h3>Variants</h3>
            <Select
                isClearable
                options={options}
                variant={SELECT_VARIANTS.DEFAULT}
                iconElement={<UserIcon />}
                placeholder={'DEFAULT'}
            />
            <Select
                isClearable
                options={options}
                variant={SELECT_VARIANTS.CORNERED}
                iconElement={<UserIcon />}
                placeholder={'CORNERED'}
            />
            <Select
                isClearable
                options={options}
                variant={SELECT_VARIANTS.BEVELED}
                iconElement={<UserIcon />}
                placeholder={'BEVELED'}
            />
        </form>
    );
};
