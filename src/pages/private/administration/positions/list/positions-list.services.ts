import { useQuery } from "@tanstack/react-query";
import { https } from "@/api/api.base.ts";
import { TEmployeesListFilter } from "@/pages/private/administration/employees/list/employees-list.types.ts";
import { useDependenciesObserverStore } from "@/providers/store/dependencies-observer/dependencies-observer.store.ts";
import { App } from "antd";
import { errorHandler } from "@/utils/error-handler/error-handler.util.ts";
import { extractUniqueNames } from "@/utils/extract-units-names/extract-unique-names.util.ts";
import { useState } from "react";
import { extractUniquePositions } from "@/utils/extract-unique-positions/extract-unique-positions.util.ts";

export const useGetPositionsList = () => {
  const { companyId } =
    useDependenciesObserverStore();
  const { message } = App.useApp();
  const [positionsFilter, setPositionsFilter] = useState<TEmployeesListFilter>({
    companyId: companyId,
    positionId: "",
    unitId: "",
    query: "",
    page: 1,
    size: 10,
  });
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["employees", employeesFilter],
    queryFn: async ({ queryKey }) => {
      try {
        const [, employeesFilter] = queryKey;
        const { data } = await https.get("/organization/v1/users", {
          params: {
            ...(employeesFilter as TEmployeesListFilter),
          },
        });
        setUnitNames(extractUniqueNames(data));
        setPositionNames(extractUniquePositions(data));
        return data;
      } catch (error: any) {
        message.error(errorHandler(error));
      }
    },
    enabled: false,
    retry: 1,
    select: (data) => data,
    refetchOnWindowFocus: false,
  });
  return {
    employeesList: data,
    isEmployeesLoading: isLoading,
    refetchEmployeesList: refetch,
    setEmployeesFilter,
  };
};
