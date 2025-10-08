import { useParams } from 'react-router-dom';

import { useNullishGuard } from './useNullishGuard';

export const useSlugTeamId = () => {
    const { teamId } = useParams<{ teamId: string }>();
    return useNullishGuard(teamId);
};
