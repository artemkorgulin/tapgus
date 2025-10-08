import type {
    ComponentPropsWithRef,
    ReactElement,
    ReactHTML,
    ReactNode,
} from 'react';

type TBuiltInProps = {
    leftElementClassName?: string;
    rightElementClassName?: string;
    leftElement?: ReactNode;
    rightElement?: ReactNode;
};

export type TNavItem = {
    idx: string;
    title: string;
    path: string;
    isDisabled?: boolean;
};

export type TFormElementCustomProps<T extends keyof ReactHTML> =
    ComponentPropsWithRef<T> & TBuiltInProps;

export type TButtonCustomProps = TFormElementCustomProps<'button'> & {
    isActive?: boolean;
};

export type TInputCustomProps = TFormElementCustomProps<'input'> & {
    hasError?: boolean;
};

type WithClassName<T> = { className?: string } & T;

export type TCProps = WithClassName<object>;

export type TComponent<
    TProps extends TCProps = TCProps,
    TReturn extends ReactElement<TProps> | null = ReactElement<TProps> | null,
> = ((props: TProps) => TReturn) & { displayName?: string };
