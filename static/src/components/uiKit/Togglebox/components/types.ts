import type { ReactNode } from 'react';
import type { TInputCustomProps } from 'utils/types/elements';

export type TToggleVariants = 'checkbox' | 'radio' | 'switch';

export type TToggleVariantProps = {
    type?: TToggleVariants;
};

export type TToggleBoxProps = TInputCustomProps &
    TToggleVariantProps & {
        label?: string;
        labelElement?: ReactNode;
    };
