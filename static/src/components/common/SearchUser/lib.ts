import type { DRAFT_TUserDataSearch } from 'api/api.v2.types';

import { STR_MIN_LENGTH } from 'components/common/SearchUser/constants';
import type { IOption } from 'components/uiKit/Select';

export const components = {
    DropdownIndicator: null,
};

export const convertUsersToOptions = (
    users: DRAFT_TUserDataSearch,
): IOption[] => users.map((value) => ({ value: value.id, label: value.fio }));

export const validateLength = (value: string) => value.length >= STR_MIN_LENGTH;

export const noOptionsMessage = (props: { inputValue: string }) => {
    const { inputValue } = props;

    const isValid = validateLength(inputValue);

    return isValid ? 'loading...' : 'Type 3 or more symbols';
};
