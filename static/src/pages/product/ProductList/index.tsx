import { apiV2 } from 'api';
import { getMockProps } from 'utils/helpers/mock';
import { useQuery } from 'utils/hooks/useQuery';
import type { TComponent } from 'utils/types/elements';

import { ProductsList } from 'components/domains/Products/ProductsList';

import { MOCK_DATA } from './MOCK_DATA';

const mockProps = getMockProps(MOCK_DATA);

const ProductsListPage: TComponent = () => {
    const { data, isLoading, error } = useQuery(
        apiV2.products.getAll,
        ...mockProps,
    );

    return (
        <ProductsList
            rawData={data}
            errorMessage={error}
            isLoading={isLoading}
        />
    );
};

export default ProductsListPage;
