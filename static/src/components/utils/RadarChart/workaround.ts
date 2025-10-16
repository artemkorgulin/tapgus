import type { Props as TooltipProps } from 'recharts/types/component/DefaultTooltipContent';

import type { TDataType } from './type';

export const FEATURE_USE_WORKAROUND = true;

type TDataParser = (v: TDataType) => TDataType;

type TPolarRadiusProps = {
    tickCount?: number;
    domain?: [number, number];
};

type TWorkAround = {
    dataParser: TDataParser;
    tooltipFormatter: TooltipProps<number, string>['formatter'] | undefined;
    polarRadiusProps: TPolarRadiusProps;
};

const SHIFT_SIZE = 1;

const getPolarRadiusProps = (shift: number): TPolarRadiusProps => ({
    tickCount: 6 + shift,
    domain: [0, 5 + shift],
});

const increment: TDataParser = (data) =>
    data.map((el) => ({
        ...el,
        subject: el.subject.toLocaleUpperCase(),
        self: el.self + SHIFT_SIZE,
        boss: el.boss + SHIFT_SIZE,
        mate: el.mate + SHIFT_SIZE,
    }));

const decrement = (value: number): number => value - SHIFT_SIZE;

const doNothing: TDataParser = (value) => value;

export const WORKAROUND: TWorkAround = {
    dataParser: FEATURE_USE_WORKAROUND ? increment : doNothing,
    tooltipFormatter: FEATURE_USE_WORKAROUND ? decrement : undefined,
    polarRadiusProps: FEATURE_USE_WORKAROUND
        ? getPolarRadiusProps(SHIFT_SIZE)
        : getPolarRadiusProps(0),
};
