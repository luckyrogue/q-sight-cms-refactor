import { PrivateLayout } from "@/pages/private/private.layout.tsx";
import { AdministrationRouter } from "@/pages/private/administration/administration.router.tsx";

export const PrivateRouter = [
  {
    path: "/",
    element: <PrivateLayout />,
    children: [...AdministrationRouter],
  },
];
