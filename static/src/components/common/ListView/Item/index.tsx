import cn from 'clsx';
import { m } from 'framer-motion';
import { Link, useHref } from 'react-router-dom';
import type { TComponent } from 'utils/types/elements';

import { HoverElement } from 'components/uiKit/HoverElement';
import { Spinner } from 'components/uiKit/Spinner';
import { SuspenseImg } from 'components/utils/SuspenseImg';

import { LIST_VIEW_MODE } from '../enum';
import type { TListItemProps } from '../types';
import css from './style.module.scss';

export const Item: TComponent<TListItemProps> = (props) => {
    const {
        id,
        mode,
        name,
        avatar,
        members,
        hoverContent,
        isLazyImage = false,
        isShowCount = false,
        hasAnimations = false,
    } = props;

    const href = useHref('');

    return (
        <Link to={`${href}/${id}`}>
            <m.div
                layout='position'
                className={cn(
                    css.list_item,
                    {
                        [css.big]: mode === LIST_VIEW_MODE.BG,
                        [css.small]: mode === LIST_VIEW_MODE.SM,
                        [css.withCount]: isShowCount,
                        [css.withTransitions]: hasAnimations,
                    },
                    HoverElement.containerClassName,
                )}
            >
                <m.div layout className={css.container}>
                    <m.div layout className={css.logo}>
                        <m.div className={css.logo_clip}>
                            <SuspenseImg
                                src={avatar}
                                className={css.logo_img}
                                alt='team avatar'
                                loading={isLazyImage ? 'lazy' : 'eager'}
                                fallback={
                                    mode === LIST_VIEW_MODE.SM ? (
                                        <Spinner size='xs' variant='dots' />
                                    ) : undefined
                                }
                            />
                            <HoverElement hasCorners>
                                {hoverContent}
                            </HoverElement>
                        </m.div>
                    </m.div>

                    <m.span layout='position' className={css.title}>
                        {name}
                    </m.span>
                </m.div>

                {isShowCount && members !== undefined ? (
                    <m.span layout='position' className={css.count}>
                        {/* todo: resolve it */}
                        {members} {members > 1 ? 'members' : 'member'}
                    </m.span>
                ) : null}
            </m.div>
        </Link>
    );
};
