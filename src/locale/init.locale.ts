import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DRAWER_LOCALE } from "@/components/private/layout/sider/drawer.locale.ts";

const resources = {
  ...DRAWER_LOCALE,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
