import * as React from "react";
import { TPrivateLayoutProps } from "@/pages/private/private.types.ts";
import { Navigate, Outlet } from "react-router";
import { App, ConfigProvider, Layout } from "antd";
import { Drawer } from "@/components/private/layout/sider/drawer.tsx";
import { SystemBar } from "@/components/private/layout/header/system-bar.tsx";
import { useUserStore } from "@/providers/store/user/user.store";
import {useEffect, useState} from "react";
import { localHandler } from "@/utils/locale-handler/local-handler.util";
import { useLocaleStore } from "@/providers/store/locale/locale.store.ts";
import { Loader } from "@/components/global/loader/loader.tsx";
import {deviceSizeObserver} from "@/utils/device-size-observer/device-size-observer.ts";
import {MobileMenu} from "@/components/private/layout/mobile-menu/mobile-menu.tsx";

const { Content } = Layout;

export const PrivateLayout: React.FC<TPrivateLayoutProps> = () => {
  const { fetchUser, isAuthenticated, loading } = useUserStore((state) => ({
    fetchUser: state.fetchUser,
    isAuthenticated: state.isAuthenticated,
    loading: state.loading,
  }));

  const { locale } = useLocaleStore();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    fetchUser().then((r) => r);
    return deviceSizeObserver(setIsMobile);
  }, [fetchUser]);

  if (loading) return <Loader />;

  // if (!isAuthenticated) return <Navigate to="/auth" replace />;

  return (
    <ConfigProvider locale={localHandler(locale)}>
      <App>
        <Layout className="min-h-screen">
          {isMobile ? <MobileMenu /> : <Drawer />}
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
