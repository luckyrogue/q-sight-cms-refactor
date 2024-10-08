import { AdministrationActionsMenu } from "@/components/private/administration/general/actions-menu/administration-actions-menu.tsx";

export const employeesListTableColumns = [
  {
    title: "ФИО",
    dataIndex: "fullName",
    key: "userName",
  },
  {
    title: "Должность",
    dataIndex: "positionName",
    key: "userPosition",
  },
  {
    title: "Подразделение",
    dataIndex: "unitName",
    key: "userUnit",
  },
  {
    title: "Телефон",
    dataIndex: "phoneNumber",
    key: "userPhone",
  },
  {
    title: "Электронная почта",
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
