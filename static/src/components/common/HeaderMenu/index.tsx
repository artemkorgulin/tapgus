import type { TComponent, TNavItem } from 'utils/types/elements';

import { HorizontalMenu } from 'components/uiKit/HorizontalMenu';

export type THeaderMenuProps = {
    navItems: TNavItem[];
};

export const HeaderMenu: TComponent<THeaderMenuProps> = ({ navItems }) => (
    <HorizontalMenu.Container>
        {navItems.map((item) => (
            <HorizontalMenu.Item key={item.idx} {...item} hasCounter />
        ))}
    </HorizontalMenu.Container>
);
