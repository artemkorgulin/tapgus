import { apiV2 } from 'api';
import { getMockProps } from 'utils/helpers/mock';
import { useQuery } from 'utils/hooks/useQuery';
import type { TComponent } from 'utils/types/elements';

import { TeamsList } from 'components/domains/Teams/TeamsList';

import { MOCK_DATA } from './MOCK_DATA';

const mockProps = getMockProps(MOCK_DATA);

const TeamsListPage: TComponent = () => {
    const { data, isLoading, error } = useQuery(
        apiV2.teams.getAll,
        ...mockProps,
    );

    return (
        <TeamsList rawData={data} errorMessage={error} isLoading={isLoading} />
    );
};

export default TeamsListPage;
