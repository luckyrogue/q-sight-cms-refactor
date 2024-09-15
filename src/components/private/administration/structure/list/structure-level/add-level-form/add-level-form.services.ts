import { useMutation } from "@tanstack/react-query";
import { https } from "@/api/api.base.ts";
import { notification } from "antd";
import { errorHandler } from "@/utils/error-handler/error-handler.util.ts";
import { TAddLevelData } from "@/components/private/administration/structure/list/structure-level/add-level-form/add-level-form.types.ts";
import { useTranslation } from "react-i18next";
import { useGetCompanyStructure } from "@/components/private/administration/structure/list/structure-level/structure-level.services.ts";

export const useAddLevelFormServices = (newLevelData: TAddLevelData) => {
  const { t } = useTranslation();
  const { refetchCompanyStructure } = useGetCompanyStructure();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async () => {
      await https.post("/organization/v1/structure-levels", newLevelData);
    },
    onSuccess: () => {
      notification.success({
        message: "Success",
        description: t("structure-level-form.notification-success"),
      });
      refetchCompanyStructure().then((r) => r);
    },
    onError: (error) => {
      notification.error({
        message: "Error",
        description: errorHandler(error),
      });
    },
  });
  return {
    addLevelStructure: mutateAsync,
    isLevelPending: isPending,
  };
};
