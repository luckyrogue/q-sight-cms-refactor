import { Avatar, Button, Typography } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useUserStore } from "@/providers/store/user/user.store.ts";

export const UserProfile = () => {
  const { user, logout } = useUserStore();

  return (
    <div className="flex items-center space-x-4">
      {user?.photoUrl ? (
        <Avatar size={40} src={user?.photoUrl} />
      ) : (
        <Avatar size={40} icon={<UserOutlined />} />
      )}
      <div className="flex flex-col">
        <Typography.Text className="truncate font-semibold text-sm">
          {user?.firstName} {user?.lastName}
        </Typography.Text>
        <Typography.Text className="text-xs text-gray-500">
          {user?.positionName}
        </Typography.Text>
      </div>
      <Button type="link" danger onClick={logout}>
        <LogoutOutlined />
      </Button>
    </div>
  );
};
