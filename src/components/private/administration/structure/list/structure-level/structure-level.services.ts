import { useQuery } from "@tanstack/react-query";
import { https } from "@/api/api.base.ts";
import { errorHandler } from "@/utils/error-handler/error-handler.util.ts";
import { message } from "antd";
import { useDependenciesObserverStore } from "@/providers/store/dependencies-observer/dependencies-observer.store.ts";

export const useGetCompanyStructure = () => {
  const { companyId } = useDependenciesObserverStore();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["structure", companyId],
    queryFn: async ({ queryKey }) => {
      try {
        const [, companyId] = queryKey;
        const { data } = await https.get("/organization/v1/structure-levels", {
          params: {
            companyId,
          },
        });
        return data;
      } catch (error: any) {
        message.error(errorHandler(error));
      }
    },
    enabled: !!companyId,
    retry: 1,
    select: (data) => data,
    refetchOnWindowFocus: false,
  });
  return {
    companyStructure: data,
    isCompanyStructureLoading: isLoading,
    refetchCompanyStructure: refetch,
  };
};
