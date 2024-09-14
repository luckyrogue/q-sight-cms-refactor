import { TFormatWorkTime } from "@/components/private/administration/employees/[create]/new-form/new-employee-form.types.ts";

export const formatWorkTime: TFormatWorkTime = (weekday) => {
  if (!weekday || !weekday.time || weekday.time.length !== 2) return null;

  const [start, end] = weekday.time;
  const [startHours, startMinutes] = start.split(":").map(Number);
  const [endHours, endMinutes] = end.split(":").map(Number);

  if (
    isNaN(startHours) ||
    isNaN(startMinutes) ||
    isNaN(endHours) ||
    isNaN(endMinutes)
  ) {
    throw new Error("Некорректный формат времени");
  }

  return {
    day: weekday.day,
    startTimeHour: startHours,
    startTimeMinute: startMinutes,
    endTimeHour: endHours,
    endTimeMinute: endMinutes,
  };
};
