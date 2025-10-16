import { useFetcher } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes';

import ExitDoorIcon from 'assets/icons/exit-door.svg?react';

import { ButtonWithCorners } from 'components/uiKit/ButtonWithCorners';
import { Spinner } from 'components/uiKit/Spinner';

export const LogoutButton = () => {
    const fetcher = useFetcher();
    const isLoggingOut = fetcher.formData != null;

    const clickHandler = () => {
        fetcher.submit(null, { method: 'post', action: ROUTES.ACTIONS.LOGOUT });
    };

    return (
        <ButtonWithCorners
            variant='outline_gray'
            onClick={clickHandler}
            disabled={isLoggingOut}
        >
            {isLoggingOut ? (
                <Spinner size='xs' variant='dots' />
            ) : (
                <ExitDoorIcon />
            )}
        </ButtonWithCorners>
    );
};
