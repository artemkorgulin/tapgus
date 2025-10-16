import { useRouteError } from 'react-router-dom';

import { SplashScreen } from 'components/uiKit/SplashScreen';
import { Typography } from 'components/uiKit/Typography';

export const ErrorBoundary = () => {
    const error = useRouteError();

    return (
        <SplashScreen>
            <div className='flex flex-col gap-6 text-center'>
                <Typography variant='h1'>Something went wrong</Typography>
                <Typography>{String(error)}</Typography>
            </div>
        </SplashScreen>
    );
};
