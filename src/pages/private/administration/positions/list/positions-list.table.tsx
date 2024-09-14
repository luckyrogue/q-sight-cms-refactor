import { AdministrationActionsMenu } from "@/components/private/administration/general/actions-menu/administration-actions-menu.tsx";
import { PositionsModulesTags } from "@/components/private/administration/positions/list/modules-tags/positions-modules-tags.tsx";

export const positionsListTableColumns = [
  {
    title: "Наименование",
    dataIndex: "name",
    key: "positionName",
  },
  {
    title: "Подразделение",
    dataIndex: "structureLevel",
    key: "structureNameLevel",
    render: (record: Record<any, any>) => record?.name,
  },
  {
    title: "Кол-во людей",
    dataIndex: "employeesCount",
    key: "positionEmployeesCount",
  },
  {
    title: "Модуль - Роль",
    dataIndex: "modules",
    key: "positionAdminModules",
    render: (record: Record<any, any>) => (
      <PositionsModulesTags modules={record} modulesTags="adminData" />
    ),
  },
  {
    title: "Модули в моб.приложении - Роль",
    dataIndex: "modules",
    key: "positionMobileModules",
    render: (record: Record<any, any>) => (
      <PositionsModulesTags modules={record} modulesTags="mobileData" />
    ),
  },
  {
    title: "Действия",
    key: "actions",
    render: (record: Record<any, any>) => (
      <AdministrationActionsMenu record={record} />
    ),
  },
];
