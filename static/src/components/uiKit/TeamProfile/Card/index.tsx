import type { TTeamDetails } from 'api/api.v2.types';
import type { TComponent } from 'utils/types/elements';

import { Bar } from './Bar';
import { Description } from './Description';
import css from './style.module.scss';

type CardProps = TTeamDetails & {
    teamId: string;
};

export const Card: TComponent<CardProps> = (props) => {
    return (
        <div className={css.card}>
            <Bar picture={props.picture} achievements={props.achievements} />
            <Description
                teamId={props.teamId}
                name={props.name}
                previewText={props.previewText}
                detailText={props.detailText}
            />
        </div>
    );
};
