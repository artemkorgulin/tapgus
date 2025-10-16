import type { TButtonCustomProps, TComponent } from 'utils/types/elements';

import ControlViewCardsIcon from 'assets/icons/control-cards.svg?react';
import ControlViewDiagramIcon from 'assets/icons/control-diagram.svg?react';
import ControlViewListIcon from 'assets/icons/control-list.svg?react';

import { ButtonInvisible } from 'components/uiKit/ButtonInvisible';

import { LIST_VIEW_MODE } from '../enum';

type TButtonListViewProps = TButtonCustomProps & {
    mode: LIST_VIEW_MODE;
    currentMode: LIST_VIEW_MODE;
};

export const ButtonView: TComponent<TButtonListViewProps> = ({
    mode,
    currentMode,
    ...props
}) => {
    return (
        <ButtonInvisible
            variant='control'
            isActive={currentMode === mode}
            {...props}
        >
            {mode === LIST_VIEW_MODE.SM && <ControlViewListIcon />}
            {mode === LIST_VIEW_MODE.BG && <ControlViewCardsIcon />}
            {mode === LIST_VIEW_MODE.DM && <ControlViewDiagramIcon />}
        </ButtonInvisible>
    );
};
