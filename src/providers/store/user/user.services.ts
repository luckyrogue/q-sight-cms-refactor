import { https } from "@/api/api.base.ts";
import { TUser } from "@/providers/store/user/user.types.ts";

export const fetchUserData = async (): Promise<TUser> => {
  try {
    const { data } = await https.get("/organization/v1/users/me");
    return data;
  } catch (e) {
    throw new Error(String(e));
  }
};
