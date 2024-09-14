import { EmployeesListRoute } from "@/pages/private/administration/employees/list/employees-list.route.tsx";
import { EmployeesCreateRoute } from "@/pages/private/administration/employees/[create]/employees-create.route.tsx";
import { EmployeesEditRoute } from "@/pages/private/administration/employees/[edit]/employees-edit.route.tsx";

export const EmployeesRouter = [
  {
    path: "employees",
    children: [
      {
        path: "",
        element: <EmployeesListRoute />,
      },
      {
        path: "edit/:id",
        element: <EmployeesEditRoute />,
      },
      {
        path: "create",
        element: <EmployeesCreateRoute />,
      },
    ],
  },
];
