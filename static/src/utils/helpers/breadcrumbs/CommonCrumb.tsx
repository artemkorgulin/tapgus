import type { TUserData } from 'api/api.v2.types';
import type { PropsWithChildren } from 'react';
import type { UIMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import type { TComponent } from 'utils/types/elements';

type TCommonCrumbProps = PropsWithChildren<UIMatch<TUserData>>;

export const CommonCrumb: TComponent<TCommonCrumbProps> = ({
    pathname,
    children,
}) => <Link to={pathname}>{children}</Link>;
