import { apiV2 } from 'api';
import { SplashScreenMain } from 'layouts/main';
import { TileLayout } from 'layouts/tile';
import { getMockPropsLess } from 'utils/helpers/mock';
import { useQuery } from 'utils/hooks/useQuery';
import { useSlugTeamId } from 'utils/hooks/useSlugTeamId';
import type { TComponent } from 'utils/types/elements';

import TeamMemberIcon from 'assets/icons/team-item-hover-v2.svg?react';

import { ListBlock } from 'components/common/ListBlock';
import { NewsList } from 'components/common/NewsList';
import { ErrorMessage } from 'components/uiKit/FormFieldControl';
import { ListBlockItemTeams } from 'components/uiKit/ListBlockItemTeams';
import { TeamProfile } from 'components/uiKit/TeamProfile';

import { MOCK_DATA } from './MOCK_DATA';

const mockProps = getMockPropsLess(MOCK_DATA);

// todo: research i18n correct usage in PCD-360
const NEWS_TITLE = 'team news';
const TEAM_TITLE = 'team squad';

const TeamDetails: TComponent = () => {
    const teamId = useSlugTeamId();

    const { data, isLoading, error } = useQuery(
        apiV2.teams.getOne,
        teamId,
        ...mockProps,
    );

    if (error) {
        return <ErrorMessage error={error} />;
    }

    if (isLoading) {
        return <SplashScreenMain />;
    }

    if (!data) {
        return <>no data</>;
    }

    return (
        <TileLayout
            topLeftElement={<TeamProfile.Card teamId={teamId} {...data} />}
            topRightElement={<TeamProfile.Summary products={data.products} />}
            bottomLeftElement={<NewsList title={NEWS_TITLE} />}
            bottomRightElement={
                <ListBlock
                    title={TEAM_TITLE}
                    data={data.members}
                    renderItem={(member) => (
                        <ListBlockItemTeams
                            id={member.id}
                            avatar={member.avatar}
                            accent={member.accent}
                            name={member.name}
                            hoverContent={<TeamMemberIcon />}
                            hasAchivs
                        />
                    )}
                />
            }
        />
    );
};

export default TeamDetails;
