import type { TQueryParametersObserverProps } from "@/utils/query-parameters-observer/query-parameters-observer.types.ts";

export const queryParametersObserver = (
  params: TQueryParametersObserverProps,
) => {
  for (const key in params) {
    if (params[key] === undefined) {
      delete params[key];
    }
  }

  return new URLSearchParams(
    params as unknown as Record<string, string>,
  ).toString();
};
