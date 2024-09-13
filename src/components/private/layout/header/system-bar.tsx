import { Col, Layout, Row, Select } from "antd";
import { useEffect, useState } from "react";
import { useUserStore } from "@/providers/store/user/user.store.ts";
import { useDependenciesObserverStore } from "@/providers/store/dependencies-observer/dependencies-observer.store.ts";

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
      <Row justify="end">
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
