import type { SidebarItem } from 'utils/constants/sidebar';
import type { TComponent } from 'utils/types/elements';

import { LogoLink } from 'components/uiKit/LogoLink';
import { SidebarMenu } from 'components/uiKit/SidebarMenu';

type SidebarProps = { navItems: SidebarItem[] };

export const Sidebar: TComponent<SidebarProps> = ({ navItems }) => (
    <SidebarMenu.Container logo={<LogoLink />}>
        {navItems.map(({ key, ...props }) => (
            <SidebarMenu.Item key={key} {...props} />
        ))}
    </SidebarMenu.Container>
);
