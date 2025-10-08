import type { TComponent } from 'utils/types/elements';

import { RADAR_COLOR_TOKENS } from '../../constants';
import { filterProps, polarToCartesian } from '../helpers';
import type { PolarGridComponentProps } from '../type';

export const PolarAngles: TComponent<PolarGridComponentProps> = (props) => {
    const { cx, cy, innerRadius, outerRadius, polarAngles, radialLines } =
        props;

    if (!polarAngles || !polarAngles.length || !radialLines) {
        return null;
    }

    const polarAnglesProps = {
        stroke: RADAR_COLOR_TOKENS.grid,
        ...filterProps(props, false),
    };

    return (
        <g className='recharts-polar-grid-angle'>
            {polarAngles.map((entry) => {
                const start = polarToCartesian(cx!, cy!, innerRadius!, entry);
                const end = polarToCartesian(cx!, cy!, outerRadius!, entry);

                return (
                    <line
                        {...polarAnglesProps}
                        key={`line-${entry}`}
                        x1={start.x}
                        y1={start.y}
                        x2={end.x}
                        y2={end.y}
                    />
                );
            })}
        </g>
    );
};
