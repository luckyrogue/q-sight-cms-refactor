import { Button, Col, Form, Modal, Row, Select } from "antd";
import React from "react";
import { useDependenciesObserverStore } from "@/providers/store/dependencies-observer/dependencies-observer.store.ts";
import { TFiltersModalProps } from "@/components/private/administration/employees/general/filters-modal/filters-modal.types.ts";
import { useGetEmployeesList } from "@/pages/private/administration/employees/list/employees-list.services.ts";

export const FiltersModal: React.FC<TFiltersModalProps> = ({
  visible,
  onClose,
}) => {
  const { unitNames, positionNames } = useDependenciesObserverStore();
  const { setEmployeesFilter, refetchEmployeesList } = useGetEmployeesList();
  const [form] = Form.useForm();

  const filterEmployeesApplier = () => {
    form.validateFields().then((values) => {
      setEmployeesFilter((prev) => ({
        ...prev,
        unitId: values.unit ?? "",
        positionId: values.position ?? "",
      }));
      refetchEmployeesList().then(() => {
        onClose();
      });
    });
  };

  return (
    <Form form={form} layout="vertical">
      <Modal
        title="Фильтры"
        open={visible}
        onCancel={onClose}
        footer={[
          <Button key="submit" type="primary" onClick={filterEmployeesApplier}>
            Применить
          </Button>,
        ]}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="position" label="Должность" layout="vertical">
              <Select
                className="w-full"
                placeholder="Должность"
                options={positionNames}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="unit" label="Подразделение" layout="vertical">
              <Select
                className="w-full"
                placeholder="Подразделение"
                options={unitNames}
              />
            </Form.Item>
          </Col>
        </Row>
      </Modal>
    </Form>
  );
};
