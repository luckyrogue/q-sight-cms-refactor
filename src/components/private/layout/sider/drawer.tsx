import { Layout, Menu } from "antd";
import { useTranslation } from "react-i18next";
import { DRAWER_CONSTANT } from "@/components/private/layout/sider/drawer.constant.tsx";
import type { TDesktopMenuItem } from "@/components/private/layout/sider/drawer.types.ts";
import { UserProfile } from "@/components/private/layout/widgets/user-profile/user-profile.tsx";
import { assetsDeclaration } from "@/assets/assets.declaration.ts";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

export const Drawer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const translatedDrawer = DRAWER_CONSTANT.filter(
    (item): item is TDesktopMenuItem => item !== null,
  ).map((item: TDesktopMenuItem) => {
    return {
      ...item,
      label: t(item.label),
      children: item.children?.map((child: TDesktopMenuItem) => ({
        ...child,
        label: t(child.label),
      })),
    };
  });

  return (
    <Sider width="16rem">
      <div className="flex flex-col justify-between h-full">
        <div className="flex-shrink-0">
          <img
            src={assetsDeclaration.svg.LOGO}
            alt="logo"
            className="w-16 h-16 mx-auto my-8"
          />
        </div>

        <Menu
          mode="inline"
          items={translatedDrawer}
          className="flex-grow"
          onClick={(e) => navigate(e.key)}
        />

        <div className="flex-shrink-0 p-4">
          <UserProfile />
        </div>
      </div>
    </Sider>
  );
};
