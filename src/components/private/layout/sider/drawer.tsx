import { Layout, Menu } from "antd";
import { useTranslation } from "react-i18next";
import { DRAWER_CONSTANT } from "@/components/private/layout/sider/drawer.constant.ts";
import type { TMenuItem } from "@/components/private/layout/sider/drawer.types.ts";
import { UserProfile } from "@/components/private/layout/widgets/user-profile/user-profile.tsx";

const { Sider } = Layout;

export const Drawer = () => {
  const { t } = useTranslation();

  const translatedDrawer = DRAWER_CONSTANT.filter(
    (item): item is TMenuItem => item !== null,
  ).map((item: TMenuItem) => {
    return {
      ...item,
      label: t(item.label),
      children: item.children?.map((child: TMenuItem) => ({
        ...child,
        label: t(child.label),
      })),
    };
  });

  return (
    <Sider width="16rem" style={{ backgroundColor: "white" }}>
      <Menu mode="inline" items={translatedDrawer} />
      <UserProfile />
    </Sider>
  );
};
