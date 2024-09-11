import { EmployeesListRoute } from "@/pages/private/administration/employees/list/employees-list.route.tsx";

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
    ],
  },
];
