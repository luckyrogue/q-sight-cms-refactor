import { create } from "zustand";
import { TDependenciesObserver } from "@/providers/store/dependencies-observer/dependencies-observer.types.ts";

export const useDependenciesObserverStore = create<TDependenciesObserver>(
  (set) => ({
    companyId: null,
    setCurrentCompanyId: (companyId) => set(() => ({ companyId })),
    unitNames: [],
    setUnitNames: (unitNames) => set(() => ({ unitNames })),
    positionNames: [],
    setPositionNames: (positionNames) => set(() => ({ positionNames })),
  }),
);
