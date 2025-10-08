import { useId, useState } from 'react';
import { SkillsLayout } from 'layouts/skills';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import type { TComponent } from 'utils/types/elements';

import { BreadCrumbs } from 'components/common/BreadCrumbs';
import { InputDatePicker } from 'components/uiKit/input-date-picker';
import { PageIdHeader } from 'components/uiKit/PageIdHeader';
import { TeamLogo } from 'components/uiKit/TeamLogo';
import { RadarChartComponent } from 'components/utils/RadarChart';
import type { TDataType } from 'components/utils/RadarChart/type';

import { MOCK } from './MOCK';

type SoftSkillsProps = {
    data?: TDataType;
};

const SoftSkills: TComponent<SoftSkillsProps> = ({ data = MOCK }) => {
    const containerId = useId();
    const [values, setValues] = useState<DateObject[]>([
        new DateObject().subtract(4, 'days'),
        new DateObject().add(4, 'days'),
    ]);

    return (
        <SkillsLayout
            leftElement={<BreadCrumbs />}
            topLeftElement={
                <>
                    <TeamLogo />
                    <PageIdHeader idx={'44323'} text={'username'} />
                </>
            }
            topRightElement={
                <>
                    <div id={containerId} />
                    <DatePicker
                        value={values}
                        render={<InputDatePicker />}
                        onChange={(dates) => setValues(dates as DateObject[])}
                        dateSeparator={' - '}
                        range
                    />
                </>
            }
            bottomElement={
                <RadarChartComponent
                    data={data}
                    portalTargetId={containerId}
                    totalPoint={4.5}
                />
            }
        />
    );
};

export default SoftSkills;
