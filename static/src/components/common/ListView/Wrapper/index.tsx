import cn from 'clsx';
import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import type { TComponent } from 'utils/types/elements';

import css from './style.module.scss';

type TWrapperProps = PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export const Wrapper: TComponent<TWrapperProps> = (props) => (
    <div className={cn(props.className, css.wrapper)} {...props} />
);
