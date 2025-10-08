import { Link } from 'react-router-dom';
import type { TComponent } from 'utils/types/elements';

import { ArrowRightTailIcon } from 'assets/icons';

import { getTypography } from 'components/uiKit/Typography';

const css = {
    lead: getTypography('whitespace-nowrap underline', {
        isUppercase: true,
    }),
    admin: getTypography(
        'flex flex-row whitespace-nowrap items-center text-blue',
        {
            isUppercase: true,
        },
    ),
};

export const DashboardLinks: TComponent = () => {
    return (
        <>
            <Link to={'#'} className={css.lead}>
                Дашборд тимлида
            </Link>
            <Link to={'#'} className={css.admin}>
                <ArrowRightTailIcon className='fill-gray' />
                Сводный дашборд
            </Link>
        </>
    );
};
