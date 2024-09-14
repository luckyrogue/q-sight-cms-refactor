import { mergeLocales } from "@/locale/local.util.ts";
import { PRIVATE_LAYOUT_COMPONENTS_LOCALE } from "@/components/private/layout/layout.locale.ts";

export const PRIVATE_LOCALE_COMPONENTS_LOCALE = mergeLocales([
  PRIVATE_LAYOUT_COMPONENTS_LOCALE,
]);
