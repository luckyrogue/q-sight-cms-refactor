import { https } from "@/api/api.base.ts";

export const fetchUserData = async (): Promise<{
  id: string;
  name: string;
  email: string;
}> => {
  try {
    const { data } = await https.get("/organization/v1/users/me");
    return data;
  } catch (e) {
    throw new Error(String(e));
  }
};

export const fetchUserPermissions = async (): Promise<any[]> => {
  try {
    const { data } = await https.get("/organization/v1/users/permissions");
    return data;
  } catch (e) {
    throw new Error(String(e));
  }
}