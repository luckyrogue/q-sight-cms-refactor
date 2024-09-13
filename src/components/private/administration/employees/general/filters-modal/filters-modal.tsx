import { Button, Col, Form, Modal, Row, Select } from "antd";
import React from "react";
import type { TFiltersModalProps } from "@/components/private/administration/employees/general/filters-modal/filters-modal.types.ts";

export const FiltersModal: React.FC<TFiltersModalProps> = ({
  visible,
  onClose,
}) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} layout="vertical" className="mb-4 w-full">
      <Modal
        title="Фильтры"
        open={visible}
        onCancel={onClose}
        footer={[
          <Button key="submit" type="primary" onClick={onClose}>
            Применить
          </Button>,
        ]}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Select className="w-full" placeholder="Должность" />
          </Col>
          <Col span={12}>
            <Select className="w-full" placeholder="Подразделение" />
          </Col>
        </Row>
      </Modal>
    </Form>
  );
};
