import { Button, Col, Form, Input, Row, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import InputMask from "react-input-mask";

export const EmployeeInfoBlock = () => {
  return (
    <div className="border-gray-200 bg-white p-6 rounded-xl">
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item label="Добавить фото сотрудника">
            <Upload>
              <Button icon={<UploadOutlined />} block>
                Загрузить фото
              </Button>
            </Upload>
          </Form.Item>
        </Col>

        <Col span={18}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Имя"
                name="firstName"
                rules={[{ required: true, message: "Введите имя" }]}
              >
                <Input placeholder="Имя" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Фамилия"
                name="lastName"
                rules={[{ required: true, message: "Введите фамилию" }]}
              >
                <Input placeholder="Фамилия" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Отчество" name="middleName">
                <Input placeholder="Отчество" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Номер телефона"
                name="phone"
              >
                <InputMask
                  mask="+7 (999) 999-99-99"
                  placeholder="+7 (XXX) XXX-XX-XX"
                >
                  {(inputProps: any) => <Input {...inputProps} />}
                </InputMask>
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
