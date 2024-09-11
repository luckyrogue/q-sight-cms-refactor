import { AdministrationHeader } from "@/components/private/administration/general/header/administration-header.tsx";
import { Table } from "antd";
import { employeesListTableColumns } from "@/pages/private/administration/employees/list/employees-list.table.ts";
import { useGetEmployeesList } from "@/pages/private/administration/employees/list/employees-list.services.ts";

export const EmployeesListRoute = () => {
  const { employees } = useGetEmployeesList();

  return (
    <div>
      <AdministrationHeader />
      <Table dataSource={employees} columns={employeesListTableColumns} />
    </div>
  );
};
