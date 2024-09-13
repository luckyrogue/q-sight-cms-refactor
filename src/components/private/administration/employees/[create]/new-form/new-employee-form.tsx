import { createContext, useContext } from "react";
import type { TNewEmployeeForm } from "@/components/private/administration/employees/[create]/new-form/new-employee-form.types.ts";
import { EmployeeInfoBlock } from "@/components/private/administration/employees/[create]/new-form/info-block/employee-info-block.tsx";
import { EmployeeScheduleBlock } from "@/components/private/administration/employees/[create]/new-form/schedule-block/employee-schedule-block.tsx";
import { EmployeeContactsBlock } from "@/components/private/administration/employees/[create]/new-form/contacts-block/employee-contacts-block.tsx";
import { EmployeeWorkingBlock } from "@/components/private/administration/employees/[create]/new-form/working-block/employee-working-block.tsx";
import { Divider } from "antd";

const NewEmployeeFormContext = createContext<TNewEmployeeForm | undefined>(
  undefined,
);

export const useNewEmployeeForm = () => {
  const context = useContext(NewEmployeeFormContext);
  if (!context) {
    throw new Error(
      "useNewEmployeeForm должен использоваться внутри NewEmployeeFormProvider",
    );
  }
  return context;
};

export const NewEmployeeForm = () => {
  return (
    <NewEmployeeFormContext.Provider>
      <EmployeeInfoBlock />
      <div className="border-gray-200 bg-white p-6 mt-5 rounded-xl">
        <EmployeeScheduleBlock />
        <Divider />
        <EmployeeContactsBlock />
        <Divider />
        <EmployeeWorkingBlock />
      </div>
    </NewEmployeeFormContext.Provider>
  );
};
