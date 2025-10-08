import { useSlugProductId } from 'utils/hooks/useSlugProductId';
import type { TComponent } from 'utils/types/elements';

export const ProductDetailsCrumb: TComponent = () => {
    const productId = useSlugProductId();

    return <>{productId}</>;
};
