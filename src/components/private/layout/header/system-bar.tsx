import { Col, Layout, Row, Select } from "antd";
import { useState } from "react";

const { Header } = Layout;

export const SystemBar = () => {
  const [company, setCompany] = useState("Company#1");

  return (
    <Header className="flex justify-end items-center h-20 px-4 bg-transparent">
      <Row gutter={16} justify="end">
        <Col>
          <Select
            size="large"
            defaultValue={company}
            onChange={(value) => {
              setCompany(value);
            }}
            options={[
              { label: "Company#1", value: "Company#1" },
              { label: "Company#2", value: "Company#2" },
              { label: "Company#3", value: "Company#3" },
            ]}
          />
        </Col>
      </Row>
    </Header>
  );
};
