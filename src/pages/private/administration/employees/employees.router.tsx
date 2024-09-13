import { EmployeesListRoute } from "@/pages/private/administration/employees/list/employees-list.route.tsx";
import { EmployeesCreateRoute } from "@/pages/private/administration/employees/[create]/employees-create.route.tsx";

export const EmployeesRouter = [
  {
    path: "employees",
    children: [
      {
        path: "",
        element: <EmployeesListRoute />,
      },
      {
        path: ":id",
      },
      {
        path: "create",
        element: <EmployeesCreateRoute />,
      },
    ],
  },
];
