import type { ReactElement } from 'react';
import type { TComponent } from 'utils/types/elements';

type TileLayoutProps = {
    leftElement?: ReactElement;
    topRightElement?: ReactElement;
    topLeftElement?: ReactElement;
    bottomElement?: ReactElement;
};

export const SkillsLayout: TComponent<TileLayoutProps> = ({
    leftElement,
    topRightElement,
    topLeftElement,
    bottomElement,
}) => {
    return (
        <div className='flex h-full flex-row gap-6'>
            {leftElement}
            <div className='flex grow flex-col'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-6'>{topLeftElement}</div>
                    <div className='flex h-fit flex-row gap-6 pt-[1.8125rem]'>
                        {topRightElement}
                    </div>
                </div>
                {bottomElement}
            </div>
        </div>
    );
};
