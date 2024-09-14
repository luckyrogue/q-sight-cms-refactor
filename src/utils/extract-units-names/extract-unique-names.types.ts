import type { TOption, TResponseData } from "@/types/global.types.ts";

export type TExtractUniqueNames = (data: TResponseData<any>) => TOption[];
