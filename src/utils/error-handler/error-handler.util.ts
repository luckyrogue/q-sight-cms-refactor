import { TErrorHandler } from "@/utils/error-handler/error-handler.types.ts";

const isEnglish = (text: string): boolean =>
  /^[A-Za-z\s.,'!@#?$%&*()_+-=]*$/.test(text);

export const errorHandler: TErrorHandler = (error) => {
  const errorMessage =
    error.response?.data?.error ||
    error.response?.data?.message ||
    "Неизвестная ошибка";

  if (isEnglish(errorMessage)) {
    return "Неизвестная ошибка";
  }

  return errorMessage;
};
