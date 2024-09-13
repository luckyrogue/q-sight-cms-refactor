import { useQuery } from "@tanstack/react-query";
import { https } from "@/api/api.base.ts";

export const useGetEmployeesList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const { data } = await https.get("/organization/v1/users");
      return data;
    },
    select: (data) => data.data,
    refetchOnWindowFocus: false,
  });
  return {
    employeesList: data,
    isEmployeesLoading: isLoading,
  };
};
