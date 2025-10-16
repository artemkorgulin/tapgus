import type { TComponent } from 'utils/types/elements';

import { Typography } from 'components/uiKit/Typography';

import css from './style.module.scss';

type CloseButtonProps = {
    onClick: () => void;
};

export const CloseButton: TComponent<CloseButtonProps> = ({ onClick }) => (
    <Typography variant='secondary' className='text-secondary'>
        <button className={css.close} onClick={onClick} />
    </Typography>
);
