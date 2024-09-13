import {Button, Col, Form, Row, Select, TimePicker} from "antd";

export type TEmployeeScheduleBlockItemProps = {
    index: number;
    day: string;
    time: [any, any];
    weekdays: Array<{ label: string; value: string }>;
    onDelete: (index: number) => void;
    form: any;
}

export const EmployeeScheduleBlockItem = (
  props: TEmployeeScheduleBlockItemProps,
) => {
  return (
    <Form form={form} layout="vertical" className="mb-4 w-full">
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
    </Form>
  );
};
