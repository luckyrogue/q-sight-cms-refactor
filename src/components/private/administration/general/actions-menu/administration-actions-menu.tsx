import { useNavigate } from "react-router-dom";
import { Button, Dropdown, MenuProps } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
import React from "react";
import { useDeleteEmployee } from "@/components/private/administration/general/actions-menu/administration-actions-menu.services.ts";

export const AdministrationActionsMenu: React.FC<Record<any, any>> = ({
  record,
}) => {
  const navigate = useNavigate();
  const { deleteEmployee, isDeleteEmployeePending } = useDeleteEmployee();

  const actionsMenu: MenuProps["items"] = [
    {
      key: "EmployeeEdit",
      icon: <AppstoreAddOutlined />,
      label: (
        <Button
          type="link"
          onClick={() =>
            navigate(`/administration/employees/edit/${record.id}`)
          }
        >
          Редактировать
        </Button>
      ),
    },
    {
      key: "EmployeeDelete",
      icon: <AppstoreAddOutlined />,
      label: (
        <Button
          type="link"
          danger
          onClick={async () => await deleteEmployee(record?.id)}
        >
          Удалить
        </Button>
      ),
    },
  ];

  return (
    <Dropdown
      disabled={isDeleteEmployeePending}
      menu={{ items: actionsMenu }}
      trigger={["click"]}
    >
      <Button
        className="text-black"
        type="link"
        icon={<AppstoreAddOutlined />}
        shape="circle"
      />
    </Dropdown>
  );
};
