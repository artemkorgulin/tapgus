import { Suspense } from 'react';
import { ENV_USE_BITRIX_EMULATOR } from 'app-env';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router';
import type { TComponent } from 'utils/types/elements';

import { BitrixEmulator } from 'components/common/BitrixEmulator';
import { Spinner } from 'components/uiKit/Spinner';
import { SplashScreen } from 'components/uiKit/SplashScreen';

const Loading: TComponent = () => (
    <SplashScreen className='h-screen'>
        <Spinner variant='dots' size='sm' />
    </SplashScreen>
);

const App: TComponent = () => {
    return (
        <Suspense fallback={<Loading />}>
            <RouterProvider router={router} fallbackElement={<Loading />} />
            {ENV_USE_BITRIX_EMULATOR ? <BitrixEmulator /> : null}
        </Suspense>
    );
};

export default App;
