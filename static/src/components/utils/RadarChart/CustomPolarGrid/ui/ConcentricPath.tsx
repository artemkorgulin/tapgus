import { useContext } from 'react';
import type { TComponent } from 'utils/types/elements';

import { TotalPointContext } from '../../context';
import type { PolarGridComponentProps } from '../type';
import { ConcentricPolygon } from './ConcentricPolygon';
import { WithShadow } from './WithShadow';

export const ConcentricPath: TComponent<PolarGridComponentProps> = (props) => {
    const { polarRadius } = props;
    const totalPoint = useContext(TotalPointContext);

    if (!polarRadius || !polarRadius.length) {
        return null;
    }

    return (
        <>
            <g className='recharts-polar-grid-concentric'>
                <ConcentricPolygon
                    {...props}
                    radius={polarRadius[polarRadius.length - 1]}
                    index={0}
                    isUnderlay
                />
                {polarRadius.map((entry: number, i: number, arr: number[]) => {
                    return (
                        <ConcentricPolygon
                            key={i}
                            {...props}
                            radius={entry}
                            index={i}
                            isLatest={i === arr.length - 1}
                            totalPoint={totalPoint}
                        />
                    );
                })}
            </g>
            <WithShadow.FilterDefinition />
        </>
    );
};
