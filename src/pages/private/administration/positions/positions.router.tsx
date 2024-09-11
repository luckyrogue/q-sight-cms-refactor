import { PositionsListRoute } from "@/pages/private/administration/positions/list/positions-list.route.tsx";
import { PositionsIdRoute } from "@/pages/private/administration/positions/[id]/positions-id.route.tsx";

export const PositionsRouter = [
  {
    path: "positions",
    children: [
      {
        path: "",
        element: <PositionsListRoute />,
      },
      {
        path: ":id",
        element: <PositionsIdRoute />,
      },
    ],
  },
];
