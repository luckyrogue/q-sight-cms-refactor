import { TErrorResponse } from "@/types/global.types.ts";

type TServerError = {
  error?: string;
  message?: string;
};

export type TErrorHandler = (error: TErrorResponse<TServerError>) => string;
