import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getTranslations } from 'utils/translations';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en';
import pl from './locales/pl';

const resources = {
  en: {
    translation: getTranslations(en),
  },
  pl: {
    translation: getTranslations(pl),
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
