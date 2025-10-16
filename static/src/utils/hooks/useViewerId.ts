import { useViewerData } from 'utils/context/viewerData';
import { useNullishGuard } from 'utils/hooks/useNullishGuard';

export const useViewerId = () => {
    const viewerData = useNullishGuard(useViewerData());

    // todo:  после релиза вырезать legacy
    const isLegacy = typeof viewerData === 'boolean';

    return isLegacy ? '0' : viewerData.id;
};
