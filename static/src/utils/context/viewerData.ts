import { createContext, useContext } from 'react';
import type { TViewerData, TViewerDataLegacy } from 'utils/types/auth';

export const ViewerDataContext = createContext<TViewerData | TViewerDataLegacy>(
    null,
);

ViewerDataContext.displayName = 'ViewerDataContext';

export const useViewerData = () => useContext(ViewerDataContext);
