import { Button, Col, Row, Segmented } from "antd";
import { ADMINISTRATION_ROUTES_MAPPING } from "@/pages/private/administration/administration.constants.ts";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { FiltersModal } from "@/components/private/administration/employees/general/filters-modal/filters-modal.tsx";

export const AdministrationHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const route = (routeName: string) =>
    Object.keys(ADMINISTRATION_ROUTES_MAPPING).find(
      (key) => ADMINISTRATION_ROUTES_MAPPING[key] === routeName,
    );
  const [visible, setVisible] = useState(false);

  if (visible)
    return <FiltersModal visible={visible} onClose={() => setVisible(false)} />;

  return (
    <div className="mb-8">
      <Row>
        <Col>
          <h2 className="text-3xl mb-8 font-bold">
            {ADMINISTRATION_ROUTES_MAPPING[location.pathname]}
          </h2>
        </Col>
      </Row>
      <Row gutter={16} justify="space-between" align="middle">
        <Col span={16}>
          <Segmented
            defaultValue={ADMINISTRATION_ROUTES_MAPPING[location.pathname]}
            className="border"
            options={Object.values(ADMINISTRATION_ROUTES_MAPPING)}
            onChange={(value) => navigate(route(value) as string)}
          />
        </Col>
        <Col span={3}>
          <Button type="primary" block onClick={() => setVisible(true)}>
            Фильтры
          </Button>
        </Col>
        <Col span={5}>
          <Button
            type="primary"
            block
            onClick={() => navigate(`${location.pathname}/create`)}
          >
            {ADMINISTRATION_ROUTES_MAPPING[location.pathname] === "Сотрудники"
              ? "Добавить сотрудника"
              : "Добавить должность"}
          </Button>
        </Col>
      </Row>
    </div>
  );
};
