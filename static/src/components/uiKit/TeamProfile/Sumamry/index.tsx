import type { TProductRaw } from 'api/api.v2.types';
import type { TComponent } from 'utils/types/elements';

import { Stats } from 'components/uiKit/Stats';
import { ProductItem } from 'components/uiKit/TeamProfile/Sumamry/ProductItem';

import css from './style.module.scss';

type TSumamryProps = {
    products: Array<TProductRaw>;
};

export const Summary: TComponent<TSumamryProps> = ({ products }) => {
    return (
        <div className={css.summary}>
            {products.slice(0, 4).map((product) => (
                <ProductItem
                    key={product.id}
                    id={product.id}
                    img={product.previewPicture}
                    title={product.name}
                />
            ))}
            <div className={css.sum}>
                <h1 className={css.h}>{products.length}</h1>
                <span className={css.title}>
                    {/* todo: resolve it on*/}
                    {products.length > 1 ? 'team products' : 'team product'}
                </span>
            </div>
            <Stats
                className={css.stats_first}
                variant='v-total'
                dynamics='v-up'
                dynamicNumber='13,8%'
                number='2453'
            />
            <Stats
                className={css.stats_second}
                variant='v-sold'
                dynamics='v-down'
                dynamicNumber='13,8%'
                number='$39K'
            />
            <div className={css.rating}>
                <div className={css.label}>team rating</div>
                <h2 className={css.numbers}>{'89.9'}</h2>
            </div>
        </div>
    );
};
