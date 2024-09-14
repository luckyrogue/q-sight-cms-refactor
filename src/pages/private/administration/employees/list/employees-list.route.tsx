import { AdministrationHeader } from "@/components/private/administration/general/header/administration-header.tsx";
import { Table } from "antd";
import { employeesListTableColumns } from "@/pages/private/administration/employees/list/employees-list.table.tsx";
import { useGetEmployeesList } from "@/pages/private/administration/employees/list/employees-list.services.ts";
import { useEffect } from "react";
import { useDependenciesObserverStore } from "@/providers/store/dependencies-observer/dependencies-observer.store.ts";

export const EmployeesListRoute = () => {
  const { companyId } = useDependenciesObserverStore();
  const {
    employeesList,
    isEmployeesLoading,
    setEmployeesFilter,
    refetchEmployeesList,
  } = useGetEmployeesList();

  const handleFilterChange = (page: number, pageSize: number) => {
    setEmployeesFilter((prev) => ({
      ...prev,
      page: page,
      size: pageSize,
    }));
  };

  useEffect(() => {
    if (companyId) refetchEmployeesList().then((r) => r);
  }, [companyId]);

  return (
    <div>
      <AdministrationHeader />
      <Table
        rowKey="id"
        dataSource={employeesList?.content}
        columns={employeesListTableColumns}
        loading={isEmployeesLoading}
        pagination={{
          total: employeesList?.total,
          current: employeesList?.pageNumber,
          onChange: handleFilterChange,
          showSizeChanger: true,
          pageSize: employeesList?.pageSize,
          pageSizeOptions: ["10", "20", "50", "100"],
          onShowSizeChange: handleFilterChange,
        }}
      />
    </div>
  );
};
