type TCompany = {
  id: number;
  name: string;
};

export type TUser = {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string | null;
  phoneNumber: string | null;
  photoUrl: string | null;
  email: string;
  position: string | null;
  positionName: string;
  roles: string[];
  unitAdminId: number | null;
  units: any[];
  companyList: TCompany[];
  placeIds: any[];
};

export type TUserState = {
  user: TUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
};

export type TUserActions = {
  fetchUser: () => Promise<void>;
  logout: () => void;
};
