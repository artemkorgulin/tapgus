import { useCallback, useMemo, useState } from 'react';
import {
    Legend,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';
import type { Payload } from 'recharts/types/component/DefaultLegendContent';
import type { Props } from 'recharts/types/component/Legend';
import type { DataKey } from 'recharts/types/util/types';
import type { TComponent } from 'utils/types/elements';

import { TotalPointContext } from './context';
import { CustomPolarGrid } from './CustomPolarGrid';
import { customRadarProps } from './CustomRadarProps';
import { LEGEND_ITEM } from './enum';
import { labelRenderer } from './LabelRenderer';
import { createLegendRenderer } from './LegendRenderer';
import type { TDataType } from './type';
import { WORKAROUND } from './workaround';

type TRadarChartComponentProps = {
    portalTargetId: string;
    totalPoint: number;
    data: TDataType;
};

export const RadarChartComponent: TComponent<TRadarChartComponentProps> = ({
    data: rawData,
    totalPoint,
    portalTargetId,
}) => {
    const [data] = useState(WORKAROUND.dataParser(rawData));
    const [isSelfHide, setIsSelfHide] = useState(false);
    const [isBossHide, setIsBossHide] = useState(false);
    const [isMateHide, setIsMateHide] = useState(false);

    const legendHandler: Props['onClick'] = useCallback((data: Payload) => {
        switch (data.dataKey as DataKey<LEGEND_ITEM>) {
            case LEGEND_ITEM.SELF:
                setIsSelfHide((v) => !v);
                break;
            case LEGEND_ITEM.BOSS:
                setIsBossHide((v) => !v);
                break;
            case LEGEND_ITEM.MATE:
                setIsMateHide((v) => !v);
                break;
        }
    }, []);

    const legendRenderer = useMemo(
        () => createLegendRenderer(portalTargetId),
        [portalTargetId],
    );

    return (
        <div className='h-full w-full'>
            <TotalPointContext.Provider value={totalPoint}>
                <ResponsiveContainer width='100%' height='100%'>
                    <RadarChart
                        cx='50%'
                        cy='300'
                        outerRadius={252.5}
                        data={data}
                    >
                        {portalTargetId ? (
                            <Legend
                                verticalAlign='top'
                                align='right'
                                onClick={legendHandler}
                                content={legendRenderer}
                            />
                        ) : null}
                        <CustomPolarGrid
                            gridType='polygon'
                            radialLines={false}
                        />
                        <PolarAngleAxis
                            dataKey='subject'
                            tick={labelRenderer}
                        />
                        <PolarRadiusAxis
                            {...WORKAROUND.polarRadiusProps}
                            tick={false}
                            axisLine={false}
                        />
                        <Tooltip
                            formatter={WORKAROUND.tooltipFormatter}
                            cursor={false}
                        />
                        <Radar
                            {...customRadarProps({
                                dataKey: LEGEND_ITEM.SELF,
                                isHide: isSelfHide,
                            })}
                        />
                        <Radar
                            {...customRadarProps({
                                dataKey: LEGEND_ITEM.BOSS,
                                isHide: isBossHide,
                            })}
                        />
                        <Radar
                            {...customRadarProps({
                                dataKey: LEGEND_ITEM.MATE,
                                isHide: isMateHide,
                                isDashed: true,
                            })}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </TotalPointContext.Provider>
        </div>
    );
};
