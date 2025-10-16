import { useViewerData } from 'utils/context/viewerData';
import { isLegacyViewerData } from 'utils/helpers/auth';
import type { TComponent } from 'utils/types/elements';

import { Avatar } from 'components/uiKit/UserAvatar';

// todo: в uikit не должно быть логики "useViewerData"
export const ViewerInfo: TComponent = () => {
    const viewer = useViewerData();

    if (!viewer || isLegacyViewerData(viewer)) {
        return <>User data are not provided</>;
    }

    return (
        <div className='flex shrink-0 flex-row gap-3'>
            <Avatar url={viewer.avatar} />
            <div className='flex flex-col justify-center'>
                <p className='uppercase'>{viewer.fio}</p>
                {/* todo: вывести email в */}
                <address>sikorsky@adviva.com</address>
            </div>
        </div>
    );
};
