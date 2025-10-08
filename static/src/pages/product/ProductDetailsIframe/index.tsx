import { useParams } from 'react-router-dom';

import { IframeBox } from 'components/utils/SuspenseIframeBox';

const ProductDetailsIframe = () => {
    const { productId } = useParams<{ productId: string }>();

    return <IframeBox path={`/products/${productId}/`} variant='page' />;
};

export default ProductDetailsIframe;
