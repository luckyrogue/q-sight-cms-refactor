import { create } from "zustand";
import { TLocaleState } from "@/providers/store/locale/locale.types.ts";

export const useLocaleStore = create<TLocaleState>((set) => ({
  locale: "ru",
  setLocale: (locale) => set(() => ({ locale })),
}));
