//
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enNav from "./assets/translations/en.nav.json";
import frNav from "./assets/translations/fr.nav.json";
import nlNav from "./assets/translations/nl.nav.json";

import enHome from "./assets/translations/en.home.json";
import frHome from "./assets/translations/fr.home.json";
import nlHome from "./assets/translations/nl.home.json";

import enAbout from "./assets/translations/en.about.json";
import frAbout from "./assets/translations/fr.about.json";
import nlAbout from "./assets/translations/nl.about.json";

const resources = {
  en: {
    translation: enNav,
    home: enHome,
    about: enAbout,
  },
  fr: {
    translation: frNav,
    home: frHome,
    about: frAbout,
  },
  nl: {
    translation: nlNav,
    home: nlHome,
    about: nlAbout,
  },
};

i18n
  .use(LanguageDetector)
  //.use(HttpApi)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ["en", "nl", "fr"],
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },

    // backend: {
    //   loadPath: "/assets/translations/{{lng}}.json",
    // },

    //react: { useSuspense: false },
  });

export default i18n;
