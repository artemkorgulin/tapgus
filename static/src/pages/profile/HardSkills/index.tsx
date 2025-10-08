import { SkillsLayout } from 'layouts/skills';

import { EditIcon } from 'assets/icons';

import { BreadCrumbs } from 'components/common/BreadCrumbs';
import { ListBlock } from 'components/common/ListBlock';
import { ListMore } from 'components/common/ListMore';
import { ButtonWithCorners } from 'components/uiKit/ButtonWithCorners';
import { PageIdHeader } from 'components/uiKit/PageIdHeader';
import { Select, SELECT_VARIANTS } from 'components/uiKit/Select';
import { SelectContainer } from 'components/uiKit/SelectContainer';
import { TeamLogo } from 'components/uiKit/TeamLogo';

import { ContentContainer } from './ui/ContentContainer';
import { DashboardLinks } from './ui/DashboardLinks';
import { HistoryItem } from './ui/HistoryItem';
import { LastUpdate } from './ui/LastUpdate';
import { PlanItem } from './ui/PlanItem';
import { RoleItem } from './ui/RoleItem';
import { MOCK } from './MOCK';

const HardSkills = () => {
    return (
        <SkillsLayout
            leftElement={<BreadCrumbs />}
            topLeftElement={
                <>
                    <TeamLogo />
                    <div className='flex flex-col gap-3'>
                        <PageIdHeader idx={MOCK.idx} text={MOCK.text} />
                    </div>
                </>
            }
            topRightElement={
                <>
                    <SelectContainer
                        title='Выбрать Карту'
                        selectElement={
                            <Select
                                isClearable
                                options={[]}
                                variant={SELECT_VARIANTS.DEFAULT}
                                placeholder={'Выберите Карту'}
                            />
                        }
                    />
                    <ButtonWithCorners
                        iconColor='solid'
                        leftElement={<EditIcon />}
                    >
                        Изменить
                    </ButtonWithCorners>
                </>
            }
            bottomElement={
                <ContentContainer
                    linkElement={<DashboardLinks />}
                    metaInfoElement={<LastUpdate>10.12.2023</LastUpdate>}
                >
                    <ListMore title='план развития'>
                        {MOCK.arr().map((item) => (
                            <PlanItem key={item.id} />
                        ))}
                    </ListMore>
                    <ListBlock
                        title='назначенные мне роли'
                        pageSize={7}
                        data={MOCK.roleList}
                        renderItem={(item) => (
                            <RoleItem key={item.id} to='#'>
                                {item.name}
                            </RoleItem>
                        )}
                    />
                    <ListMore title='история изменений' className='col-span-2'>
                        {MOCK.arr().map((item) => (
                            <HistoryItem key={item.id} />
                        ))}
                    </ListMore>
                </ContentContainer>
            }
        />
    );
};

export default HardSkills;
