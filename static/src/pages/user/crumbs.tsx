import type { TUserData } from 'api/api.v2.types';
import type { UIMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useViewerData } from 'utils/context/viewerData';
import { isLegacyViewerData } from 'utils/helpers/auth';
import type { TComponent } from 'utils/types/elements';

export const AdminCrumb: TComponent<UIMatch<TUserData>> = ({
    pathname,
    data: userData,
}) => {
    const viewerData = useViewerData();

    if (!viewerData || isLegacyViewerData(viewerData)) {
        return null;
    }

    return <Link to={pathname}>{userData?.fio || viewerData.fio}</Link>;
};
