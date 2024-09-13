type TWeekday = {
    day: string;
    time: [string, string];
}

export interface IUserEmployeeDto {
    monday: TWeekday | string;
    tuesday: TWeekday  | string;
    wednesday: TWeekday | string;
    thursday: TWeekday | string;
    friday: TWeekday | string;
    saturday: TWeekday | string;
    sunday: TWeekday | string;
    lastName: string;
    firstName: string;
    middleName: string;
    email: string;
    phoneNumber: string;
    secondPhoneNumber: string;
    companyId: number | null;
    positionId: number | null;
    unitId: number[]
}

export type TFormatWorkTime = (weekday: TWeekday | null) => {
    day: string;
    startTimeHour: number;
    startTimeMinute: number;
    endTimeHour: number;
    endTimeMinute: number;
} | null;