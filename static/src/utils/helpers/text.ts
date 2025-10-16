import { ROUTES } from 'utils/constants/routes';

export const addBitrixPrefixToRelativeLinks = (text: string) =>
    text.replace(
        /href=(['"])(\/(?!\/)[^'"]*?)\1/g,
        `href="${ROUTES.BITRIX_ROUTE}$2"`,
    );
