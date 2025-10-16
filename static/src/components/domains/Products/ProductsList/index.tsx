import type { TComponent } from 'utils/types/elements';

import ProductsICO from 'assets/icons/analitic.svg?react';

import {
    LIST_VIEW_MODE,
    ListView,
    type TListViewProps,
    useListView,
} from 'components/common/ListView';
import Search from 'components/common/Search';
import { HoverElementContent } from 'components/uiKit/HoverElementContent';
import { PageHeader } from 'components/uiKit/PageHeader';
import { SortControl } from 'components/uiKit/SortControl';

// todo: research i18n correct usage in
const PAGE_HEADER = 'Products';
const HOVER_TITLE = 'about product';

export const ProductsList: TComponent<TListViewProps> = (props) => {
    const { errorMessage, isLoading, rawData } = props;

    const {
        data,
        mode,
        setMode,
        nameSort,
        sortByName,
        searchValue,
        setSearchValue,
        clearSearch,
        emptyMessage,
        hasAnimations,
        isPending,
    } = useListView({ rawData, persistKey: 'products-list' });

    const hoverTitle = mode === LIST_VIEW_MODE.BG ? HOVER_TITLE : null;

    return (
        <ListView.Wrapper>
            <PageHeader
                title={PAGE_HEADER}
                logoVariant='hands'
                rightElement={
                    <ListView.ControlsContainer>
                        <ListView.ButtonView
                            currentMode={mode}
                            mode={LIST_VIEW_MODE.SM}
                            onClick={() => setMode(LIST_VIEW_MODE.SM)}
                            disabled={isLoading}
                        />
                        <ListView.ButtonView
                            currentMode={mode}
                            mode={LIST_VIEW_MODE.BG}
                            onClick={() => setMode(LIST_VIEW_MODE.BG)}
                            disabled={isLoading}
                        />
                        <ListView.ButtonView
                            currentMode={mode}
                            mode={LIST_VIEW_MODE.DM}
                            onClick={() => setMode(LIST_VIEW_MODE.DM)}
                            disabled
                        />
                        <Search
                            className={ListView.classNames.search}
                            value={searchValue}
                            changeHandler={setSearchValue}
                            clearHandler={clearSearch}
                            disabled={isLoading}
                        />
                    </ListView.ControlsContainer>
                }
            />

            <ListView.SortContainer>
                <SortControl
                    direction={nameSort}
                    onClick={sortByName}
                    disabled={isLoading}
                >
                    name
                </SortControl>
            </ListView.SortContainer>

            <ListView.Container
                mode={mode}
                errorMessage={errorMessage}
                emptyMessage={emptyMessage}
                isLoading={isLoading}
                isPending={isPending}
                hasAnimations={hasAnimations}
            >
                {data.map((item, index) => (
                    <ListView.Item
                        key={item.id}
                        mode={mode}
                        hasAnimations={hasAnimations}
                        isLazyImage={index > 6}
                        hoverContent={
                            <HoverElementContent
                                iconElement={<ProductsICO />}
                                title={hoverTitle}
                            />
                        }
                        {...item}
                    />
                ))}
            </ListView.Container>
        </ListView.Wrapper>
    );
};
