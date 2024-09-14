import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { AUTH_PAGES_LOCALE } from "@/pages/auth/auth.locale.ts";
import { mergeLocales } from "@/locale/local.util.ts";
import { LAYOUT_LOCALE } from "@/components/private/layout/widgets/layout.locale.ts";
import { PRIVATE_PAGES_LOCALE } from "@/pages/private/private.locale.ts";

const savedLocale = localStorage.getItem("app_locale") || "ru";

const resources = mergeLocales([
  LAYOUT_LOCALE,
  AUTH_PAGES_LOCALE,
  PRIVATE_PAGES_LOCALE,
]);

i18n.use(initReactI18next).init({
  resources,
  lng: savedLocale,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
