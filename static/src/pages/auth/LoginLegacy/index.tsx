import { useCookieListener } from 'utils/hooks/useCookieListener';
import type { TComponent } from 'utils/types/elements';

import { IframeBox } from 'components/utils/SuspenseIframeBox';

const LoginLegacyPage: TComponent = () => {
    useCookieListener();

    return <IframeBox path={'/'} variant='page' />;
};

export default LoginLegacyPage;
