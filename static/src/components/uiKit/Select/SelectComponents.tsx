import cn from 'clsx';
import { components } from 'react-select';

import ArrowDownThinIcon from 'assets/icons/arrow-down-thin.svg?react';
import CrossIcon from 'assets/icons/cross.svg?react';

import { getTypography } from 'components/uiKit/Typography';
import { Condition } from 'components/utils/Condition';

export type TRSComponents = typeof components;

const typography = {
    option: getTypography('', { isUppercase: true }),
    placeholder: getTypography('text-secondary', { isUppercase: true }),
};

export const Option: TRSComponents['Option'] = (props) => (
    <components.Option
        {...props}
        className={cn(props.className, typography.option)}
    >
        {props.children}
    </components.Option>
);

export const Placeholder: TRSComponents['Placeholder'] = (props) => (
    <components.Placeholder
        {...props}
        className={cn(props.className, typography.placeholder)}
    >
        {props.children}
    </components.Placeholder>
);

export const SingleValue: TRSComponents['SingleValue'] = (props) => (
    <components.SingleValue
        {...props}
        className={cn(props.className, typography.option)}
    >
        {props.children}
    </components.SingleValue>
);

export const DropdownIndicator: TRSComponents['DropdownIndicator'] = (
    props,
) => (
    <components.DropdownIndicator {...props}>
        <ArrowDownThinIcon />
    </components.DropdownIndicator>
);

export const ClearIndicator: TRSComponents['ClearIndicator'] = (props) => (
    <components.ClearIndicator {...props}>
        <CrossIcon />
    </components.ClearIndicator>
);

export const ControlWithIcon: TRSComponents['Control'] = ({
    children,
    ...props
}) => {
    const { iconElement, iconClassName } = props.selectProps;

    return (
        <components.Control {...props}>
            <Condition
                isValue={Boolean(iconElement)}
                then={<div className={iconClassName}>{iconElement}</div>}
            />
            {children}
        </components.Control>
    );
};
