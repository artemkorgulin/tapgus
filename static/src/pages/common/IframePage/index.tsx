import { ENV_USE_IFRAME_DEBUG } from 'app-env';
import { IframeMetadata } from 'layouts/content/iframe-meta';
import { Navigate } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes';
import type { TComponent } from 'utils/types/elements';

import { Condition } from 'components/utils/Condition';
import {
    IframeBox,
    type IframeBoxProps,
    useBitrixPathname,
} from 'components/utils/SuspenseIframeBox';

const IframePageComponent: TComponent<Omit<IframeBoxProps, 'variant'>> = (
    props,
) => {
    const bitrixPathname = useBitrixPathname();

    if (!bitrixPathname) {
        return <Navigate to={ROUTES.NOT_FOUND_EXTERNAL_PATH} />;
    }

    return (
        <>
            <IframeBox
                key={bitrixPathname}
                path={bitrixPathname}
                variant='page'
                {...props}
            />
            <Condition
                isValue={ENV_USE_IFRAME_DEBUG}
                then={
                    <IframeMetadata pathname={props?.path || bitrixPathname} />
                }
            />
        </>
    );
};

export default IframePageComponent;
