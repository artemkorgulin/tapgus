import { domMax, LazyMotion } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import type { TComponent } from 'utils/types/elements';

import { Condition } from 'components/utils/Condition';

type LazyMotionToggleProps = PropsWithChildren<{ hasAnimations: boolean }>;

// todo: use https://www.framer.com/motion/guide-accessibility/
export const LazyMotionToggle: TComponent<LazyMotionToggleProps> = ({
    hasAnimations,
    children,
}) => (
    <Condition
        isValue={hasAnimations}
        then={<LazyMotion features={domMax}>{children}</LazyMotion>}
        else={children}
    />
);
