import { useQuery } from "@tanstack/react-query";
import { https } from "@/api/api.base.ts";
import { useDependenciesObserverStore } from "@/providers/store/dependencies-observer/dependencies-observer.store.ts";

export const useGetEmployeesList = () => {
  const { companyId } = useDependenciesObserverStore();
  const { data, isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const { data } = await https.get("/organization/v1/users", {
        params: {
          companyId,
        },
      });
      return data;
    },
    select: (data) => data.content,
    refetchOnWindowFocus: false,
  });
  return {
    employeesList: data,
    isEmployeesLoading: isLoading,
  };
};
