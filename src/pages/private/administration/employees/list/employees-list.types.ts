export type TEmployeesListFilter = {
  companyId: number | null;
  positionId: string;
  unitId: string;
  query: string;
  page: number;
  size: number;
};

export type TEmployee = {
  id: number;
  fullName: string;
  positionName: string;
  email: string;
  phoneNumber?: string | null;
  unitName: string;
};
