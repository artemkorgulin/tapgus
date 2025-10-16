import { useParams } from 'react-router-dom';

import { useNullishGuard } from './useNullishGuard';

export const useSlugRoundId = () => {
    const { roundId } = useParams<{ roundId: string }>();
    return useNullishGuard(roundId);
};
