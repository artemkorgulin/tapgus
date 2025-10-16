import type { PropsWithChildren, ReactElement } from 'react';
import type { TComponent } from 'utils/types/elements';

import defaultAvatar from 'assets/temp/avatar.webp';

import { Spinner } from 'components/uiKit/Spinner';
import { SuspenseImg } from 'components/utils/SuspenseImg';

import css from './style.module.scss';

type AvatarProps = PropsWithChildren<{
    url?: string;
    fallback?: ReactElement;
}>;

export const Avatar: TComponent<AvatarProps> = ({
    url = defaultAvatar,
    fallback = <Spinner size='xs' variant='dots' />,
    children,
}) => {
    return (
        <div className={css.avatar}>
            <SuspenseImg
                className={css.img}
                src={url || defaultAvatar}
                alt='avatar'
                fallback={fallback}
            />
            {children}
        </div>
    );
};
