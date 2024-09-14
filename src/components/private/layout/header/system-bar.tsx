import { Col, Layout, Row, Select } from "antd";
import { useEffect } from "react";
import { useUserStore } from "@/providers/store/user/user.store.ts";
import { useDependenciesObserverStore } from "@/providers/store/dependencies-observer/dependencies-observer.store.ts";
import { LocaleMenu } from "@/components/global/locale-menu/locale-menu.tsx";

const { Header } = Layout;

export const SystemBar = () => {
  const { user } = useUserStore();
  const { companyId, setCurrentCompanyId } = useDependenciesObserverStore();
  const companyOptionsList = user?.companyList.map((company) => ({
    label: company.name,
    value: company.id,
  }));

  useEffect(() => {
    if (user?.companyList.length) {
      setCurrentCompanyId(user?.companyList[0].id);
    }
  }, [user?.companyList]);

  return (
    <Header className="flex justify-end items-center h-20 px-4 bg-transparent">
      <Row gutter={16} align="middle" justify="end">
        <Col>
          <LocaleMenu />
        </Col>
        <Col>
          <Select
            className="w-64"
            defaultValue={companyId}
            onChange={(value) => {
              setCurrentCompanyId(value);
            }}
            options={companyOptionsList}
          />
        </Col>
      </Row>
    </Header>
  );
};
