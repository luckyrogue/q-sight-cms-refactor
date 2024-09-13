import { Col, Form, Input, Row } from "antd";

export const EmployeeContactsBlock = () => {
  return (
    <>
      <Row gutter={16}>
        <Col span={10}>
          <Form.Item label="Электронная почта" required>
            <Input />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item label="Дополнительный номер телефона">
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};
