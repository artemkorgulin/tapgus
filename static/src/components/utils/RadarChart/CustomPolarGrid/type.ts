import type { SVGProps } from 'react';

// todo: fix types? cx cy etc
interface PolarGridProps {
    cx?: number;
    cy?: number;
    innerRadius?: number;
    outerRadius?: number;
    radialLines?: boolean;
    gridType?: 'polygon' | 'circle';
    polarAngles?: number[];
    polarRadius?: number[];
}

export type PolarGridComponentProps = SVGProps<SVGPathElement> & PolarGridProps;

export type ConcentricProps = PolarGridComponentProps & {
    // The radius of circle
    radius: number;
    // The index of circle
    index: number;
};
