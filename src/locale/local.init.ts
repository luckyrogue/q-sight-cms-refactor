import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { AUTH_LOCALE } from "@/pages/auth/auth.locale.ts";
import { mergeLocales } from "@/locale/local.util.ts";
import { LAYOUT_LOCALE } from "@/components/private/layout/widgets/layout.locale.ts";

const resources = mergeLocales([LAYOUT_LOCALE, AUTH_LOCALE]);

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
