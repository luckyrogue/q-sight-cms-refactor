import { PositionsRouter } from "@/pages/private/administration/positions/positions.router.tsx";
import { EmployeesRouter } from "@/pages/private/administration/employees/employees.router.tsx";
import { StructureRouter } from "@/pages/private/administration/structure/structure.router.tsx";

export const AdministrationRouter = [
  {
    path: "administration",
    children: [...PositionsRouter, ...EmployeesRouter, ...StructureRouter],
  },
];
