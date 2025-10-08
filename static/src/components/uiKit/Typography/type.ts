import type { ComponentPropsWithRef, ReactHTML } from 'react';

type AllowedHTMLElements = Pick<
    ReactHTML,
    'p' | 'span' | 'label' | 'div' | 'li'
>;

type AllowedElements = keyof AllowedHTMLElements;

type TextVariant = 'primary' | 'secondary' | 'h1' | 'h2' | 'h3';

export type TypographyProps = ComponentPropsWithRef<AllowedElements> & {
    isUppercase?: boolean;
    isNumber?: boolean;
    isVertical?: boolean;
    isNoWrap?: boolean;
    htmlFor?: string;
    variant?: TextVariant;
    as?: AllowedElements;
};
