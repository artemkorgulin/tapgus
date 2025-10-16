import type { TComponent } from 'utils/types/elements';

import { NewsListItem } from 'components/uiKit/NewsListItem';
import { Notify } from 'components/uiKit/Notify';
import { Typography } from 'components/uiKit/Typography';
import { Condition } from 'components/utils/Condition';

import css from './style.module.scss';
import type { TNotifyMessage } from './type';

type TContentProps = {
    data: TNotifyMessage[];
    removeOne: (id: string) => void;
};

export const Content: TComponent<TContentProps> = ({ data, removeOne }) => (
    <Condition
        isValue={data.length > 0}
        then={data.map((el) => (
            <NewsListItem
                key={el.ID}
                variant='dark'
                title={el.NAME}
                text={el.TEXT}
                date={el.TIMESTAMP_X}
                topRightElement={
                    <Notify.CloseButton onClick={() => removeOne(el.ID)} />
                }
                linkElement={
                    <Notify.LinkElement url={el.LINK} onClick={close} />
                }
            />
        ))}
        else={
            <Typography variant='secondary' className={css.empty}>
                No notifications
            </Typography>
        }
    />
);
