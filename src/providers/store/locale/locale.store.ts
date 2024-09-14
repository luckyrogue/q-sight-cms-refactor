import i18n from "i18next";
import { create } from "zustand";
import { TLocaleState } from "@/providers/store/locale/locale.types.ts";

export const useLocaleStore = create<TLocaleState>((set) => ({
  locale: localStorage.getItem("app_locale") || "ru",
  setLocale: (locale) => {
    localStorage.setItem("app_locale", locale);
    i18n.changeLanguage(locale);
    set(() => ({ locale }));
  },
}));
