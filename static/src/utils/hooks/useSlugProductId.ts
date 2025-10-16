import { useParams } from 'react-router-dom';

import { useNullishGuard } from './useNullishGuard';

export const useSlugProductId = () => {
    const { productId } = useParams<{ productId: string }>();
    return useNullishGuard(productId);
};
