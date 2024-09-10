import { PrivateLayout } from "@/pages/private/private.layout.tsx";

export const PrivateRouter = [
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "",
        element: <div>Home</div>,
      },
    ],
  },
];
