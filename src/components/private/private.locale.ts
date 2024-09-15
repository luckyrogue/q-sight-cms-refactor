import { mergeLocales } from "@/locale/local.util.ts";
import { PRIVATE_LAYOUT_COMPONENTS_LOCALE } from "@/components/private/layout/layout.locale.ts";
import { PRIVATE_ADMINISTRATION_COMPONENTS_LOCALE } from "@/components/private/administration/administration.locale.ts";

export const PRIVATE_LOCALE_COMPONENTS_LOCALE = mergeLocales([
  PRIVATE_ADMINISTRATION_COMPONENTS_LOCALE,
  PRIVATE_LAYOUT_COMPONENTS_LOCALE,
]);
