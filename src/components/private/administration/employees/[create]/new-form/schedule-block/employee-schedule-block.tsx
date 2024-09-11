import { useState } from 'react';
import { Button, Select, TimePicker, Form, Row, Col } from 'antd';
import { weekdaysConstant } from "@/constants/weekdays.constant.ts";

export const EmployeeScheduleBlock = () => {
    const [schedule, setSchedule] = useState<Array<{ day: string, time: [any, any] }>>([]);
    const [form] = Form.useForm();

    const handleAddDay = () => {
        form.validateFields().then(values => {
            const newSchedule = [...schedule, { day: values.day, time: values.time }];
            setSchedule(newSchedule);
            form.resetFields();
        }).catch(info => {
            console.log('Validation Failed:', info);
        });
    };

    const handleDeleteDay = (index: number) => {
        const updatedSchedule = [...schedule];
        updatedSchedule.splice(index, 1); // Remove specific block
        setSchedule(updatedSchedule);
    };

    const weekdays = weekdaysConstant.map(day => ({ value: day, label: day }));

    return (
        <>
            {schedule.map((entry, index) => (
                <Form key={index} form={form} layout="vertical" className="mb-4 w-full">
                    <Row gutter={16}>
                        <Col span={10}>
                            <Form.Item
                                name={`day_${index}`}
                                label="Дни недели"
                                initialValue={entry.day}
                                rules={[{ required: true, message: 'Выберите день недели' }]}
                                required
                            >
                                <Select
                                    placeholder="Выберите день"
                                    options={weekdays}
                                    style={{ width: '100%' }}  // Ensuring full width
                                />
                            </Form.Item>
                        </Col>
                        <Col span={10}>
                            <Form.Item
                                name={`time_${index}`}
                                label="Часы"
                                initialValue={entry.time}
                                rules={[{ required: true, message: 'Выберите время' }]}
                                required
                            >
                                <TimePicker.RangePicker style={{ width: '100%' }} format="HH:mm" />
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Button
                                type="primary"
                                danger
                                block
                                onClick={() => handleDeleteDay(index)}
                            >
                                Удалить
                            </Button>
                        </Col>
                    </Row>
                </Form>
            ))}

            <Form form={form} layout="vertical" className="w-full">
                <Row gutter={16}>
                    <Col span={10}>
                        <Form.Item
                            name="day"
                            rules={[{ required: true, message: 'Выберите день недели' }]}
                        >
                            <Select
                                placeholder="Выберите день"
                                options={weekdays}
                                style={{ width: '100%' }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={10}>
                        <Form.Item
                            name="time"
                            rules={[{ required: true, message: 'Выберите время' }]}
                        >
                            <TimePicker.RangePicker style={{ width: '100%' }} format="HH:mm" />
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Button
                            type="primary"
                            onClick={handleAddDay}
                            disabled={schedule.length >= 7}
                            style={{ width: '100%' }}
                        >
                            Добавить день
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
};
