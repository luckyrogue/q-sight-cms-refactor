import type { AxiosRequestConfig, AxiosResponse } from "axios";

export type TErrorResponse<T> = {
  message: string;
  name: string;
  code?: string;
  config?: AxiosRequestConfig<T>; // Типизация данных, передаваемых в запросе
  request?: XMLHttpRequest; // Запрос, сделанный через XMLHttpRequest
  response?: AxiosResponse<T>; // Типизация данных в ответе от сервера
};

export type TResponseData<T> = {
  total: number;
  pageNumber: number;
  totalPages: number;
  content: T[];
};

export type TOption = {
  label: string;
  value: string;
};
