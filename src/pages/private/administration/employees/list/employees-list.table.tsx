import { AppstoreAddOutlined } from "@ant-design/icons";
import { Button } from "antd";

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
    render: () => (
      <Button
        className="text-black"
        type="link"
        shape="circle"
        icon={<AppstoreAddOutlined />}
      />
    ),
  },
];
