import { create } from "zustand";
import { persist } from "zustand/middleware";
import { fetchUserData } from "@/providers/store/user/user.services.ts";
import type {
  TUserState,
  TUserActions,
} from "@/providers/store/user/user.types.ts";
import { storageHandler } from "@/providers/store/user/user.utils.ts";

export const useUserStore = create<TUserState & TUserActions>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,
      fetchUser: async () => {
        set({ loading: true, error: null });
        try {
          const user = await fetchUserData();
          set({
            user,
            isAuthenticated: true,
            loading: false,
          });
        } catch (error) {
          set({
            user: null,
            isAuthenticated: false,
            loading: false,
            error: (error as Error).message,
          });
        }
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: "user-storage",
      storage: storageHandler,
    },
  ),
);
