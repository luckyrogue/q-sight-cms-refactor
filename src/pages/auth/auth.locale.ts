import { mergeLocales } from "@/locale/local.util.ts";
import { SIGN_IN_ROUTE } from "@/pages/auth/sign-in/sign-in.locale.ts";

const AUTH_ROUTES = {
  ru: {
    translation: {
      "auth.welcome": "Добро пожаловать!",
    },
  },
};

export const AUTH_LOCALE = mergeLocales([AUTH_ROUTES, SIGN_IN_ROUTE]);
