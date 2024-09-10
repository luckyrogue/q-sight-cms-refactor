import * as React from "react";
import { TPrivateLayoutProps } from "@/pages/private/private.types.ts";
import { Navigate, Outlet } from "react-router";
import { App, ConfigProvider, Layout } from "antd";
import { Drawer } from "@/components/private/layout/sider/drawer.tsx";
import { SystemBar } from "@/components/private/layout/header/system-bar.tsx";
import { useUserStore } from "@/providers/store/user/user.store";
import { useEffect } from "react";
import { localHandler } from "@/utils/locale-handler/local-handler.util";
import { useLocaleStore } from "@/providers/store/locale/locale.store.ts";

const { Content } = Layout;

export const PrivateLayout: React.FC<TPrivateLayoutProps> = () => {
  const { fetchUser, isAuthenticated, loading } = useUserStore((state) => ({
    fetchUser: state.fetchUser,
    isAuthenticated: state.isAuthenticated,
    loading: state.loading,
  }));

  const { locale } = useLocaleStore();

  useEffect(() => {
    fetchUser().then((r) => r);
  }, [fetchUser]);

  if (loading) return <div>Loading...</div>;

  // if (!isAuthenticated) return <Navigate to="/auth" replace />;

  return (
    <ConfigProvider locale={localHandler(locale)}>
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
