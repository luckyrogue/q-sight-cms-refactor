import {
  AdministrationActionsMenu
} from "@/components/private/administration/general/actions-menu/administration-actions-menu.tsx";

export const positionsListTableColumns = [
  {
    title: "Наименование",
    dataIndex: "fullName",
    key: "userName",
  },
  {
    title: "Подразделение",
    dataIndex: "positionName",
    key: "userPosition",
  },
  {
    title: "Кол-во людей",
    dataIndex: "unitName",
    key: "userUnit",
  },
  {
    title: "Модуль - Роль",
    dataIndex: "phoneNumber",
    key: "userPhone",
  },
  {
    title: "Моудли в моб.приложении - Роль",
    dataIndex: "email",
    key: "userEmail",
  },
  {
    title: "Действия",
    key: "actions",
    render: (record: Record<any, any>) => (
      <AdministrationActionsMenu record={record} />
    ),
  },
];
