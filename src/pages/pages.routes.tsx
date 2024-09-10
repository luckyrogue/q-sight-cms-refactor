import { PrivateRouter } from "@/pages/private/private.router.tsx";
import { AuthRouter } from "@/pages/auth/auth.router.tsx";

export const PagesRoutes = [...PrivateRouter, ...AuthRouter];
