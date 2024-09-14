import {
  TEmployeeAddDayScheduleHandler,
  TEmployeeDeleteDayHandler,
  TSyncScheduleWithForm,
} from "@/components/private/administration/employees/[create]/new-form/schedule-block/employee-schedule-block.type.ts";

export const syncScheduleWithForm: TSyncScheduleWithForm = (
  newSchedule,
  setNewSchedule,
  form,
) => {
  setNewSchedule(newSchedule);
  form.setFieldsValue({ schedule: newSchedule });
};

export const employeeAddDayScheduleHandler: TEmployeeAddDayScheduleHandler = (
  newSchedule,
  setNewSchedule,
  form,
  notification,
) => {
  form
    .validateFields()
    .then((values) => {
      setNewSchedule([...newSchedule, { day: values.day, time: values.time }]);
      form.resetFields();
    })
    .catch(() => {
      notification.error({
        message: "Ошибка",
        description: "Заполните все поля чтобы добавить день",
      });
    });
};

export const employeeDeleteDayHandler: TEmployeeDeleteDayHandler = (
  index,
  schedule,
  setSchedule,
) => {
  const updatedSchedule = [...schedule];
  updatedSchedule.splice(index, 1);
  setSchedule(updatedSchedule);
};
