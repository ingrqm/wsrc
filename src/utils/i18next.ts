import { initReactI18next } from 'react-i18next';
import { defaultConfig } from 'atoms/config';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from '../locales';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultConfig.language,
    fallbackLng: defaultConfig.language,
    keySeparator: '.',
    debug: process.env.NODE_ENV === 'development',
  });

export default i18n;
