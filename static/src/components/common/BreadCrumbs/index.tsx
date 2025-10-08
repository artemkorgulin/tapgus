import { useMatches } from 'react-router-dom';
import { getCrumbs } from 'utils/helpers/breadcrumbs';
import type { TComponent } from 'utils/types/elements';

import ArrowDown from 'assets/icons/arrow-down.svg?react';
import CaretB from 'assets/icons/caret-b.svg?react';
import CaretT from 'assets/icons/caret-t.svg?react';

import { getTypography } from 'components/uiKit/Typography';
import { Condition } from 'components/utils/Condition';

const liElementTypography = getTypography('whitespace-nowrap cursor-default', {
    isUppercase: true,
    isVertical: true,
});

export const BreadCrumbs: TComponent = () => {
    const matches = useMatches();
    const crumbs = getCrumbs(matches);

    if (crumbs.length === 0) {
        return null;
    }

    return (
        <ul className='z-10 flex w-6 flex-col items-center gap-2'>
            <CaretT className='shrink-0 text-gray' />

            {crumbs.map((crumb, index, arr) => {
                const isLast = index === arr.length - 1;
                return (
                    <Condition
                        key={`crumb-${index}`}
                        isValue={Boolean(crumb)}
                        then={
                            <>
                                <li className={liElementTypography}>{crumb}</li>
                                {!isLast && (
                                    <ArrowDown className='shrink-0 text-gray' />
                                )}
                            </>
                        }
                    />
                );
            })}

            <CaretB className='shrink-0 text-gray' />
        </ul>
    );
};
