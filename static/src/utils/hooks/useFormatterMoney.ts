import { useTranslation } from 'react-i18next';

export const useFormatterMoney = (value?: string, currency?: string) => {
    const { i18n } = useTranslation();

    if (!currency || !value) {
        return '';
    }

    return new Intl.NumberFormat(i18n.language, {
        style: 'currency',
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(parseFloat(value));
};
