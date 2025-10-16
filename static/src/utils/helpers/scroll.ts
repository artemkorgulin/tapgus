const defaultScrollOptions: ScrollToOptions = {
    left: 0,
    behavior: 'smooth',
};

export const scrollToElement = (
    element: HTMLElement,
    options: ScrollToOptions | undefined = defaultScrollOptions,
): void => {
    element.scrollTo(options);
};

const defaultScrollIntoViewOptions: ScrollIntoViewOptions = {
    behavior: 'smooth',
    inline: 'center',
};

// todo: со scrollIntoView есть потенциальная проблема,
//  которую трудно воспроизвести
//  - при определенных условиях, вместе с элементом скроллится страница
//  - при необходимости, чтобы решить это, можно переписать на scrollToElement
export const scrollIntoView = (
    element: HTMLElement,
    options: ScrollIntoViewOptions | boolean = defaultScrollIntoViewOptions,
) => {
    element.scrollIntoView(options);
};
