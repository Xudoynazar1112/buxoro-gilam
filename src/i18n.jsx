import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uzTranslation from './locales/uz.json'
import ruTranslation from './locales/ru.json'
import enTranslation from './locales/en.json'

const language = localStorage.getItem('i18nextLng') || 'uz'

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  .use(Backend)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    fallbackLng: 'en',
    debug: true,
    lng: language,
    resources: {
        uz: {translation: uzTranslation},
        ru: {translation: ruTranslation},
        en: {translation: enTranslation},
    }

    // interpolation: {
    //   escapeValue: false, // not needed for react as it escapes by default
    // }
  });


export default i18n;