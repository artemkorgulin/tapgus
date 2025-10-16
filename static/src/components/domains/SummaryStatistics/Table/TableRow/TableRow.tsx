import type { TComponent } from 'utils/types/elements';

import { Typography } from 'components/uiKit/Typography';
import { Avatar } from 'components/uiKit/UserAvatar';

import css from './style.module.scss';

type TableRowProps = {
    type: 'person' | 'subdivision' | 'department';
    name?: string;
    workPosition?: string;
    times: string[];
};

export const TableRow: TComponent<TableRowProps> = ({
    type,
    name,
    workPosition,
    times,
}) => {
    return (
        <div className={css[type]}>
            {type === 'department' && (
                <Typography as='div' className={css.department} isUppercase>
                    {name}
                </Typography>
            )}
            {type === 'subdivision' && (
                <Typography as='div' className={css.title}>
                    {name}
                </Typography>
            )}
            {type === 'person' && (
                <>
                    <div className={css.bage}>
                        <Avatar />
                        <Typography className={css.username}>{name}</Typography>
                    </div>
                    <Typography className={css.position}>
                        {workPosition}
                    </Typography>
                </>
            )}
            {type !== 'department' &&
                times.map((time, index) => (
                    <Typography key={index} className={css.timeCell}>
                        {time}
                    </Typography>
                ))}
        </div>
    );
};
