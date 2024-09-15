import { create } from "zustand";
import { persist } from "zustand/middleware";
import { fetchUserData } from "@/providers/store/user/user.services.ts";
import type {
  TUserState,
  TUserActions,
} from "@/providers/store/user/user.types.ts";
import { storageHandler } from "@/providers/store/user/user.utils.ts";
import $cookie from "js-cookie";

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
          const completeUser = {
            id: Number(user.id),
            firstName: user.firstName || "",
            lastName: user.lastName || "",
            middleName: user.middleName || "",
            phoneNumber: user.phoneNumber || "",
            photoUrl: user.photoUrl || "",
            email: user.email || "",
            position: user.position || "",
            positionName: user.positionName || "",
            roles: user.roles || [],
            unitAdminId:
              typeof user.unitAdminId === "number" ? user.unitAdminId : null,
            units: user.units || [],
            companyList: user.companyList || [],
            placeIds: user.placeIds || [],
          };
          set({
            user: completeUser,
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
        $cookie.remove("accessToken");
      },
    }),
    {
      name: "user-storage",
      storage: storageHandler,
    },
  ),
);
