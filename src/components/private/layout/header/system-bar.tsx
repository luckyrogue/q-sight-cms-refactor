import { Col, Layout, Row, Select } from "antd";
import { useState } from "react";
import { useUserStore } from "@/providers/store/user/user.store.ts";

const { Header } = Layout;

export const SystemBar = () => {
  const { user } = useUserStore();
  const [company, setCompany] = useState(user?.companyList[0].id);
  const companyOptionsList = user?.companyList.map((company) => ({
    label: company.name,
    value: company.id,
  }));

  return (
    <Header className="flex justify-end items-center h-20 px-4 bg-transparent">
      <Row justify="end">
        <Col>
          <Select
            className="w-64"
            defaultValue={company}
            onChange={(value) => {
              setCompany(value);
            }}
            options={companyOptionsList}
          />
        </Col>
      </Row>
    </Header>
  );
};
