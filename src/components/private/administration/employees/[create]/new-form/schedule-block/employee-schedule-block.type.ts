import type { FormInstance } from "antd";
import type { NotificationInstance } from "antd/es/notification/interface";

export type TEmployeeScheduleBlockItemProps = {
  index: number;
  day: string;
  time: [any, any];
  weekdays: Array<{ label: string; value: string }>;
  onDelete: () => void;
  form: FormInstance;
};

export type TNewSchedule = {
  day: string;
  time: [string, string];
}

export type TSetNewSchedule = (newSchedule: TNewSchedule[]) => void;

export type TSyncScheduleWithForm = (newSchedule: TNewSchedule[], setNewSchedule: TSetNewSchedule, form: FormInstance) => void;

export type TEmployeeAddDayScheduleHandler = (newSchedule: TNewSchedule[], setNewSchedule: TSetNewSchedule, form: FormInstance, notification: NotificationInstance) => void;

export type TEmployeeDeleteDayHandler = (index: number, schedule: TNewSchedule[], setSchedule: TSetNewSchedule) => void;