import type { TComponent } from 'utils/types/elements';

import { CheckboxExamples } from './examples/checkbox';
import { InputExamples } from './examples/input';
import { RadioboxExamples } from './examples/radiobox';
import { SelectExamples } from './examples/select';
import { SelectContainerExample } from './examples/select-container';
import { SwitchExamples } from './examples/switch';

const UiBook: TComponent = () => {
    return (
        <div className='flex flex-col gap-2'>
            <SelectContainerExample />
            <div className='flex flex-row gap-6'>
                <div className='flex min-w-64 flex-col gap-2'>
                    <SelectExamples />
                    <InputExamples />
                </div>
                <div className='flex w-[50%] flex-col gap-2'>
                    <SwitchExamples />
                    <RadioboxExamples />
                    <CheckboxExamples />
                </div>
            </div>
        </div>
    );
};

export default UiBook;
