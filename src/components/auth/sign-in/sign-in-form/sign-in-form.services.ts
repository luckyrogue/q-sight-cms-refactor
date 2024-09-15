import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { https } from "@/api/api.base.ts";
import { App } from "antd";
import { TSignInData } from "@/components/auth/sign-in/sign-in-form/sign-in-form.types.ts";
import { errorHandler } from "@/utils/error-handler/error-handler.util.ts";
import $cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

export const useMutateSignInData = (
  signInData: TSignInData,
  options?: UseMutationOptions,
) => {
  const { notification } = App.useApp();
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () =>
      https.post("/organization/v1/users/login", signInData),
    onSuccess: (data: unknown) => {
      const accessToken = (data as { data: { accessToken: string } }).data
        .accessToken;
      const refreshToken = (data as { data: { refreshToken: string } }).data
        .refreshToken;
      $cookie.set("accessToken", accessToken);
      $cookie.set("refreshToken", refreshToken);
      navigate("/");
    },
    onError: (error) => {
      notification.error({
        message: "Ошибка",
        description: errorHandler(error),
      });
    },
    ...options,
  });

  return {
    mutateAsync,
    isPending,
  };
};
