import * as React from "react";
import { TPrivateLayoutProps } from "@/pages/private/private.types.ts";
import { Outlet } from "react-router";
import { App, ConfigProvider, Layout } from "antd";
import { Drawer } from "@/components/private/layout/sider/drawer.tsx";
import { SystemBar } from "@/components/private/layout/header/system-bar.tsx";
import { useUserStore } from "@/providers/store/user/user.store";
import { useEffect } from "react";
import { localHandler } from "@/utils/locale-handler/local-handler.util";
import { useLocaleStore } from "@/providers/store/locale/locale.store.ts";
import { Loader } from "@/components/global/loader/loader.tsx";
import { customTheme } from "@/theme/theme.config.ts";

const { Content } = Layout;

export const PrivateLayout: React.FC<TPrivateLayoutProps> = () => {
  const { fetchUser, loading } = useUserStore((state) => ({
    isAuthenticated: state.isAuthenticated,
    fetchUser: state.fetchUser,
    loading: state.loading,
  }));

  const { locale } = useLocaleStore();

  useEffect(() => {
    fetchUser().then((r) => r);
  }, [fetchUser]);

  if (loading) return <Loader />;

  return (
    <ConfigProvider theme={customTheme} locale={localHandler(locale)}>
      <App>
        <Layout className="min-h-screen">
          <Drawer />
          <Layout>
            <SystemBar />
            <Content className="m-4">
              <div className="p-4">
                <Outlet />
              </div>
            </Content>
          </Layout>
        </Layout>
      </App>
    </ConfigProvider>
  );
};
