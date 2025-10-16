//  ref: src/polar/PolarGrid.tsx in recharts

import type { FunctionComponent } from 'react';

import { ConcentricPath } from './ui/ConcentricPath';
import { PolarAngles } from './ui/PolarAngles';
import type { PolarGridComponentProps } from './type';

const CustomPolarGrid: FunctionComponent<PolarGridComponentProps> = ({
    cx = 0,
    cy = 0,
    innerRadius = 0,
    outerRadius = 0,
    gridType = 'polygon',
    radialLines = true,
    ...props
}) => {
    if (outerRadius <= 0) {
        return null;
    }

    return (
        <g className='recharts-polar-grid'>
            <ConcentricPath
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                gridType={gridType}
                radialLines={radialLines}
                {...props}
            />
            <PolarAngles
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                gridType={gridType}
                radialLines={radialLines}
                {...props}
            />
        </g>
    );
};

CustomPolarGrid.displayName = 'PolarGrid';

export { CustomPolarGrid };
