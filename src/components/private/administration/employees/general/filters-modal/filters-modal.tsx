import { Col, Modal, Row, Select } from "antd";
import React from "react";
import { TFiltersModalProps } from "@/components/private/administration/employees/filters-modal/filters-modal.types.ts";

export const FiltersModal: React.FC<TFiltersModalProps> = ({
  visible,
  onClose,
}) => {
  return (
    <Modal title="Фильтры" open={visible} onCancel={onClose} footer={null}>
      <Row gutter={16}>
        <Col span={12}>
          <Select className="w-full" placeholder="Должность" />
        </Col>
        <Col span={12}>
          <Select className="w-full" placeholder="Подразделение" />
        </Col>
      </Row>
    </Modal>
  );
};
