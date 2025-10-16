import type { CustomComponentProps } from 'react-multi-date-picker';
import type { TComponent } from 'utils/types/elements';

import DateIcon from 'assets/icons/calendar.svg?react';

import { Input } from 'components/uiKit/Input';

/**
 * из-за бага react-multi-date-picker, в элементы просачиваются параметры
 * см https://github.com/shahabyazdi/react-multi-date-picker/issues/207
 */
export const InputDatePicker: TComponent<CustomComponentProps> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    openCalendar,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleValueChange,
    ...props
}) => <Input variant='with_corners' leftElement={<DateIcon />} {...props} />;
