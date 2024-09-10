import {useMutation, UseMutationOptions} from "@tanstack/react-query";
import { https } from "@/api/api.base.ts";
import {App} from "antd";
import {TSignInData} from "@/components/auth/sign-in/sign-in-form/sign-in-form.types.ts";

export const useMutateSignInData = (signInData: TSignInData, options?: UseMutationOptions) => {

  const { notification } = App.useApp();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () =>
        https.post("organization/v1/users/login", signInData),
    onError: (error: unknown) => {
      notification.error({
        message: "Ошибка",
        description: (error as { response: { data: { message: string } } }).response.data.message || "Ошибка сервера"
      });
    },
    ...options
  });

  return {
    mutateAsync,
    isPending,
  };
};