import { PersistStorage } from "zustand/middleware";
import { TUserActions, TUserState } from "@/providers/store/user/user.types.ts";

export const storageHandler: PersistStorage<TUserState & TUserActions> = {
  getItem: (name) => {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  },
  setItem: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name) => {
    localStorage.removeItem(name);
  },
};
