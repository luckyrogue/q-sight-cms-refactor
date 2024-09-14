import { TUnitNameOption } from "@/utils/extract-units-names/extract-unique-names.types.ts";

export type TDependenciesObserver = {
  companyId: number | null;
  setCurrentCompanyId: (companyId: number) => void;
  unitNames: TUnitNameOption[];
  setUnitNames: (unitNames: TUnitNameOption[]) => void;
  positionNames: TUnitNameOption[];
  setPositionNames: (positionNames: TUnitNameOption[]) => void;
};
