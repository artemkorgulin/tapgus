import type { TComponent } from 'utils/types/elements';

import { RADAR_COLOR_TOKENS } from '../../constants';
import { filterProps, getPolygonPath } from '../helpers';
import type { ConcentricProps } from '../type';
import starsImg from './stars.svg';
import { WithShadow } from './WithShadow';

type TConcentricPolyProps = ConcentricProps & {
    totalPoint?: number;
    isLatest?: boolean;
    isUnderlay?: boolean;
};

export const ConcentricPolygon: TComponent<TConcentricPolyProps> = (props) => {
    const { radius, index, totalPoint = 0, isLatest, isUnderlay } = props;
    const isCounter = index === 1;
    const isDashed = index === 2;

    const concentricPolygonProps = {
        stroke: isLatest || isUnderlay ? 'none' : RADAR_COLOR_TOKENS.grid,
        ...filterProps(props, false),
        fill: (() => {
            if (isCounter) {
                return RADAR_COLOR_TOKENS.counterBg;
            }

            return isUnderlay ? RADAR_COLOR_TOKENS.bg : 'none';
        })(),
        strokeDasharray: isDashed ? '4,2' : undefined,
    };

    return (
        <WithShadow.Filter isEnable={isUnderlay}>
            <path
                {...concentricPolygonProps}
                className={'recharts-polar-grid-concentric-polygon'}
                key={`path-${index}`}
                d={getPolygonPath(
                    radius,
                    props.cx!,
                    props.cy!,
                    props.polarAngles!,
                )}
            />
            {isCounter ? (
                <>
                    <image
                        xlinkHref={starsImg}
                        width={18}
                        height={16.5}
                        x={props.cx}
                        y={props.cy}
                        transform='translate(-9, -30)'
                    />
                    <text
                        x={props.cx}
                        y={props.cy}
                        textAnchor='middle'
                        alignmentBaseline='baseline'
                        transform='translate(0, 12)'
                        fill='white'
                        fontSize='24'
                    >
                        {totalPoint}
                    </text>
                </>
            ) : null}
        </WithShadow.Filter>
    );
};
