import { mergeLocales } from "@/locale/local.util.ts";
import { STRUCTURE_LEVEL_COMPONENTS_LOCALE } from "@/components/private/administration/structure/structure.locale.ts";

export const PRIVATE_ADMINISTRATION_COMPONENTS_LOCALE = mergeLocales([
  STRUCTURE_LEVEL_COMPONENTS_LOCALE,
]);
