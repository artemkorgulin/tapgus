import cn from 'clsx';
import { dayjsLocale } from 'lib/date';
import type { ReactNode } from 'react';
import { addBitrixPrefixToRelativeLinks } from 'utils/helpers/text';
import type { TComponent } from 'utils/types/elements';

import { CaretLIcon, CaretRIcon } from 'assets/icons';

import { Typography } from 'components/uiKit/Typography';

import css from './style.module.scss';

type NewsListItemProps = {
    title: string;
    text: string;
    date: string;
    variant?: 'light' | 'dark';
    topRightElement?: ReactNode;
    linkElement?: ReactNode;
};

export const NewsListItem: TComponent<NewsListItemProps> = ({
    title,
    text,
    date,
    topRightElement,
    linkElement,
    variant = 'light',
}) => {
    return (
        <div
            className={cn(css.news_list_item, {
                [css.light]: variant === 'light',
                [css.dark]: variant === 'dark',
            })}
        >
            <div className={css.head}>
                <Typography isUppercase className={css.title}>
                    {title}
                </Typography>
                <div className={css.topRight}>
                    <Typography className={css.date}>
                        <CaretLIcon className={css.icon} />
                        {dayjsLocale(date).format('DD.MM.YYYY')}
                        <CaretRIcon className={css.icon} />
                    </Typography>
                    {topRightElement}
                </div>
            </div>
            <Typography
                variant='secondary'
                className={css.text}
                dangerouslySetInnerHTML={{
                    __html: addBitrixPrefixToRelativeLinks(text),
                }}
            />
            <br />
            <Typography variant='secondary' className={css.text}>
                {linkElement}
            </Typography>
        </div>
    );
};
