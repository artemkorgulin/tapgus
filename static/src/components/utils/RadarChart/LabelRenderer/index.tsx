import type { ReactElement } from 'react';
import { Text, type TextProps } from 'recharts';

import { RADAR_COLOR_TOKENS } from '../constants';

type TLabelRendererProps = TextProps & {
    payload: { index: number; value: string };
};

const transformMap = new Map([
    //   top & bottom
    [0, 'translate(0,-10)'],
    [5, 'translate(0,20)'],

    // l & r
    [1, 'translate(15,0)'],
    [9, 'translate(-15,0)'],

    // l & r
    [2, 'translate(15,0)'],
    [8, 'translate(-15,0)'],

    // l & r
    [3, 'translate(15,0)'],
    [7, 'translate(-15,0)'],

    // l & r
    [4, 'translate(15,0)'],
    [6, 'translate(-15,0)'],
]);

export const labelRenderer = (
    props: TLabelRendererProps,
): ReactElement<SVGElement> => {
    return (
        <Text
            {...props}
            fill={RADAR_COLOR_TOKENS.text}
            className='recharts-polar-angle-axis-tick-value'
            transform={transformMap.get(props.payload.index) || undefined}
        >
            {props.payload.value}
        </Text>
    );
};
