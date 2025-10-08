import { Link } from 'react-router-dom';
import { tw } from 'utils/helpers/tw';
import type { TComponent } from 'utils/types/elements';

import { Typography } from 'components/uiKit/Typography';

const container = tw(
    `absolute bottom-0 left-sidebar flex flex-col gap-2 bg-black p-3 text-left
    text-milk opacity-80`,
);

export const IframeMetadata: TComponent<{ pathname?: string }> = ({
    pathname,
}) => (
    <div className={container}>
        <Typography variant='secondary'>Iframe src:</Typography>
        <Typography>{pathname}</Typography>
        <Typography variant='secondary'>Links:</Typography>
        <Link to='/user/123'>Some User</Link>
        <Link to='/teams/123'>Some Team</Link>
        <Link to='/products/123'>Some Product</Link>
        <Link to='/teams/all-reports-and-plans'>All Teams Reports</Link>
    </div>
);
