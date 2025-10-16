import type { TComponent } from 'utils/types/elements';

import { ListMore } from 'components/common/ListMore';
import { NewsListItem } from 'components/uiKit/NewsListItem';

type TNewsListProps = {
    title: string;
    news?: unknown[];
};

export const NewsList: TComponent<TNewsListProps> = ({ title }) => {
    return (
        <ListMore title={title} className='opacity-50'>
            <NewsListItem
                title='Voluptate exercitation incididunt '
                text='Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'
                date='2024-01-18T14:19:52+03:00'
            />
            <NewsListItem
                title='Voluptate exercitation incididunt '
                text='Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'
                date='2024-01-18T14:19:52+03:00'
            />
        </ListMore>
    );
};
