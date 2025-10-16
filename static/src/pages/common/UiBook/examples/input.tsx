import type { TComponent } from 'utils/types/elements';

import { Input } from 'components/uiKit/Input';

export const InputExamples: TComponent = () => (
    <>
        <h3>Input variants</h3>
        <Input placeholder={'input default'} />
        <Input variant={'with_corners'} placeholder={'input with_corners'} />
        <Input variant={'cut_corner'} placeholder={'input cut_corner'} />
    </>
);
