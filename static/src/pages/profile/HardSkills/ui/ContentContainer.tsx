import type { PropsWithChildren, ReactElement } from 'react';
import type { TComponent } from 'utils/types/elements';

import css from './style.module.scss';

type TContentContainerProps = {
    linkElement: ReactElement;
    metaInfoElement: ReactElement;
};

export const ContentContainer: TComponent<
    PropsWithChildren<TContentContainerProps>
> = (props) => {
    const { linkElement, metaInfoElement, children } = props;
    return (
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col'>
                <div
                    className='mb-2 ml-[7.5rem] flex flex-row items-center
                        justify-between'
                >
                    <div className='flex flex-row items-center gap-6'>
                        {linkElement}
                    </div>
                    <div className='flex flex-row gap-2'>{metaInfoElement}</div>
                </div>
                <div className='h-[406px] w-full bg-gray' />
            </div>
            <div className={css.other}>{children}</div>
        </div>
    );
};
