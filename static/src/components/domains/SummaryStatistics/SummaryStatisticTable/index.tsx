import type { TComponent } from 'utils/types/elements';

import { ModeRadioSelect } from 'components/uiKit/ModeRadioSelect';
import { PageHeader } from 'components/uiKit/PageHeader';

import { AddittionalFilters } from '../AdditionalFilters';
import { Table } from '../Table';

// todo: research i18n correct usage in
const PAGE_HEADER = 'сводная статистика';

const ModeValues = [
    { text: 'По департаментам', value: 'depart' },
    { text: 'По должностям', value: 'workposition' },
];

export const SummaryStatisticsTable: TComponent = () => {
    return (
        <>
            <PageHeader
                title={PAGE_HEADER}
                logoVariant='stats'
                rightElement={<ModeRadioSelect values={ModeValues} />}
            />
            <AddittionalFilters />

            <div className='mt-12'>
                <Table />
            </div>
        </>
    );
};
