import { TExtractUniquePositions } from "@/utils/extract-unique-positions/extract-unique-positions.types.ts";

export const extractUniquePositions: TExtractUniquePositions = (data) => {
  if (!data || !Array.isArray(data.content)) {
    console.error("Invalid data format");
    return [];
  }

  return data.content
    .map((employee) => employee.positionName)
    .filter(
      (positionName, index, array) =>
        positionName && array.indexOf(positionName) === index,
    )
    .map((positionName) => ({
      label: positionName,
      value: positionName,
    }));
};
