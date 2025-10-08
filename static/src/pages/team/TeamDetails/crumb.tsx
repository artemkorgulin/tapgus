import { useSlugTeamId } from 'utils/hooks/useSlugTeamId';
import type { TComponent } from 'utils/types/elements';

export const TeamDetailsCrumb: TComponent = () => {
    const teamId = useSlugTeamId();

    return <>{teamId}</>;
};
