import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { TRANSLATION } from 'utils/types/enum';

i18n.use(Backend)
    .use(initReactI18next) // todo: remove?
    .use(LanguageDetector)
    .init({
        returnNull: false,
        fallbackLng: TRANSLATION.EN,
        ns: ['translations'],
        defaultNS: 'translations',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
