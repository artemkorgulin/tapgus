import { BRIDGE_ACTION, useBitrixMessageData } from 'lib/bridge';
import type { TComponent } from 'utils/types/elements';

import { Condition } from 'components/utils/Condition';

export const NotifyConsumer: TComponent = () => {
    const dataToUpdate = useBitrixMessageData<string[]>(
        BRIDGE_ACTION.NOTIFY_UPDATE,
        [],
    );
    const dataToRemove = useBitrixMessageData<string>(
        BRIDGE_ACTION.NOTIFY_REMOVE,
        '',
    );

    return (
        <>
            <h4>Прочтено:</h4>
            <Condition
                isValue={dataToUpdate.length > 0}
                then={
                    <div className='overflow-scroll'>
                        <pre>{JSON.stringify(dataToUpdate)}</pre>
                    </div>
                }
                else={'-'}
            />

            <h4>Удалено:</h4>
            <Condition
                isValue={dataToRemove.length > 0}
                then={<pre>{JSON.stringify(dataToRemove)}</pre>}
                else={'-'}
            />
        </>
    );
};
