import { mergeLocales } from "@/locale/local.util.ts";
import { SIGN_IN_ROUTE } from "@/pages/auth/sign-in/sign-in.locale.ts";

export const AUTH_PAGES_LOCALE = mergeLocales([SIGN_IN_ROUTE]);
