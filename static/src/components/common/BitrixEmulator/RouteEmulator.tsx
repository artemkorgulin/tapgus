import { BRIDGE_ACTION, postMessage } from 'lib/bridge';
import { getClipboardText } from 'utils/helpers/clipboard';
import { usePersistedState } from 'utils/hooks/usePersistedState';
import type { TComponent } from 'utils/types/elements';

import { ButtonWithCorners } from 'components/uiKit/ButtonWithCorners';
import { Input } from 'components/uiKit/Input';

export const RouteEmulator: TComponent = () => {
    const [href, setHref] = usePersistedState<string>(
        '',
        'bitrix-emulator-href',
    );

    const routeFromInput = () => {
        postMessage(BRIDGE_ACTION.NAVIGATE, href, true);
    };

    const routeFromClipboard = async () => {
        const clipboardData = await getClipboardText();

        if (clipboardData) {
            setHref(clipboardData);
            postMessage(BRIDGE_ACTION.NAVIGATE, clipboardData, true);
        } else {
            console.error('clipboardData is null!');
        }
    };

    return (
        <>
            <Input
                value={href}
                onChange={(e) => {
                    setHref(e.target.value);
                }}
                placeholder={'href'}
            />
            <ButtonWithCorners onClick={routeFromInput}>
                Route from input
            </ButtonWithCorners>
            <ButtonWithCorners onClick={routeFromClipboard}>
                Route from clipboard
            </ButtonWithCorners>
        </>
    );
};
