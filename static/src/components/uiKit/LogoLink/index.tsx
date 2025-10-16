import { Link } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes';
import type { TComponent } from 'utils/types/elements';

import logoSrc from 'assets/image/logo.svg';

export const LogoLink: TComponent = () => (
    <Link to={ROUTES.HOME} className='z-10 ml-[68px] mt-[12px]'>
        <img
            src={logoSrc}
            alt='logo'
            className='min-w-max'
            width={232}
            height={80}
        />
    </Link>
);
