import { useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import type { TComponent } from 'utils/types/elements';

import DownloadIcon from 'assets/icons/download.svg?react';
import ResetFiltes from 'assets/icons/reset-filters.svg?react';
import SearchIco from 'assets/icons/search.svg?react';
import SortIcon from 'assets/icons/sortBy.svg?react';

import { ButtonWithCorners } from 'components/uiKit/ButtonWithCorners';
import { Input } from 'components/uiKit/Input';
import { InputDatePicker } from 'components/uiKit/input-date-picker';
import { Select } from 'components/uiKit/Select';
import { SelectContainer } from 'components/uiKit/SelectContainer';

interface IOption {
    value: string;
    label: string;
}

const options: IOption[] = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

enum SELECT_VARIANTS {
    DEFAULT = 'variant-default',
    CORNERED = 'variant-cornered',
    BEVELED = 'variant-beveled',
}

export const AddittionalFilters: TComponent = () => {
    const [values, setValues] = useState<DateObject[]>([
        new DateObject().subtract(4, 'days'),
        new DateObject().add(4, 'days'),
    ]);

    return (
        <>
            <div className='flex flex-row gap-5 -mt-4 ml-12'>
                <div className='w-[50%]'>
                    <SelectContainer
                        title='Департамент'
                        selectElement={
                            <Select
                                isClearable
                                options={options}
                                variant={SELECT_VARIANTS.DEFAULT}
                                placeholder={'Выберите Департамент'}
                            />
                        }
                    />
                </div>
                <div className='w-[50%]'>
                    <SelectContainer
                        title='Поддепартамент'
                        selectElement={
                            <Select
                                isClearable
                                options={options}
                                variant={SELECT_VARIANTS.DEFAULT}
                                placeholder={'Выберите Поддепартамент'}
                            />
                        }
                    />
                </div>
            </div>
            <div className='flex flex-row gap-5 mt-6 ml-12'>
                <Select
                    isClearable
                    options={options}
                    variant={SELECT_VARIANTS.CORNERED}
                    iconElement={<SortIcon />}
                    placeholder={'Выберите команду'}
                />
                <DatePicker
                    value={values}
                    render={<InputDatePicker />}
                    onChange={(dates) => setValues(dates as DateObject[])}
                    dateSeparator={' - '}
                    range
                />
                <div className='min-w-20'>
                    <Input
                        variant='with_corners'
                        placeholder='ФИО'
                        leftElement={<SearchIco />}
                    />
                </div>
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
        </>
    );
};
