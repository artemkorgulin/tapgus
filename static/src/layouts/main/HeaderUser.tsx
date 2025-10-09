import { useRef } from 'react';
import { generatePath } from 'lib/router';
import { useViewerData } from 'utils/context/viewerData';
import type { TComponent } from 'utils/types/elements';

import UserIcon from 'assets/icons/user.svg?react';

import { Notifications } from 'components/common/Notifications';
import { LogoutButton } from 'components/domains/auth/Logout';
import { ButtonWithCorners } from 'components/uiKit/ButtonWithCorners';
import { ViewerInfo } from 'components/uiKit/UserInfo';
import { IframeBox } from 'components/utils/SuspenseIframeBox';
import { BITRIX_ROUTES } from 'components/utils/SuspenseIframeBox/utils/constants';

import css from './style.module.scss';

export const HeaderUser: TComponent = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const viewer = useViewerData();

    if (!viewer || typeof viewer === 'boolean') {
        return null;
    }

    const iframePath = generatePath(BITRIX_ROUTES.PROFILE, {
        userId: viewer.id,
    });

    return (
        <div className={css.user_elements}>
            <ViewerInfo />
            <Notifications />
            <ButtonWithCorners leftElement={<UserIcon />}>
                Profile
            </ButtonWithCorners>
            <LogoutButton />
            {/* todo: оставить/удалить в рамках */}
            {/* Пиксель для получения уведомлений */}
            <IframeBox
                iframeRef={iframeRef}
                variant='pixel'
                path={iframePath}
                isHideScroll
                USE_NOTIFY
            />
        </div>
    );
};
