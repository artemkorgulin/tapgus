import cn from 'clsx';
import { Link } from 'react-router-dom';
import type { TComponent } from 'utils/types/elements';

import ProductsICO from 'assets/icons/analitic.svg?react';

import { HoverElement } from 'components/uiKit/HoverElement';
import { Typography } from 'components/uiKit/Typography';
import { SuspenseImg } from 'components/utils/SuspenseImg';

import css from './style.module.scss';

type ProductItemProps = {
    id: string;
    img: string;
    title: string;
};

export const ProductItem: TComponent<ProductItemProps> = ({
    id,
    img,
    title,
}) => (
    <Link to={`/products/${id}`}>
        <div className={cn(css.product_item)}>
            <div className={cn(css.container, HoverElement.containerClassName)}>
                <SuspenseImg
                    className='h-24 w-24'
                    src={img}
                    alt='product logo'
                />
                <HoverElement className={css.textHover} hasCorners>
                    <ProductsICO className={css.hover_icon} />
                    <Typography className={css.hover_text} isUppercase>
                        about
                        <br />
                        product
                    </Typography>
                </HoverElement>
            </div>
            <span className={css.title}>{title}</span>
        </div>
    </Link>
);
