import { Button, Col, Row } from "antd";
import { ADMINISTRATION_ROUTES_MAPPING } from "@/pages/private/administration/administration.constants.ts";
import { useLocation, useNavigate } from "react-router";
import {useState} from "react";
import {FiltersModal} from "@/components/private/administration/employees/general/filters-modal/filters-modal.tsx";

export const AdministrationHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  if (visible) return <FiltersModal visible={visible} onClose={() => setVisible(false)} />;

  return (
    <div>
      <h2>{ADMINISTRATION_ROUTES_MAPPING[location.pathname]}</h2>
      <Row gutter={16} justify="space-between" align="middle">
        <Col>
          <Button onClick={() => navigate("/administration/positions")}>
            Должности
          </Button>
        </Col>
      <Col>
          <Button block onClick={() => navigate("/administration/employees")}>
              Сотрудники
          </Button>
      </Col>
        <Col>
          <Button block onClick={() => setVisible(true)}>
            Фильтры
          </Button>
        </Col>
        <Col>
          <Button block onClick={() => navigate("/administration/employees/create")}>
            Сотрудники
          </Button>
        </Col>
      </Row>
    </div>
  );
};
