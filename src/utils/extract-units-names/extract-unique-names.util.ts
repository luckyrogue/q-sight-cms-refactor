import { TExtractUniqueNames } from "@/utils/extract-units-names/extract-unique-names.types.ts";

export const extractUniqueNames: TExtractUniqueNames = (data) => {
  if (!data || !Array.isArray(data.content)) {
    console.error("Invalid data format");
    return [];
  }

  return data.content
    .map((employee) => employee.unitName)
    .filter(
      (unitName, index, array) => unitName && array.indexOf(unitName) === index,
    )
    .map((unitName) => ({
      label: unitName,
      value: unitName,
    }));
};
