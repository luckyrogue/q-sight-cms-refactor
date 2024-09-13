import { EmployeeInfoBlock } from "@/components/private/administration/employees/[create]/new-form/info-block/employee-info-block.tsx";
import { EmployeeScheduleBlock } from "@/components/private/administration/employees/[create]/new-form/schedule-block/employee-schedule-block.tsx";
import { EmployeeContactsBlock } from "@/components/private/administration/employees/[create]/new-form/contacts-block/employee-contacts-block.tsx";
import { EmployeeWorkingBlock } from "@/components/private/administration/employees/[create]/new-form/working-block/employee-working-block.tsx";
import {Button, Divider, Form} from "antd";
import {
  useCreateEmployee
} from "@/components/private/administration/employees/[create]/new-form/new-employee-form.services.ts";
import {
  IUserEmployeeDto
} from "@/components/private/administration/employees/[create]/new-form/new-employee-form.types.ts";
import {useState} from "react";
import {
  formatWorkTime
} from "@/components/private/administration/employees/[create]/new-form/new-employee-form.utils.ts";

export const NewEmployeeForm = () => {

  const [form] = Form.useForm();
  const [createUserDto, setCreateUserDto] = useState<IUserEmployeeDto>({
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: '',
    lastName: '',
    firstName: '',
    middleName: '',
    email: '',
    phoneNumber: '',
    secondPhoneNumber: '',
    companyId: null,
    positionId: null,
    unitId: [],
  })
  const { createEmployee } = useCreateEmployee(createUserDto);

  const handleCreateEmployee = (values: IUserEmployeeDto) => {

    const employeeWeekdays =  formatWorkTime()

  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={(values) => console.log(values)}
    >
      <EmployeeInfoBlock />
      <div className="border-gray-200 bg-white p-6 mt-5 rounded-xl">
        <EmployeeScheduleBlock form={form} />
        <Divider />
        <EmployeeContactsBlock />
        <Divider />
        <EmployeeWorkingBlock />
      </div>
      <Form.Item>
        <Button type="primary" htmlType="submit" >
          Создать
        </Button>
      </Form.Item>
    </Form>
  );
};
