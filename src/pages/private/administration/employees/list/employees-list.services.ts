import { useQuery } from "@tanstack/react-query";
import { https } from "@/api/api.base.ts";
import {queryParametersObserver} from "@/utils/query-parameters-observer/query-parameters-observer.util.ts";

export const useGetEmployeesList = () => {
  const { data } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const { data } = await https.get("/organization/v1/users");
      return data;
    },
    select: (data) => data.data,
    refetchOnWindowFocus: false,
  });
  return {
    employees: data,
  };
};
