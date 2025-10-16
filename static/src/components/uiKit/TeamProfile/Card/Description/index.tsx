import type { TTeamDetails } from 'api/api.v2.types';
import type { TComponent } from 'utils/types/elements';

import { PageIdHeader } from 'components/uiKit/PageIdHeader';
import { Typography } from 'components/uiKit/Typography';

import css from './style.module.scss';

type DescriptionProps = Pick<
    TTeamDetails,
    'name' | 'previewText' | 'detailText'
> & {
    teamId: string;
};

export const Description: TComponent<DescriptionProps> = (props) => {
    const { teamId, name, previewText, detailText } = props;

    return (
        <div className={css.description}>
            <PageIdHeader idx={teamId} text={name} />
            <div className={css.text}>
                {(detailText || previewText)
                    .split('\n\n')
                    .map((text, index) => (
                        <Typography
                            key={`text-part-${index}`}
                            as='p'
                            variant='secondary'
                            className='text-secondary'
                            dangerouslySetInnerHTML={{ __html: text }}
                        />
                    ))}
            </div>
        </div>
    );
};
