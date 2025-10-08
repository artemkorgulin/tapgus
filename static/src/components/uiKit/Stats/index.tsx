import cn from 'clsx';
import type { ReactElement } from 'react';
import type { TComponent } from 'utils/types/elements';

import DynamicsDownIcon from 'assets/icons/dynamics-down.svg?react';
import DynamicsUpIcon from 'assets/icons/dynamics-up.svg?react';
// todo: replace GRAPH_DEMO_ICON with dynamical graph
import GRAPH_DEMO_ICON from 'assets/icons/GRAPH_DEMO.svg?react';

import css from './style.module.scss';

type StatsVariants = 'v-total' | 'v-sold';

type StatsDynamics = 'v-up' | 'v-down';

type StatsProps = {
    number: string;
    dynamicNumber: string;
    className?: string;
    variant: StatsVariants;
    dynamics: StatsDynamics;
};

const textVariants: Record<StatsVariants, string> = {
    'v-sold': 'product sold',
    'v-total': 'earnings total',
};

const iconVariants: Record<StatsDynamics, ReactElement> = {
    'v-up': <DynamicsUpIcon />,
    'v-down': <DynamicsDownIcon />,
};

export const Stats: TComponent<StatsProps> = ({
    className,
    number = '2453',
    dynamicNumber = '13,8%',
    dynamics = 'v-up',
    variant = 'v-total',
}) => (
    <div
        className={cn(
            css.stats,
            'opacity-50',
            css[`variant-${variant}`],
            className,
        )}
    >
        <div className={css.info}>
            <div className={css.label}>{textVariants[variant]}</div>
            <div className={css.numbers}>
                <div className={cn(css.dynamics, css[`dynamics-${dynamics}`])}>
                    {iconVariants[dynamics]}
                    <span className={css.dynNumber}>{dynamicNumber}</span>
                </div>
                <div className={css.number}>{number}</div>
            </div>
        </div>
        <div className={css.graph}>
            <GRAPH_DEMO_ICON className={css.graphIcon} />
        </div>
    </div>
);
