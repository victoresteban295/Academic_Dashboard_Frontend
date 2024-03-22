import { number, string, z } from "zod";

export const ProfAccountSchema = z.object({
    department: string().min(1, {message: "Department is Required"}),
    academicRole: string().min(1, {message: "Academic Role is Required"}),
    apptYear: number({required_error: "Appointed Year is Required"}),
    officeBuilding: string().trim().toLowerCase().min(1, {message: "Office Building is Required"}).max(50, {message: "Maximum 50 Character"}),
    officeRoom: string().trim().min(1, {message: "Room # is Required"}).max(50, {message: "Maximum 50 Character"}),
});
