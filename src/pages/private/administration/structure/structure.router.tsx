import { StructureListRoute } from "@/pages/private/administration/structure/list/structure-list.route.tsx";

export const StructureRouter = [
  {
    path: "structure",
    children: [
      {
        path: "",
        element: <StructureListRoute />,
      },
    ],
  },
];
