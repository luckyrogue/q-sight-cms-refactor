import {useMutation} from "@tanstack/react-query";
import {https} from "@/api/api.base.ts";
import {
    IUserEmployeeDto
} from "@/components/private/administration/employees/[create]/new-form/new-employee-form.types.ts";

export const useCreateEmployee = (createUserDto: IUserEmployeeDto) => {
    const { mutateAsync, isPending } = useMutation({
        mutationFn: async() => https.post('employee/v1/employee', createUserDto),
    })
    return {
        createEmployee: mutateAsync,
        isEmployeeCreating: isPending
    }
}