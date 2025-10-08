import { useParams } from 'react-router-dom';

import { useNullishGuard } from './useNullishGuard';

export const useSlugUserId = () => {
    const { userId } = useParams<{ userId: string }>();
    return useNullishGuard(userId);
};
