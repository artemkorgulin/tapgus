import type { TComponent } from 'utils/types/elements';

import type { IOption } from 'components/uiKit/Select';
import { Select, SELECT_VARIANTS } from 'components/uiKit/Select';
import { SelectContainer } from 'components/uiKit/SelectContainer';

const options: IOption[] = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

export const SelectContainerExample: TComponent = () => {
    return (
        <div className='flex flex-col gap-2'>
            <h3>Select container</h3>
            <div className='flex flex-row gap-5'>
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
        </div>
    );
};
