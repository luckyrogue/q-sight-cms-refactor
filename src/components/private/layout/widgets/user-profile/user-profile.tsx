import { Avatar, Typography } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";

export const UserProfile = () => {
  return (
    <div className="flex items-center space-x-4">
      <Avatar size={40} icon={<UserOutlined />} />

      <div className="flex flex-col">
        <Typography.Text className="truncate font-semibold text-sm">
          q-sight q-sight...Í
        </Typography.Text>
        <Typography.Text className="text-xs text-gray-500">
          SUPER_ADMIN
        </Typography.Text>
      </div>

      <LogoutOutlined className="text-red-500 text-xl cursor-pointer" />
    </div>
  );
};
