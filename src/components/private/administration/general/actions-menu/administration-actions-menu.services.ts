import { useMutation } from "@tanstack/react-query";
import { https } from "@/api/api.base.ts";
import { App } from "antd";
import { errorHandler } from "@/utils/error-handler/error-handler.util.ts";
import { useGetEmployeesList } from "@/pages/private/administration/employees/list/employees-list.services.ts";

export const useDeleteEmployee = () => {
  const { notification } = App.useApp();
  const { refetchEmployeesList } = useGetEmployeesList();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (id: number) => {
      await https.delete(`/organization/v1/users/${id}`);
    },
    onSuccess: () => {
      refetchEmployeesList().then((r) => r);
      notification.success({
        message: "Успешно",
        description: "Сотрудник удален",
      });
    },
    onError: (error: any) => {
      notification.error({
        message: "Ошибка",
        description: errorHandler(error),
      });
    },
  });
  return {
    deleteEmployee: mutateAsync,
    isDeleteEmployeePending: isPending,
  };
};
