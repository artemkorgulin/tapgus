import cn from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import type { TComponent } from 'utils/types/elements';

import css from './style.module.scss';

type SearchProps = ComponentPropsWithoutRef<'input'> & {
    className?: string;
    variant?: 'cornered' | 'default';
    clearHandler?: () => void;
    changeHandler?: (payload: string) => void;
};

const Search: TComponent<SearchProps> = ({
    className,
    variant = 'default',
    placeholder = 'Search...',
    onKeyDown,
    onChange,
    clearHandler,
    changeHandler,
    ...inputProps
}) => {
    return (
        <div className={cn(css.search_box, className)}>
            <label className={cn(css.search, css[`variant-${variant}`])}>
                <input
                    className={css.input}
                    placeholder={placeholder}
                    onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                            clearHandler?.();
                        }

                        onKeyDown?.(e);
                    }}
                    onChange={(e) => {
                        onChange?.(e);
                        changeHandler?.(e.target.value);
                    }}
                    {...inputProps}
                />
            </label>
        </div>
    );
};

export default Search;
