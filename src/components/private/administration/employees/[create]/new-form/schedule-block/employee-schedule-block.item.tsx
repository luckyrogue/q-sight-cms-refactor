import { Button, Col, Form, Row, Select, TimePicker } from "antd";
import { TEmployeeScheduleBlockItemProps } from "@/components/private/administration/employees/[create]/new-form/schedule-block/employee-schedule-block.type.ts";
import React from "react";

export const EmployeeScheduleBlockItem: React.FC<
  TEmployeeScheduleBlockItemProps
> = ({ index, day, time, weekdays, onDelete }) => {
  return (
    <Row gutter={16} align="middle">
      <Col span={10}>
        <Form.Item
          name={`day_${index}`}
          label="Дни недели"
          initialValue={day}
          rules={[{ required: true, message: "Выберите день недели" }]}
          required
        >
          <Select
            placeholder="Выберите день"
            options={weekdays}
            className="w-full"
          />
        </Form.Item>
      </Col>
      <Col span={10}>
        <Form.Item
          name={`time_${index}`}
          label="Часы"
          initialValue={time}
          rules={[{ required: true, message: "Выберите время" }]}
          required
        >
          <TimePicker.RangePicker className="w-full" format="HH:mm" />
        </Form.Item>
      </Col>
      <Col span={4}>
        <Button type="primary" danger block onClick={() => onDelete(index)}>
          Удалить
        </Button>
      </Col>
    </Row>
  );
};
