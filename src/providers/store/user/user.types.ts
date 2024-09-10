export type TUser = {
  id: string;
  name: string;
  email: string;
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
