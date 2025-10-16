import { useNavigate } from 'react-router';
import type { ActionMeta, OnChangeValue } from 'react-select';
import { getProfileLink } from 'utils/helpers/router';
import { useKey } from 'utils/hooks/useKey';

import SearchIcon from 'assets/icons/search.svg?react';

import { type IOption, Select, SELECT_VARIANTS } from 'components/uiKit/Select';

import {
    components,
    convertUsersToOptions,
    noOptionsMessage,
    validateLength,
} from './lib';

export const SearchUser = () => {
    const navigate = useNavigate();
    const [key, updateKey] = useKey();

    const handleChange = (
        newValue: OnChangeValue<IOption, false>,
        actionMeta: ActionMeta<IOption>,
    ) => {
        if (newValue && actionMeta.action === 'select-option') {
            const profileLink = getProfileLink(newValue.value);
            navigate(profileLink);

            updateKey();
        }
    };

    const loadOptions = (inputValue: string) =>
        new Promise<IOption[]>(async (resolve, reject) => {
            if (validateLength(inputValue)) {
                const userOptions = convertUsersToOptions({});
                resolve(userOptions);
            }

            reject();
        });

    return (
        <Select
            key={key}
            isAsync
            isClearable
            cacheOptions
            placeholder='Search...'
            components={components}
            onChange={handleChange}
            loadOptions={loadOptions}
            noOptionsMessage={noOptionsMessage}
            iconElement={<SearchIcon />}
            variant={SELECT_VARIANTS.BEVELED}
        />
    );
};
