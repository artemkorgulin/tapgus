import type { ReactNode } from 'react';
import type { GroupBase } from 'react-select';
import type {} from 'react-select/base';
import type { OptionsOrGroups } from 'react-select/dist/declarations/src/types';

import type { SELECT_VARIANTS } from './ui/enum';

declare module 'react-select/base' {
    export interface ICustomSelectProps {
        isAsync?: boolean;
        hasSeparator?: boolean;
        iconClassName?: string;
        iconElement?: ReactNode;
        variant?: SELECT_VARIANTS;
    }

    export interface Props extends ICustomSelectProps {}

    export interface AsyncAdditionalProps<
        Option,
        Group extends GroupBase<Option>,
    > {
        /**
         * The default set of options to show before the user starts searching. When
         * set to `true`, the results for loadOptions('') will be autoloaded.
         */
        defaultOptions?: OptionsOrGroups<Option, Group> | boolean;
        /**
         * If cacheOptions is truthy, then the loaded data will be cached. The cache
         * will remain until `cacheOptions` changes value.
         */
        cacheOptions?: any;
        /**
         * Function that returns a promise, which is the set of options to be used
         * once the promise resolves.
         */
        loadOptions?: (
            inputValue: string,
            callback: (options: OptionsOrGroups<Option, Group>) => void,
        ) => Promise<OptionsOrGroups<Option, Group>> | void;
        /**
         * Will cause the select to be displayed in the loading state, even if the
         * Async select is not currently waiting for loadOptions to resolve
         */
        isLoading?: boolean;
    }

    export type TSelectProps<
        Option,
        IsMulti extends boolean = false,
        Group extends GroupBase<Option> = GroupBase<Option>,
    > = Partial<
        Props<Option, IsMulti, Group> & AsyncAdditionalProps<Option, Group>
    >;
}
