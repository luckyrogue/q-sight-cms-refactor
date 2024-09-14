import { PRIVATE_LAYOUT_COMPONENTS_LOCALE } from "@/components/private/layout/layout.locale.ts";
import { mergeLocales } from "@/locale/local.util.ts";

export const PRIVATE_PAGES_LOCALE = mergeLocales([
  PRIVATE_LAYOUT_COMPONENTS_LOCALE,
]);
