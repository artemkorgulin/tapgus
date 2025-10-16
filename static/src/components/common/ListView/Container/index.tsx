import cn from 'clsx';
import type { TComponent } from 'utils/types/elements';

import { Condition } from 'components/utils/Condition';
import { LazyMotionToggle } from 'components/utils/framer';

import { LIST_VIEW_MODE } from '../enum';
import type { TListContainerProps } from '../types';
import { Fallback } from './Fallback';
import css from './style.module.scss';

export const Container: TComponent<TListContainerProps> = (props) => {
    const {
        mode,
        children,
        className,
        errorMessage = '',
        emptyMessage = '',
        isLoading = false,
        isPending = false,
        isShowCount = false,
        hasAnimations = false,
    } = props;

    const isFallback = isLoading || errorMessage || emptyMessage;

    return (
        <LazyMotionToggle hasAnimations={hasAnimations}>
            <div
                className={cn(
                    css.list_container,
                    {
                        [css.big]: mode === LIST_VIEW_MODE.BG,
                        [css.small]: mode === LIST_VIEW_MODE.SM,
                        [css.height_withCount]: isShowCount,
                        [css.pending]: isPending,
                        [css.fallback]: isFallback,
                    },
                    className,
                )}
            >
                <Condition
                    isValue={Boolean(isFallback)}
                    then={
                        <Fallback
                            isLoading={isLoading}
                            emptyMessage={emptyMessage}
                            errorMessage={errorMessage}
                        />
                    }
                    else={children}
                />
            </div>
        </LazyMotionToggle>
    );
};
