import type { ReactElement, ReactNode } from 'react';
import type { Nullable } from 'utils/types/common';

type ReturnType = Nullable<ReactElement | ReactNode>;

type ConditionProps = {
    isValue: boolean;
    then: ReturnType;
    else?: ReturnType;
};

export const Condition = (props: ConditionProps): ReturnType => {
    if (props.isValue) {
        return props.then;
    }

    return props?.else || null;
};
