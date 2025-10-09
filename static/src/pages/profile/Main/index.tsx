import { TileLayout } from 'layouts/tile';
import { useViewerData } from 'utils/context/viewerData';
import { isLegacyViewerData } from 'utils/helpers/auth';
import type { TComponent } from 'utils/types/elements';

import { EditIcon, TeamMemberIcon } from 'assets/icons';

import { ListBlock } from 'components/common/ListBlock';
import { NewsList } from 'components/common/NewsList';
import { ButtonWithCorners } from 'components/uiKit/ButtonWithCorners';
import { ListBlockItemTeams } from 'components/uiKit/ListBlockItemTeams';
import { Stats } from 'components/uiKit/Stats';
import { UserProfileCard } from 'components/uiKit/UserProfileCard';
import { UserStatistics } from 'components/uiKit/UserStatistics';

// todo: research i18n correct usage in
const NEWS_TITLE = 'team news';
const TEAM_TITLE = 'teams member';

const Main: TComponent = () => {
    const viewer = useViewerData();

    if (!viewer || isLegacyViewerData(viewer)) {
        return <>User data are not provided</>;
    }

    return (
        <TileLayout
            topLeftElement={<UserProfileCard user={viewer} />}
            topRightElement={
                <div className='flex gap-6'>
                    <section className='flex flex-col gap-6'>
                        <Stats
                            variant='v-sold'
                            dynamics='v-up'
                            dynamicNumber='13,8%'
                            number='2453'
                        />
                        <Stats
                            variant='v-total'
                            dynamics='v-down'
                            dynamicNumber='13,8%'
                            number='$39K'
                        />
                    </section>
                    <UserStatistics />
                </div>
            }
            bottomLeftElement={<NewsList title={NEWS_TITLE} />}
            bottomRightElement={
                <ListBlock
                    title={TEAM_TITLE}
                    data={viewer.teams}
                    renderItem={(team) => (
                        <ListBlockItemTeams
                            id={team.id}
                            avatar={team.avatar}
                            accent={team.accent}
                            name={team.name}
                            hoverContent={
                                <TeamMemberIcon className='text-white' />
                            }
                        />
                    )}
                    rightElement={
                        <ButtonWithCorners variant='outline_tertiary'>
                            <EditIcon />
                        </ButtonWithCorners>
                    }
                />
            }
        />
    );
};

export default Main;
