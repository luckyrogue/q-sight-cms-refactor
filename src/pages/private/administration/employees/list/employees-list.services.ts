import { useQuery } from "@tanstack/react-query";
import { https } from "@/api/api.base.ts";

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
