import {
  Button,
  Select,
  TimePicker,
  Form,
  Row,
  Col,
  App,
  type FormInstance,
} from "antd";
import { WEEKDAYS_CONSTANT } from "@/constants/weekdays.constant.ts";
import { EmployeeScheduleBlockItem } from "@/components/private/administration/employees/[create]/new-form/schedule-block/employee-schedule-block.item.tsx";
import {
  employeeAddDayScheduleHandler,
  employeeDeleteDayHandler,
} from "@/components/private/administration/employees/[create]/new-form/schedule-block/employee-schedule.utils.ts";
import { useState } from "react";

export const EmployeeScheduleBlock = ({ form }: { form: FormInstance }) => {
  const { notification } = App.useApp();
  const [schedule, setSchedule] = useState<
    Array<{ day: string; time: [string, string] }>
  >([]);

  return (
    <>
      {schedule.map((entry: any, index: number) => (
        <EmployeeScheduleBlockItem
          key={index}
          index={index}
          day={entry.day}
          time={entry.time}
          weekdays={WEEKDAYS_CONSTANT}
          onDelete={() =>
            employeeDeleteDayHandler(index, schedule, setSchedule)
          }
          form={form}
        />
      ))}

      <Row gutter={16}>
        <Col span={10}>
          <Form.Item
            name="day"
            rules={[{ required: true, message: "Выберите день недели" }]}
          >
            <Select
              placeholder="Выберите день"
              options={WEEKDAYS_CONSTANT}
              className="w-full"
            />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            name="time"
            rules={[{ required: true, message: "Выберите время" }]}
          >
            <TimePicker.RangePicker className="w-full" format="HH:mm" />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            onClick={() =>
              employeeAddDayScheduleHandler(
                schedule,
                setSchedule,
                form,
                notification,
              )
            }
            disabled={schedule.length >= 7}
            className="w-full"
          >
            Добавить день
          </Button>
        </Col>
      </Row>
    </>
  );
};
