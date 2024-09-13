export type TQueryParametersObserverProps = {
  companyId: number;
  positionId?: string;
  unitId?: string;
  query?: string;
  page: number;
  size: number;
  [key: string]: string | number | undefined;
};
