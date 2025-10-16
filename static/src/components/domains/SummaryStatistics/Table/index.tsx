import type { TComponent } from 'utils/types/elements';

import { TableRow } from './TableRow/TableRow';
import css from './style.module.scss';
import { MockData } from './TableMock';

export type TMockData = {
    type: 'person' | 'subdivision' | 'department';
    name: string;
    workPosition?: string;
    maxValue?: string;
    minValue?: string;
    average?: string;
};

export const Table: TComponent = () => {
    return (
        <div className={css.table}>
            <div className={css.header_row}>
                <div>ФИО</div>
                <div>ДОЛЖНОСТЬ</div>
                <div className={css.time_val}>МИНИМАЛЬНОЕ ВРЕМЯ</div>
                <div className={css.time_val}>МАКСИМАЛЬНОЕ ВРЕМЯ</div>
                <div className={css.time_val}>СРЕДНЯЯ АКТИВНОСТЬ</div>
            </div>

            {MockData.map((item, i) => {
                return (
                    <TableRow
                        key={i}
                        type={item.type}
                        name={item.name}
                        workPosition={item.workPosition || undefined}
                        times={[
                            item.minValue || '',
                            item.maxValue || '',
                            item.average || '',
                        ]}
                    />
                );
            })}
        </div>
    );
};
