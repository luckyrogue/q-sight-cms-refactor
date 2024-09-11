import {Col, Form, Input, Row, Select} from "antd";

export const EmployeeContactsBlock = () => {
    return (
        <>
            <Form layout="vertical" >
                <Row gutter={16}>
                    <Col span={10}>
                        <Form.Item
                            label="Электронная почта"
                            required
                        >
                            <Select />
                        </Form.Item>
                    </Col>
                    <Col span={10}>
                        <Form.Item
                            label="Дополнительный номер телефона"
                            required
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    )
}