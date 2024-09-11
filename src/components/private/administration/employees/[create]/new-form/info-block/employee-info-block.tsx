import { Button, Col, Form, Input, Row, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export const EmployeeInfoBlock = () => {
    return  (
        <div className="border-gray-200 bg-white p-6  rounded-xl">
            <Form layout="vertical">
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

                    <Col span={9}>
                        <Form.Item
                            label="Имя"
                            name="firstName"
                            rules={[{ required: true, message: "Введите имя" }]}
                        >
                            <Input placeholder="Имя" />
                        </Form.Item>
                    </Col>

                    <Col span={9}>
                        <Form.Item
                            label="Фамилия"
                            name="lastName"
                            rules={[{ required: true, message: "Введите фамилию" }]}
                        >
                            <Input placeholder="Фамилия" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={9}>
                        <Form.Item label="Отчество" name="middleName">
                            <Input placeholder="Отчество" />
                        </Form.Item>
                    </Col>

                    <Col span={9}>
                        <Form.Item
                            label="Номер телефона"
                            name="phone"
                            rules={[{ required: true, message: "Введите номер телефона" }]}
                        >
                            <Input placeholder="+7 (XXX) XXX-XX-XX" />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}