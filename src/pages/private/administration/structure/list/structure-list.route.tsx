import { StructureLevel } from "@/components/private/administration/structure/list/structure-level/structure-level.tsx";
import { Col, Row } from "antd";

export const StructureListRoute = () => {
  return (
    <Row>
      <Col span={8}>
        <StructureLevel />
      </Col>
    </Row>
  );
};
