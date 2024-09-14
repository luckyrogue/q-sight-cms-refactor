import { useQuery } from "@tanstack/react-query";
import { https } from "@/api/api.base.ts";
import type { TPositionsListFilter } from "@/pages/private/administration/positions/list/positions-list.types.ts";
import { useDependenciesObserverStore } from "@/providers/store/dependencies-observer/dependencies-observer.store.ts";
import { App } from "antd";
import { errorHandler } from "@/utils/error-handler/error-handler.util.ts";
import { useState } from "react";

export const useGetPositionsList = () => {
  const { companyId } = useDependenciesObserverStore();
  const { message } = App.useApp();
  const [positionsFilter, setPositionsFilter] = useState<TPositionsListFilter>({
    companyId: companyId,
    positionId: "",
    unitId: "",
    query: "",
    page: 1,
    size: 10,
  });
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["employees", positionsFilter],
    queryFn: async ({ queryKey }) => {
      try {
        const [, positionsFilter] = queryKey;
        const { data } = await https.get("/organization/v1/positions", {
          params: {
            ...(positionsFilter as TPositionsListFilter),
          },
        });
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
    positionsList: data,
    isPositionsLoading: isLoading,
    refetchPositionsList: refetch,
    setPositionsFilter,
  };
};
