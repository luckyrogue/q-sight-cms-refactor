import { Outlet } from "react-router";
import { localHandler } from "@/utils/locale-handler/local-handler.util.ts";
import { App, ConfigProvider } from "antd";
import { useLocaleStore } from "@/providers/store/locale/locale.store.ts";

export const AuthLayout = () => {
    const { locale } = useLocaleStore();

    return (
        <ConfigProvider locale={localHandler(locale)}>
            <App>
                <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
                    <Outlet />
                </div>
            </App>
        </ConfigProvider>
    );
}
